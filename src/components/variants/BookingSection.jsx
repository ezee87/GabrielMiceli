import { BOOKING_URL } from '../../constants'
import { useCalendlyPopup } from '../../context/CalendlyPopupContext'
import CTAButton from '../ui/CTAButton'
import SectionEyebrow from '../ui/SectionEyebrow'
import ScrollReveal from '../ui/ScrollReveal'

export default function BookingSection() {
  const { openCalendly } = useCalendlyPopup()

  return (
    <section id="booking" className="booking-section relative overflow-hidden bg-dk-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,183,181,0.12),transparent_58%)]" aria-hidden="true" />
        <div className="container relative mx-auto px-5 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto mb-5 max-w-2xl text-center">
              <SectionEyebrow light>Hablemos antes de que decidas</SectionEyebrow>
              <h2 className="section-title mb-2 text-balance font-display text-[clamp(1.75rem,2.5vw,2.25rem)] font-extrabold leading-tight tracking-tight text-dk-text">Agendá una consulta de 15 minutos</h2>
              <p className="section-copy balanced-text copy-narrow text-[15px] leading-relaxed text-dk-text2">Te explico cómo funciona el acceso, resolvemos tus dudas y vemos qué beca tiene sentido para vos.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="text-center">
              <div className="mb-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                {['15 minutos', 'Online', 'Sin compromiso'].map((item) => (
                  <div key={item} className="inline-flex items-center gap-2 rounded-full border border-turquoise/25 bg-white/[0.035] px-4 py-2 text-sm font-semibold text-dk-text shadow-[0_0_18px_-12px_rgba(24,183,181,0.65)]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-turquoise shadow-[0_0_8px_rgba(24,183,181,0.8)]" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
              <CTAButton href={BOOKING_URL} onClick={openCalendly} size="large" className="shadow-[0_0_30px_rgba(24,183,181,0.24)]">
                Agendar consulta de 15 min
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
  )
}
