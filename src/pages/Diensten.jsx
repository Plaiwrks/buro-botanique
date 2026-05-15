import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import DienstenPlattegrond from '../components/sections/DienstenPlattegrond'

const PACKAGES = [
  {
    step: '01',
    name: 'Groen',
    subtitle: 'De Upgrade',
    price: 'Vanaf €375',
    description:
      'Heb je al een fijne basis, maar mist er nog iets? Met het Groen pakket focussen we ons op één specifiek onderdeel van je tuin.',
    focus: 'Eén specifiek onderdeel (bijv. verlichting óf beplanting)',
    idealFor: 'Bestaande tuinen die een kwaliteitsinjectie kunnen gebruiken',
  },
  {
    step: '02',
    name: 'Groener',
    subtitle: 'Het Ontwerp',
    price: 'Vanaf €425',
    description: 'Ben je toe aan een compleet nieuwe indeling?',
    focus: 'Een compleet tuinontwerp op maat',
    idealFor: 'Nieuwbouw of renovatie',
  },
  {
    step: '03',
    name: 'Groenst',
    subtitle: 'Het Totaalplan',
    price: 'Vanaf €575',
    description: 'Wil je het maximale uit je buitenruimte halen?',
    focus:
      'Full service ontwerp inclusief beplantingsplan en verlichtingsplan',
    idealFor:
      'Wie op zoek is naar een unieke, instapklare groene oase',
  },
]

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Kennismaking',
    description: 'In een vrijblijvend gesprek van 15 minuten bespreken we jouw wensen, ruimte en stijl.',
  },
  {
    number: '02',
    title: 'Ontwerp & plattegrond',
    description: 'We vertalen jouw visie naar een doordacht ontwerp op schaal, inclusief beplanting en materialen.',
  },
  {
    number: '03',
    title: 'Realisatie',
    description: 'Met een helder plan in handen breng je het ontwerp tot leven, zelf of via onze vakmensen.',
  },
]

