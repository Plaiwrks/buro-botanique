import { Link } from 'react-router-dom'

const PROJECTS = [
  { id: 1, alt: 'Tuinproject met weelderige borders en siergrassen' },
  { id: 2, alt: 'Stadstuin met verlichtingsplan en terras' },
  { id: 3, alt: 'Landelijke tuin met natuurlijke beplanting' },
]

export default function HomePortfolio() {
  return (
    <section className="bg-section-green overflow-hidden py-20 md:py-32">
      {/* Heading — mag buiten beeld vallen */}
      <div className="px-6 md:px-10 mb-16 md:mb-24">
        <span className="font-script text-2xl md:text-4xl text-text-dark/50 block mb-[-0.2em]">
          Ons werk
        </span>
        <h2 className="font-display text-[14vw] md:text-[10vw] font-bold uppercase leading-[0.85] text-text-dark tracking-tight whitespace-nowrap">
          Ons Portfolio
        </h2>
      </div>

      {/* Project cards — beelden zonder kaders */}
      <div className="px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {PROJECTS.map(({ id, alt }) => (
            <div key={id} className="aspect-[3/4] bg-text-dark/10 overflow-hidden">
              {/* Vervang later met: <img src={`/images/portfolio/project-${id}.webp`} alt={alt} className="w-full h-full object-cover" loading="lazy" /> */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-body text-xs uppercase tracking-widest text-text-dark/30">
                  Foto {id}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
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
