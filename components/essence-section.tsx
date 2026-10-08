import Image from 'next/image'

const stats = [
  { value: '100%', label: 'Calidad Garantizada' },
  { value: 'Fórmulas', label: 'Poderosas e Inofensivas' },
  { value: 'Atención', label: 'Cercana y Honesta' },
]

export function EssenceSection() {
  return (
    <section id="nosotros" className="bg-cream px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center rounded-full bg-brand-soft px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand">
            Nuestra Esencia
          </span>

          <h2 className="mt-6 text-balance font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-[2.6rem]">
            Creando entornos frescos, limpios y acogedores
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink/70 sm:text-[0.95rem]">
            <p>
              En Harumy, creemos que cuidar de tu hogar y de ti mismo no debería
              ser una tarea complicada, sino un momento de bienestar y
              tranquilidad. Por eso, nos dedicamos a ofrecerte productos de
              limpieza y cuidado personal de la más alta calidad, pensados para
              acompañarte a ti y a tu familia en el día a día.
            </p>
            <p>
              Nos esforzamos por brindarte una atención cercana, amable y
              honesta, asegurándonos de que siempre encuentres la solución
              perfecta para tus necesidades. Cuando eliges Harumy, no solo te
              llevas un producto a casa: te llevas el respaldo de un equipo que
              realmente se preocupa por tu bienestar.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-2xl font-semibold text-brand">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs font-medium text-ink/60">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-ink/5">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl">
            <Image
              src="/images/detergent-bottle.png"
              alt="Botella de detergente Harumy Clean sobre fondo amarillo"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
