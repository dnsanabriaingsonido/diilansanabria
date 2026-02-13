import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-start"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Estudio de grabación profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl">
          <p className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Ingeniero de Sonido & Productor Musical
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
            Ingeniería de Sonido
            <br />
            <span className="text-gradient">Profesional</span>
          </h1>
          <p className="text-muted-foreground text-base lg:text-lg max-w-xl mb-10 leading-relaxed">
            Producción musical, mezcla y sonido en vivo con estándares técnicos de alto nivel.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#servicios"
              className="px-8 py-3 border border-accent text-foreground text-sm font-medium tracking-wide hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Ver Servicios
            </a>
            <a
              href="#contacto"
              className="px-8 py-3 border border-accent text-foreground text-sm font-medium tracking-wide hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
