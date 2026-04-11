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

function usePageView() {
  const location = useLocation()

  useEffect(() => {
    if (window.gtag && window.__GA_ID__) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
        page_title: document.title,
      })
    }
  }, [location.pathname])
}

export default function Layout() {
  usePageView()

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
