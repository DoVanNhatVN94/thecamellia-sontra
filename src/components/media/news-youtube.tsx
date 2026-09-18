import { Maximize, Minimize, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Only the news article route imports this. Other page videos stay untouched. */
const YOUTUBE_ID = /^[A-Za-z0-9_-]{11}$/;
const YT_PLAYING = 1;
const YT_BUFFERING = 3;
const LABEL_PLAY = "Phát";
const LABEL_PAUSE = "Tạm dừng";
const LABEL_FULLSCREEN = "Phóng to";
const LABEL_EXIT_FULLSCREEN = "Thu nhỏ";

const CONTROL_CLASS =
  "inline-flex size-11 items-center justify-center rounded-full border border-paper/30 bg-ink/75 text-paper backdrop-blur-sm transition hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-40";

type YoutubePlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  getVolume: () => number;
  setVolume: (volume: number) => void;
  getPlayerState: () => number;
  getIframe: () => HTMLIFrameElement;
  destroy: () => void;
};

type YoutubePlayerOptions = {
  videoId: string;
  width?: string;
  height?: string;
  host?: string;
  playerVars?: Record<string, number | string>;
  events?: {
    onReady?: (event: { target: YoutubePlayer }) => void;
    onStateChange?: (event: { data: number; target: YoutubePlayer }) => void;
  };
};

type YoutubeWindow = Window & {
  YT?: {
    Player: new (element: HTMLElement, options: YoutubePlayerOptions) => YoutubePlayer;
  };
  onYouTubeIframeAPIReady?: () => void;
};

let apiPromise: Promise<void> | null = null;

function loadYoutubeAPI(): Promise<void> {
  const w = window as YoutubeWindow;
  if (w.YT?.Player) return Promise.resolve();
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve, reject) => {
    const previous = w.onYouTubeIframeAPIReady;
    w.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve();
    };
    const src = "https://www.youtube.com/iframe_api";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onerror = () => {
        apiPromise = null;
        reject(new Error("YouTube IFrame API failed to load"));
      };
      document.head.appendChild(script);
    }
  });
  return apiPromise;
}

function isLive(state: number) {
  return state === YT_PLAYING || state === YT_BUFFERING;
}

export function NewsYoutube({
  id,
  title,
  caption,
}: {
  id: string;
  title?: string;
  caption?: string;
}) {
  const valid = YOUTUBE_ID.test(id);
  const frameRef = useRef<HTMLDivElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YoutubePlayer | null>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onChange = () => {
      setExpanded(document.fullscreenElement === frameRef.current);
    };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => {
    if (!valid) return;
    const host = hostRef.current;
    if (!host) return;

    const mount = document.createElement("div");
    mount.className = "size-full";
    host.replaceChildren(mount);

    let cancelled = false;
    let player: YoutubePlayer | null = null;
    setReady(false);
    setPlaying(false);

    loadYoutubeAPI()
      .then(() => {
        if (cancelled || !mount.isConnected) return;
        const yt = (window as YoutubeWindow).YT;
        if (!yt) return;
        player = new yt.Player(mount, {
          videoId: id,
          width: "100%",
          height: "100%",
          host: "https://www.youtube-nocookie.com",
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            iv_load_policy: 3,
            playsinline: 1,
            fs: 0,
            disablekb: 1,
            cc_load_policy: 0,
            enablejsapi: 1,
            origin: window.location.origin,
          },
          events: {
            onReady: (event) => {
              if (cancelled) return;
              playerRef.current = event.target;
              const iframe = event.target.getIframe();
              iframe.title = title ?? "Video YouTube";
              iframe.referrerPolicy = "strict-origin-when-cross-origin";
              iframe.setAttribute(
                "allow",
                "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
              );
              event.target.mute();
              event.target.playVideo();
              setReady(true);
            },
            onStateChange: (event) => {
              if (cancelled) return;
              setPlaying(isLive(event.data));
            },
          },
        });
      })
      .catch(() => {
        // Keep the dark frame. Do not fall back to a chrome-bearing embed.
      });

    return () => {
      cancelled = true;
      playerRef.current = null;
      try {
        player?.destroy();
      } catch {
        // The iframe may already be gone when the article unmounts.
      }
      mount.remove();
      host.replaceChildren();
    };
  }, [id, title, valid]);

  function togglePlay() {
    const player = playerRef.current;
    if (!player) return;
    try {
      // Muted autoplay cannot unmute itself. The first press unmutes and still toggles play.
      if (player.isMuted()) {
        player.unMute();
        if (player.getVolume() === 0) player.setVolume(100);
      }
      if (isLive(player.getPlayerState())) {
        player.pauseVideo();
        setPlaying(false);
      } else {
        player.playVideo();
        setPlaying(true);
      }
    } catch {
      // Ignore a click that lands before the player finishes attaching.
    }
  }

  async function toggleFullscreen() {
    const node = frameRef.current;
    if (!node) return;
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await node.requestFullscreen();
    } catch {
      // Fullscreen can be denied outside a user gesture, or on older mobile browsers.
    }
  }

  if (!valid) return null;

  const playLabel = playing ? LABEL_PAUSE : LABEL_PLAY;
  const fullLabel = expanded ? LABEL_EXIT_FULLSCREEN : LABEL_FULLSCREEN;

  return (
    <figure className="mt-8">
      {caption ? <figcaption className="mb-3 text-sm text-muted">{caption}</figcaption> : null}
      <div
        ref={frameRef}
        className={cn(
          "relative isolate aspect-video w-full overflow-hidden rounded-xl bg-ink",
          "[&:fullscreen]:flex [&:fullscreen]:aspect-auto [&:fullscreen]:h-full [&:fullscreen]:w-full",
          "[&:fullscreen]:items-center [&:fullscreen]:justify-center [&:fullscreen]:rounded-none [&:fullscreen]:bg-ink",
          "[&:fullscreen_.stage]:h-[min(100dvh,calc(100dvw*9/16))] [&:fullscreen_.stage]:w-[min(100dvw,calc(100dvh*16/9))]",
        )}
      >
        <div className="stage relative size-full overflow-hidden">
          {/* Top-weighted overscale clips the title/channel flash. Keep it slight so faces stay in frame. */}
          <div className="pointer-events-none absolute left-1/2 top-[47%] h-[118%] w-[112%] -translate-x-1/2 -translate-y-1/2 [&_iframe]:pointer-events-none [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:size-full [&_iframe]:border-0">
            <div ref={hostRef} className="size-full" />
          </div>
          <div className="absolute inset-0 z-[1]" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-center justify-between bg-gradient-to-t from-ink/80 via-ink/35 to-transparent p-3 sm:p-4">
            <button
              type="button"
              className={cn(CONTROL_CLASS, "pointer-events-auto")}
              aria-label={playLabel}
              title={playLabel}
              disabled={!ready}
              onClick={togglePlay}
            >
              {playing ? (
                <Pause className="size-5" aria-hidden="true" />
              ) : (
                <Play className="ml-0.5 size-5" aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              className={cn(CONTROL_CLASS, "pointer-events-auto")}
              aria-label={fullLabel}
              title={fullLabel}
              onClick={toggleFullscreen}
            >
              {expanded ? (
                <Minimize className="size-5" aria-hidden="true" />
              ) : (
                <Maximize className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
    </figure>
  );
}
