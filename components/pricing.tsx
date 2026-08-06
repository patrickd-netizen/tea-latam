import { Check, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { plans } from '@/components/pricing-data'
import { cn } from '@/lib/utils'

export function Pricing() {
  return (
    <section id="kits" className="scroll-mt-8">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Elige tu kit
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Descarga inmediata en PDF. Lo puedes imprimir todas las veces que
            quieras.
          </p>
        </Reveal>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal as="article" key={plan.id} delay={i * 120}>
              <div
                className={cn(
                  'group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-all md:p-8',
                  plan.featured
                    ? 'bg-[linear-gradient(135deg,var(--mint)_0%,var(--sky)_46%,var(--butter)_100%)] border-primary/35 shadow-2xl shadow-primary/20 ring-2 ring-primary/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/25 lg:-mt-4 lg:scale-[1.03]'
                    : 'border-border/60 bg-card shadow-sm hover:-translate-y-1 hover:shadow-lg',
                )}
              >
                {plan.featured && (
                  <>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-2 rounded-[1.35rem] bg-card/72"
                    />
                    <span className="relative mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-foreground shadow-sm">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      Más elegido
                    </span>
                  </>
                )}

                <h3 className="relative font-display text-xl font-semibold text-foreground">
                  {plan.name}
                </h3>

                <div className="relative mt-3 flex items-end gap-2">
                  <span className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                    {plan.price}
                  </span>
                  <span className="pb-1.5 text-sm font-semibold text-muted-foreground">
                    {plan.priceNote}
                  </span>
                </div>

                <span className="relative mt-3 inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">
                  {plan.pages}
                </span>

                <ul className="relative mt-6 flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={cn(
                          'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                          plan.featured
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-zinc-200 text-zinc-600',
                        )}
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-pretty leading-relaxed text-foreground/90">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#comprar"
                  className={cn(
                    'relative mt-7 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-base font-bold transition-all hover:-translate-y-0.5',
                    plan.featured
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30'
                      : 'border-2 border-primary/30 bg-card text-primary hover:border-primary/60 hover:bg-primary/5',
                  )}
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
