const experiences = [
  {
    role: "Ing. Monitores / Stage Manager",
    company: "Walter Silva",
  },
  {
    role: "Asistente de Audio",
    company: "Lumínica",
  },
  {
    role: "Optimización de Sistemas",
    company: "IMPAKTO",
  },
  {
    role: "Cofundador",
    company: "01-8000-UNKNWN",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4">
          Experiencia
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-16">
          Trayectoria Profesional
        </h2>

        <div className="max-w-3xl">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-accent/20 last:border-b-0"
            >
              <h3 className="text-lg font-semibold text-foreground">{exp.company}</h3>
              <p className="text-muted-foreground text-sm mt-1 sm:mt-0">{exp.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
