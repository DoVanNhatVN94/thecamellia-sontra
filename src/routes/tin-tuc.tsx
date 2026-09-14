import { Outlet, createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";

export const Route = createFileRoute("/tin-tuc")({ component: NewsLayout });

function NewsLayout() {
  return (
    <SiteShell>
      <Outlet />
    </SiteShell>
  );
}
