import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import SectionEyebrow from '../ui/SectionEyebrow'
import CTAButton from '../ui/CTAButton'
import ScrollReveal from '../ui/ScrollReveal'
import {
  WHATSAPP_BASIC_URL,
  WHATSAPP_INTERMEDIATE_URL,
  WHATSAPP_ADVANCED_URL,
  WHATSAPP_URL,
} from '../../constants'

const becas = [
  {
    id: 'basica',
    href: WHATSAPP_BASIC_URL,
    name: 'Beca Básica',
    price: '300',
    tagline: 'Para empezar desde cero y conocer las bases del trading dentro de Revolution.',
    features: [
      'Clases en vivo todos los días',
      'Canal de ideas de trading',
      'Chat de comunidad general',
      'Tienda Revolution',
      'Curso básico Revolution',
      'Evaluación nivel básico',
    ],
    cta: 'Consultar beca básica',
    microcopy: 'Ideal si estás empezando y querés dar el primer paso con claridad.',
    featured: false,
  },
  {
    id: 'intermedia',
    href: WHATSAPP_INTERMEDIATE_URL,
    name: 'Beca Intermedia',
    price: '600',
    tagline: 'Para quienes quieren avanzar con más estructura y acceder a una formación más completa.',
    features: [
      'Todo lo de la beca básica',
      'Curso intermedio Revolution',
      'Evaluaciones nivel intermedio',
    ],
    cta: 'Consultar beca intermedia',
    microcopy: 'Para avanzar con más herramientas y una curva de aprendizaje más completa.',
    featured: false,
  },
  {
    id: 'avanzada',
    href: WHATSAPP_ADVANCED_URL,
    name: 'Beca Avanzada',
    price: '1.000',
    tagline: 'La opción recomendada si querés acceder a la experiencia más completa de Revolution.',
    features: [
      'Todo lo de la beca intermedia',
      'Curso avanzado Revolution',
      'Evaluaciones nivel avanzado',
      'Comunidad VIP',
      'Canal de ideas VIP',
      'Sesiones avanzadas con Cristian Díaz',
    ],
    cta: 'Quiero la beca avanzada',
    microcopy: 'La opción que más recomiendo si querés tomarte el proceso en serio desde el inicio.',
    featured: true,
    badge: 'Recomendada',
  },
]

