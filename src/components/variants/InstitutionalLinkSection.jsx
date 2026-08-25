import CTAButton from '../ui/CTAButton'
import SectionEyebrow from '../ui/SectionEyebrow'
import ScrollReveal from '../ui/ScrollReveal'

export default function InstitutionalLinkSection() {
  return (
    <section className="bg-dk-bg px-5 py-10 lg:py-12">
      <ScrollReveal>
        <div className="mx-auto grid max-w-4xl items-center gap-6 rounded-3xl border border-white/10 bg-white/[0.035] px-6 py-7 sm:px-8 lg:grid-cols-[1fr_auto] lg:py-8">
          <div>
            <SectionEyebrow light>¿Querés ver más información?</SectionEyebrow>
            <h2 className="mb-2 font-display text-2xl font-extrabold text-dk-text sm:text-[1.75rem]">También podés conocer la página completa</h2>
            <p className="max-w-2xl text-sm leading-relaxed text-dk-text2">Si todavía querés revisar más detalles sobre mi historia, la app, las becas y cómo funciona Revolution, podés ir a la página principal antes de decidir.</p>
          </div>
          <CTAButton href="/" variant="secondary-light" size="sm">Ver página principal</CTAButton>
        </div>
      </ScrollReveal>
    </section>
  )
}
