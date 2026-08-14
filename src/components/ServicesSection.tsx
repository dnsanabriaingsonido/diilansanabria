import Reveal from "@/components/Reveal";
import { Music, Headphones, Mic, Settings, Radio, Podcast } from "lucide-react";

const services = [
  {
    icon: Music,
    title: "Producción Musical",
    desc: "Creación y desarrollo de proyectos musicales con visión artística y técnica profesional.",
  },
  {
    icon: Headphones,
    title: "Mezcla y Edición de Audio",
    desc: "Procesamiento, balanceo y refinamiento de audio para obtener un sonido profesional.",
  },
  {
    icon: Mic,
    title: "Grabación de Voces e Instrumentos",
    desc: "Captura de audio con equipos de alta gama y técnicas de microfonía avanzadas.",
  },
  {
    icon: Settings,
    title: "Optimización de Sistemas",
    desc: "Diseño y calibración de sistemas de audio para espacios profesionales.",
  },
  {
    icon: Radio,
    title: "Sonido en Vivo",
    desc: "FOH y monitores para eventos en vivo, festivales y presentaciones corporativas.",
  },
  {
    icon: Podcast,
    title: "Audio para Streaming y Podcast",
    desc: "Configuración, grabación y post-producción de audio para contenido digital.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 lg:py-40 section-plain section-blend overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal parallax={36}>
          <p className="text-accent text-xs font-semibold tracking-[0.35em] uppercase mb-4">
            Servicios
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight mb-16">
            Lo que puedo hacer
            <br />
            <span className="text-gradient-accent">por tu proyecto</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
            <div className="group surface-card p-8 h-full">
              <s.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <div className="w-8 h-0.5 bg-accent mb-4 group-hover:w-12 transition-all duration-300" />
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
