import { Check, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const offers = [
  {
    featured: true,
    title: 'Kit Completo · US$ 10',
    text: 'Más de 100 páginas: todo el kit, emociones, versión en blanco y negro y versión para pantalla.',
    cta: 'Quiero el Kit Completo',
  },
  {
    featured: false,
    title: 'Kit Mi Rutina Visual · US$ 6,90',
    text: 'Las 27 páginas completas: tablero, tarjetas, Primero / Luego y guía de 7 días.',
    cta: 'Quiero el Kit',
  },
]

export function FinalCta() {
  return (
    <section
      id="comprar"
      className="scroll-mt-8 bg-[linear-gradient(135deg,var(--primary)_0%,oklch(0.62_0.09_205)_54%,oklch(0.72_0.09_25)_100%)] text-primary-foreground"
    >
      <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Empieza hoy en casa
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {offers.map((offer, i) => (
            <Reveal
              as="article"
              key={offer.title}
              delay={i * 120}
              className="flex h-full flex-col rounded-3xl border border-primary/15 bg-card p-7 text-foreground shadow-xl shadow-primary/10 md:p-8"
            >
              {offer.featured ? (
                <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-foreground">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  Más elegido
                </span>
              ) : (
                <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wide text-secondary-foreground">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  Esencial
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-foreground">
                {offer.title}
              </h3>
              <p className="mt-2 flex-1 text-pretty leading-relaxed text-muted-foreground">
                {offer.text}
              </p>
              <a
                href="#"
                className={cn(
                  'mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-base font-bold transition-all hover:-translate-y-0.5',
                  offer.featured
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                    : 'border-2 border-primary/30 bg-card text-primary hover:bg-primary/5',
                )}
              >
                {offer.cta}
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-2xl text-pretty text-center text-lg leading-relaxed text-primary-foreground/90">
            Hoy él tira de tu mano. Mañana quizá apunte una tarjeta. Es un paso
            corto, y alcanza para empezar.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
