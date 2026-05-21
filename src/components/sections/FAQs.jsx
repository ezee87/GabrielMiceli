import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import SectionEyebrow from '../ui/SectionEyebrow'
import CTAButton from '../ui/CTAButton'
import ScrollReveal from '../ui/ScrollReveal'

const faqs = [
  {
    q: '¿Esto es un curso pago?',
    a: 'No funciona como un curso tradicional. El acceso se habilita depositando capital en tu propia cuenta de trading en Exness. Ese dinero no se lo transferís a Gabriel ni a Revolution. Accedés a la formación, comunidad y herramientas a través de tu cuenta habilitada.',
  },
  {
    q: '¿La plata queda a mi nombre?',
    a: 'Sí. Abrís tu cuenta en Exness con tus datos, tu nombre y tu documento. El capital queda en tu propia cuenta para que puedas operar. Gabriel ni Revolution tienen acceso a esos fondos.',
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
    a: 'No. El trading implica riesgo. Revolution te da formación, comunidad y herramientas, pero los resultados dependen de tu práctica, disciplina, gestión del riesgo y decisiones. Nadie puede garantizar resultados en el trading.',
  },
  {
    q: '¿Tengo que hacer una llamada?',
    a: 'No necesariamente. Podemos resolver todo por chat. Si necesitás una llamada para sentirte más seguro antes de tomar una decisión, la coordinamos. Lo importante es que entiendas bien cómo funciona antes de avanzar.',
  },
]

export default function FAQs() {
  return (
    <section id="faqs" className="bg-sand py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-10 max-w-3xl">

        <ScrollReveal>
          <div className="text-center mb-12">
            <SectionEyebrow>¿Tenés dudas?</SectionEyebrow>
            <h2 className="font-display font-extrabold text-charcoal text-balance leading-tight tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              Preguntas frecuentes antes de entrar
            </h2>
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <ScrollReveal delay={0.1}>
          <div className="bg-white rounded-4xl overflow-hidden border border-charcoal/8 shadow-sm divide-y divide-charcoal/8 mb-10">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-col items-center gap-3">
            <CTAButton size="large">Resolver mis dudas</CTAButton>
            <p className="text-sm text-muted text-center">
              Te respondo por WhatsApp y te explico todo antes de que decidas.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  const shouldReduce = useReducedMotion()

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 px-7 py-5 lg:py-6 text-left hover:bg-charcoal/3 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-charcoal text-sm lg:text-base leading-snug">
          {question}
        </span>
        <motion.span
          animate={shouldReduce ? {} : { rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="flex-shrink-0 w-6 h-6 rounded-full border border-turquoise/40 flex items-center justify-center text-turquoise text-lg font-light leading-none"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={shouldReduce ? false : { height: 0, opacity: 0 }}
            animate={shouldReduce ? {} : { height: 'auto', opacity: 1 }}
            exit={shouldReduce ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="px-7 pb-5 text-muted text-sm lg:text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
