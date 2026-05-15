import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'LandscapingBusiness', 'ProfessionalService'],
  '@id': 'https://www.burobotanique.nl/#organization',
  name: 'Buro Botanique',
  alternateName: 'Buro Botanique Tuinontwerp',
  description:
    'Tuinontwerp op maat, beplantingsplannen en lichtplannen voor een tuin die lééft. Persoonlijk ontwerp door Claire Wesselings vanuit Amsterdam.',
  slogan: 'Tuinontwerp met karakter',
  url: 'https://www.burobotanique.nl',
  logo: 'https://www.burobotanique.nl/images/logo.png',
  image: 'https://www.burobotanique.nl/images/logo.png',
  email: 'info@burobotanique.nl',
  telephone: '+31611132118',
  priceRange: '€€',
  founder: {
    '@type': 'Person',
    name: 'Claire Wesselings',
    jobTitle: 'Tuinontwerper',
    sameAs: 'https://www.linkedin.com/in/claire-wesselings-13b965298/',
  },
  founders: [
    {
      '@type': 'Person',
      name: 'Claire Wesselings',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Amsterdam',
    addressRegion: 'Noord-Holland',
    addressCountry: 'NL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.370216,
    longitude: 4.895168,
  },
  areaServed: [
    { '@type': 'City', name: 'Amsterdam' },
    { '@type': 'City', name: 'Haarlem' },
    { '@type': 'City', name: 'Utrecht' },
    { '@type': 'AdministrativeArea', name: 'Noord-Holland' },
    { '@type': 'Country', name: 'Nederland' },
  ],
  knowsAbout: [
    'Tuinontwerp',
    'Tuinarchitectuur',
    'Beplantingsplannen',
    'Lichtplannen',
    'Stadstuin ontwerp',
    'Dakterras ontwerp',
    'Landschapsarchitectuur',
  ],
  sameAs: [
    'https://www.instagram.com/buro.botanique/',
    'https://www.linkedin.com/in/claire-wesselings-13b965298/',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+31611132118',
    email: 'info@burobotanique.nl',
    contactType: 'customer service',
    areaServed: 'NL',
    availableLanguage: ['Dutch', 'English'],
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tuinontwerp pakketten',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Groen pakket — De Upgrade',
        price: '375',
        priceCurrency: 'EUR',
        itemOffered: {
          '@type': 'Service',
          name: 'Tuinontwerp op maat',
          description: 'Een ontwerp dat past bij jouw architectuur en levensstijl.',
        },
      },
      {
        '@type': 'Offer',
        name: 'Groener pakket — Het Ontwerp',
        price: '425',
        priceCurrency: 'EUR',
        itemOffered: {
          '@type': 'Service',
          name: 'Beplantingsplannen',
          description: 'De juiste plant op de juiste plek.',
        },
      },
      {
        '@type': 'Offer',
        name: 'Groenst pakket — Het Totaalplan',
        price: '575',
        priceCurrency: 'EUR',
        itemOffered: {
          '@type': 'Service',
          name: 'Lichtplannen',
          description: 'Verlichting die de gebruiksperiode van je tuin verlengt.',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '3',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Marieke de Vries' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Buro Botanique heeft onze tuin compleet getransformeerd. Van een saaie achtertuin naar een groene oase waar we elke dag van genieten.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Thomas Jansen' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Professioneel, creatief en met een duidelijke visie. Het beplantingsplan past precies bij ons huis en onze levensstijl.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sophie en Daan' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Wat begon als een klein advies werd een volledig ontwerp waar we enorm blij mee zijn. Vooral het lichtplan maakt echt het verschil in de avonduren.',
    },
  ],
}

const WEBSITE_DATA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.burobotanique.nl/#website',
  url: 'https://www.burobotanique.nl/',
  name: 'Buro Botanique',
  description: 'Tuinontwerp op maat in Amsterdam',
  publisher: { '@id': 'https://www.burobotanique.nl/#organization' },
  inLanguage: 'nl-NL',
}

function useAnalytics() {
  const location = useLocation()
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID

  // Load gtag.js once
  useEffect(() => {
    if (!gaId) return
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    document.head.appendChild(script)
    window.dataLayer = window.dataLayer || []
    window.gtag = function () { window.dataLayer.push(arguments) }
    window.gtag('js', new Date())
    window.gtag('config', gaId, { send_page_view: false })
  }, [gaId])

  // Track page views on route change
  useEffect(() => {
    if (window.gtag && gaId) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
        page_title: document.title,
      })
    }
  }, [location.pathname, gaId])
}

export default function Layout() {
  useAnalytics()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              { ...STRUCTURED_DATA, '@context': undefined },
              { ...WEBSITE_DATA, '@context': undefined },
            ].map((o) => Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined))),
          }),
        }}
      />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
