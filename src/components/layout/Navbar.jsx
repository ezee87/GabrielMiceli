import { useState, useEffect } from 'react'
import CTAButton from '../ui/CTAButton'

export default function Navbar({
  brand = 'Gabriel Miceli',
  ctaLabel = 'Reservar mi beca',
  ctaHref,
  ctaVariant = 'primary',
  navItems,
  mobileLogoOnly = false,
  lightAtTop = true,
  invertedAtTop = false,
}) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navItems?.length
        ? scrolled
          ? 'border-b border-charcoal/8 bg-warm-white/95 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-dk-bg/95'
          : 'bg-transparent'
        : scrolled
          ? 'bg-warm-white/95 dark:bg-dk-bg/95 backdrop-blur-md shadow-sm border-b border-charcoal/5 dark:border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className={`container mx-auto px-3 md:px-5 lg:px-8 h-12 flex items-center ${mobileLogoOnly ? 'justify-center md:justify-between' : 'justify-between'}`}>
        {/* Logo / Marca */}
        <a href="#hero" className={`flex flex-col leading-none group transition-opacity duration-300 ${navItems?.length && !scrolled ? 'opacity-100 md:pointer-events-none md:opacity-0' : 'opacity-100'}`}>
          <span
            className={`font-display font-bold text-[13px] tracking-tight transition-colors dark:text-dk-text md:text-[15px] ${
              navItems?.length
                ? 'text-charcoal'
                : scrolled
                ? 'text-charcoal'
                : invertedAtTop
                  ? 'text-white'
                  : !lightAtTop
                    ? 'text-charcoal'
                    : 'text-white lg:text-charcoal'
            }`}
          >
            {brand}
          </span>
          <span
            className={`text-[9px] font-medium tracking-widest uppercase transition-colors md:text-[10px] ${
              scrolled ? 'text-turquoise' : 'text-turquoise/90'
            }`}
          >
            × Revolution
          </span>
        </a>

        {navItems?.length ? (
          <nav className={`flex items-center gap-1.5 transition-all duration-300 md:gap-5 ${scrolled ? '' : 'mr-0 mt-3 h-10 rounded-full border border-white/75 bg-white/82 px-2.5 shadow-[0_10px_34px_-16px_rgba(17,17,17,0.42)] backdrop-blur-xl dark:border-white/15 dark:bg-dk-card/88 md:mr-2 md:px-6'}`} aria-label="Navegación principal">
            {navItems.map((item, index) => (
              <a key={item.href} href={item.href} className="inline whitespace-nowrap border-b border-transparent text-[8px] font-semibold uppercase leading-none tracking-[0.06em] text-charcoal/80 transition-colors hover:border-turquoise/70 hover:text-turquoise dark:text-white/80 dark:hover:text-turquoise min-[390px]:text-[8.5px] md:text-[11px] md:tracking-[0.1em]">
                {item.label}
              </a>
            ))}
          </nav>
        ) : (
          <div className={`${mobileLogoOnly ? 'hidden md:flex' : 'flex'} items-center gap-3`}>
            <CTAButton href={ctaHref} variant={ctaVariant} size="sm" className="!px-4 !py-2 !text-[11px] !shadow-none sm:!px-5 sm:!text-xs">
              {ctaLabel}
            </CTAButton>
          </div>
        )}
      </div>
    </header>
  )
}
