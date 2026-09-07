import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { BOOKING_URL } from '../constants'
import CTAButton from '../components/ui/CTAButton'

const CALENDLY_URL = `${BOOKING_URL}?hide_gdpr_banner=1&primary_color=18b7b5&background_color=061a1d&text_color=f8f6f1`

const CalendlyPopupContext = createContext({ openCalendly: () => {} })

export function useCalendlyPopup() {
  return useContext(CalendlyPopupContext)
}

export default function CalendlyPopupProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [failed, setFailed] = useState(false)
  const modalRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const trapFocus = (event) => {
      if (event.key !== 'Tab') return
      const focusable = modalRef.current?.querySelectorAll('button, a[href], iframe, [tabindex]:not([tabindex="-1"])')
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    window.addEventListener('keydown', trapFocus)
    requestAnimationFrame(() => modalRef.current?.querySelector('button')?.focus())

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
      window.removeEventListener('keydown', trapFocus)
      triggerRef.current?.focus()
    }
  }, [open])

  const openCalendly = (event) => {
    event?.preventDefault()
    triggerRef.current = event?.currentTarget ?? null
    setFailed(false)
    setOpen(true)
  }

  return (
    <CalendlyPopupContext.Provider value={{ openCalendly }}>
      {children}

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-6" role="dialog" aria-modal="true" aria-label="Elegir día y horario">
          <button className="absolute inset-0 cursor-default" type="button" aria-label="Cerrar calendario" onClick={() => setOpen(false)} />
          <div ref={modalRef} className="relative z-10 flex h-[85vh] max-h-[760px] w-[94vw] max-w-[420px] flex-col overflow-hidden rounded-[18px] border border-turquoise/30 bg-dk-bg shadow-[0_0_60px_rgba(24,183,181,0.2)] md:h-[min(90svh,760px)] md:w-full md:max-w-[900px] md:rounded-2xl">
            <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
              <p className="font-display text-sm font-bold text-white sm:text-base">Elegí tu día y horario</p>
              <button type="button" onClick={() => setOpen(false)} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xl leading-none text-white/75 transition-colors hover:bg-white/10 hover:text-white" aria-label="Cerrar calendario">×</button>
            </div>
            {failed ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
                <p className="max-w-md text-dk-text2">El calendario no pudo cargarse. Podés abrirlo directamente para elegir un horario.</p>
                <CTAButton href={BOOKING_URL}>Abrir Calendly</CTAButton>
              </div>
            ) : (
              <iframe
                src={CALENDLY_URL}
                title="Calendario de Gabriel Miceli"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                className="min-h-0 flex-1 border-0 bg-dk-bg"
                onError={() => setFailed(true)}
              />
            )}
            {!failed && (
              <div className="shrink-0 border-t border-white/10 px-4 py-2 text-center">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-dk-muted underline-offset-4 hover:text-turquoise hover:underline">Si no carga, abrir Calendly directamente</a>
              </div>
            )}
          </div>
        </div>
      )}
    </CalendlyPopupContext.Provider>
  )
}
