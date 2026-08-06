'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: '¿Sirve si mi hijo no tiene diagnóstico?',
    a: 'Sí. El kit funciona con cualquier niño de 2 a 7 años que aún no habla o habla poco, tenga o no un diagnóstico. Es una forma de darle un canal para pedir y anticipar el día.',
  },
  {
    q: '¿Necesito impresora a color?',
    a: 'No es obligatorio. El Kit Completo incluye una versión de bajo consumo de tinta en blanco y negro. La versión a color se ve más bonita, pero funciona igual impresa en negro.',
  },
  {
    q: '¿Y si no puedo imprimir ahora?',
    a: 'El Kit Completo incluye una versión para pantalla con 60 tarjetas en formato celular, para que puedas empezar hoy mismo desde el teléfono mientras consigues imprimir.',
  },
  {
    q: '¿Cuánto tiempo al día me toma?',
    a: 'Muy poco. Empiezas con 4 tarjetas en un solo momento del día. La guía de 7 días te dice exactamente cuál usar y cuándo, sin agregar tareas a tu rutina.',
  },
  {
    q: '¿Cómo recibo el material?',
    a: 'Descarga inmediata en PDF después de la compra. Lo guardas en tu dispositivo y lo puedes imprimir todas las veces que quieras.',
  },
  {
    q: '¿Sirve para un niño de 6 o 7 años?',
    a: 'Sí. El sistema se adapta: puedes personalizar las tarjetas en blanco con sus cosas y usar el Primero / Luego para transiciones más complejas.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <Reveal className="text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Preguntas frecuentes
        </h2>
      </Reveal>

      <div className="mt-10 space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <Reveal key={faq.q} delay={i * 60}>
              <div
                className={cn(
                  'overflow-hidden rounded-2xl border bg-card transition-colors',
                  isOpen ? 'border-primary/30 shadow-sm' : 'border-border/60',
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-foreground">{faq.q}</span>
                  <Plus
                    className={cn(
                      'h-5 w-5 shrink-0 text-primary transition-transform duration-300',
                      isOpen && 'rotate-45',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