export default function Becas({
  variant = 'A',
  title = 'Elegí tu beca de acceso a Revolution',
  subtitle = 'Hay tres accesos disponibles. Si no sabés cuál elegir, me escribís y te recomiendo la opción más conveniente según tu experiencia, capital y objetivo.',
  ctaHref,
  ctaLabel,
  hideCtasOnMobile = false,
}) {
  const becasRef = useRef(null)
  const institutional = variant === 'institutional'

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Establecer estado inicial
        gsap.set('.beca-card', { opacity: 0, y: 48 })

        ScrollTrigger.batch('.beca-card', {
          onEnter: (elements) => {
            gsap.to(elements, {
              opacity: 1,
              y: 0,
              duration: 0.75,
              stagger: 0.14,
              ease: 'power2.out',
            })
          },
          once: true,
          start: 'top 88%',
        })
      })
    },
    { scope: becasRef },
  )

  return (
    <section id="becas" className="scroll-mt-12 bg-warm-white pb-20 pt-14 dark:bg-dk-bg lg:pb-20 lg:pt-20">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl" ref={becasRef}>

        {/* Header */}
        <ScrollReveal>
          <div className={`text-center ${institutional ? 'mb-0' : 'mb-4'}`}>
            <SectionEyebrow>Accesos disponibles</SectionEyebrow>
            <h2 className="font-display font-extrabold text-charcoal dark:text-dk-text text-balance leading-tight tracking-tight text-3xl sm:text-4xl lg:text-[2.5rem] mb-4">
              {title}
            </h2>
            {institutional ? (
              <div className="mx-auto max-w-[600px] space-y-4 text-muted dark:text-dk-text2 text-base leading-[1.75] lg:text-lg">
                <p>Hay tres accesos disponibles. Todas las becas te permiten ingresar al ecosistema Revolution.</p>
                <p>La diferencia está en el nivel de formación, comunidad y recursos que desbloqueás. Si no sabés cuál elegir, te ayudo a comparar las opciones según tu experiencia, capital y objetivo.</p>
              </div>
            ) : (
              <p className="balanced-text copy-narrow text-muted dark:text-dk-text2 text-base lg:text-lg leading-relaxed">{subtitle}</p>
            )}
          </div>
        </ScrollReveal>

        {!institutional && <ScrollReveal delay={0.05}>
          <p className="text-center text-sm text-muted/80 dark:text-dk-muted mb-10 lg:mb-14 max-w-lg mx-auto border border-charcoal/8 dark:border-white/10 rounded-2xl px-5 py-3 bg-white/60 dark:bg-dk-card/60">
            Todas las becas te permiten ingresar al ecosistema Revolution. La diferencia está
            en el nivel de formación, comunidad y recursos que desbloqueás.
          </p>
        </ScrollReveal>}

        {/* Cards — 3 columnas en desktop, alineadas y estiradas */}
        <div className={`grid gap-10 md:grid-cols-3 md:gap-6 items-stretch ${institutional ? 'mt-12 lg:mt-16' : ''}`} id="becas-grid">
          {becas.map((beca) => (
            <BecaCard key={beca.id} beca={beca} variant={variant} ctaHref={institutional ? WHATSAPP_URL : ctaHref} ctaLabel={ctaLabel} hideCta={institutional} hideCtaOnMobile={hideCtasOnMobile} />
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className={`mt-9 flex-col items-center gap-3 text-center ${hideCtasOnMobile ? 'hidden md:flex' : 'flex'}`}>
            <p className="text-sm text-muted dark:text-dk-muted">
              {variant === 'B'
                ? '¿No sabés cuál elegir? Lo vemos en una consulta breve y te explico las diferencias.'
                : institutional
                  ? 'Escribime y vemos cuál tiene más sentido para vos.'
                  : '¿No sabés cuál elegir? Escribime y te ayudo a encontrar la beca correcta.'}
            </p>
            <CTAButton href={variant === 'B' ? '#booking' : WHATSAPP_URL} variant="secondary" size="sm">
              {variant === 'B' ? 'Agendar consulta de 15 min' : variant === 'institutional' ? 'Quiero que me recomiendes una beca' : 'Quiero que me expliques mi beca'}
            </CTAButton>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}

function BecaCard({ beca, variant, ctaHref, ctaLabel, hideCta = false, hideCtaOnMobile = false }) {
  const { name, price, tagline, features, cta, microcopy, featured, badge, href } = beca
  const displayedTagline = variant === 'institutional' && beca.id === 'avanzada'
    ? 'Para acceder a la experiencia más completa de Revolution desde el inicio.'
    : tagline

  const variantCta = variant === 'B'
    ? 'Consultar en llamada'
    : (beca.id === 'avanzada' ? 'Consultar beca avanzada' : cta)
  const variantHref = variant === 'B' ? '#booking' : href
  const displayedMicrocopy = beca.id === 'avanzada'
    ? 'La opción que más recomiendo si querés entrar con el ecosistema completo.'
    : microcopy

  return (
    <div
      className={`beca-card h-full relative rounded-4xl overflow-visible transition-all duration-300`}
    >
      {/* Badge Recomendada */}
      {featured && badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
          <span className="inline-flex items-center gap-1.5 bg-gold text-white text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md">
            <span>★</span> {badge}
          </span>
        </div>
      )}

      <div
        className={`h-full rounded-4xl flex flex-col p-6 lg:p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default ${
          featured
            ? 'bg-white dark:bg-dk-featured border-turquoise/45 dark:border-turquoise/35 shadow-[0_14px_55px_-18px_rgba(24,183,181,0.28)] dark:shadow-[0_12px_50px_-16px_rgba(24,183,181,0.17),0_0_24px_-10px_rgba(200,168,78,0.1)] pt-12'
            : 'bg-white/80 dark:bg-dk-card border-charcoal/10 dark:border-white/10 shadow-sm'
        }`}
      >
        {/* Nombre y precio */}
        <div className="mb-5">
          <p
            className={`text-[11px] font-semibold tracking-widest uppercase mb-2 ${
              featured ? 'text-turquoise' : 'text-muted dark:text-dk-muted'
            }`}
          >
            {name}
          </p>
          <div className="flex items-baseline gap-1 mb-3">
            <span
              className={`font-display font-extrabold text-4xl lg:text-5xl tracking-tight ${
                featured ? 'text-ocean dark:text-turquoise' : 'text-charcoal dark:text-dk-text'
              }`}
            >
              {price}
            </span>
            <span className="text-muted dark:text-dk-muted font-medium text-sm">USD</span>
          </div>
          <p className="text-sm text-muted dark:text-dk-muted leading-relaxed">{displayedTagline}</p>
        </div>

        {/* Separador */}
        <div
          className={`h-px mb-5 ${featured ? 'bg-turquoise/20' : 'bg-charcoal/8 dark:bg-white/10'}`}
        />

        {/* Features */}
        <ul className="space-y-2.5 mb-7 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm">
              <span
                className={`flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  featured
                    ? 'bg-turquoise/15 text-turquoise'
                    : 'bg-charcoal/8 dark:bg-white/10 text-charcoal dark:text-dk-text2'
                }`}
              >
                ✓
              </span>
              <span className="text-deep-slate dark:text-dk-text2 leading-snug">{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex flex-col gap-2">
          {!hideCta && <CTAButton
            href={ctaHref ?? variantHref}
            variant={featured ? 'primary' : 'secondary'}
            size="default"
              className={`h-12 w-full whitespace-nowrap !px-3 !py-0 text-center !text-[13px] ${hideCtaOnMobile ? 'hidden md:inline-flex' : ''}`}
          >
            {ctaLabel ?? variantCta}
          </CTAButton>}
          <p className="min-h-10 text-center text-xs leading-relaxed text-muted dark:text-dk-muted">{displayedMicrocopy}</p>
        </div>
      </div>
    </div>
  )
}
