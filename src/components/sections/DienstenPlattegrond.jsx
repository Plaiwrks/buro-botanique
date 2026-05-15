import { useRef, useEffect, useState } from 'react'

const FEATURES = [
  { label: 'Overkapping met sedumdak', top: '8%', left: '15%' },
  { label: 'Terras op maat', top: '15%', left: '70%' },
  { label: 'Pergola met klimplanten', top: '32%', left: '20%' },
  { label: 'Staptegels door het groen', top: '42%', left: '55%' },
  { label: 'Plantenpot als accent', top: '60%', left: '75%' },
  { label: 'Zijpad met klinkers', top: '78%', left: '65%' },
]

export default function DienstenPlattegrond() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    function handleScroll() {
      const rect = el.getBoundingClientRect()
      const windowH = window.innerHeight
      // Progress: 0 als sectie net in beeld komt, 1 als sectie net verdwijnt
      const total = rect.height + windowH
      const scrolled = windowH - rect.top
      const p = Math.max(0, Math.min(scrolled / total, 1))
      setProgress(p)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-white px-6 md:px-10 py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-12 md:mb-16">
          <span className="font-script text-2xl md:text-4xl text-text-dark/50 block mb-[-0.2em]">
            Zo werken wij
          </span>
          <h2 className="font-display text-[9vw] md:text-[5vw] font-bold uppercase leading-[0.9] text-text-dark tracking-tight mb-6">
            Van schets<br />tot tuin
          </h2>
          <p className="font-body text-base md:text-lg font-light text-text-dark/70 max-w-xl mx-auto leading-relaxed">
            Elke tuin start met een plattegrond. Hieronder een voorbeeld van een
            ontwerp. Scrol om alle elementen te ontdekken.
          </p>
        </div>

        {/* Plattegrond met scroll-reveal */}
        <div className="relative">
          {/* Plattegrond — fade in en scale up bij scrollen */}
          <div
            className="relative transition-all duration-700 ease-out"
            style={{
              opacity: Math.min(progress * 2.5, 1),
              transform: `scale(${0.9 + Math.min(progress * 0.3, 0.1)})`,
            }}
          >
            <img
              src="/images/plattegrond.jpg"
              alt="Voorbeeld plattegrond van een tuinontwerp door Buro Botanique"
              className="w-full h-auto rounded-sm shadow-2xl"
            />

            {/* Hotspots / labels die verschijnen bij scrollen */}
            {FEATURES.map(({ label, top, left }, i) => {
              const featureProgress = 0.25 + (i / FEATURES.length) * 0.5
              const isVisible = progress >= featureProgress
              return (
                <div
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
                  style={{
                    top,
                    left,
                    opacity: isVisible ? 1 : 0,
                    transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0.5})`,
                  }}
                >
                  {/* Pulserende dot */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-logo-orange rounded-full animate-ping opacity-75" />
                    <div className="relative w-3 h-3 md:w-4 md:h-4 bg-logo-orange rounded-full shadow-lg" />
                  </div>
                  {/* Label */}
                  <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white px-3 py-1.5 rounded-full shadow-md">
                    <span className="font-body text-[10px] md:text-xs uppercase tracking-[0.15em] text-text-dark">
                      {label}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
