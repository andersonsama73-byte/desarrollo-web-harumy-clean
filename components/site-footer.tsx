import type { SVGProps } from 'react'
import { HarumyLogo } from './harumy-logo'
import { WHATSAPP_URL, WHATSAPP_DISPLAY_PHONE } from '@/lib/constants'

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4h1.4V5.6c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5v1.9H8.5V14h2.4v7h2.6z" />
    </svg>
  )
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 4h2.6l-5.7 6.5L22.5 20h-5.3l-4.1-5.4L8.3 20H5.7l6.1-7L5 4h5.4l3.7 4.9L18.9 4zm-.9 14.5h1.4L9.1 5.4H7.6L18 18.5z" />
    </svg>
  )
}

const socials = [
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: TwitterIcon, label: 'Twitter', href: '#' },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink px-5 pb-8 pt-16 text-white lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 pb-12 md:grid-cols-2">
        <div className="max-w-sm">
          <HarumyLogo variant="light" />
          <p className="mt-5 text-sm leading-relaxed text-white/55">
            Dedicados a ofrecerte soluciones de limpieza y cuidado de la más
            alta calidad con el trato cercano que tú y tu familia merecen.
          </p>
        </div>

        <div className="md:justify-self-end">
          <h3 className="font-serif text-lg font-medium text-white">
            Contacto Directo
          </h3>
          <dl className="mt-5 space-y-2 text-sm text-white/55">
            <div>
              <dt className="inline">WhatsApp: </dt>
              <dd className="inline text-white/75">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white hover:underline"
                >
                  {WHATSAPP_DISPLAY_PHONE}
                </a>
              </dd>
            </div>
            <div>
              <dt className="inline">Email: </dt>
              <dd className="inline text-white/75">contacto@harumyclean.com</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-6 border-t border-white/10 pt-6 sm:flex-row">
        <p className="text-xs text-white/45">
          © 2026 Harumy Clean. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-brand hover:text-white"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
