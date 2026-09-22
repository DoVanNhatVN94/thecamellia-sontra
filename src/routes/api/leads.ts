import { createFileRoute } from "@tanstack/react-router";
import { handleLeadRequest } from "@/lib/leads.server";

const handle = ({ request }: { request: Request }) => handleLeadRequest(request);

export const Route = createFileRoute("/api/leads")({
  server: {
    handlers: {
      GET: handle,
      POST: handle,
      OPTIONS: handle,
    },
  },
});
