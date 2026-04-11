import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'

const PACKAGES = [
  {
    name: 'Groen',
    subtitle: 'De Upgrade',
    description:
      'Heb je al een fijne basis, maar mist er nog iets? Met het Groen-pakket focussen we ons op één specifiek onderdeel van je tuin.',
    focus: 'Eén specifiek onderdeel (bijv. verlichting óf beplanting)',
    idealFor: 'Bestaande tuinen die een kwaliteitsinjectie kunnen gebruiken',
  },
  {
    name: 'Groener',
    subtitle: 'Het Ontwerp',
    description: 'Ben je toe aan een compleet nieuwe indeling?',
    focus: 'Een compleet tuinontwerp op maat',
    idealFor: 'Nieuwbouw of renovatie',
  },
  {
    name: 'Groenst',
    subtitle: 'Het Totaalplan',
    description: 'Wil je het maximale uit je buitenruimte halen?',
    focus:
      'Full-service ontwerp inclusief beplantingsplan en verlichtingsplan',
    idealFor:
      'Wie op zoek is naar een unieke, instapklare groene oase',
  },
]

export function Component() {
  return (
    <>
      <Head>
        <title>Diensten — Buro Botanique</title>
        <meta
          name="description"
          content="Kies het pakket dat bij jouw tuin past: Groen, Groener of Groenst."
        />
        <meta property="og:title" content="Diensten — Buro Botanique" />
        <meta property="og:description" content="Kies het pakket dat bij jouw tuin past: Groen, Groener of Groenst." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.burobotanique.nl/diensten" />
        <meta property="og:locale" content="nl_NL" />
      </Head>

      {/* Hero */}
      <section className="bg-hero-bg pt-32 md:pt-44 pb-20 md:pb-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <span className="font-script text-2xl md:text-4xl text-white/50 block mb-[-0.2em]">
            Onze diensten
          </span>
          <h1 className="font-display text-[12vw] md:text-[7vw] font-bold uppercase leading-[0.85] text-white tracking-tight mb-10 md:mb-14">
            Kies jouw<br />plan
          </h1>
          <p className="font-body text-base md:text-lg font-light text-white/80 max-w-xl leading-relaxed">
            Kies het plan dat bij jou past. Geen verrassingen achteraf, maar een
            plan dat precies aansluit op jouw wensen.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-section-pink px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {PACKAGES.map(({ name, subtitle, description, focus, idealFor }) => (
              <div
                key={name}
                className="border border-text-dark/10 p-8 md:p-10 flex flex-col"
              >
                {/* Package name */}
                <span className="font-script text-xl text-text-dark/50 block mb-[-0.1em]">
                  {subtitle}
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-text-dark mb-6">
                  {name}
                </h2>

                {/* Description */}
                <p className="font-body text-sm md:text-base font-light text-text-dark/70 leading-relaxed mb-8">
                  {description}
                </p>

                {/* Details */}
                <div className="mt-auto space-y-4">
                  <div>
                    <p className="font-body text-[10px] uppercase tracking-[0.2em] text-text-dark/40 mb-1">
                      Focus
                    </p>
                    <p className="font-body text-sm text-text-dark/80">
                      {focus}
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-[10px] uppercase tracking-[0.2em] text-text-dark/40 mb-1">
                      Ideaal voor
                    </p>
                    <p className="font-body text-sm text-text-dark/80">
                      {idealFor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-section-green px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-display text-2xl md:text-4xl font-bold text-text-dark leading-snug mb-10 max-w-2xl mx-auto">
            Twijfel je nog welk plan bij jou past? Laten we even bellen.
          </p>
          <Link
            to="/contact"
            className="inline-block font-body text-xs uppercase tracking-[0.2em] text-text-dark border border-text-dark/30 px-8 py-4 hover:bg-text-dark hover:text-white transition-all duration-300"
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </>
  )
}
