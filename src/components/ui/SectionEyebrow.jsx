/**
 * SectionEyebrow — etiqueta pequeña de sección.
 * light=true para fondos oscuros (ocean).
 * className se aplica al elemento <p> para permitir clases de animación (ej. GSAP).
 */
export default function SectionEyebrow({ children, light = false, className = '' }) {
  return (
    <p
      className={`text-[11px] font-semibold tracking-[0.22em] uppercase mb-4 ${
        light ? 'text-turquoise/80' : 'text-turquoise'
      } ${className}`}
    >
      {children}
    </p>
  )
}
