import { defineTool } from "@lovable.dev/mcp-js";
import { profile, contact } from "../data";

export default defineTool({
  name: "get_profile",
  title: "Perfil profesional",
  description: "Devuelve el perfil profesional público de Dilan Sanabria y sus datos de contacto.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify({ profile, contact }, null, 2) }],
    structuredContent: { profile, contact },
  }),
});
