import { motion, useReducedMotion } from 'framer-motion'

/**
 * ScrollReveal — wrapper que revela su contenido al entrar en viewport.
 * Respeta prefers-reduced-motion automáticamente.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  y = 28,
  className = '',
  once = true,
}) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={shouldReduce ? false : { opacity: 0, y }}
      whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
