import { Award, GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";

const certs = [
  { title: "Avid Certified User – Pro Tools 101", detail: "Avid · 2022" },
  { title: "Avid Certified User – Pro Tools 110", detail: "Avid · 2022" },
  { title: "Avid Certified User – Sonnox Elite Plug-ins", detail: "CW · 2024" },
  { title: "DANTE Certified (Nivel 1)", detail: "Audinate · 2025" },
  { title: "DANTE Certified (Nivel 2)", detail: "EDMAFS · 2026" },
];

const education = [
  { title: "Ingeniería de Sonido", detail: "Universidad de San Buenaventura" },
  {
    title: "Diseño y Optimización de Sistemas de Sonido",
    detail: "Escuela de Música y Audio Fernando Sor",
  },
  {
    title: "Producción Musical",
    detail: "Academia de Formación DJ Beats · 2018 – Diciembre 2019",
  },
  { title: "Bachiller", detail: "Institución Educativa La Merced · Diciembre 2017" },
];

const CertificationsSection = () => {
  return (
    <section id="formacion" className="py-24 lg:py-40 section-soft section-blend overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-accent text-xs font-semibold tracking-[0.35em] uppercase mb-4">
            Formación
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight mb-16">
            Académica y <span className="text-gradient-accent">Certificada</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <Reveal>
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-foreground mb-6">
              Historial Académico
            </h3>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.title} className="flex items-start gap-4 p-6 surface-card">
                  <GraduationCap className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h4 className="text-foreground font-semibold">{e.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{e.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-foreground mb-6">
              Certificaciones
            </h3>
            <div className="space-y-4">
              {certs.map((c) => (
                <div key={c.title} className="flex items-start gap-4 p-6 surface-card">
                  <Award className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h4 className="text-foreground font-semibold">{c.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
