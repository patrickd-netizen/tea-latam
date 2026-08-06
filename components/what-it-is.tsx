import { Reveal } from '@/components/reveal'

export function WhatItIs() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Lo que es y lo que no es
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Esto no es terapia y no reemplaza el acompañamiento de un
            profesional. Es una herramienta práctica para usar en casa, hoy,
            mientras esperas la cita o buscas por dónde empezar.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-foreground/90">
            Al principio el avance suele ser pequeño: una mirada a la tarjeta,
            un cambio de actividad con menos angustia, una vez que él señala en
            vez de llorar. Eso ya es avance. Lo pequeño, sostenido, es lo que
            termina cambiando la casa.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
