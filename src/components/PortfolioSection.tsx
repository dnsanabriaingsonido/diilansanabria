import { Play } from "lucide-react";

const projects = [
  { title: "Mariposas Live Session", category: "Live Session" },
  { title: "Amiga Mía Live Session", category: "Live Session" },
  { title: "Proyecto 01-8000-UNKNWN", category: "Producción" },
];

const PortfolioSection = () => {
  return (
    <section id="portafolio" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4">
          Portafolio
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-16">
          Proyectos Destacados
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative aspect-[4/3] bg-card overflow-hidden cursor-pointer"
            >
              {/* Dark placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-background" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500 flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <Play className="w-10 h-10 text-foreground mx-auto mb-3" strokeWidth={1} />
                  <h3 className="text-foreground font-semibold">{p.title}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{p.category}</p>
                  <div className="w-8 h-0.5 bg-accent mx-auto mt-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
