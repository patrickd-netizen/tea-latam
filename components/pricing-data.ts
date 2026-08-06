export type Plan = {
  id: string
  featured: boolean
  name: string
  price: string
  priceNote: string
  pages: string
  features: string[]
  cta: string
}

export const plans: Plan[] = [
  {
    id: 'completo',
    featured: true,
    name: 'Kit Completo',
    price: 'US$ 10',
    priceNote: 'pago único',
    pages: 'Más de 100 páginas',
    features: [
      'Todo lo del Kit Mi Rutina Visual',
      '12 tarjetas de emociones, para que pueda decir que está enojado en vez de gritar',
      'Versión de bajo consumo de tinta: 12 páginas en blanco y negro',
      'Versión para pantalla: 60 tarjetas en formato celular, para usar fuera de casa',
    ],
    cta: 'Quiero el Kit Completo',
  },
  {
    id: 'base',
    featured: false,
    name: 'Kit Mi Rutina Visual',
    price: 'US$ 6,90',
    priceNote: 'pago único',
    pages: '27 páginas',
    features: [
      'Tablero de comunicación y 40+ tarjetas',
      'Primero / Luego y tira de rutina',
      'Guía de 7 días, página de crisis y los 5 errores',
      'Las 27 páginas completas, sin recortes',
    ],
    cta: 'Quiero el Kit',
  },
]
