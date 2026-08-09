import { defineTool } from "@lovable.dev/mcp-js";
import { services } from "../data";

export default defineTool({
  name: "list_services",
  title: "Listar servicios",
  description: "Lista los servicios de ingeniería de sonido y producción musical que ofrece Dilan Sanabria.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});
