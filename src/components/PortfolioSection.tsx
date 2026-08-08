import { Play } from "lucide-react";

const projects = [
  {
    title: "EP Live Session – Penchy Castro",
    category: "Grabación multicanal",
    points: [
      "Asistencia técnica en la grabación multicanal de la sesión en vivo.",
      "Configuración y verificación de micrófonos, cableado y flujo de señal.",
      "Apoyo en la edición y mezcla del material grabado.",
    ],
  },
  {
    title: "El Puñal Live Session – Walter Silva",
    category: "Producción audiovisual",
    points: [
      "Coordinación del escenario y apoyo logístico durante la producción.",
      "Supervisión del sistema de monitoreo para los músicos.",
      "Asistencia técnica al ingeniero de grabación y verificación del flujo operativo.",
    ],
  },
  {
    title: "01-8000-UNKNWN",
    category: "Producción musical",
    points: [
      "Cofundador del proyecto desde septiembre de 2020.",
      "Edición, mezcla y mastering.",
    ],
  },
];

const PortfolioSection = () => {
  return (
    <section id="portafolio" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4">
          Portafolio
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-16">
          Proyectos Destacados
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group bg-card p-8 hover:bg-muted transition-colors duration-300"
            >
              <Play className="w-8 h-8 text-accent mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground mb-1">{p.title}</h3>
              <p className="text-muted-foreground text-xs uppercase tracking-[0.2em]">
                {p.category}
              </p>
              <div className="w-8 h-0.5 bg-accent my-4 group-hover:w-12 transition-all duration-300" />
              <ul className="space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="text-muted-foreground text-sm leading-relaxed">
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
