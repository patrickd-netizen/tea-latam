import { MessageCircleOff } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const pains = [
  'Te jala de la mano hasta el refrigerador, tú abres, le das algo y llora: no era eso.',
  'La mañana entera termina en llanto: vestirse, zapatos, salir. Todos los días la misma escena.',
  'Dejaste de llevarlo al súper. Salir de casa se volvió una cuenta de riesgo.',
  'Le preguntas qué quiere y solo apunta al aire. Empiezas a adivinar y casi siempre fallas.',
  'La comida se volvió una lucha diaria y ya no sabes si insistir o dejarlo pasar.',
  'Te dijeron que esperes. Y esperar, con él llorando frente a ti, no se siente como un plan.',
]

export function PainPoints() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          ¿Te suena esto?
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          No hace falta que le digas en voz alta. Pasa así:
        </p>
      </Reveal>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {pains.map((pain, i) => (
          <Reveal
            as="li"
            key={pain}
            delay={i * 70}
            className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
          >
            <span
              aria-hidden
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blush/70 text-foreground/70"
            >
              <MessageCircleOff className="h-5 w-5" />
            </span>
            <p className="text-pretty leading-relaxed text-foreground/90">{pain}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
