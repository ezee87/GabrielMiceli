import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import SectionEyebrow from '../ui/SectionEyebrow'
import CTAButton from '../ui/CTAButton'
import ScrollReveal from '../ui/ScrollReveal'

// Imagen requerida: /public/images/gabriel-laptop-cancun.jpg

export default function PersonalStory() {
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
      className="bg-ocean dark:bg-dk-surface grain-overlay py-20 lg:py-28 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Columna texto */}
          <div>
            <ScrollReveal>
              <SectionEyebrow light>Mi camino</SectionEyebrow>
              <h2 className="font-display font-extrabold text-white text-balance leading-tight tracking-tight text-3xl sm:text-4xl lg:text-5xl mb-7">
                Yo también empecé desde cero
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-5">
                Cuando conocí Revolution no estaba buscando solamente aprender trading.
                Estaba buscando algo más grande: una habilidad que dependiera de mí,
                una forma de entender mejor el dinero y una puerta para construir otra vida.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-white/70 text-base leading-relaxed mb-5">
                No fue magia. Fue estudiar, equivocarme, practicar, escuchar clases,
                rodearme de personas que estaban en el mismo camino y seguir.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-white/80 text-base leading-relaxed mb-8">
                Hoy vivo en Cancún, México, cumpliendo parte de ese sueño que antes parecía lejano.
                Y por eso conecto mucho con quienes quieren empezar: porque sé lo que es tener ganas
                de cambiar, pero también tener dudas, miedo o desconfianza.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="bg-white/8 dark:bg-white/5 border border-white/15 dark:border-white/10 rounded-2xl px-6 py-5 mb-8">
                <p className="text-white font-semibold text-base lg:text-lg leading-snug italic">
                  "Mi trabajo es explicarte todo claro para que sepas si esto es para vos
                  y con qué beca te conviene entrar."
                </p>
                <p className="text-white/50 text-sm mt-2">— Gabriel Miceli</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <CTAButton variant="primary-light" size="large">
                  Quiero que me expliques
                </CTAButton>
              </div>
              <p className="text-white/50 text-sm mt-3">
                Hablamos por chat, sin compromiso.
              </p>
            </ScrollReveal>
          </div>

          {/* Columna foto */}
          <ScrollReveal delay={0.15} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">

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
    </section>
  )
}
