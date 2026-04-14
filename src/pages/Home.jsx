import { Head } from 'vite-react-ssg'
import HomeHero from '../components/sections/HomeHero'
import HomeServices from '../components/sections/HomeServices'
import HomePortfolio from '../components/sections/HomePortfolio'
import HomeFaq from '../components/sections/HomeFaq'
import HomeReviews from '../components/sections/HomeReviews'
import MarqueeTicker from '../components/ui/MarqueeTicker'

export function Component() {
  return (
    <>
      <Head>
        <title>Buro Botanique — Tuinontwerp op maat</title>
        <meta
          name="description"
          content="Tuinontwerp, beplantingsplannen en lichtplannen voor een tuin die lééft."
        />
        <meta property="og:title" content="Buro Botanique — Tuinontwerp op maat" />
        <meta property="og:description" content="Tuinontwerp, beplantingsplannen en lichtplannen voor een tuin die lééft." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.burobotanique.nl/" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:image" content="https://www.burobotanique.nl/images/logo.png" />
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
