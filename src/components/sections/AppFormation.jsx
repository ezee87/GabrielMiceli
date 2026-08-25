import ScrollReveal from '../ui/ScrollReveal'
import SectionEyebrow from '../ui/SectionEyebrow'

// Video requerido: /public/videos/revolution-app-demo.mp4
// Imagen de apoyo: /public/images/gabriel-setup-trading-laptop.jpg

const features = [
  'Cursos básico, intermedio y avanzado',
  'Módulos grabados para ver cuando puedas',
  'Clases y reuniones en vivo',
  'Evaluaciones para medir tu avance',
  'Comunidad activa',
  'Recursos para seguir aprendiendo',
]

export default function AppFormation() {
  return (
    <section id="app-revolution" className="scroll-mt-16 bg-sand dark:bg-dk-surface py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-10 max-w-6xl">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <SectionEyebrow>Todo desde una app</SectionEyebrow>
            <h2 className="font-display font-extrabold text-charcoal dark:text-dk-text text-balance leading-tight tracking-tight text-3xl sm:text-4xl lg:text-5xl mb-5">
              Estudiá trading a tu ritmo, sin depender de un solo horario
            </h2>
            <p className="text-muted dark:text-dk-text2 text-base lg:text-lg leading-relaxed">
              Dentro de Revolution encontrás cursos, módulos grabados, clases, comunidad, evaluaciones y recursos para avanzar paso a paso.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-12 items-center">

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

            <ScrollReveal delay={0.1}>
              <div className="bg-white dark:bg-dk-card rounded-3xl p-6 border border-charcoal/8 dark:border-white/10 shadow-sm">
                <p className="text-xs font-semibold tracking-widest uppercase text-turquoise mb-4">
                  Mirá la app por dentro
                </p>
                <p className="text-sm text-muted dark:text-dk-muted leading-relaxed">
                  En el video vas a ver cómo se organizan los cursos, las clases en vivo, la comunidad, las evaluaciones y los recursos disponibles dentro de Revolution.
                </p>
                <ul className="mt-5 grid gap-2 border-t border-charcoal/8 pt-4 text-sm text-deep-slate dark:border-white/10 dark:text-dk-text2 sm:grid-cols-2">
                  {['Cursos por nivel', 'Clases y eventos en vivo', 'Comunidad y recursos', 'Evaluaciones para medir avance'].map((item) => (
                    <li key={item} className="flex items-center gap-2"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-turquoise" />{item}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

          </div>

          {/* Columna derecha: video de la app */}
          <ScrollReveal delay={0.2} className="flex justify-center pt-4 lg:pt-0">
            <div className="w-full max-w-[270px] overflow-hidden rounded-[2rem] border border-turquoise/25 bg-deep-slate p-1.5 shadow-[0_22px_55px_-26px_rgba(24,183,181,0.5),0_0_26px_-18px_rgba(24,183,181,0.32)] sm:max-w-[290px] lg:max-w-[280px]">
              <div className="flex aspect-[9/16] items-center justify-center overflow-hidden rounded-[1.65rem] bg-black/30">
                <video controls playsInline preload="metadata" poster="/images/video.png" className="h-full w-full object-contain">
                  <source src="/videos/video_aplicacion.MP4" type="video/mp4" />
                  Tu navegador no puede reproducir este video.
                </video>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
