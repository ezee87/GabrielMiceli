import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import SectionEyebrow from '../ui/SectionEyebrow'
import CTAButton from '../ui/CTAButton'
import ScrollReveal from '../ui/ScrollReveal'
import { WHATSAPP_GENERAL_QUESTION_URL } from '../../constants'

// Imagen requerida: /public/images/gabriel-laptop-cancun.jpg

export default function PersonalStory({ compact = false, ctaHref = WHATSAPP_GENERAL_QUESTION_URL, ctaLabel = 'Quiero que me expliques', showCta = true, showDivider = false, hideCtaOnMobile = false }) {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // Parallax solo en desktop y con prefers-reduced-motion: no-preference
      mm.add(
        '(prefers-reduced-motion: no-preference) and (min-width: 1024px)',
        () => {
          gsap.to('.story-photo', {
            yPercent: -8,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          })
        },
      )
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className={`bg-ocean dark:bg-dk-surface grain-overlay overflow-hidden ${compact ? 'py-12 lg:py-16' : showDivider ? 'pt-16 pb-0 lg:pt-20 lg:pb-0' : 'py-16 lg:py-20'}`}
    >
      <div className="container mx-auto px-6 lg:px-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Columna texto */}
          <div>
            <ScrollReveal>
              <SectionEyebrow light>Mi camino</SectionEyebrow>
              <h2 className="font-display font-extrabold text-white text-balance leading-tight tracking-tight text-3xl sm:text-4xl lg:text-[2.5rem] mb-6">
                Yo también empecé con dudas
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-5">
                {compact
                  ? 'Cuando conocí Revolution no estaba buscando una fórmula mágica. Estaba buscando una habilidad que me ayudara a entender mejor el dinero, tomar mejores decisiones y construir algo que dependiera más de mí.'
                  : 'Cuando conocí Revolution, no estaba buscando solamente aprender trading. Quería entender mejor el dinero, tomar mejores decisiones y encontrar una habilidad que dependiera más de mí.'}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-white/70 text-base leading-relaxed mb-5">
                {compact
                  ? 'No fue de un día para el otro. Fue estudiar, equivocarme, practicar, escuchar clases y rodearme de personas que estaban en el mismo camino.'
                  : 'No fue de un día para el otro. Fue estudiar, equivocarme, practicar, escuchar clases y rodearme de personas que estaban en el mismo camino.'}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-white/80 text-base leading-relaxed mb-8">
                {compact
                  ? 'Por eso hoy me gusta explicarlo con claridad: porque sé lo que es tener ganas de empezar, pero también tener dudas.'
                  : 'Hoy mi rol es ayudarte a entender el sistema con claridad: qué incluye cada acceso, cómo se usa el capital, qué podés esperar y qué opción tiene más sentido para vos.'}
              </p>
            </ScrollReveal>

            {!compact && <ScrollReveal delay={0.25}>
              <div className="bg-white/8 dark:bg-white/5 border border-white/15 dark:border-white/10 rounded-2xl px-6 py-5 mb-8">
                <p className="text-white font-semibold text-base lg:text-lg leading-snug italic">
                  “Mi trabajo es explicarte todo claro para que sepas si esto es para vos y por dónde te conviene empezar.”
                </p>
                <p className="text-white/50 text-sm mt-2">— Gabriel Miceli</p>
              </div>
            </ScrollReveal>}

            {showCta && <ScrollReveal delay={0.3}>
              <div className={`${hideCtaOnMobile ? 'hidden md:flex' : 'flex'} flex-col sm:flex-row gap-3`}>
                <CTAButton variant="primary-light" size="large" href={ctaHref}>
                  {ctaLabel}
                </CTAButton>
              </div>
            </ScrollReveal>}
          </div>

          {/* Columna foto */}
          <ScrollReveal delay={0.15} className="flex justify-center lg:justify-end">
            <div className={`relative w-full ${compact ? 'max-w-[350px]' : 'max-w-[380px]'}`}>

              {/* Foto principal */}
              <div className="story-photo relative rounded-4xl overflow-hidden aspect-[4/5] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.5)]">
                {/* Placeholder: gradiente cuando no existe la imagen */}
                <div className="absolute inset-0 bg-gradient-to-br from-turquoise/20 via-ocean/40 to-deep-teal" />
                <img
                  src="/images/gabriel-laptop-cancun.jpeg"
                  alt="Gabriel Miceli trabajando desde Cancún"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                  // Imagen requerida: /public/images/gabriel-laptop-cancun.jpg
                />
                {/* Overlay inferior */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ocean/60 to-transparent" />
              </div>

              {/* Badge flotante: De Buenos Aires a Cancún */}
              <div className="absolute -bottom-5 -left-5 lg:-left-8 bg-white dark:bg-dk-card rounded-2xl px-4 py-3.5 shadow-xl border border-charcoal/8 dark:border-white/10">
                <p className="text-[11px] text-muted dark:text-dk-muted font-medium mb-0.5">De Buenos Aires</p>
                <p className="text-sm font-bold text-charcoal dark:text-dk-text">a Cancún, México 🌊</p>
              </div>

              {/* Badge flotante: tiempo en Revolution */}
              <div className="absolute -top-4 -right-4 lg:-right-6 bg-ocean border border-turquoise/30 rounded-2xl px-4 py-3.5 shadow-xl">
                <p className="text-[11px] text-turquoise/80 font-medium mb-0.5">Dentro de Revolution</p>
                <p className="text-sm font-bold text-white">+2 años y medio</p>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
      {showDivider && (
        <>
          {/* Mobile: mt controla el aire después de Mi Camino; mb controla el aire antes de Cupos. */}
          <div aria-hidden="true" className="relative mx-auto mb-16 mt-16 h-px w-[74%] bg-gradient-to-r from-transparent via-turquoise/90 to-transparent shadow-[0_0_12px_rgba(24,183,181,0.42),0_0_26px_rgba(24,183,181,0.2)] lg:hidden">
            <span className="absolute left-1/2 top-1/2 h-px w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-turquoise/45 blur-[0.5px]" />
          </div>
          {/* Desktop: conservar las medidas y la intensidad existentes. */}
          <div aria-hidden="true" className="relative mx-auto mb-20 mt-16 hidden h-px w-[58%] max-w-[680px] bg-gradient-to-r from-transparent via-turquoise/70 to-transparent shadow-[0_0_12px_rgba(24,183,181,0.28),0_0_24px_rgba(24,183,181,0.14)] lg:block">
            <span className="absolute left-1/2 top-1/2 h-px w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-turquoise/35 blur-[0.5px]" />
          </div>
        </>
      )}
    </section>
  )
}
