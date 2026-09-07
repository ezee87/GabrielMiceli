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
import { WHATSAPP_URL, BOOKING_URL } from '../constants'
import CalendlyPopupProvider, { useCalendlyPopup } from '../context/CalendlyPopupContext'

export default function VariantLandingPage({ variant }) {
  return (
    <CalendlyPopupProvider>
      <VariantLandingContent variant={variant} />
    </CalendlyPopupProvider>
  )
}

function VariantLandingContent({ variant }) {
  const { openCalendly } = useCalendlyPopup()
  const isBooking = variant === 'B'
  const primaryHref = isBooking ? BOOKING_URL : WHATSAPP_URL
  const primaryLabel = isBooking ? 'Agendar consulta de 15 min' : 'Quiero que me expliques mi beca'
  const primaryOnClick = isBooking ? openCalendly : undefined

  return (
    <div className="variant-landing dark min-h-screen bg-dk-bg text-dk-text">
      <Navbar brand="Gabriel Miceli" ctaLabel={primaryLabel} ctaHref={primaryHref} ctaOnClick={primaryOnClick} invertedAtTop mobileLogoOnly />
      <main>
        <VariantHero variant={variant} primaryHref={primaryHref} primaryOnClick={primaryOnClick} />
        <SectionDivider />
        <TrustBlock conversion ctaHref={primaryHref} ctaLabel={primaryLabel} ctaOnClick={primaryOnClick} hideCtaOnMobile />
        <SectionDivider />
        {isBooking ? <BookingSection /> : <WhatsappSection ctaHref={WHATSAPP_URL} />}
        <SectionDivider />
        <PersonalStory compact ctaHref={primaryHref} ctaLabel={primaryLabel} ctaOnClick={primaryOnClick} hideCtaOnMobile />
        <SectionDivider />
        <VariantSystemSection ctaHref={primaryHref} ctaLabel={primaryLabel} ctaOnClick={primaryOnClick} />
        <SectionDivider />
        <Becas
          variant={variant}
          title="Elegí tu beca de acceso"
          subtitle="Si no sabés cuál elegir, te ayudo a decidir según tu experiencia, tu capital y tus objetivos."
          ctaOnClick={primaryOnClick}
          hideCtasOnMobile
        />
        <SectionDivider />
        <VariantFinalCta variant={variant} ctaHref={primaryHref} ctaOnClick={primaryOnClick} />
        <SectionDivider />
        <InstitutionalLinkSection />
        <SectionDivider />
        <FAQs
          conversion
          ctaHref={primaryHref}
          ctaLabel={primaryLabel}
          ctaOnClick={primaryOnClick}
          microcopy={isBooking ? 'Una llamada breve, sin compromiso, para resolver tus dudas antes de decidir.' : undefined}
          hideCtaOnMobile
        />
      </main>
      <VariantFooter />
    </div>
  )
}
