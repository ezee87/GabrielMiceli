import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import CTAButton from '../ui/CTAButton'
import SectionEyebrow from '../ui/SectionEyebrow'

// Imagen requerida: /public/images/gabriel-hero-balcon-cancun.jpg
// Si no existe, se muestra un placeholder de color con gradiente turquesa/ocean.

const trustBadges = [
  { label: 'Desde 300 USD' },
  { label: 'Cuenta propia en Exness' },
  { label: 'App + clases en vivo' },
  { label: 'Sin promesas de resultados' },
]

export default function Hero() {
  const heroRef = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ delay: 0.15 })

        // Foto entra simultáneamente con el primer texto, con scale sutil
        tl.from('.hero-img-wrap', {
          opacity: 0,
          scale: 1.05,
          duration: 1.2,
          ease: 'power2.out',
        }, 0)

        // Texto entra escalonado
        tl.from(
          '.hero-eyebrow',
          { opacity: 0, y: 18, duration: 0.7, ease: 'power2.out' },
          0.2,
        )
          .from(
            '.hero-title',
            { opacity: 0, y: 28, duration: 0.85, ease: 'power2.out' },
            '-=0.45',
          )
          .from(
            '.hero-subtitle',
            { opacity: 0, y: 20, duration: 0.7, ease: 'power2.out' },
            '-=0.5',
          )
          .from(
            '.hero-cta-group',
            { opacity: 0, y: 16, duration: 0.65, ease: 'power2.out' },
            '-=0.4',
          )
          .from(
            '.hero-microcopy',
            { opacity: 0, duration: 0.5, ease: 'power1.out' },
            '-=0.25',
          )
          .from(
            '.hero-badge',
            {
              opacity: 0,
              y: 10,
              stagger: 0.09,
              duration: 0.4,
              ease: 'power2.out',
            },
            '-=0.3',
          )

        // Badge flotante en la foto (solo desktop)
        tl.from(
          '.hero-photo-badge',
          { opacity: 0, y: 12, duration: 0.5, ease: 'power2.out' },
          '-=0.2',
        )
      })
    },
    { scope: heroRef },
  )

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative bg-warm-white overflow-hidden"
    >
      <div className="relative flex flex-col lg:flex-row lg:min-h-screen">

        {/* ── Imagen mobile (visible solo en mobile/tablet) ── */}
        <div className="hero-img-wrap relative h-[58vw] min-h-[260px] max-h-[420px] lg:hidden overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-ocean/30 via-turquoise/20 to-ocean/40" />
          <img
            src="/images/gabriel-hero-balcon-cancun.jpeg"
            alt="Gabriel Miceli en Cancún, México"
            className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
            loading="eager"
            // Imagen requerida: /public/images/gabriel-hero-balcon-cancun.jpeg
          />
          {/* Gradiente inferior para transición suave al contenido */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-warm-white to-transparent" />
        </div>

        {/* ── Columna de texto ── */}
        <div className="relative z-10 w-full lg:w-[58%] px-6 sm:px-8 lg:pl-14 xl:pl-20 lg:pr-10 pt-10 pb-14 lg:py-0 flex flex-col justify-center lg:min-h-screen">

          {/* Espaciado para navbar fixed */}
          <div className="hidden lg:block h-20" />

          <div className="max-w-xl">

            <SectionEyebrow className="hero-eyebrow">
              Gabriel Miceli · Referente de Revolution
            </SectionEyebrow>

            <h1 className="hero-title font-display font-extrabold text-charcoal text-balance leading-[1.04] tracking-[-0.02em] text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] mb-5">
              Aprendé trading desde cero sin pagarle a una academia
            </h1>

            <p className="hero-subtitle text-deep-slate text-base lg:text-[17px] leading-relaxed mb-7 max-w-[480px]">
              Entrá a Revolution con una beca de acceso depositando desde{' '}
              <strong className="font-semibold text-charcoal">300 USD en tu propia cuenta de trading</strong>{' '}
              en Exness, y accedé a cursos, clases en vivo, comunidad, evaluaciones y una app completa.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group flex flex-col sm:flex-row gap-3 mb-4">
              <CTAButton size="large" className="w-full sm:w-auto justify-center">
                Reservar mi beca
              </CTAButton>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-7 py-4 text-sm font-semibold text-ocean border-2 border-ocean/30 rounded-full hover:border-ocean/60 hover:bg-ocean/5 transition-all duration-200"
              >
                Ver cómo funciona
              </a>
            </div>

            <p className="hero-microcopy text-sm text-muted mb-8">
              Te respondo por WhatsApp, te explico los planes y vemos cuál tiene más sentido para vos.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="hero-badge inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-charcoal/10 rounded-full text-[12px] font-medium text-charcoal shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-turquoise flex-shrink-0" />
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden lg:block h-20" />
        </div>

        {/* ── Imagen desktop (columna derecha absoluta) ── */}
        <div className="hero-img-wrap hidden lg:block absolute right-0 top-0 bottom-0 w-[46%] overflow-hidden rounded-l-[2.5rem]">
          {/* Placeholder: gradiente turquesa/ocean cuando no hay imagen */}
          <div className="absolute inset-0 bg-gradient-to-br from-ocean/25 via-turquoise/15 to-deep-teal/40" />
          <img
            src="/images/gabriel-hero-balcon-cancun.jpeg"
            alt="Gabriel Miceli en Cancún, México"
            className="absolute inset-0 w-full h-full object-cover object-top"
            loading="eager"
            // Imagen requerida: /public/images/gabriel-hero-balcon-cancun.jpeg
          />
          {/* Gradiente izquierdo para blend con warm-white */}
          <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-warm-white/60 to-transparent" />
          {/* Gradiente inferior */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ocean/25 to-transparent" />

          {/* Badge flotante sobre la foto */}
          <div className="hero-photo-badge absolute bottom-10 left-8 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3.5 shadow-xl border border-white/60">
            <p className="text-[11px] text-muted font-medium mb-0.5">Cancún, México</p>
            <p className="text-sm font-bold text-charcoal">+2 años en Revolution</p>
          </div>
        </div>

      </div>

      {/* Separador visual sutil */}
      <div className="h-px bg-gradient-to-r from-transparent via-charcoal/10 to-transparent" />
    </section>
  )
}
