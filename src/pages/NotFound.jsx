import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'

export function Component() {
  return (
    <>
      <Head>
        <title>Pagina niet gevonden — Buro Botanique</title>
      </Head>

      <section className="min-h-screen bg-hero-bg flex flex-col items-center justify-center px-6 text-center">
        <span className="font-script text-3xl md:text-5xl text-white/50 block mb-[-0.2em]">
          Oeps
        </span>
        <h1 className="font-display text-[20vw] md:text-[12vw] font-bold uppercase leading-[0.85] text-white tracking-tight mb-8">
          404
        </h1>
        <p className="font-body text-base md:text-lg font-light text-white/70 mb-10 max-w-md">
          Deze pagina bestaat niet. Misschien is de link verouderd of heb je een typfout gemaakt.
        </p>
        <Link
          to="/"
          className="inline-block font-body text-xs uppercase tracking-[0.2em] text-hero-bg bg-[#F5F0E8] px-10 py-4 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          Terug naar home
        </Link>
      </section>
    </>
  )
}
