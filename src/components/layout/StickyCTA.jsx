import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CTAButton from '../ui/CTAButton'

/**
 * StickyCTA — barra fija inferior en mobile, visible después del hero.
 * Solo se muestra en md hacia abajo (oculta en desktop con md:hidden).
 */
export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Mostrar después de 80% del viewport de alto
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="bg-warm-white/95 backdrop-blur-md border-t border-charcoal/10 px-4 pt-3"
            style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom, 12px))' }}
          >
            <CTAButton size="default" className="w-full justify-center text-center">
              Reservar mi beca
            </CTAButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
