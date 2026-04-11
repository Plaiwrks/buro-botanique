import { Link } from 'react-router-dom'

export default function HomeHero() {
  return (
    <section className="relative min-h-screen bg-hero-bg overflow-hidden flex flex-col">
      {/* Hero image placeholder — achter de tekst */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[60%] h-[70%] bg-white/5 rounded-sm" aria-hidden="true" />
        {/* Vervang later met: <img src="/images/hero/home.webp" alt="..." className="w-full h-full object-cover" /> */}
      </div>

      {/* Centered title block */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-24 md:pt-20">
        {/* Script accent — gecentreerd boven BOTANIQUE */}
        <span className="font-script text-4xl md:text-6xl lg:text-7xl text-white block mb-[-0.2em]">
          Buro
        </span>

        {/* Enormous heading — uitgestrekt over volledige breedte, mag buiten scherm vallen */}
        <h1 className="font-display text-[22vw] md:text-[18vw] font-bold uppercase leading-[0.82] text-white tracking-[0.02em] text-center whitespace-nowrap">
          Botanique
        </h1>
      </div>

      {/* Bottom content */}
      <div className="relative z-10 w-full px-6 md:px-10 pb-12 md:pb-20">
        <div className="max-w-lg">
          {/* Subtitel */}
          <p className="font-body text-xs md:text-sm uppercase tracking-[0.25em] text-white/70 mb-5">
            Tuinontwerp op maat
          </p>

          {/* Bodytekst */}
          <p className="font-body text-base md:text-lg font-light text-white/80 leading-relaxed mb-8">
            Je wilt een tuin die lééft. Een plek waar je overdag geniet van het
            groen en die &rsquo;s avonds transformeert in een sfeervol verlengstuk
            van je woning.
          </p>

          {/* CTA */}
          <Link
            to="/diensten"
            className="inline-block font-body text-xs uppercase tracking-[0.2em] text-white border border-white/40 px-8 py-4 hover:bg-white hover:text-hero-bg transition-all duration-300"
          >
            Bekijk onze aanpak
          </Link>
        </div>
      </div>
    </section>
  )
}
