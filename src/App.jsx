import Navbar from './components/layout/Navbar'
import StickyCTA from './components/layout/StickyCTA'
import Hero from './components/sections/Hero'
import TrustBlock from './components/sections/TrustBlock'
import AppFormation from './components/sections/AppFormation'
import PersonalStory from './components/sections/PersonalStory'
import Becas from './components/sections/Becas'
import FAQs from './components/sections/FAQs'
import Closing from './components/sections/Closing'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBlock />
        <AppFormation />
        <PersonalStory />
        <Becas />
        <FAQs />
        <Closing />
      </main>
      <StickyCTA />
    </>
  )
}
