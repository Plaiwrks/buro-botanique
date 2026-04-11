import { Head } from 'vite-react-ssg'
import { useState } from 'react'

export function Component() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    }).then((res) => {
      if (res.ok) {
        setSubmitted(true)
        form.reset()
      }
    })
  }

  return (
    <>
      <Head>
        <title>Contact — Buro Botanique</title>
        <meta
          name="description"
          content="Neem contact op voor een vrijblijvend kennismakingsgesprek van 15 minuten."
        />
        <meta property="og:title" content="Contact — Buro Botanique" />
        <meta property="og:description" content="Neem contact op voor een vrijblijvend kennismakingsgesprek van 15 minuten." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.burobotanique.nl/contact" />
        <meta property="og:locale" content="nl_NL" />
      </Head>

      {/* Hero */}
      <section className="bg-hero-bg pt-32 md:pt-44 pb-20 md:pb-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <span className="font-script text-2xl md:text-4xl text-white/50 block mb-[-0.2em]">
            Neem contact op
          </span>
          <h1 className="font-display text-[12vw] md:text-[7vw] font-bold uppercase leading-[0.85] text-white tracking-tight mb-10 md:mb-14">
            Laten we<br />kennismaken
          </h1>
          <p className="font-body text-base md:text-lg font-light text-white/80 max-w-xl leading-relaxed">
            In een vrijblijvend gesprek van 15 minuten kun je al je vragen
            stellen en ontdekken of wij de juiste partner zijn voor jouw
            project.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-section-pink px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {/* Contact details */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark mb-8">
              Contactgegevens
            </h2>

            <div className="space-y-6">
              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-text-dark/40 mb-1">
                  E-mail
                </p>
                <a
                  href="mailto:claire.wesselings@gmail.com"
                  className="font-body text-base text-text-dark hover:text-text-dark/60 transition-colors"
                >
                  claire.wesselings@gmail.com
                </a>
              </div>

              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-text-dark/40 mb-1">
                  Telefoon
                </p>
                <p className="font-body text-base text-text-dark/50 italic">
                  Nog in te vullen
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="border border-text-dark/10 p-10 text-center">
                <h3 className="font-display text-2xl font-bold text-text-dark mb-3">
                  Bedankt!
                </h3>
                <p className="font-body text-sm text-text-dark/70">
                  We nemen zo snel mogelijk contact met je op.
                </p>
              </div>
            ) : (
              <form
                action={`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`}
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block font-body text-[10px] uppercase tracking-[0.2em] text-text-dark/50 mb-2"
                  >
                    Naam
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-text-dark/40 pb-2 font-body text-base text-text-dark focus:border-text-dark outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-body text-[10px] uppercase tracking-[0.2em] text-text-dark/50 mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-text-dark/40 pb-2 font-body text-base text-text-dark focus:border-text-dark outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-body text-[10px] uppercase tracking-[0.2em] text-text-dark/50 mb-2"
                  >
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-transparent border-b border-text-dark/40 pb-2 font-body text-base text-text-dark focus:border-text-dark outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-body text-[10px] uppercase tracking-[0.2em] text-text-dark/50 mb-2"
                  >
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full bg-transparent border-b border-text-dark/40 pb-2 font-body text-base text-text-dark focus:border-text-dark outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-block font-body text-xs uppercase tracking-[0.2em] text-text-dark border border-text-dark/30 px-8 py-4 hover:bg-text-dark hover:text-white transition-all duration-300 mt-4"
                >
                  Verstuur
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
