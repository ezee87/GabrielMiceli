import CTAButton from '../ui/CTAButton'
import SectionEyebrow from '../ui/SectionEyebrow'
import ScrollReveal from '../ui/ScrollReveal'
import { useEffect, useRef, useState } from 'react'
import { getAvailableScholarships } from '../../utils/scholarships'

export default function VariantFinalCta({ variant, ctaHref }) {
  const isBooking = variant === 'B'
  const availableScholarships = getAvailableScholarships()
  const [count, setCount] = useState(0)
  const counterRef = useRef(null)

  useEffect(() => {
    const node = counterRef.current
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return setCount(availableScholarships)
      const started = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - started) / 900, 1)
        setCount(Math.round(availableScholarships * (1 - Math.pow(1 - progress, 3))))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    if (node) observer.observe(node)
    return () => observer.disconnect()
  }, [availableScholarships])

  return (
    <section className="grain-overlay relative overflow-hidden bg-ocean py-12 dark:bg-dk-surface lg:py-16">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: 'radial-gradient(ellipse 65% 70% at 85% 50%, rgba(24,183,181,0.16), transparent 70%)' }} />
      <div className="container mx-auto max-w-5xl px-6 text-center lg:px-10">
        <ScrollReveal>
          <SectionEyebrow light>Cupos del mes</SectionEyebrow>
          <div ref={counterRef} className="mx-auto mb-2 font-display text-6xl font-extrabold leading-none tracking-[-0.06em] text-turquoise drop-shadow-[0_0_22px_rgba(24,183,181,0.35)] sm:text-7xl" aria-label={`${availableScholarships} becas`}>
            {count}
          </div>
          <h2 className="mx-auto mb-4 max-w-3xl text-balance font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            {availableScholarships === 1
              ? 'Este mes puedo acompañar a 1 persona más'
              : `Este mes puedo acompañar a ${availableScholarships} personas más`}
          </h2>
          <p className="mx-auto mb-9 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
            Si querés entender cómo funciona Revolution y qué beca tiene sentido para vos, este es el momento de escribirme o coordinar una consulta.
          </p>
          <CTAButton href={ctaHref} variant="primary-light" size="large">
            {isBooking ? 'Agendar consulta de 15 min' : 'Quiero que me expliques mi beca'}
          </CTAButton>
          <p className="mt-4 text-sm font-medium leading-relaxed text-white/65">
            Primero entendés cómo funciona.<br />Después decidís si querés avanzar.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
