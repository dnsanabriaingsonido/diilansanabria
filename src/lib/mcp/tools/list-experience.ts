import { defineTool } from "@lovable.dev/mcp-js";
import { experience } from "../data";

export default defineTool({
  name: "list_experience",
  title: "Listar experiencia",
  description: "Lista la experiencia laboral de Dilan Sanabria: empresa, rol, periodo y logros.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(experience, null, 2) }],
    structuredContent: { experience },
  }),
});
