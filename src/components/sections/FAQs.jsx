import { useState } from 'react'
import SectionEyebrow from '../ui/SectionEyebrow'
import CTAButton from '../ui/CTAButton'
import ScrollReveal from '../ui/ScrollReveal'

const faqs = [
  {
    q: '¿Esto es real o es una estafa?',
    a: 'Es una duda válida. Antes de avanzar te explico cómo funciona el acceso, qué incluye cada beca, dónde queda tu capital y qué riesgos implica el trading para que decidas con información.',
  },
  {
    q: '¿A quién le doy mi dinero?',
    a: 'El capital se deposita en una cuenta de trading abierta con tus propios datos. No se lo transferís a Gabriel ni a Revolution, y ellos no tienen acceso a esos fondos.',
  },
  {
    q: '¿Esto es un curso pago?',
    a: 'No funciona como un curso tradicional. El acceso se habilita depositando capital en tu propia cuenta de trading en Exness. Ese dinero no se lo transferís a Gabriel ni a Revolution. Accedés a la formación, comunidad y herramientas a través de tu cuenta habilitada.',
  },
  {
    q: '¿Necesito experiencia previa?',
    a: 'No. Podés empezar desde cero con los módulos básicos, las clases para principiantes y el acompañamiento de la comunidad. Revolution tiene cursos básico, intermedio y avanzado con evaluaciones para medir tu progreso.',
  },
  {
    q: '¿Qué pasa si no tengo tiempo para estudiar?',
    a: 'Tenés módulos grabados para ver cuando puedas. Además, todos los días hay 5 sesiones en vivo en distintos horarios: dos a la mañana, dos a la tarde y una a la noche. Si no podés estar en vivo, las clases quedan grabadas para que las veas después.',
  },
  {
    q: '¿Cuál beca me conviene?',
    a: 'Depende de tu experiencia, capital y objetivo. Si me escribís, te hago unas preguntas simples y te recomiendo la opción más conveniente para tu situación. No hay una respuesta única para todos.',
  },
  {
    q: '¿Hay resultados garantizados?',
    a: 'No. El trading implica riesgo. Lo que sí tenés es formación, comunidad y una estructura para aprender con más claridad antes de operar por tu cuenta.',
  },
  {
    q: '¿Tengo que hacer una llamada?',
    a: 'No necesariamente. Podemos resolver todo por chat. Si necesitás una llamada para sentirte más seguro antes de tomar una decisión, la coordinamos. Lo importante es que entiendas bien cómo funciona antes de avanzar.',
  },
]

const institutionalFaqs = [
  { q: '¿Esto es real o es una estafa?', a: 'La idea es que puedas entenderlo antes de tomar una decisión. Revolution funciona como un ecosistema de formación, comunidad y recursos. No se presenta como una promesa de ganancias garantizadas.' },
  { q: '¿A quién le doy mi dinero?', a: 'No me pagás a mí ni le transferís dinero a Revolution. Abrís tu cuenta en Exness con tus datos y el capital queda en tu propia cuenta.' },
  { q: '¿Esto es un curso pago?', a: 'No es un curso tradicional suelto. Entrás con una beca de acceso que habilita distintos niveles de formación, comunidad, clases, app y recursos dentro de Revolution.' },
  { q: '¿Necesito experiencia previa?', a: 'No necesariamente. Hay accesos pensados para empezar desde cero y otros para quienes quieren avanzar con más herramientas.' },
  { q: '¿Puedo estudiar si tengo poco tiempo?', a: 'Sí. La app incluye módulos grabados y recursos para estudiar cuando puedas. También existen espacios en vivo para quienes quieran participar.' },
  { q: '¿Cuál beca me conviene?', a: 'Depende de tu experiencia, tu capital y el nivel de acompañamiento o recursos que quieras desbloquear. Por eso te ayudo a comparar antes de elegir.' },
  { q: '¿Hay resultados garantizados?', a: 'No. El trading implica riesgo y no existen ganancias garantizadas. La formación puede ayudarte a aprender con más criterio, pero cada decisión es responsabilidad del usuario.' },
  { q: '¿Tengo que hacer una llamada?', a: 'No necesariamente. Podés escribirme por WhatsApp y te explico primero por mensaje. Si después tiene sentido, podemos coordinar una consulta.' },
]

export default function FAQs({
  ctaHref,
  ctaLabel = 'Resolver mis dudas',
  ctaOnClick,
  microcopy = 'Te respondo por WhatsApp y te explico todo antes de que decidas.',
  conversion = false,
  showCta = true,
  hideCtaOnMobile = false,
}) {
  const displayedFaqs = conversion
    ? faqs.map((faq) => {
        if (faq.q === '¿Esto es un curso pago?') {
          return {
            ...faq,
            a: 'No funciona como un curso tradicional. El acceso se habilita depositando capital en tu propia cuenta de trading en Exness. Ese dinero no me lo transferís a mí ni a Revolution. Accedés a la formación, comunidad y herramientas a través de tu cuenta habilitada.',
          }
        }
        return faq
      })
    : institutionalFaqs

  return (
    <section id="faqs" className="scroll-mt-16 bg-sand dark:bg-dk-surface py-14 lg:py-20">
      <div className="container mx-auto px-6 lg:px-10 max-w-3xl">

        <ScrollReveal>
          <div className="text-center mb-8">
            <SectionEyebrow>¿Tenés dudas?</SectionEyebrow>
            <h2 className="font-display font-extrabold text-charcoal dark:text-dk-text text-balance leading-tight tracking-tight text-3xl sm:text-4xl lg:text-[2.5rem]">
              Preguntas frecuentes antes de entrar
            </h2>
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <ScrollReveal delay={0.1}>
          <div className="bg-white dark:bg-dk-card rounded-4xl overflow-hidden border border-charcoal/8 dark:border-white/10 shadow-sm divide-y divide-charcoal/8 dark:divide-white/10 mb-8">
            {displayedFaqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </ScrollReveal>

        {showCta && <ScrollReveal delay={0.15}>
          <div className={`${hideCtaOnMobile ? 'hidden md:flex' : 'flex'} flex-col items-center gap-3`}>
            <CTAButton href={ctaHref} onClick={ctaOnClick} size="large">{ctaLabel}</CTAButton>
            <p className="text-sm text-muted dark:text-dk-muted text-center">
              {microcopy}
            </p>
          </div>
        </ScrollReveal>}

      </div>
    </section>
  )
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  const itemId = `faq-${question.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 px-6 lg:px-7 py-4 lg:py-5 text-left hover:bg-charcoal/3 dark:hover:bg-white/5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-inset"
        aria-expanded={isOpen}
        aria-controls={itemId}
      >
          <span className="font-semibold text-charcoal dark:text-dk-text text-sm lg:text-base leading-snug">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-turquoise/40 flex items-center justify-center text-turquoise text-lg font-light leading-none transition-transform duration-200 motion-reduce:transition-none ${isOpen ? 'rotate-45' : ''}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div className={`grid transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div id={itemId} role="region" aria-hidden={!isOpen} className="overflow-hidden">
            <p className="px-6 lg:px-7 pb-4 text-muted dark:text-dk-muted text-sm lg:text-base leading-relaxed">
              {answer}
            </p>
        </div>
      </div>
    </div>
  )
}
