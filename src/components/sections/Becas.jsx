import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import SectionEyebrow from '../ui/SectionEyebrow'
import CTAButton from '../ui/CTAButton'
import ScrollReveal from '../ui/ScrollReveal'

const becas = [
  {
    id: 'basica',
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
    microcopy: 'Ideal si estás empezando y querés dar el primer paso.',
    featured: false,
  },
  {
    id: 'intermedia',
    name: 'Beca Intermedia',
    price: '600',
    tagline: 'Para quienes quieren avanzar con más estructura y acceder a una formación más completa.',
    features: [
      'Todo lo de la beca básica',
      'Curso intermedio Revolution',
      'Evaluaciones nivel intermedio',
    ],
    cta: 'Consultar beca intermedia',
    microcopy: 'Para avanzar con más herramientas y curva de aprendizaje más completa.',
    featured: false,
  },
  {
    id: 'avanzada',
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

export default function Becas() {
  const becasRef = useRef(null)

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
    <section id="becas" className="bg-warm-white py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-10 max-w-6xl" ref={becasRef}>

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-4">
            <SectionEyebrow>Accesos disponibles</SectionEyebrow>
            <h2 className="font-display font-extrabold text-charcoal text-balance leading-tight tracking-tight text-3xl sm:text-4xl lg:text-5xl mb-4">
              Elegí tu beca de acceso a Revolution
            </h2>
            <p className="text-muted text-base lg:text-lg leading-relaxed max-w-xl mx-auto">
              Hay tres accesos disponibles. Si no sabés cuál elegir, me escribís y te recomiendo
              la opción más conveniente según tu experiencia, capital y objetivo.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="text-center text-sm text-muted/80 mb-10 lg:mb-14 max-w-lg mx-auto border border-charcoal/8 rounded-2xl px-5 py-3 bg-white/60">
            Todas las becas te permiten ingresar al ecosistema Revolution. La diferencia está
            en el nivel de formación, comunidad y recursos que desbloqueás.
          </p>
        </ScrollReveal>

        {/* Cards — 3 columnas en desktop, alineadas y estiradas */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch" id="becas-grid">
          {becas.map((beca) => (
            <BecaCard key={beca.id} beca={beca} />
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <p className="text-center text-sm text-muted mt-10">
            ¿No sabés cuál elegir?{' '}
            <a
              href="#faqs"
              className="text-turquoise font-semibold hover:underline underline-offset-2"
            >
              Mirá las preguntas frecuentes
            </a>{' '}
            o escribime y te ayudo.
          </p>
        </ScrollReveal>

      </div>
    </section>
  )
}

function BecaCard({ beca }) {
  const { name, price, tagline, features, cta, microcopy, featured, badge } = beca

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
        className={`h-full rounded-4xl flex flex-col p-7 lg:p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default ${
          featured
            ? 'bg-white border-turquoise/50 shadow-[0_12px_70px_-10px_rgba(24,183,181,0.35)] pt-12'
            : 'bg-white/80 border-charcoal/10 shadow-sm'
        }`}
      >
        {/* Nombre y precio */}
        <div className="mb-5">
          <p
            className={`text-[11px] font-semibold tracking-widest uppercase mb-2 ${
              featured ? 'text-turquoise' : 'text-muted'
            }`}
          >
            {name}
          </p>
          <div className="flex items-baseline gap-1 mb-3">
            <span
              className={`font-display font-extrabold text-4xl lg:text-5xl tracking-tight ${
                featured ? 'text-ocean' : 'text-charcoal'
              }`}
            >
              {price}
            </span>
            <span className="text-muted font-medium text-sm">USD</span>
          </div>
          <p className="text-sm text-muted leading-relaxed">{tagline}</p>
        </div>

        {/* Separador */}
        <div
          className={`h-px mb-5 ${featured ? 'bg-turquoise/20' : 'bg-charcoal/8'}`}
        />

        {/* Features */}
        <ul className="space-y-2.5 mb-7 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm">
              <span
                className={`flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  featured
                    ? 'bg-turquoise/15 text-turquoise'
                    : 'bg-charcoal/8 text-charcoal'
                }`}
              >
                ✓
              </span>
              <span className="text-deep-slate leading-snug">{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex flex-col gap-2">
          <CTAButton
            variant={featured ? 'primary' : 'secondary'}
            size={featured ? 'large' : 'default'}
            className={featured ? 'w-full justify-center text-center' : 'w-full justify-center text-center'}
          >
            {cta}
          </CTAButton>
          <p className="text-xs text-muted text-center leading-relaxed">{microcopy}</p>
        </div>
      </div>
    </div>
  )
}
