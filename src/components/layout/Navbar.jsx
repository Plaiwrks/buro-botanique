import { useState } from 'react'
import { Link } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Diensten', path: '/diensten' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-8">
          {NAV_ITEMS.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-white hover:opacity-70 transition-opacity"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-8 h-6 flex flex-col justify-between z-50"
          aria-label={isOpen ? 'Menu sluiten' : 'Menu openen'}
          aria-expanded={isOpen}
        >
          <span
            className={`block w-full h-[1.5px] bg-white transition-all duration-300 origin-center ${
              isOpen ? 'rotate-45 translate-y-[11px]' : ''
            }`}
          />
          <span
            className={`block w-full h-[1.5px] bg-white transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-full h-[1.5px] bg-white transition-all duration-300 origin-center ${
              isOpen ? '-rotate-45 -translate-y-[11px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-hero-bg transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-10">
          {NAV_ITEMS.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                onClick={() => setIsOpen(false)}
                className="font-display text-4xl font-bold uppercase tracking-widest text-white hover:opacity-70 transition-opacity"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
