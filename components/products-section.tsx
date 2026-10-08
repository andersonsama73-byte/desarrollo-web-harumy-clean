import { CheckCircle2, Quote } from 'lucide-react'

const categories = [
  {
    title: 'Hogar y Limpieza',
    items: [
      'Jabón Líquido',
      'Desengrasante',
      'Desinfectante',
      'Detergente',
      'Suavizante',
      'Silicona Protectora',
      'Lavavajillas',
      'Cloro',
    ],
  },
  {
    title: 'Cuidado Personal',
    items: ['Shampoo Solido', 'Bálsamo Labial', 'Acondicionador Solido'],
  },
  {
    title: 'Productos Destacados',
    items: [
      'Limpia Lavadoras',
      'Percarbonato',
      'Difusor para auto',
      'Perfume Textil',
    ],
  },
]

export function ProductsSection() {
  return (
    <section id="productos" className="bg-cream px-5 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white px-8 py-12 text-center shadow-sm ring-1 ring-ink/5 sm:px-14">
          <Quote className="mx-auto h-8 w-8 rotate-180 text-brand/50" aria-hidden />
          <blockquote className="mt-5 text-balance font-serif text-xl leading-relaxed text-ink sm:text-2xl">
            &ldquo;Nuestro compromiso es proporcionar productos de limpieza que
            se ajusten a la necesidad específica de cada cliente&rdquo;
          </blockquote>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl bg-cream-deep/70 p-7 ring-1 ring-ink/5 sm:p-8"
            >
              <h3 className="font-serif text-xl font-medium text-ink">
                {category.title}
              </h3>
              <ul className="mt-6 space-y-3.5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-ink/80"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
