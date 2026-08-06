import { Reveal } from '@/components/reveal'

export function Bridge() {
  return (
    <section className="bg-[linear-gradient(135deg,var(--primary)_0%,oklch(0.64_0.095_175)_58%,oklch(0.72_0.08_145)_100%)] text-primary-foreground">
      <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            No es falta de ganas de él. Ni falta de esfuerzo tuyo.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-primary-foreground/90">
            Es falta de un canal. Él ya sabe lo que quiere: el jugo, el otro
            plato, salir al patio, la mano que apague ese ruido. Lo que no tiene
            todavía es una forma de decírtelo que tú puedas entender a la
            primera.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-5 text-pretty text-lg font-semibold leading-relaxed">
            Cuando hay una imagen, hay una manera de pedir. Y cuando él puede
            pedir, la casa baja de temperatura. No llegaste tarde. Solo faltaba
            el puente.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
