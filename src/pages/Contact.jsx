import { Head } from 'vite-react-ssg'
import { useState } from 'react'

export function Component() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target

    // Fallback: als geen Formspree ID is ingesteld, open mailto met form data
    if (!formspreeId) {
      const data = new FormData(form)
      const subject = encodeURIComponent('Aanvraag via website van ' + (data.get('name') || ''))
      const body = encodeURIComponent(
        `Naam: ${data.get('name') || ''}\n` +
        `E-mail: ${data.get('email') || ''}\n` +
        `Telefoon: ${data.get('phone') || ''}\n\n` +
        `Bericht:\n${data.get('message') || ''}`
      )
      window.location.href = `mailto:info@burobotanique.nl?subject=${subject}&body=${body}`
      return
    }

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          setSubmitted(true)
          form.reset()
        } else {
          setError(true)
        }
      })
      .catch(() => setError(true))
  }

  return (
    <>
      <Head>
        <title>Contact | Buro Botanique | Tuinontwerp Amsterdam</title>
        <meta
          name="description"
          content="Neem contact op voor een vrijblijvend kennismakingsgesprek van 15 minuten. Bel of mail Buro Botanique voor jouw tuinontwerp in Amsterdam."
        />
        <link rel="canonical" href="https://www.burobotanique.nl/contact" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Buro Botanique" />
        <meta property="og:title" content="Contact | Buro Botanique" />
        <meta property="og:description" content="Neem contact op voor een vrijblijvend kennismakingsgesprek van 15 minuten." />
        <meta property="og:url" content="https://www.burobotanique.nl/contact" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:image" content="https://www.burobotanique.nl/images/logo.png" />

        {/* Twitter cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Buro Botanique" />
        <meta name="twitter:description" content="Neem contact op voor een vrijblijvend kennismakingsgesprek." />
        <meta name="twitter:image" content="https://www.burobotanique.nl/images/logo.png" />

      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'ContactPage',
                name: 'Contact Buro Botanique',
                description: 'Neem contact op met Buro Botanique voor tuinontwerp in Amsterdam.',
                url: 'https://www.burobotanique.nl/contact',
                mainEntity: { '@id': 'https://www.burobotanique.nl/#organization' },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.burobotanique.nl/' },
                  { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.burobotanique.nl/contact' },
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
            Neem contact op
          </span>
          <h1 className="font-display text-[10vw] md:text-[6vw] lg:text-[7vw] font-bold uppercase leading-[0.85] text-white tracking-tight mb-10 md:mb-14">
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
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
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
                  href="mailto:info@burobotanique.nl"
                  className="font-body text-base text-text-dark hover:text-text-dark/60 transition-colors"
                >
                  info@burobotanique.nl
                </a>
              </div>

              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-text-dark/40 mb-1">
                  Telefoon
                </p>
                <a
                  href="tel:+31611132118"
                  className="font-body text-base text-text-dark hover:text-text-dark/60 transition-colors"
                >
                  +31 6 11132118
                </a>
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
                action={formspreeId ? `https://formspree.io/f/${formspreeId}` : 'mailto:info@burobotanique.nl'}
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {error && (
                  <div className="border border-red-500/30 bg-red-50/50 p-4 text-sm font-body text-text-dark">
                    Er ging iets mis bij het versturen. Mail ons direct via{' '}
                    <a href="mailto:info@burobotanique.nl" className="underline">
                      info@burobotanique.nl
                    </a>
                    .
                  </div>
                )}
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

                {/* Honeypot tegen spam — onzichtbaar voor mensen */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex="-1"
                  autoComplete="off"
                  className="absolute -left-[9999px] opacity-0 pointer-events-none"
                  aria-hidden="true"
                />

                <button
                  type="submit"
                  className="inline-block font-body text-xs uppercase tracking-[0.2em] text-[#F5F0E8] bg-hero-bg px-10 py-4 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 mt-4"
                >
                  Verstuur
                </button>

                {error && (
                  <div className="mt-4 p-4 border border-red-400/30 bg-red-50/50 rounded-sm">
                    <p className="font-body text-sm text-text-dark/80">
                      Er ging iets mis. Stuur je bericht direct naar{' '}
                      <a
                        href="mailto:info@burobotanique.nl"
                        className="underline font-medium"
                      >
                        info@burobotanique.nl
                      </a>
                      {' '}of bel ons op{' '}
                      <a href="tel:+31611132118" className="underline font-medium">
                        +31 6 11132118
                      </a>
                      .
                    </p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
