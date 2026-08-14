import aboutImg from "@/assets/about-portrait.jpg";
import Reveal from "@/components/Reveal";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-24 lg:py-40 section-soft section-blend overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <Reveal className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={aboutImg}
                alt="Dilan Nicolás Sanabria Murcia en estudio"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-accent" />
          </Reveal>

          {/* Text */}
          <Reveal delay={120}>
            <p className="text-accent text-xs font-semibold tracking-[0.35em] uppercase mb-4">
              Sobre Mí
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight mb-8">
              Dilan Nicolás
              <br />
              Sanabria Murcia
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Ingeniero de Sonido con experiencia en producción de eventos en vivo,
                operación de sistemas de audio profesional, grabación, edición y
                optimización de sistemas.
              </p>
              <p>
                He participado en conciertos, eventos corporativos y producciones
                audiovisuales, desempeñándome en áreas como FOH, monitores, Stage
                Management, soporte técnico, ingeniero de grabación y coordinador de RF.
              </p>
              <p>
                Me adapto rápidamente a diferentes entornos de trabajo, resuelvo desafíos
                técnicos con criterio y mantengo altos estándares de calidad en cada
                producción.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div>
                <span className="block text-2xl font-bold text-foreground">Colombia</span>
                Mosquera, Cundinamarca
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
