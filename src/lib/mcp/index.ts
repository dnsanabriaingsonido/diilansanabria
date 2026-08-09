import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import listServices from "./tools/list-services";
import listExperience from "./tools/list-experience";
import listProjects from "./tools/list-projects";
import listCredentials from "./tools/list-credentials";

export default defineMcp({
  name: "dilan-sanabria-sound",
  title: "Dilan Sanabria Sound",
  version: "0.1.0",
  instructions:
    "Herramientas del portafolio público de Dilan Nicolás Sanabria Murcia, Ingeniero de Sonido y Productor Musical en Colombia. Usa `get_profile` para el perfil y contacto, `list_services` para servicios, `list_experience` para trayectoria laboral, `list_projects` para proyectos destacados y `list_credentials` para formación y certificaciones.",
  tools: [getProfile, listServices, listExperience, listProjects, listCredentials],
});
