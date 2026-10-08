import Image from 'next/image'
import { ShieldCheck, Sparkles, Heart } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Desinfectante Máximo Poder',
    description:
      'Fórmula balanceada con potencia activa y una fragancia que perdura en cada rincón.',
  },
  {
    icon: Sparkles,
    title: 'Jabón Líquido Premium',
    description:
      'Cuida y suaviza tus manos a la vez que asegura una limpieza profunda y efectiva.',
  },
  {
    icon: Heart,
    title: 'Garantía de Bienestar',
    description:
      'Respaldado por un equipo comprometido con ofrecer soluciones reales para tu día a día.',
  },
]

export function FeaturedSection() {
  return (
    <section className="bg-cream-deep px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 overflow-hidden rounded-2xl shadow-sm ring-1 ring-ink/5 lg:order-1">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/laundry-room.png"
              alt="Cuarto de lavado acogedor con productos Harumy Clean"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center rounded-full bg-brand-soft px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand">
            Línea Destacada
          </span>

          <h2 className="mt-6 text-balance font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-[2.6rem]">
            Limpieza profunda con Máximo Poder
          </h2>

          <ul className="mt-8 space-y-6">
            {features.map((feature) => (
              <li key={feature.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-mint text-brand">
                  <feature.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/65">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
