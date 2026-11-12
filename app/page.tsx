import Contact from './components/Contact'
import Engagements from './components/Engagements'
import Faq from './components/Faq'
import Hero from './components/Hero'
import Process from './components/Process'
import Services from './components/Services'
import TechStrip from './components/TechStrip'

export default function Home() {
  return (
    <>
      <Hero />
      <TechStrip />
      <Services />
      <Engagements />
      <Process />
      <Faq />
      <Contact />
    </>
  )
}
