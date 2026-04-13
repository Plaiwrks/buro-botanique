import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function HomeHero() {
  const videoRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    function handleCanPlay() {
      setLoaded(true)
    }

    // Naadloze loop: spring 0.3s voor het einde terug naar begin
    function handleTimeUpdate() {
      if (video.duration && video.currentTime >= video.duration - 0.3) {
        video.currentTime = 0
      }
    }

    // Start fade-in zodra eerste frame beschikbaar is
    if (video.readyState >= 2) handleCanPlay()
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [])

  return (
    <section className="relative min-h-screen bg-hero-bg overflow-hidden flex flex-col">
      {/* Hero video — volledige breedte achter alle tekst */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`w-full h-full object-cover transition-opacity duration-[2000ms] ${
            loaded ? 'opacity-40' : 'opacity-0'
          }`}
        >
          <source src="/images/hero/hero-v4.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Centered title block */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-24 md:pt-20">
        {/* Script accent — gecentreerd boven BOTANIQUE */}
        <span className="font-script text-4xl md:text-6xl lg:text-7xl text-white block mb-[-0.2em]">
          Buro
        </span>

        {/* Enormous heading — uitgestrekt over volledige breedte, mag buiten scherm vallen */}
        <h1 className="font-display text-[16vw] md:text-[14vw] lg:text-[18vw] font-bold uppercase leading-[0.82] text-white tracking-[0.02em] text-center">
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