export function Component() {
  return (
    <>
      <Head>
        <title>Diensten | Tuinontwerp pakketten | Buro Botanique</title>
        <meta
          name="description"
          content="Kies het pakket dat bij jouw tuin past: Groen, Groener of Groenst. Tuinontwerp op maat in Amsterdam vanaf €375. Geen verrassingen achteraf."
        />
        <link rel="canonical" href="https://www.burobotanique.nl/diensten" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Buro Botanique" />
        <meta property="og:title" content="Diensten | Tuinontwerp pakketten | Buro Botanique" />
        <meta property="og:description" content="Kies het pakket dat bij jouw tuin past: Groen, Groener of Groenst. Tuinontwerp op maat in Amsterdam vanaf €375." />
        <meta property="og:url" content="https://www.burobotanique.nl/diensten" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:image" content="https://www.burobotanique.nl/images/logo.png" />

        {/* Twitter cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Diensten | Tuinontwerp pakketten | Buro Botanique" />
        <meta name="twitter:description" content="Kies het pakket dat bij jouw tuin past: Groen, Groener of Groenst." />
        <meta name="twitter:image" content="https://www.burobotanique.nl/images/logo.png" />

      </Head>

      {/* Page-specific structured data — buiten Head om dedup te vermijden */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'OfferCatalog',
                name: 'Tuinontwerp pakketten',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    name: 'Groen — De Upgrade',
                    description: 'Focus op één specifiek onderdeel van je tuin.',
                    price: '375',
                    priceCurrency: 'EUR',
                    itemOffered: { '@type': 'Service', name: 'Tuinontwerp upgrade', provider: { '@id': 'https://www.burobotanique.nl/#organization' } },
                  },
                  {
                    '@type': 'Offer',
                    name: 'Groener — Het Ontwerp',
                    description: 'Compleet tuinontwerp op maat.',
                    price: '425',
                    priceCurrency: 'EUR',
                    itemOffered: { '@type': 'Service', name: 'Tuinontwerp op maat', provider: { '@id': 'https://www.burobotanique.nl/#organization' } },
                  },
                  {
                    '@type': 'Offer',
                    name: 'Groenst — Het Totaalplan',
                    description: 'Full service ontwerp inclusief beplantingsplan en verlichtingsplan.',
                    price: '575',
                    priceCurrency: 'EUR',
                    itemOffered: { '@type': 'Service', name: 'Tuinontwerp totaalplan', provider: { '@id': 'https://www.burobotanique.nl/#organization' } },
                  },
                ],
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.burobotanique.nl/' },
                  { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://www.burobotanique.nl/diensten' },
                ],
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-hero-bg pt-32 md:pt-44 pb-20 md:pb-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <span className="font-script text-2xl md:text-4xl text-white/50 block mb-[-0.2em]">
            Onze diensten
          </span>
          <h1 className="font-display text-[10vw] md:text-[6vw] lg:text-[7vw] font-bold uppercase leading-[0.85] text-white tracking-tight mb-10 md:mb-14">
            Kies jouw<br />plan
          </h1>
          <p className="font-body text-base md:text-lg font-light text-white/80 max-w-xl leading-relaxed">
            Kies het plan dat bij jou past. Geen verrassingen achteraf, maar een
            plan dat precies aansluit op jouw wensen.
          </p>

          {/* Decoratief: blueprint-stijl coordinaten onderaan */}
          <div className="mt-16 md:mt-24 flex items-center gap-6 text-white/30">
            <div className="h-px flex-1 bg-white/20" />
            <span className="font-body text-[10px] uppercase tracking-[0.3em]">
              Drie pakketten
            </span>
            <div className="h-px flex-1 bg-white/20" />
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-section-pink px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
            style={{ gridTemplateRows: 'auto auto 1fr auto auto', display: 'grid' }}
          >
            {PACKAGES.map(({ step, name, subtitle, price, description, focus, idealFor }) => (
              <div
                key={name}
                className="relative bg-white/30 backdrop-blur-sm border border-text-dark/10 p-6 md:p-10 grid hover:bg-white/40 transition-colors duration-300"
                style={{ display: 'grid', gridTemplateRows: 'subgrid', gridRow: 'span 5' }}
              >
                {/* Step number — blueprint stijl, oranje */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 font-body text-[10px] uppercase tracking-[0.2em] text-logo-orange">
                  {step}
                </div>

                {/* Package name + price */}
                <div>
                  <span className="font-script text-xl text-text-dark/50 block mb-[-0.1em]">
                    {subtitle}
                  </span>
                  <h3 className="font-display text-4xl md:text-5xl font-bold uppercase text-text-dark mb-2">
                    {name}
                  </h3>
                  <p className="font-body text-sm font-medium text-text-dark/60">
                    {price}
                  </p>
                </div>

                {/* Description */}
                <p className="font-body text-sm md:text-base font-light text-text-dark/70 leading-relaxed pt-6">
                  {description}
                </p>

                {/* Spacer */}
                <div />

                {/* Focus */}
                <div className="pt-4 border-t border-text-dark/10">
                  <p className="font-body text-[10px] uppercase tracking-[0.2em] text-logo-orange mb-1">
                    Focus
                  </p>
                  <p className="font-body text-sm text-text-dark/80">
                    {focus}
                  </p>
                </div>

                {/* Ideaal voor */}
                <div className="pb-2">
                  <p className="font-body text-[10px] uppercase tracking-[0.2em] text-logo-orange mb-1">
                    Ideaal voor
                  </p>
                  <p className="font-body text-sm text-text-dark/80">
                    {idealFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plattegrond met scroll-reveal */}
      <DienstenPlattegrond />

      {/* Process — 3 stappen na de plattegrond */}
      <section className="bg-white px-6 md:px-10 pb-20 md:pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="font-script text-2xl md:text-4xl text-text-dark/50 block mb-[-0.2em]">
              Het proces
            </span>
            <h2 className="font-display text-[9vw] md:text-[5vw] font-bold uppercase leading-[0.9] text-text-dark tracking-tight">
              Drie stappen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {PROCESS_STEPS.map(({ number, title, description }) => (
              <div key={number} className="relative">
                {/* Hotspot dot — zelfde stijl als plattegrond */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-logo-orange rounded-full shadow-md" />
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-logo-orange">
                    Stap {number}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-text-dark mb-3">
                  {title}
                </h3>
                <p className="font-body text-sm md:text-base font-light text-text-dark/70 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-section-green px-6 md:px-10 py-20 md:py-32 relative overflow-hidden">
        {/* Decoratieve hotspots op de achtergrond */}
        <div className="absolute top-10 left-[10%] w-2 h-2 bg-logo-orange/40 rounded-full" aria-hidden="true" />
        <div className="absolute bottom-16 right-[15%] w-2 h-2 bg-logo-orange/40 rounded-full" aria-hidden="true" />
        <div className="absolute top-1/2 right-[8%] w-1.5 h-1.5 bg-logo-orange/30 rounded-full" aria-hidden="true" />

        <div className="max-w-5xl mx-auto text-center relative z-[1]">
          <span className="font-script text-2xl md:text-3xl text-text-dark/50 block mb-2">
            Klaar voor de volgende stap?
          </span>
          <p className="font-display text-2xl md:text-4xl font-bold text-text-dark leading-snug mb-10 max-w-2xl mx-auto">
            Twijfel je nog welk plan bij jou past? Laten we even bellen.
          </p>
          <Link
            to="/contact"
            className="inline-block font-body text-xs uppercase tracking-[0.2em] text-[#F5F0E8] bg-hero-bg px-10 py-4 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </>
  )
}
