import { cn } from "@/lib/utils";

type Plan = {
  id: string;
  rooms: { d: string; label: string; x: number; y: number }[];
};

const PLANS: Record<string, Plan> = {
  studio: {
    id: "studio",
    rooms: [
      { d: "M20 20 H220 V160 H20 Z", label: "Khách + bếp", x: 80, y: 88 },
      { d: "M220 20 H300 V100 H220 Z", label: "WC", x: 242, y: 62 },
      { d: "M220 100 H300 V160 H220 Z", label: "Loggia", x: 236, y: 132 },
    ],
  },
  "1pn": {
    id: "1pn",
    rooms: [
      { d: "M20 20 H170 V160 H20 Z", label: "Khách + bếp", x: 52, y: 88 },
      { d: "M170 20 H300 V95 H170 Z", label: "Phòng ngủ", x: 198, y: 56 },
      { d: "M170 95 H230 V160 H170 Z", label: "WC", x: 180, y: 128 },
      { d: "M230 95 H300 V160 H230 Z", label: "Đa năng", x: 240, y: 128 },
    ],
  },
  "2pn": {
    id: "2pn",
    rooms: [
      { d: "M20 70 H190 V170 H20 Z", label: "Khách", x: 70, y: 118 },
      { d: "M20 20 H120 V70 H20 Z", label: "Bếp", x: 44, y: 46 },
      { d: "M120 20 H190 V70 H120 Z", label: "WC", x: 136, y: 46 },
      { d: "M190 20 H300 V95 H190 Z", label: "PN 1", x: 220, y: 56 },
      { d: "M190 95 H300 V170 H190 Z", label: "PN 2", x: 220, y: 132 },
    ],
  },
  "3pn": {
    id: "3pn",
    rooms: [
      { d: "M20 70 H175 V175 H20 Z", label: "Khách", x: 62, y: 120 },
      { d: "M20 20 H110 V70 H20 Z", label: "Bếp", x: 42, y: 46 },
      { d: "M110 20 H175 V70 H110 Z", label: "WC", x: 122, y: 46 },
      { d: "M175 20 H300 V80 H175 Z", label: "PN master", x: 205, y: 50 },
      { d: "M175 80 H235 V175 H175 Z", label: "PN 2", x: 184, y: 126 },
      { d: "M235 80 H300 V175 H235 Z", label: "PN 3", x: 246, y: 126 },
    ],
  },
  duplex: {
    id: "duplex",
    rooms: [
      { d: "M20 20 H300 V90 H20 Z", label: "Tầng trên — sinh hoạt", x: 90, y: 54 },
      { d: "M20 100 H160 V175 H20 Z", label: "Tầng dưới — ngủ", x: 48, y: 136 },
      { d: "M160 100 H300 V175 H160 Z", label: "Void / cầu thang", x: 188, y: 136 },
    ],
  },
};

export function FloorPlan({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const plan = PLANS[id] ?? PLANS.studio;
  return (
    <svg
      viewBox="0 0 320 195"
      className={cn("w-full text-ink", className)}
      role="img"
      aria-label={`Mặt bằng minh họa ${id}`}
    >
      <rect width="320" height="195" fill="#f7f4ef" />
      {plan.rooms.map((r) => (
        <g key={r.label}>
          <path d={r.d} fill="#ecebe7" stroke="#26150a" strokeWidth="1.2" />
          <text
            x={r.x}
            y={r.y}
            fill="#6b584c"
            fontSize="11"
            fontFamily="Inter, sans-serif"
          >
            {r.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
