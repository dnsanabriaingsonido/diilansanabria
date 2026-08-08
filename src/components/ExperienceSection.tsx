const experiences = [
  {
    company: "Camaleón Tech",
    role: "Ingeniero de Sonido | Por proyectos",
    period: "2026 – Presente",
    points: [
      "Producción técnica y operación de sistemas de audio para eventos corporativos.",
      "Configuración, montaje, transmisión y soporte de sistemas audiovisuales.",
      "Eventos para Avianca, FedeTransCarga y otras organizaciones.",
      "Montajes en Corferias, auditorios y centros de convenciones.",
    ],
  },
  {
    company: "Walter Silva",
    role: "Ingeniero de Soporte – Stage Manager",
    period: "2025 – Presente",
    points: [
      "Coordinación técnica durante presentaciones en vivo.",
      "Configuración y operación de sistemas de audio para conciertos.",
      "Soporte técnico en escenario y gestión de cambios durante el espectáculo.",
      "Movistar Arena, Plaza de Bolívar, Teatro Julio Mario Santo Domingo y otros escenarios de gran formato.",
    ],
  },
  {
    company: "Lumínica",
    role: "Ingeniero de Sonido | Por proyectos",
    period: "2024 – Presente",
    points: [
      "Calibración y optimización de sistemas de audio para eventos corporativos y espectáculos.",
      "Montaje, operación y soporte técnico de equipos de sonido profesional.",
      "Producciones con artistas como Maía, Alejo González y otros eventos de gran formato.",
    ],
  },
  {
    company: "IMPAKTO",
    role: "Ingeniero de Sonido",
    period: "2024 – 2025",
    points: [
      "Calibración y optimización de sistemas de audio.",
      "Grabación en bloque, de voces e instrumentos.",
      "Operación de monitores y FOH.",
    ],
  },
  {
    company: "AVL",
    role: "Ingeniero de Sonido",
    period: "2024 – 2025",
    points: [
      "Calibración y optimización de sistemas de audio.",
      "Grabación de voces e instrumentos.",
      "Streaming.",
    ],
  },
  {
    company: "01-8000-UNKNWN",
    role: "Cofundador",
    period: "Septiembre 2020 – a la fecha",
    points: ["Edición, mezcla y mastering.", "Producción musical de proyectos propios."],
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

        <div className="max-w-4xl">
          {experiences.map((exp) => (
            <div key={exp.company} className="py-8 border-b border-accent/20 last:border-b-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{exp.company}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{exp.role}</p>
                </div>
                <span className="text-accent text-xs tracking-[0.2em] uppercase whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.points.map((p) => (
                  <li key={p} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                    <span className="mt-2 w-1 h-1 bg-accent flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
