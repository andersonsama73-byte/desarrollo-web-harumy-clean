import Image from 'next/image'

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="bg-ink px-5 pb-6 pt-14 text-white lg:px-8 lg:pb-8 lg:pt-20"
    >
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center rounded-full bg-brand/25 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand-soft ring-1 ring-inset ring-brand/40">
          Bienvenido a Harumy Clean
        </span>

        <h1 className="mx-auto mt-7 max-w-3xl text-balance font-serif text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-6xl">
          El Arte de cuidar tu hogar con pureza y frescura
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-sm leading-relaxed text-white/60 sm:text-base">
          Productos de la más alta calidad, diseñados con honestidad y cercanía
          para transformar tu día a día en verdaderos momentos de bienestar.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-2xl">
        <div className="relative aspect-[16/11] w-full sm:aspect-[16/8] lg:aspect-[16/6]">
          <Image
            src="/images/hero-products.png"
            alt="Botellas de productos de limpieza Harumy Clean rodeadas de hojas tropicales"
            fill
            priority
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <p className="max-w-md px-6 font-serif text-2xl font-medium leading-tight text-white sm:px-10 sm:text-3xl lg:text-[2.1rem]">
              Nuestro compromiso es proporcionar productos de limpieza que se
              ajuste a la necesidad específica de cada cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

