const Footer = () => (
  <footer className="py-8 border-t border-border bg-background">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-xs">
        © {new Date().getFullYear()} Dilan Nicolás Sanabria Murcia. Todos los derechos reservados.
      </p>
      <p className="text-muted-foreground text-xs">
        Mosquera, Cundinamarca — Colombia
      </p>
    </div>
  </footer>
);

export default Footer;
