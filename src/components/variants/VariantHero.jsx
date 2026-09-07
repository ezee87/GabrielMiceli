import { VIDEO_EMBED_URL } from '../../constants'
import CTAButton from '../ui/CTAButton'
import SectionEyebrow from '../ui/SectionEyebrow'
import ScrollReveal from '../ui/ScrollReveal'

const copyByVariant = {
  A: {
    cta: 'Quiero que me expliques mi beca',
  },
  B: {
    cta: 'Agendar consulta de 15 min',
  },
}

export default function VariantHero({ variant, primaryHref, primaryOnClick }) {
  const copy = copyByVariant[variant]

  return (
    <section id="hero" className="grain-overlay relative flex min-h-[620px] items-center overflow-hidden bg-dk-bg pb-14 pt-24 md:pb-9 md:pt-20 lg:min-h-[calc(100svh-3.5rem)] lg:py-12">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: 'radial-gradient(ellipse 55% 50% at 50% 58%, rgba(24,183,181,0.16), transparent 72%)' }} />
      <div className="container relative mx-auto max-w-6xl px-5 text-center sm:px-6 lg:px-10">
        <ScrollReveal y={18}>
          <SectionEyebrow light>Becas disponibles para ingresar a Revolution</SectionEyebrow>
          <h1 className="mx-auto mb-3 max-w-[28ch] text-balance font-display text-[clamp(1.9rem,2.5vw,2.35rem)] font-extrabold leading-[1.08] tracking-[-0.025em] text-white">
            Aprendé trading desde cero sin pagar un curso tradicional
          </h1>
          <p className="balanced-text copy-wide mb-4 text-sm leading-[1.6] text-white/70 sm:text-[15px]">
            Entrás a Revolution con una beca de acceso, formación por niveles y comunidad, para entender cómo empezar con claridad.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08} y={20}>
          <div className="mx-auto my-7 aspect-video w-full max-w-[31rem] overflow-hidden rounded-3xl border border-white/15 bg-deep-teal shadow-[0_18px_70px_-22px_rgba(24,183,181,0.65)] md:my-0 xl:max-w-[33rem]">
            {VIDEO_EMBED_URL ? (
              <iframe
                src={VIDEO_EMBED_URL}
                title="Gabriel explica el sistema de becas"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center px-6">
                <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-turquoise/40 bg-turquoise/15 pl-1 text-xl text-turquoise">▶</span>
                <p className="font-display text-lg font-bold text-white">Video de Gabriel</p>
                <p className="mt-1 text-xs text-white/45">Próximamente vas a poder verlo acá.</p>
              </div>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.14} y={14}>
          <div className="mt-3 flex flex-col items-center gap-5 md:gap-2.5">
            <p className="text-sm font-semibold leading-relaxed text-turquoise sm:text-base">
              Primero entendés cómo funciona.<br />Después decidís si querés avanzar.
            </p>
            <CTAButton href={primaryHref} onClick={primaryOnClick} variant="primary-light" size="large">{copy.cta}</CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
