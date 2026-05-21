import { WHATSAPP_URL } from '../../constants'

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
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 whitespace-nowrap'

  const variants = {
    primary:
      'bg-ocean text-white hover:bg-deep-teal shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-ocean',
    'primary-light':
      'bg-white text-ocean hover:bg-warm-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-white',
    secondary:
      'bg-transparent text-ocean border-2 border-ocean hover:bg-ocean/5 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-ocean',
    'secondary-light':
      'bg-transparent text-white border-2 border-white/60 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-white',
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    default: 'px-7 py-3.5 text-sm',
    large: 'px-9 py-4 text-base',
  }

  const url = href ?? WHATSAPP_URL
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
