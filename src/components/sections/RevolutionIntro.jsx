import ScrollReveal from '../ui/ScrollReveal'
import SectionEyebrow from '../ui/SectionEyebrow'

const steps = [
  ['Empezás por tu nivel', 'Cursos básicos, intermedios o avanzados según tu punto de partida.'],
  ['Estudiás cuando podés', 'Módulos grabados para avanzar sin depender de un único horario.'],
  ['Participás de espacios en vivo', 'Clases y reuniones para resolver dudas y ver análisis en tiempo real.'],
  ['Medís tu avance', 'Evaluaciones para ordenar lo aprendido y avanzar con más claridad.'],
]

export default function RevolutionIntro() {
  return (
    <section id="que-es-revolution" className="bg-warm-white dark:bg-dk-bg py-16 lg:py-20">
      <div className="container mx-auto max-w-5xl px-6 lg:px-10">
        <ScrollReveal>
          <div className="mx-auto max-w-[800px] text-center">
            <SectionEyebrow>Comunidad y formación</SectionEyebrow>
            <h2 className="mb-6 text-balance font-display text-3xl font-extrabold leading-tight tracking-tight text-charcoal dark:text-dk-text sm:text-4xl lg:text-5xl">¿Qué es Revolution?</h2>
            <p className="mb-4 text-base leading-relaxed text-muted dark:text-dk-text2 lg:text-lg">Revolution es un ecosistema de formación en trading donde podés aprender con contenido por niveles, clases, comunidad, herramientas y evaluaciones para avanzar con más estructura.</p>
            <p className="text-base leading-relaxed text-muted dark:text-dk-text2 lg:text-lg">No es solo mirar videos sueltos. La propuesta combina app, formación, espacios en vivo, comunidad y evaluaciones para que puedas aprender con más claridad y no recorrer el camino solo.</p>
          </div>
        </ScrollReveal>
        <div className="mx-auto mt-9 grid max-w-4xl gap-x-10 border-y border-charcoal/10 dark:border-white/10 md:grid-cols-2">
          {steps.map(([title, copy], index) => (
            <ScrollReveal key={title} delay={index * 0.035} y={14}>
              <div className="grid grid-cols-[52px_1fr] gap-3 border-b border-charcoal/10 py-5 dark:border-white/10 md:min-h-[126px] md:[&:nth-last-child(-n+2)]:border-b-0">
                <span className="font-display text-2xl font-extrabold text-turquoise transition-colors hover:text-dk-blue">{String(index + 1).padStart(2, '0')}</span>
                <div><h3 className="mb-2 text-lg font-bold text-charcoal dark:text-dk-text">{title}</h3><p className="text-sm leading-relaxed text-muted dark:text-dk-text2">{copy}</p></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
