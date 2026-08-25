import { WHATSAPP_RESERVE_URL } from '../../constants'

/**
 * CTAButton — botón de conversión global.
 *
 * variants:
 *   'primary'        — fondo ocean (secciones claras)
 *   'primary-light'  — fondo blanco texto ocean (secciones oscuras)
 *   'secondary'      — borde ocean sin relleno (secciones claras)
 *   'secondary-light'— borde blanco sin relleno (secciones oscuras)
 *
 * sizes: 'sm' | 'default' | 'large'
 */
export default function CTAButton({
  children,
  href,
  variant = 'primary',
  size = 'default',
  className = '',
  onClick,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center text-center font-bold rounded-full transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

  const variants = {
    primary:
      'bg-turquoise text-white shadow-[0_0_28px_rgba(24,183,181,0.28)] hover:bg-dk-blue hover:text-white hover:shadow-[0_0_36px_rgba(77,220,216,0.38)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-turquoise',
    'primary-light':
      'bg-turquoise text-white shadow-[0_0_28px_rgba(24,183,181,0.28)] hover:bg-dk-blue hover:text-white hover:shadow-[0_0_36px_rgba(77,220,216,0.38)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-turquoise',
    secondary:
      'bg-transparent text-ocean border-2 border-ocean hover:bg-ocean/5 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-ocean dark:text-dk-blue dark:border-dk-blue/60 dark:hover:bg-dk-blue/10 dark:focus-visible:ring-dk-blue',
    'secondary-light':
      'bg-transparent text-white border-2 border-white/60 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-white',
  }

  const sizes = {
    sm: 'px-6 py-3 text-sm',
    default: 'px-8 py-4 text-sm',
    large: 'px-10 py-[1.1rem] text-base',
  }

  const url = href ?? WHATSAPP_RESERVE_URL
  const isExternal = url.startsWith('http')

  return (
    <a
      href={url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`${base} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.default} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </a>
  )
}
