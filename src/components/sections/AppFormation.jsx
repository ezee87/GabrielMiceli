import ScrollReveal from '../ui/ScrollReveal'
import SectionEyebrow from '../ui/SectionEyebrow'
import CTAButton from '../ui/CTAButton'

// Video requerido: /public/videos/revolution-app-demo.mp4
// Imagen de apoyo: /public/images/gabriel-setup-trading-laptop.jpg

const features = [
  'Cursos básico, intermedio y avanzado',
  'Módulos grabados para ver cuando puedas',
  '5 sesiones en vivo todos los días',
  'Clases grabadas si no podés estar en vivo',
  'Evaluaciones para medir tus conocimientos',
  'Comunidad activa e ideas de trading',
  'Análisis de mercado diario',
  'App propia de Revolution',
]

const schedule = ['09:00', '11:00', '20:00', '21:00', '22:00']

export default function AppFormation() {
  return (
    <section className="bg-sand dark:bg-dk-surface py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-10 max-w-6xl">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <SectionEyebrow>Todo desde una app</SectionEyebrow>
            <h2 className="font-display font-extrabold text-charcoal dark:text-dk-text text-balance leading-tight tracking-tight text-3xl sm:text-4xl lg:text-5xl mb-5">
              Estudiá trading a tu ritmo, sin depender de un solo horario
            </h2>
            <p className="text-muted dark:text-dk-text2 text-base lg:text-lg leading-relaxed">
              Dentro de Revolution tenés una app donde encontrás cursos, módulos grabados,
              evaluaciones, comunidad y recursos para avanzar paso a paso.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Columna izquierda: features + schedule */}
          <div>
            <ScrollReveal>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 bg-white/70 dark:bg-dk-card rounded-2xl px-4 py-3.5 border border-charcoal/8 dark:border-white/10 shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-turquoise flex-shrink-0" />
                    <span className="text-sm font-medium text-deep-slate dark:text-dk-text2 leading-tight">{label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Schedule pills */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white dark:bg-dk-card rounded-3xl p-6 border border-charcoal/8 dark:border-white/10 shadow-sm mb-8">
                <p className="text-xs font-semibold tracking-widest uppercase text-turquoise mb-4">
                  Sesiones en vivo diarias
                </p>
                <div className="flex gap-2 flex-wrap justify-center max-w-[300px] mx-auto">
                  {schedule.map((time) => (
                    <div
                      key={time}
                      className="flex items-center gap-2 px-4 py-2 bg-ocean/6 dark:bg-turquoise/10 border border-ocean/15 dark:border-turquoise/20 rounded-full"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-turquoise flex-shrink-0" />
                      <span className="text-sm font-semibold text-ocean dark:text-turquoise">{time}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted dark:text-dk-muted mt-4 leading-relaxed">
                  Si no podés conectarte en vivo, no pasa nada.{' '}
                  <strong className="text-charcoal dark:text-dk-text font-semibold">Las clases quedan grabadas</strong>{' '}
                  para que las veas cuando puedas.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-base font-semibold text-charcoal dark:text-dk-text mb-5">
                Podés empezar aunque trabajes, estudies o tengas poco tiempo.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <CTAButton size="large">Ver becas disponibles</CTAButton>
              </div>
              <p className="text-sm text-muted dark:text-dk-muted mt-3">
                Te ayudo a elegir el acceso que mejor se adapte a tu situación.
              </p>
            </ScrollReveal>
          </div>

          {/* Columna derecha: mockup de app / video */}
          <ScrollReveal delay={0.2} className="flex justify-center pt-4 lg:pt-8">
            <div className="w-full max-w-[260px] lg:max-w-[300px]">
              {/* Phone mockup — card flotante */}
              <div className="animate-float">
                <div className="relative rounded-[2.5rem] bg-deep-slate border-4 border-deep-slate shadow-[0_30px_80px_-15px_rgba(11,61,74,0.45)] overflow-hidden aspect-[9/18]">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-deep-slate rounded-b-xl z-10" />

                  {/* Pantalla / video */}
                  <div className="absolute inset-0 bg-gradient-to-br from-ocean/80 via-ocean to-deep-teal">
                    {/* Placeholder visual cuando no hay video */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                        <span className="text-3xl">▶</span>
                      </div>
                      <p className="text-white/70 text-xs text-center leading-relaxed">
                        Revolution App
                      </p>
                      {/* Barras de "contenido" decorativas */}
                      <div className="w-full space-y-2 mt-4">
                        {[90, 70, 55, 80, 65].map((w, i) => (
                          <div
                            key={i}
                            className="h-2 rounded-full bg-white/15"
                            style={{ width: `${w}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Video real — se muestra cuando /videos/revolution-app-demo.mp4 existe */}
                    {/* Imagen: /public/videos/revolution-app-demo.mp4 */}
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                      poster="/images/gabriel-setup-trading-laptop.jpeg"
                    >
                      <source src="/videos/revolution-app-demo.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>

                {/* Mini badge debajo del phone */}
                <div className="mt-4 flex justify-center">
                  <span className="inline-flex items-center gap-2 bg-white dark:bg-dk-card px-4 py-2 rounded-full shadow border border-charcoal/8 dark:border-white/10 text-xs font-semibold text-charcoal dark:text-dk-text">
                    <span className="w-2 h-2 rounded-full bg-turquoise animate-pulse" />
                    Comunidad activa ahora
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
