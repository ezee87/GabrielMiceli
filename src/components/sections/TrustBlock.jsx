import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import ScrollReveal from '../ui/ScrollReveal'
import SectionEyebrow from '../ui/SectionEyebrow'
import CTAButton from '../ui/CTAButton'

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

export default function TrustBlock() {
  const sectionRef = useRef(null)

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

  return (
    <section
      ref={sectionRef}
      id="como-funciona"
      className="bg-ocean dark:bg-dk-surface grain-overlay py-20 lg:py-28"
    >
      <div className="container mx-auto px-6 lg:px-10 max-w-5xl">

        {/* Header */}
        <ScrollReveal>
          <SectionEyebrow light>La duda más común</SectionEyebrow>
          <h2 className="font-display font-extrabold text-white text-balance leading-tight tracking-tight text-3xl sm:text-4xl lg:text-5xl mb-8 max-w-2xl">
            No le das tu dinero a Gabriel ni a Revolution
          </h2>
        </ScrollReveal>

        {/* Párrafo intro */}
        <ScrollReveal delay={0.1}>
          <p className="text-white/75 text-base lg:text-lg leading-relaxed mb-10 max-w-2xl">
            Sé que mucha gente quiere aprender trading pero le da miedo perder plata o caer en una estafa.
            Por eso quiero explicártelo claro desde el principio.
          </p>
        </ScrollReveal>

        {/* Las tres negaciones — con stagger GSAP */}
        <div className="mb-12 space-y-0 divide-y divide-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {[
            'No me pagás a mí.',
            'No le transferís dinero a Revolution.',
            'No estás comprando una membresía carísima.',
          ].map((text, i) => (
            <div
              key={i}
              className="denial-item flex items-center gap-5 px-7 py-5 lg:py-6 bg-white/5 hover:bg-white/8 transition-colors duration-200"
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
          <div className="bg-white dark:bg-dk-card rounded-3xl p-7 lg:p-9 mb-10 border border-turquoise/20 dark:border-turquoise/15 shadow-[0_0_40px_-10px_rgba(24,183,181,0.25)] dark:shadow-[0_0_40px_-10px_rgba(24,183,181,0.12)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-turquoise/10 flex items-center justify-center">
                <span className="text-turquoise text-lg">✓</span>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-turquoise mb-1">
                  Así funciona realmente
                </p>
                <p className="text-xl lg:text-2xl font-bold text-charcoal dark:text-dk-text leading-snug">
                  Tu dinero queda en tu propia cuenta. No va a una academia.
                </p>
              </div>
            </div>

            <p className="text-deep-slate dark:text-dk-text2 text-base leading-relaxed mb-7">
              Abrís tu propia cuenta de trading en Exness con tus datos, depositás el capital mínimo de acceso
              y desde ahí podés estudiar, practicar y operar dentro del ecosistema de Revolution.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {trustPoints.map((point) => (
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

        {/* Nota legal breve */}
        <ScrollReveal delay={0.1}>
          <p className="text-white/40 text-xs text-center mb-8">
            El trading implica riesgo. No hay ganancias garantizadas.
          </p>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-col items-center gap-3">
            <CTAButton variant="primary-light" size="large">
              Quiero entender cómo funciona
            </CTAButton>
            <p className="text-white/50 text-sm">
              Te lo explico paso a paso antes de que tomes cualquier decisión.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
