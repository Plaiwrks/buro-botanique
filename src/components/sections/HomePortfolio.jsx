import { Link } from 'react-router-dom'

export default function HomePortfolio() {
  return (
    <section className="bg-section-green py-20 md:py-32 relative" style={{ overflow: 'visible' }}>
      {/* Hydrangea — links, licht gekanteld, steel vanuit ticker */}
      <img
        src="/images/hydrangea.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none z-[2]"
        style={{
          bottom: '-45px',
          left: '-3%',
          height: '520px',
          width: 'auto',
          transform: 'rotate(-8deg)',
        }}
      />

      {/* Viburnum — rechts, licht naar links leunend */}
      <img
        src="/images/viburnum.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none z-[2]"
        style={{
          bottom: '-50px',
          right: '-2%',
          height: '480px',
          width: 'auto',
          transform: 'rotate(6deg)',
        }}
      />

      {/* Heading — boven de planten */}
      <div className="relative z-[3] px-6 md:px-10 mb-10 md:mb-14">
        <span className="font-script text-2xl md:text-4xl text-text-dark/50 block mb-[-0.2em]">
          Ons werk
        </span>
        <h2 className="font-display text-[11vw] md:text-[8vw] lg:text-[10vw] font-bold uppercase leading-[0.85] text-text-dark tracking-tight">
          Ons Portfolio
        </h2>
      </div>

      {/* CTA */}
      <div className="relative z-[3] px-6 md:px-10">
        <Link
          to="/portfolio"
          className="inline-block font-body text-xs uppercase tracking-[0.2em] text-text-dark border border-text-dark/30 px-8 py-4 hover:bg-text-dark hover:text-white transition-all duration-300"
        >
          Bekijk alle projecten
        </Link>
      </div>
    </section>
  )
}
