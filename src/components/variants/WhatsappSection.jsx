import CTAButton from '../ui/CTAButton'
import SectionEyebrow from '../ui/SectionEyebrow'
import ScrollReveal from '../ui/ScrollReveal'

export default function WhatsappSection({ ctaHref }) {
  return (
    <section className="relative overflow-hidden bg-dk-bg py-12 lg:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,183,181,0.12),transparent_58%)]" aria-hidden="true" />
      <div className="container relative mx-auto max-w-5xl px-6 lg:px-10">
        <ScrollReveal>
          <div className="grain-overlay mx-auto max-w-4xl overflow-hidden rounded-4xl border border-turquoise/30 bg-dk-card px-6 py-9 text-center shadow-[0_0_70px_-22px_rgba(24,183,181,0.65)] sm:px-10 lg:px-14 lg:py-11">
            <SectionEyebrow light>Hablemos antes de que decidas</SectionEyebrow>
            <h2 className="mx-auto mb-4 max-w-3xl text-balance font-display text-3xl font-extrabold leading-tight tracking-tight text-dk-text sm:text-4xl lg:text-[2.5rem]">
              Escribime y vemos qué beca tiene sentido para vos
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-dk-text2 md:mb-8 lg:text-lg">
              Te explico cómo funciona Revolution, qué incluye cada acceso y cuál puede convenirte según tu experiencia, tu capital y tu objetivo.
            </p>
            <CTAButton href={ctaHref} size="large">Quiero que me expliques mi beca</CTAButton>
            <p className="mt-5 text-sm font-medium text-dk-text2 md:mt-3">Primero entendés. Después decidís.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
