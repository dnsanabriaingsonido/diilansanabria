import { Play } from "lucide-react";
import Reveal from "@/components/Reveal";

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
    <section id="portafolio" className="py-24 lg:py-40 section-plain section-blend overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal parallax={36}>
          <p className="text-accent text-xs font-semibold tracking-[0.35em] uppercase mb-4">
            Portafolio
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight mb-16">
            Proyectos <span className="text-gradient-accent">Destacados</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} parallax={14}>
            <article className="group surface-card p-8 h-full">
              <span className="inline-flex items-center justify-center w-12 h-12 mb-6 border border-accent/40 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                <Play className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" strokeWidth={1.5} />
              </span>
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
