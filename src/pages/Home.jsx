import { Head } from 'vite-react-ssg'
import HomeHero from '../components/sections/HomeHero'
import HomeServices from '../components/sections/HomeServices'
import HomePortfolio from '../components/sections/HomePortfolio'

export function Component() {
  return (
    <>
      <Head>
        <title>Buro Botanique — Tuinontwerp op maat</title>
        <meta
          name="description"
          content="Tuinontwerp, beplantingsplannen en lichtplannen voor een tuin die lééft."
        />
      </Head>
      <HomeHero />
      <HomeServices />
      <HomePortfolio />
    </>
  )
}
