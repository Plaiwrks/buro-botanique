const REVIEWS = [
  {
    text: 'Buro Botanique heeft onze tuin compleet getransformeerd. Van een saaie achtertuin naar een groene oase waar we elke dag van genieten. De aandacht voor detail en het gevoel voor sfeer is ongeëvenaard.',
    name: 'Marieke de Vries',
    location: 'Haarlem',
  },
  {
    text: 'Professioneel, creatief en met een duidelijke visie. Het beplantingsplan past precies bij ons huis en onze levensstijl. We krijgen er continu complimenten over van vrienden en buren.',
    name: 'Thomas Jansen',
    location: 'Amsterdam',
  },
  {
    text: 'Wat begon als een klein advies werd een volledig ontwerp waar we enorm blij mee zijn. Vooral het lichtplan maakt echt het verschil in de avonduren. Een aanrader voor iedereen die zijn tuin serieus neemt.',
    name: 'Sophie en Daan',
    location: 'Utrecht',
  },
]

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className="w-4 h-4 text-hero-bg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function HomeReviews() {
  return (
    <section className="px-6 md:px-10 py-16 md:py-24" style={{ backgroundColor: '#EDD0B5' }}>
      <div className="max-w-5xl mx-auto">
        {/* Titel */}
        <div className="text-center mb-14 md:mb-18">
          <span className="font-script text-2xl md:text-4xl text-text-dark/50 block mb-[-0.2em]">
            Wat klanten zeggen
          </span>
          <h2 className="font-display text-[9vw] md:text-[4vw] font-bold uppercase leading-[0.9] text-text-dark tracking-tight">
            Reviews
          </h2>
        </div>

        {/* Review grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {REVIEWS.map(({ text, name, location }) => (
            <div
              key={name}
              className="bg-[#FDFAF5] rounded-2xl p-8 shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
            >
              <Stars />
              <p className="font-display text-base md:text-lg text-text-dark/80 leading-relaxed mb-6 italic">
                &ldquo;{text}&rdquo;
              </p>
              <div>
                <p className="font-body text-sm font-medium text-text-dark">
                  {name}
                </p>
                <p className="font-body text-xs text-text-dark/50">
                  {location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google link */}
        <div className="text-center">
          <a
            href="#google-reviews"
            className="font-body text-xs uppercase tracking-[0.15em] text-text-dark/60 hover:text-text-dark transition-colors underline underline-offset-4"
          >
            Lees meer reviews op Google
          </a>
        </div>
      </div>
    </section>
  )
}
