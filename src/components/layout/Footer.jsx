import { Link } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Diensten', path: '/diensten' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
]

const TICKER_TEXT = 'Tuinontwerp op maat'
const TICKER_REPEAT = 12

function MarqueeTicker() {
  const items = Array.from({ length: TICKER_REPEAT }, (_, i) => (
    <span key={i} className="mx-4 whitespace-nowrap">
      {TICKER_TEXT} <span className="font-script text-lg">~</span>
    </span>
  ))

  return (
    <div className="bg-ticker-bg overflow-hidden py-4">
      <div className="flex animate-marquee">
        <div className="flex shrink-0 items-center font-body text-sm uppercase tracking-[0.15em] text-text-dark">
          {items}
        </div>
        <div className="flex shrink-0 items-center font-body text-sm uppercase tracking-[0.15em] text-text-dark" aria-hidden="true">
          {items}
        </div>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <>
      <MarqueeTicker />

      <footer className="bg-hero-bg px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Logo / naam */}
          <div className="mb-12">
            <span className="font-script text-3xl text-white">Buro</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-white -mt-1">
              Botanique
            </h2>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-20">
            {/* Navigatie */}
            <div>
              <ul className="flex flex-col gap-3">
                {NAV_ITEMS.map(({ label, path }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      className="font-body text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <div>
                <p className="font-body text-xs uppercase tracking-[0.2em] text-white/50 mb-1">
                  Contact
                </p>
                <p className="font-body text-sm text-white/70">
                  Claire Wesselings
                </p>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-[0.2em] text-white/50 mb-1">
                  E-mail
                </p>
                <a
                  href="mailto:claire.wesselings@gmail.com"
                  className="font-body text-sm text-white hover:text-white/70 transition-colors"
                >
                  claire.wesselings@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-6 border-t border-white/10">
            <p className="font-body text-xs text-white/40">
              &copy; {new Date().getFullYear()} Buro Botanique. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
