import { Head } from 'vite-react-ssg'
import { useState } from 'react'

const FAQS = [
  {
    question: 'Wat doet een tuinontwerper?',
    answer:
      'Een tuinontwerper maakt een ontwerp op maat voor jouw buitenruimte. Bij Buro Botanique kijken we naar je architectuur, levensstijl en wensen en vertalen we dat naar een compleet tuinontwerp — inclusief beplanting en eventueel verlichting.',
  },
  {
    question: 'Wat kost tuinontwerp op maat?',
    answer:
      'De kosten hangen af van het pakket dat je kiest. Met het Groen-pakket focus je op één onderdeel van je tuin, met Groener krijg je een compleet ontwerp, en met Groenst een totaalplan inclusief beplantings- en lichtplan. Neem contact op voor een vrijblijvend gesprek van 15 minuten.',
  },
  {
    question: 'Hoe lang duurt een tuinontwerp traject?',
    answer:
      'Dit verschilt per project en pakket. Een upgrade (Groen) is sneller gerealiseerd dan een volledig totaalplan (Groenst). In het kennismakingsgesprek bespreken we de planning die past bij jouw situatie.',
  },
  {
    question: 'Werk je ook met kleine tuinen?',
    answer:
      'Ja, elke tuin en elke klant is uniek — dat is altijd het vertrekpunt. Of je nu een stadstuin, dakterras of grotere buitenruimte hebt, we maken een ontwerp dat past bij jouw ruimte en wensen.',
  },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
}

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="bg-white px-6 md:px-10 py-12 md:py-16">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
        />
      </Head>

      <div className="max-w-3xl mx-auto">
        <span className="font-script text-2xl md:text-4xl text-text-dark/40 block mb-[-0.2em]">
          Veelgestelde vragen
        </span>
        <h2 className="font-display text-[10vw] md:text-[4vw] font-bold uppercase leading-[0.9] text-text-dark tracking-tight mb-8 md:mb-10">
          FAQ
        </h2>

        <div className="divide-y divide-text-dark/10">
          {FAQS.map(({ question, answer }, i) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-display text-lg md:text-xl font-bold text-text-dark pr-8">
                  {question}
                </span>
                <span className="font-body text-2xl text-text-dark/30 shrink-0">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-60 pb-4' : 'max-h-0'
                }`}
              >
                <p className="font-body text-sm md:text-base font-light text-text-dark/70 leading-relaxed">
                  {answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
