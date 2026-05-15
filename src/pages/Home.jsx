import { Head } from 'vite-react-ssg'
import HomeHero from '../components/sections/HomeHero'
import HomeServices from '../components/sections/HomeServices'
import HomePortfolio from '../components/sections/HomePortfolio'
import HomeFaq from '../components/sections/HomeFaq'
import HomeReviews from '../components/sections/HomeReviews'
import MarqueeTicker from '../components/ui/MarqueeTicker'

const TITLE = 'Buro Botanique | Tuinontwerp op maat in Amsterdam'
const DESCRIPTION = 'Tuinontwerp, beplantingsplannen en lichtplannen voor een tuin die lééft. Persoonlijk ontwerp door Claire Wesselings vanuit Amsterdam.'
const URL = 'https://www.burobotanique.nl/'
const IMAGE = 'https://www.burobotanique.nl/images/logo.png'

export function Component() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Buro Botanique" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={URL} />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:image" content={IMAGE} />
        <meta property="og:image:alt" content="Buro Botanique logo" />

        {/* Twitter cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE} />
      </Head>
      <HomeHero />
      <HomeServices />
      <HomePortfolio />
      <MarqueeTicker />
      <HomeReviews />
      <HomeFaq />
    </>
  )
}
