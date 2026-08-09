import { defineTool } from "@lovable.dev/mcp-js";
import { projects } from "../data";

export default defineTool({
  name: "list_projects",
  title: "Listar proyectos",
  description: "Lista los proyectos destacados del portafolio de Dilan Sanabria.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(projects, null, 2) }],
    structuredContent: { projects },
  }),
});
