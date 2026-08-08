import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown } from "lucide-react";

const bars = Array.from({ length: 28 });

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Estudio de grabación profesional"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/80" />
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div
          className="absolute -top-24 -left-24 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-30"
          style={{ background: "var(--gradient-accent)", animation: "float-slow 12s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-20"
          style={{ background: "var(--gradient-accent)", animation: "float-slow 16s ease-in-out infinite reverse" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 border border-border/70 bg-card/40 backdrop-blur-sm px-4 py-2 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
              Disponible para proyectos
            </span>
          </div>

          <p className="text-accent text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase mb-5 animate-fade-in">
            Ingeniero de Sonido & Productor Musical
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-foreground leading-[0.95] tracking-tight mb-8 animate-fade-in">
            Ingeniería de
            <br />
            Sonido <span className="text-gradient-accent">Profesional</span>
          </h1>
          <p className="text-muted-foreground text-base lg:text-lg max-w-xl mb-10 leading-relaxed animate-fade-in">
            Producción musical, mezcla, grabación y sonido en vivo con estándares técnicos
            de alto nivel — de Movistar Arena al estudio.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in">
            <a
              href="#servicios"
              className="group relative px-8 py-4 text-sm font-semibold tracking-wide text-accent-foreground overflow-hidden accent-glow"
              style={{ backgroundImage: "var(--gradient-accent)" }}
            >
              <span className="relative z-10">Ver Servicios</span>
              <span className="absolute inset-0 bg-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#contacto"
              className="px-8 py-4 border border-border text-foreground text-sm font-semibold tracking-wide hover:border-accent hover:text-accent transition-all duration-300"
            >
              Contactar
            </a>
          </div>

          {/* Equalizer */}
          <div className="flex items-end gap-1 h-14 mt-16 max-w-md" aria-hidden="true">
            {bars.map((_, i) => (
              <span
                key={i}
                className="flex-1 bg-accent/70 origin-bottom"
                style={{
                  height: "100%",
                  animation: `pulse-bar ${0.9 + (i % 5) * 0.22}s ease-in-out ${i * 0.06}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <a
        href="#sobre-mi"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-accent transition-colors"
        aria-label="Bajar"
      >
        <ArrowDown className="animate-bounce" size={22} />
      </a>
    </section>
  );
};

export default HeroSection;
