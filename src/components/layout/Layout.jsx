import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'LandscapingBusiness'],
  name: 'Buro Botanique',
  description:
    'Tuinontwerp op maat, beplantingsplannen en lichtplannen voor een tuin die lééft.',
  url: 'https://www.burobotanique.nl',
  email: 'claire.wesselings@gmail.com',
  founder: {
    '@type': 'Person',
    name: 'Claire Wesselings',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Amsterdam',
    addressCountry: 'NL',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Nederland',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tuinontwerp pakketten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tuinontwerp op maat',
          description:
            'Een ontwerp dat past bij jouw architectuur en levensstijl.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Beplantingsplannen',
          description: 'De juiste plant op de juiste plek.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Lichtplannen',
          description:
            'Verlichting die de gebruiksperiode van je tuin verlengt.',
        },
      },
    ],
  },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
