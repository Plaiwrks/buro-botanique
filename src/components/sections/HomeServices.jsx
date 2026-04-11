import { Link } from 'react-router-dom'

const SERVICES = [
  {
    title: 'Tuinontwerp op maat',
    description:
      'Geen standaardoplossingen, maar een ontwerp dat past bij jouw architectuur en levensstijl.',
  },
  {
    title: 'Beplantingsplannen met karakter',
    description:
      'Een mooie tuin staat of valt bij de juiste plant op de juiste plek.',
  },
  {
    title: 'Lichtplannen voor sfeer',
    description:
      'Verlichting wordt vaak vergeten, maar het verlengd de gebruiksperiode van je tuin.',
  },
]

export default function HomeServices() {
  return (
    <section className="bg-section-pink px-6 md:px-10 py-20 md:py-32">
      <div className="max-w-5xl mx-auto">
        {/* Script accent */}
        <span className="font-script text-2xl md:text-4xl text-text-dark/60 block mb-[-0.2em]">
          Wat wij doen
        </span>

        {/* Heading */}
        <h2 className="font-display text-[10vw] md:text-[5vw] font-bold uppercase leading-[0.9] text-text-dark tracking-tight mb-16 md:mb-24">
          Tuinontwerp<br />
          met karakter
        </h2>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 mb-16 md:mb-20">
          {SERVICES.map(({ title, description }) => (
            <div key={title}>
              <h3 className="font-display text-xl md:text-2xl font-bold text-text-dark mb-3">
                {title}
              </h3>
              <p className="font-body text-sm md:text-base font-light text-text-dark/70 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/diensten"
          className="inline-block font-body text-xs uppercase tracking-[0.2em] text-text-dark border border-text-dark/30 px-8 py-4 hover:bg-text-dark hover:text-white transition-all duration-300"
        >
          Bekijk alle pakketten
        </Link>
      </div>
    </section>
  )
}
