export function SiteFooter() {
  return (
    <footer className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-4 border-b border-border/60 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg font-semibold text-foreground">
            Mi Rutina Visual · 2026
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-muted-foreground">
            <a href="#" className="transition-colors hover:text-primary">
              Contacto
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Política de privacidad
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Términos
            </a>
          </nav>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Material educativo para uso en casa. No constituye diagnóstico,
          tratamiento ni terapia, y no reemplaza la orientación de un
          profesional de la salud. Ante dudas sobre el desarrollo de tu hijo,
          consulta con un especialista.
        </p>
      </div>
    </footer>
  )
}
