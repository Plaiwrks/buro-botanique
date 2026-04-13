import { Link } from 'react-router-dom'
const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Diensten', path: '/diensten' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <>
      <footer className="bg-hero-bg px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Logo / naam */}
          <div className="mb-12">
            <span className="font-script text-2xl md:text-3xl text-white">Buro</span>
            <h2 className="font-display text-2xl md:text-5xl font-bold uppercase text-white -mt-1 flex items-end">
              <span>Botan</span>
              <img
                src="/images/logo.png"
                alt=""
                className="inline-block brightness-0 invert"
                style={{ height: '1.1em', width: 'auto', marginBottom: '-0.05em', marginLeft: '-0.02em', marginRight: '-0.02em' }}
              />
              <span>que</span>
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

            {/* Socials */}
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-white/50 mb-3">
                Volg ons
              </p>
              <div className="flex gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/buro.botanique/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/clairewesselings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:claire.wesselings@gmail.com"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="E-mail"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
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
