import {
  LayoutGrid,
  Layers,
  ArrowRightLeft,
  ListChecks,
  PencilRuler,
  CalendarDays,
  TriangleAlert,
  LifeBuoy,
  Heart,
  CalendarClock,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const features = [
  {
    icon: LayoutGrid,
    tint: 'bg-mint/70',
    title: 'Tablero de comunicación',
    text: 'Las palabras esenciales del día en una sola página, siempre a la mano.',
  },
  {
    icon: Layers,
    tint: 'bg-sky/70',
    title: '40+ tarjetas imprimibles',
    text: 'Mañana, comidas, escuela, juego, cuidado, casa y transiciones.',
  },
  {
    icon: ArrowRightLeft,
    tint: 'bg-butter/70',
    title: 'Sistema Primero / Luego',
    text: 'Anticipa dos pasos y baja mucho la crisis de los cambios.',
  },
  {
    icon: ListChecks,
    tint: 'bg-lilac/70',
    title: 'Tira de rutina vertical',
    text: 'Reutilizable: la rutina del día en orden, visible para él.',
  },
  {
    icon: PencilRuler,
    tint: 'bg-blush/70',
    title: 'Tarjetas en blanco',
    text: 'Para personalizar con la foto de tu hijo y de sus cosas.',
  },
  {
    icon: CalendarDays,
    tint: 'bg-mint/70',
    title: 'Guía de 7 días',
    text: 'Qué hacer cada día, en orden. Sin adivinar por dónde empezar.',
  },
  {
    icon: TriangleAlert,
    tint: 'bg-butter/70',
    title: 'Los 5 errores más comunes',
    text: 'Lo que suele trabar el sistema en la primera semana.',
  },
  {
    icon: LifeBuoy,
    tint: 'bg-sky/70',
    title: 'Página de crisis',
    text: 'Qué hacer cuando él se sale de control. Pasos cortos.',
  },
  {
    icon: Heart,
    tint: 'bg-blush/70',
    title: 'Para ti, mamá',
    text: 'Una página que no es para él. Es para el día que no puedes más.',
  },
  {
    icon: CalendarClock,
    tint: 'bg-lilac/70',
    title: 'Qué hacer en los próximos meses',
    text: 'Cómo seguir cuando la primera semana ya pasó.',
  },
]

export function Features() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <Reveal className="max-w-2xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Qué hay adentro del kit
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Todo listo para imprimir. Nada que armar, nada que configurar.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => {
          const Icon = f.icon
          return (
            <Reveal
              as="article"
              key={f.title}
              delay={(i % 3) * 80}
              className="group h-full rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${f.tint} text-foreground/80 transition-transform group-hover:scale-110`}
              >
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="mt-1.5 leading-relaxed text-muted-foreground">
                {f.text}
              </p>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
