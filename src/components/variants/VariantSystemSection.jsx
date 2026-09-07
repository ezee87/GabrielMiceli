import CTAButton from '../ui/CTAButton'
import SectionEyebrow from '../ui/SectionEyebrow'
import ScrollReveal from '../ui/ScrollReveal'

const items = [
  ['Formación por niveles', 'Cursos básico, intermedio y avanzado para que puedas empezar desde tu punto actual.'],
  ['Módulos grabados', 'Contenido asincrónico para estudiar cuando puedas, sin depender de un solo horario.'],
  ['Reuniones y clases en vivo', 'Espacios para aprender, resolver dudas y ver análisis en tiempo real.'],
  ['Comunidad activa', 'Personas que también están aprendiendo, practicando y avanzando.'],
  ['Evaluaciones', 'Instancias para medir tus conocimientos y avanzar con más claridad.'],
  ['Becas de acceso', 'Opciones de 300, 600 y 1.000 USD según el nivel de herramientas que quieras desbloquear.'],
]

export default function VariantSystemSection({ ctaHref = '#becas', ctaLabel = 'Ver becas disponibles', ctaOnClick }) {
  return (
    <section className="bg-soft-gray py-12 dark:bg-dk-bg lg:py-16">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-7 max-w-3xl md:mb-9">
            <SectionEyebrow>Formación y comunidad</SectionEyebrow>
            <p className="mb-4 text-base font-bold text-turquoise lg:text-lg">No necesitás saber trading para empezar. Necesitás una estructura clara.</p>
            <h2 className="mb-4 text-balance font-display text-3xl font-extrabold leading-tight tracking-tight text-charcoal dark:text-dk-text sm:text-4xl lg:text-[2.5rem]">
              ¿Qué encontrás adentro de Revolution?
            </h2>
            <p className="balanced-text max-w-[62ch] text-base leading-relaxed text-muted dark:text-dk-text2 lg:text-lg">
              Un sistema pensado para que puedas aprender con estructura, avanzar a tu ritmo y no recorrer el camino solo.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-3 md:block md:border-y md:border-charcoal/10 md:dark:border-white/10">
          {items.map(([title, description], index) => (
            <ScrollReveal key={title} delay={(index % 3) * 0.04} y={16}>
              <div className="group grid h-full gap-2 rounded-2xl border border-charcoal/10 bg-white/55 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.035] md:grid-cols-[64px_200px_1fr] md:items-center md:gap-3 md:rounded-none md:border-x-0 md:border-t-0 md:bg-transparent md:px-0 md:py-4 md:shadow-none md:last:border-b-0 md:dark:bg-transparent lg:grid-cols-[72px_220px_1fr]">
                <span className="font-display text-2xl font-extrabold tracking-tight text-turquoise/55 transition-all group-hover:text-dk-blue group-hover:[text-shadow:0_0_16px_rgba(77,220,216,0.35)] md:text-4xl">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-sm font-bold leading-snug text-charcoal dark:text-dk-text md:text-base lg:text-lg">{title}</h3>
                <p className="text-[12px] leading-[1.5] text-muted dark:text-dk-muted md:text-sm md:leading-relaxed">{description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-7 text-center text-base font-semibold text-dk-text2">Todo pensado para que no empieces solo ni perdido entre videos sueltos.</p>

        <ScrollReveal delay={0.12}>
          <div className="mt-9 text-center">
            <CTAButton href={ctaHref} onClick={ctaOnClick} size="large">{ctaLabel}</CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
