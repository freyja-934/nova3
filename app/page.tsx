import About from './components/About'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Clients />
      <Projects />
      <Contact />
    </>
  )
}
