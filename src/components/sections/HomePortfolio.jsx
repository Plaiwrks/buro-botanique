import { Link } from 'react-router-dom'

export default function HomePortfolio() {
  return (
    <section className="bg-section-green py-20 md:py-32 relative overflow-hidden">
      {/* Hortensia video achtergrond — mix-blend-mode: multiply */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover mix-blend-multiply"
        >
          <source src="/images/hortensia.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Heading — boven de video */}
      <div className="relative z-[3] px-6 md:px-10 mb-10 md:mb-14">
        <span className="font-script text-2xl md:text-4xl text-white/60 block mb-[-0.2em]">
          Ons werk
        </span>
        <h2 className="font-display text-[11vw] md:text-[8vw] lg:text-[10vw] font-bold uppercase leading-[0.85] text-white tracking-tight">
          Ons Portfolio
        </h2>
      </div>

      {/* CTA */}
      <div className="relative z-[3] px-6 md:px-10">
        <Link
          to="/portfolio"
          className="inline-block font-body text-xs uppercase tracking-[0.2em] text-[#F5F0E8] bg-hero-bg px-10 py-4 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          Bekijk alle projecten
        </Link>
      </div>
    </section>
  )
}
