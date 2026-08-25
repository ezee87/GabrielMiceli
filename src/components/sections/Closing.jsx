import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import SectionEyebrow from '../ui/SectionEyebrow'
import ScrollReveal from '../ui/ScrollReveal'
import { getAvailableScholarships } from '../../utils/scholarships'

// Imagen requerida: /public/images/gabriel-lentes-cancun.jpg

export default function Closing() {
  const closingRef = useRef(null)
  const availableScholarships = getAvailableScholarships()

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const counterEl = closingRef.current?.querySelector('.closing-counter')
        if (!counterEl) return
        const obj = { val: 0 }
        gsap.to(obj, {
          val: availableScholarships,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: counterEl,
            start: 'top 78%',
            once: true,
          },
          onUpdate() {
            counterEl.textContent = Math.round(obj.val)
          },
        })
      })
    },
    { scope: closingRef },
  )

  return (
    <section ref={closingRef} className="relative bg-ocean dark:bg-dk-surface grain-overlay overflow-hidden pb-14 pt-0 lg:pb-16 lg:pt-0">

      {/* Radial glow de fondo — puramente decorativo, sin imagen */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 80% 50%, rgba(24,183,181,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-6 lg:px-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Columna texto */}
          <div>
            <ScrollReveal>
              <SectionEyebrow light>Cupos del mes</SectionEyebrow>

              {/* Número grande */}
              <div className="flex items-baseline gap-4 mb-5">
                <span
                  className="closing-counter font-display font-extrabold leading-none tracking-tight text-white"
                  style={{ fontSize: 'clamp(4.5rem, 11vw, 7.5rem)' }}
                >
                  {availableScholarships}
                </span>
                <div>
                  <p className="text-white/70 text-base leading-snug">
                    becas disponibles
                  </p>
                  <p className="text-turquoise font-semibold text-sm">
                    este mes
                  </p>
                </div>
              </div>

              <h2 className="font-display font-extrabold text-white text-balance leading-tight tracking-tight text-3xl sm:text-4xl lg:text-[2.6rem] mb-6">
                Este mes acompaño personalmente a un grupo reducido
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-white/75 text-base lg:text-lg leading-relaxed mb-5">
                La idea no es que entres sin entender. Primero te explico cómo funciona Revolution, qué incluye cada acceso y cuál puede tener más sentido para tu situación.
              </p>
              <p className="text-white/60 text-base leading-relaxed">
                Cuando tengas claro el sistema, decidís si querés avanzar.
              </p>
            </ScrollReveal>
          </div>

          {/* Columna foto */}
          <ScrollReveal delay={0.2} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px]">

              <div className="relative rounded-4xl overflow-hidden aspect-[4/5] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.55)]">
                {/* Placeholder visual */}
                <div className="absolute inset-0 bg-gradient-to-br from-turquoise/15 via-ocean/50 to-deep-teal" />
                <img
                  src="/images/gabriel-lentes-cancun.jpeg"
                  alt="Gabriel Miceli"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                  // Imagen requerida: /public/images/gabriel-lentes-cancun.jpg
                />
                {/* Overlay inferior para contraste de la cita */}
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                {/* Cita superpuesta sobre la foto */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-sm leading-snug drop-shadow-lg">
                    "Te explico todo claro antes de que decidas."
                  </p>
                  <p className="text-white/65 text-xs mt-1.5 drop-shadow-md">— Gabriel Miceli</p>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  )
}
