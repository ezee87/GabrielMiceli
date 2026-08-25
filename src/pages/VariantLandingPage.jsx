import Navbar from '../components/layout/Navbar'
import VariantHero from '../components/variants/VariantHero'
import WhatsappSection from '../components/variants/WhatsappSection'
import BookingSection from '../components/variants/BookingSection'
import VariantSystemSection from '../components/variants/VariantSystemSection'
import VariantFinalCta from '../components/variants/VariantFinalCta'
import SectionDivider from '../components/variants/SectionDivider'
import InstitutionalLinkSection from '../components/variants/InstitutionalLinkSection'
import VariantFooter from '../components/variants/VariantFooter'
import TrustBlock from '../components/sections/TrustBlock'
import PersonalStory from '../components/sections/PersonalStory'
import Becas from '../components/sections/Becas'
import FAQs from '../components/sections/FAQs'
import { WHATSAPP_URL } from '../constants'

export default function VariantLandingPage({ variant }) {
  const isBooking = variant === 'B'
  const primaryHref = isBooking ? '#booking' : WHATSAPP_URL
  const primaryLabel = isBooking ? 'Agendar consulta de 15 min' : 'Quiero que me expliques mi beca'

  return (
    <div className="variant-landing dark min-h-screen bg-dk-bg text-dk-text">
      <Navbar brand="Gabriel Miceli" ctaLabel={primaryLabel} ctaHref={primaryHref} invertedAtTop mobileLogoOnly />
      <main>
        <VariantHero variant={variant} primaryHref={primaryHref} />
        <SectionDivider />
        <TrustBlock conversion ctaHref={primaryHref} ctaLabel={primaryLabel} hideCtaOnMobile />
        <SectionDivider />
        {isBooking ? <BookingSection /> : <WhatsappSection ctaHref={WHATSAPP_URL} />}
        <SectionDivider />
        <PersonalStory compact ctaHref={primaryHref} ctaLabel={primaryLabel} hideCtaOnMobile />
        <SectionDivider />
        <VariantSystemSection ctaHref={primaryHref} ctaLabel={primaryLabel} />
        <SectionDivider />
        <Becas
          variant={variant}
          title="Elegí tu beca de acceso"
          subtitle="Si no sabés cuál elegir, te ayudo a decidir según tu experiencia, tu capital y tus objetivos."
          hideCtasOnMobile
        />
        <SectionDivider />
        <VariantFinalCta variant={variant} ctaHref={primaryHref} />
        <SectionDivider />
        <InstitutionalLinkSection />
        <SectionDivider />
        <FAQs
          conversion
          ctaHref={primaryHref}
          ctaLabel={primaryLabel}
          microcopy={isBooking ? 'Una llamada breve, sin compromiso, para resolver tus dudas antes de decidir.' : undefined}
          hideCtaOnMobile
        />
      </main>
      <VariantFooter />
    </div>
  )
}
