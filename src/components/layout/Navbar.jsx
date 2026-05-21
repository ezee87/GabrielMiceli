import { useState, useEffect } from 'react'
import CTAButton from '../ui/CTAButton'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-warm-white/95 backdrop-blur-md shadow-sm border-b border-charcoal/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo / Marca */}
        <a href="#hero" className="flex flex-col leading-none group">
          <span
            className={`font-display font-bold text-[15px] tracking-tight transition-colors ${
              scrolled ? 'text-charcoal' : 'text-white lg:text-charcoal'
            }`}
          >
            Gabriel Miceli
          </span>
          <span
            className={`text-[10px] font-medium tracking-widest uppercase transition-colors ${
              scrolled ? 'text-turquoise' : 'text-turquoise/90'
            }`}
          >
            × Revolution
          </span>
        </a>

        {/* CTA derecha */}
        <CTAButton size="sm" className="shadow-none">
          Reservar mi beca
        </CTAButton>
      </div>
    </header>
  )
}
