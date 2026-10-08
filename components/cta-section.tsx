import { MessageCircle, BookOpen } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

export function CtaSection() {
  return (
    <section id="compromiso" className="bg-brand px-5 py-20 text-center lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-balance font-serif text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
          ¿Listo para crear un entorno fresco y acogedor?
        </h2>

        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-brand-soft">
          * Precios especiales al por mayor *
        </p>

        <p className="mx-auto mt-4 max-w-lg text-pretty text-sm leading-relaxed text-white/70 sm:text-base">
          Haz tu pedido o consulta directamente con nuestro equipo. Te
          garantizamos una atención amable, cercana y completamente honesta.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand shadow-sm transition-all hover:-translate-y-0.5 hover:bg-cream hover:shadow-md sm:w-auto"
          >
            Contactar por WhatsApp
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href="#productos"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/25 transition-all hover:-translate-y-0.5 hover:bg-ink-soft sm:w-auto"
          >
            Ver Catálogo
            <BookOpen className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
