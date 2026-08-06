import Image from 'next/image'
import { ArrowRight, Download, Printer, HeartHandshake } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,var(--cream)_0%,var(--sky)_48%,var(--mint)_100%)]">
      <div className="mx-auto max-w-6xl px-5 pb-8 pt-14 md:px-8 md:pt-20">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Mi Rutina Visual
          </span>
        </Reveal>

        <div className="mt-6 grid items-center gap-10 md:mt-10 md:grid-cols-2 md:gap-12">
          <div className="max-w-xl">
            <Reveal delay={60}>
              <h1 className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-[3.4rem]">
                Él sabe lo que quiere. Solo que todavía no tiene cómo decírtelo.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Un kit imprimible de comunicación visual para usar en casa con
                niños de 2 a 7 años que aún no hablan o hablan poco. Lo imprimes
                hoy y empiezas hoy.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#kits"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
                >
                  Ver el kit
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-muted-foreground">
                <li className="inline-flex items-center gap-1.5">
                  <Download className="h-4 w-4 text-primary" /> Descarga inmediata
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <Printer className="h-4 w-4 text-primary" /> Para imprimir en casa
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <HeartHandshake className="h-4 w-4 text-primary" /> No es terapia
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={160} className="relative">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[linear-gradient(135deg,var(--primary)_0%,var(--mint)_38%,var(--butter)_70%,var(--blush)_100%)]" />
              <div className="animate-float-slow rounded-[2rem] border border-primary/30 bg-[radial-gradient(circle_at_24%_18%,var(--butter)_0%,transparent_32%),radial-gradient(circle_at_82%_24%,var(--sky)_0%,transparent_34%),linear-gradient(135deg,var(--mint)_0%,oklch(0.86_0.07_205)_48%,var(--blush)_100%)] p-3 shadow-2xl shadow-primary/25 md:p-4">
                <Image
                  src="/images/kit-mockup.png"
                  alt="Kit Mi Rutina Visual: tablero de comunicación, tarjetas imprimibles y versión para pantalla en laptop y celular"
                  width={1512}
                  height={1024}
                  priority
                  className="h-auto w-full rounded-2xl drop-shadow-[0_22px_28px_rgba(22,95,96,0.18)]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
