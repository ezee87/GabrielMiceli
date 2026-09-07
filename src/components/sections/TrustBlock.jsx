import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import ScrollReveal from '../ui/ScrollReveal'
import SectionEyebrow from '../ui/SectionEyebrow'
import CTAButton from '../ui/CTAButton'
import { WHATSAPP_GENERAL_QUESTION_URL } from '../../constants'

// Imagen de apoyo opcional: /public/images/gabriel-cuenta-trading-blurred.jpg
// Solo usar como visual secundario, NUNCA como prueba de ganancias.

const trustPoints = [
  {
    title: 'Cuenta creada con tus datos',
    desc: 'Abrís la cuenta en Exness con tu nombre, tu documento y tu información. No con los datos de nadie más.',
  },
  {
    title: 'Capital en tu propia cuenta',
    desc: 'El dinero que depositás queda en tu cuenta de trading. Gabriel ni Revolution acceden a él.',
  },
  {
    title: 'Acceso a formación y comunidad',
    desc: 'Desde tu cuenta habilitada, accedés a Revolution: cursos, clases, app y comunidad.',
  },
  {
    title: 'Explicación antes de avanzar',
    desc: 'Gabriel te explica cada paso antes de que tomes cualquier decisión. Sin presiones.',
  },
]

export default function TrustBlock({ conversion = false, ctaHref = WHATSAPP_GENERAL_QUESTION_URL, ctaLabel = 'Quiero que me expliques', ctaOnClick, showCta = true, hideCtaOnMobile = false }) {
  const sectionRef = useRef(null)
  const denialItems = conversion
    ? [
        'No hay ganancias garantizadas.',
        'El trading implica riesgo.',
        'Entendés el sistema antes de elegir.',
        'Te ayudo a decidir qué beca tiene sentido para vos.',
      ]
    : [
        'No me pagás a mí.',
        'No le transferís dinero a Revolution.',
        'No estás comprando un curso suelto.',
      ]
  const displayPoints = conversion
    ? [
        { title: 'Acceso explicado con claridad', desc: 'Primero entendés qué incluye cada beca y qué necesitás para comenzar.' },
        { title: 'Capital en tu propia cuenta', desc: 'El capital se utiliza dentro de la plataforma o cuenta correspondiente.' },
        { title: 'Formación y comunidad', desc: 'Accedés a contenidos por nivel, reuniones, herramientas y acompañamiento.' },
        { title: 'Decisión sin presión', desc: 'Te ayudo a comparar las opciones para que decidas con información.' },
      ]
    : trustPoints

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.set('.denial-item', { opacity: 0, y: 24 })
        ScrollTrigger.batch('.denial-item', {
          onEnter: (els) =>
            gsap.to(els, {
              opacity: 1,
              y: 0,
              stagger: 0.13,
              duration: 0.65,
              ease: 'power2.out',
            }),
          once: true,
          start: 'top 88%',
        })
      })
    },
    { scope: sectionRef },
  )

  if (conversion) {
    return (
      <section ref={sectionRef} id="como-funciona" className="grain-overlay bg-dk-surface py-12 lg:py-16">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <SectionEyebrow light>Antes de elegir una beca</SectionEyebrow>
              <h2 className="mb-4 text-balance font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
                Entendé cómo funciona antes de tomar cualquier decisión
              </h2>
              <p className="balanced-text copy-medium text-base leading-relaxed text-dk-text2 lg:text-lg">
                Sé que cuando se habla de trading aparecen dudas: si es real, a dónde va el dinero, qué pasa si no tenés experiencia o si realmente vas a poder seguir el ritmo.
              </p>
              <p className="balanced-text copy-medium mt-4 text-base leading-relaxed text-dk-text2 lg:text-lg">
                Por eso, antes de que elijas una beca, te explico el sistema con claridad.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="my-7 rounded-3xl border border-turquoise/25 bg-dk-card p-6 shadow-[0_0_45px_-20px_rgba(24,183,181,0.45)] lg:p-7">
              <p className="mb-2 font-display text-xl font-bold leading-snug text-white lg:text-2xl">No estás comprando otro curso más</p>
              <p className="text-base leading-relaxed text-dk-text2 lg:text-lg">
                Estás entrando a un ecosistema donde primero entendés el acceso, la formación, la comunidad y cómo se usa el capital antes de tomar una decisión.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
            {denialItems.map((text, index) => (
              <ScrollReveal key={text} delay={index * 0.04} y={14}>
                <div className="denial-item flex h-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-turquoise/15 text-sm font-bold text-turquoise">✓</span>
                  <span className="font-semibold text-white">{text}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.15}>
            <div className={`mt-9 flex-col items-center text-center ${hideCtaOnMobile ? 'hidden md:flex' : 'flex'}`}>
              <CTAButton size="large" href={ctaHref} onClick={ctaOnClick}>{ctaLabel}</CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      id="como-funciona"
      className="scroll-mt-12 bg-ocean dark:bg-dk-surface grain-overlay py-16 lg:py-20"
    >
      <div className="container mx-auto px-6 lg:px-10 max-w-5xl">

        {/* Header */}
        <ScrollReveal>
          <SectionEyebrow light>{conversion ? 'Antes de tomar una decisión' : 'La duda más común'}</SectionEyebrow>
          <h2 className="font-display font-extrabold text-white text-balance leading-tight tracking-tight text-3xl sm:text-4xl lg:text-5xl mb-8 max-w-2xl">
            {conversion ? 'No se trata de pagarnos un curso y quedar solo' : 'La duda más importante: ¿a dónde va tu dinero?'}
          </h2>
        </ScrollReveal>

        {/* Párrafo intro */}
        <ScrollReveal delay={0.1}>
          <p className="text-white/75 text-base lg:text-lg leading-relaxed mb-4 max-w-2xl">
            {conversion ? 'Sé que cuando se habla de trading aparecen dudas. “¿Es real?”, “¿a dónde va el dinero?”, “¿qué pasa si no tengo experiencia?”. Por eso la idea no es que tomes una decisión a ciegas.' : 'Sé que cuando se habla de trading aparecen dudas: si es real, a dónde va el dinero, qué pasa si no tenés experiencia o si realmente vas a poder seguir el ritmo.'}
          </p>
          {!conversion && <p className="text-white/75 text-base lg:text-lg leading-relaxed mb-10 max-w-2xl">Por eso, antes de que elijas una beca, te explico el sistema con claridad.</p>}
          {conversion && (
            <p className="text-white/75 text-base lg:text-lg leading-relaxed mb-10 max-w-2xl -mt-6">
              Te explico cómo funciona el acceso, qué incluye cada beca y cómo se usa el capital dentro de la plataforma o cuenta correspondiente.
            </p>
          )}
        </ScrollReveal>

        {/* Las tres negaciones — con stagger GSAP */}
        <div className="mb-8 space-y-0 divide-y divide-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {denialItems.map((text, i) => (
            <div
              key={i}
              className="denial-item flex items-center gap-5 px-6 py-4 lg:py-5 bg-white/5 hover:bg-white/8 transition-colors duration-200"
            >
              <span className="flex-shrink-0 w-7 h-7 rounded-full border border-turquoise/60 flex items-center justify-center">
                <span className="text-turquoise text-base font-semibold leading-none">×</span>
              </span>
              <span className="text-white font-semibold text-base lg:text-lg">{text}</span>
            </div>
          ))}
        </div>

        {/* Card destacada */}
        <ScrollReveal delay={0.2}>
          <div className="bg-white dark:bg-dk-card rounded-3xl p-6 lg:p-7 border border-turquoise/20 dark:border-turquoise/15 shadow-[0_0_40px_-10px_rgba(24,183,181,0.25)] dark:shadow-[0_0_40px_-10px_rgba(24,183,181,0.12)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-turquoise/10 flex items-center justify-center">
                <span className="text-turquoise text-lg">✓</span>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-turquoise mb-1">
                  {conversion ? 'Lo importante antes de avanzar' : 'Así funciona realmente'}
                </p>
                <p className="text-xl lg:text-2xl font-bold text-charcoal dark:text-dk-text leading-snug">
                  {conversion
                    ? 'Entendés qué incluye el acceso y cómo funciona el capital dentro de tu cuenta.'
                    : 'Tu dinero queda en tu propia cuenta. No va a una academia.'}
                </p>
              </div>
            </div>

            <p className="text-deep-slate dark:text-dk-text2 text-base leading-relaxed mb-7">
              {conversion
                ? 'Antes de elegir, te cuento qué incluye cada beca, qué rol cumple la plataforma y qué riesgos tenés que considerar. Sin promesas ni presión.'
                : 'Abrís tu cuenta en Exness con tus datos, depositás el capital mínimo de acceso y desde ahí podés estudiar, practicar y operar dentro del ecosistema de Revolution.'}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {displayPoints.map((point) => (
                <div key={point.title} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-turquoise/15 flex items-center justify-center">
                    <span className="text-turquoise text-[11px] font-bold">✓</span>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-charcoal dark:text-dk-text mb-0.5">{point.title}</p>
                    <p className="text-xs text-muted dark:text-dk-muted leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        {showCta && <ScrollReveal delay={0.15}>
          <div className={`mt-6 flex-col items-center ${hideCtaOnMobile ? 'hidden md:flex' : 'flex'}`}>
            <CTAButton variant="primary-light" size="large" href={ctaHref} onClick={ctaOnClick}>
              {conversion ? 'Quiero que me expliques' : 'Quiero entender cómo funciona'}
            </CTAButton>
          </div>
        </ScrollReveal>}

      </div>
    </section>
  )
}
