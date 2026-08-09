import { defineTool } from "@lovable.dev/mcp-js";
import { certifications, education } from "../data";

export default defineTool({
  name: "list_credentials",
  title: "Formación y certificaciones",
  description: "Lista la formación académica y las certificaciones técnicas de Dilan Sanabria.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify({ education, certifications }, null, 2) }],
    structuredContent: { education, certifications },
  }),
});
