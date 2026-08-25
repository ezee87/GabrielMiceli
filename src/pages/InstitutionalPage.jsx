import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import TrustBlock from '../components/sections/TrustBlock'
import RevolutionIntro from '../components/sections/RevolutionIntro'
import AppFormation from '../components/sections/AppFormation'
import PersonalStory from '../components/sections/PersonalStory'
import Becas from '../components/sections/Becas'
import FAQs from '../components/sections/FAQs'
import Closing from '../components/sections/Closing'
import Footer from '../components/layout/Footer'

export default function InstitutionalPage() {
  const navItems = [
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'App', href: '#app-revolution' },
    { label: 'Becas', href: '#becas' },
    { label: 'Dudas', href: '#faqs' },
  ]

  return (
    <>
      <Navbar navItems={navItems} />
      <main>
        <Hero />
        <TrustBlock showCta={false} />
        <RevolutionIntro />
        <AppFormation />
        <Becas variant="institutional" />
        <PersonalStory showCta={false} showDivider />
        <Closing />
        <FAQs showCta={false} />
      </main>
      <Footer />
    </>
  )
}
