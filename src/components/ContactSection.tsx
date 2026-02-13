import { useState } from "react";
import { MessageCircle, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const whatsappUrl = `https://wa.me/573133454305?text=${encodeURIComponent(
    `Hola Dilan, me gustaría hablar sobre un proyecto.`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:dnsanabria.ing.sonido@gmail.com?subject=Contacto desde Web – ${form.name}&body=${encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            ¿Necesitas un sonido profesional
            <br />
            para tu proyecto?
          </h2>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-accent-foreground font-semibold text-sm tracking-wide hover:bg-accent/90 transition-colors duration-300"
          >
            <MessageCircle size={18} />
            Trabajemos Juntos
          </a>
        </div>

        {/* Form + Info */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Nombre"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors text-sm"
            />
            <textarea
              placeholder="Mensaje"
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors text-sm resize-none"
            />
            <button
              type="submit"
              className="px-8 py-3 border border-accent text-foreground text-sm font-medium tracking-wide hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Enviar Mensaje
            </button>
          </form>

          <div className="space-y-6 lg:pl-8">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-accent" strokeWidth={1.5} />
              <a href="mailto:dnsanabria.ing.sonido@gmail.com" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                dnsanabria.ing.sonido@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-accent" strokeWidth={1.5} />
              <a href="tel:+573133454305" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                +57 313 345 4305
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MessageCircle className="w-5 h-5 text-accent" strokeWidth={1.5} />
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
