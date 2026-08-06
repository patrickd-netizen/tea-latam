import { Printer, Scissors, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    icon: Printer,
    title: 'Imprime',
    text: 'Papel normal, impresora de casa, del trabajo o de la papelería de la esquina.',
  },
  {
    icon: Scissors,
    title: 'Recorta',
    text: 'Tijeras y listo. Si quieres que duren más, cinta adhesiva transparente encima.',
  },
  {
    icon: Sparkles,
    title: 'Úsalo',
    text: 'Empiezas con 4 tarjetas, en un solo momento del día. La guía te dice cuál.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Cómo funciona
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <Reveal
                as="article"
                key={step.title}
                delay={i * 110}
                className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 shadow-sm"
              >
                <span className="pointer-events-none absolute -right-3 -top-4 font-display text-7xl font-bold text-primary/10">
                  {i + 1}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-pretty text-muted-foreground">
            Sin plastificadora, sin materiales caros, sin comprar nada más.
            Papel y cinta alcanzan.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
