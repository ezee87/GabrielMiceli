import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import CTAButton from '../ui/CTAButton'
import { WHATSAPP_GENERAL_QUESTION_URL } from '../../constants'

// Imagen requerida: /public/images/gabriel-hero-balcon-cancun.jpg
// Si no existe, se muestra un placeholder de color con gradiente turquesa/ocean.

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
          .from('.hero-microcopy', { opacity: 0, duration: 0.5, ease: 'power1.out' }, '-=0.25')

      })
    },
    { scope: heroRef },
  )

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative bg-warm-white dark:bg-dk-bg overflow-hidden"
    >
      <div className="relative flex flex-col lg:flex-row lg:min-h-screen">

        {/* ── Imagen mobile (visible solo en mobile/tablet) ── */}
        <div className="hero-img-wrap relative h-[62vw] min-h-[280px] max-h-[420px] lg:hidden overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-ocean/30 via-turquoise/20 to-ocean/40" />
          <img
            src="/images/gabriel-hero-balcon-cancun.jpeg"
            alt="Gabriel Miceli en Cancún, México"
            className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
            loading="eager"
            // Imagen requerida: /public/images/gabriel-hero-balcon-cancun.jpeg
          />
          {/* Gradiente inferior para transición suave al contenido */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-warm-white dark:from-dk-bg to-transparent" />
        </div>

        {/* ── Columna de texto ── */}
        <div className="relative z-10 w-full lg:w-[58%] px-6 sm:px-8 lg:pl-14 xl:pl-20 lg:pr-10 pt-12 pb-16 lg:py-0 flex flex-col justify-center lg:min-h-screen">

          {/* Espaciado para navbar fixed */}
          <div className="hidden lg:block h-20" />

          <div className="max-w-xl">

            <div className="hero-eyebrow mb-5 flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-tight text-charcoal dark:text-dk-text">Gabriel Miceli</span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-turquoise">× Revolution</span>
            </div>

            <h1 className="hero-title font-display font-extrabold text-charcoal dark:text-dk-text text-balance leading-[1.04] tracking-[-0.02em] text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] mb-5">
              Conocé <span className="text-turquoise">Revolution</span> antes de elegir tu beca
            </h1>

            <p className="hero-subtitle text-deep-slate dark:text-dk-text2 text-base lg:text-[17px] leading-relaxed mb-7 max-w-[480px]">
              Te explico qué incluye la app, cómo funcionan los accesos y qué beca puede tener más sentido según tu experiencia, capital y objetivo.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group flex flex-col sm:flex-row gap-3 mb-5 lg:mb-4">
              <CTAButton href={WHATSAPP_GENERAL_QUESTION_URL} size="large" className="w-full sm:w-auto justify-center">
                Quiero que me expliques
              </CTAButton>
            </div>

            <p className="hero-microcopy text-sm text-muted dark:text-dk-muted mb-8">
              Te respondo por WhatsApp y te explico el sistema antes de que decidas.
            </p>
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
          <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-warm-white/60 dark:from-dk-bg/80 to-transparent" />
          {/* Gradiente inferior */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ocean/25 to-transparent" />

        </div>

      </div>

      {/* Separador visual sutil */}
      <div className="h-px bg-gradient-to-r from-transparent via-charcoal/10 dark:via-white/10 to-transparent" />
    </section>
  )
}
