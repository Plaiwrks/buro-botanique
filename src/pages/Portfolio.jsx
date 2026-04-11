import { Head } from 'vite-react-ssg'

const IMAGES = Array.from({ length: 33 }, (_, i) => ({
  id: i + 1,
  src: `/images/portfolio/project-${String(i + 1).padStart(2, '0')}.jpeg`,
}))

export function Component() {
  return (
    <>
      <Head>
        <title>Portfolio — Buro Botanique</title>
        <meta
          name="description"
          content="Bekijk onze tuinprojecten en laat je inspireren."
        />
        <meta property="og:title" content="Portfolio — Buro Botanique" />
        <meta property="og:description" content="Bekijk onze tuinprojecten en laat je inspireren." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.burobotanique.nl/portfolio" />
        <meta property="og:locale" content="nl_NL" />
      </Head>

      {/* Hero */}
      <section className="bg-hero-bg pt-32 md:pt-44 pb-20 md:pb-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <span className="font-script text-2xl md:text-4xl text-white/50 block mb-[-0.2em]">
            Ons werk
          </span>
          <h1 className="font-display text-[12vw] md:text-[7vw] font-bold uppercase leading-[0.85] text-white tracking-tight mb-10 md:mb-14">
            Portfolio
          </h1>
          <p className="font-body text-base md:text-lg font-light text-white/80 max-w-xl leading-relaxed">
            Jouw visie, ons ontwerp. Elke tuin en elke klant is uniek; dat is
            altijd het vertrekpunt. Wij luisteren naar de wensen en vertalen
            deze naar de ultieme buitenruimte.
          </p>
        </div>
      </section>

      {/* Photo grid */}
      <section className="bg-section-pink px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {IMAGES.map(({ id, src }) => (
              <div key={id} className="aspect-[4/5] overflow-hidden">
                <img
                  src={src}
                  alt={`Tuinproject ${id} door Buro Botanique`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
