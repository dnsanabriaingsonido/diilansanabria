import { Award } from "lucide-react";

const certs = [
  { title: "Avid Certified User", detail: "Pro Tools 101-110" },
  { title: "Avid Certified User", detail: "Sonnox Elite Plug-ins" },
];

const CertificationsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4">
          Certificaciones
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-16">
          Formación Certificada
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
          {certs.map((c) => (
            <div key={c.detail} className="flex items-start gap-4 p-6 bg-background">
              <Award className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <h3 className="text-foreground font-semibold">{c.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{c.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
