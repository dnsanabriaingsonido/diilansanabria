import aboutImg from "@/assets/about-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={aboutImg}
                alt="Dilan Nicolás Sanabria Murcia en estudio"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-accent" />
          </div>

          {/* Text */}
          <div>
            <p className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Sobre Mí
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Dilan Nicolás
              <br />
              Sanabria Murcia
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Ingeniero de sonido con experiencia en producción musical, grabación,
                mezcla y optimización de sistemas de audio profesionales.
              </p>
              <p>
                Experiencia en sonido en vivo (FOH y Monitores), eventos corporativos
                y proyectos audiovisuales.
              </p>
              <p>
                Enfoque en precisión técnica, calidad sonora y ejecución profesional.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div>
                <span className="block text-2xl font-bold text-foreground">Colombia</span>
                Mosquera, Cundinamarca
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
