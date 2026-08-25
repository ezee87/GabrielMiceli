import { useEffect, useState } from 'react'
import { BOOKING_URL } from '../../constants'
import CTAButton from '../ui/CTAButton'
import SectionEyebrow from '../ui/SectionEyebrow'
import ScrollReveal from '../ui/ScrollReveal'

const CALENDLY_URL = `${BOOKING_URL}?hide_gdpr_banner=1&primary_color=18b7b5&background_color=061a1d&text_color=f8f6f1`

export default function BookingSection() {
  const [open, setOpen] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  const openCalendly = (event) => {
    event.preventDefault()
    setFailed(false)
    setOpen(true)
  }

  return (
    <>
      <section id="booking" className="booking-section relative overflow-hidden bg-dk-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,183,181,0.12),transparent_58%)]" aria-hidden="true" />
        <div className="container relative mx-auto px-5 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto mb-5 max-w-2xl text-center">
              <SectionEyebrow light>Hablemos antes de que decidas</SectionEyebrow>
              <h2 className="section-title mb-2 text-balance font-display text-[clamp(1.75rem,2.5vw,2.25rem)] font-extrabold leading-tight tracking-tight text-dk-text">Agendá una consulta de 15 minutos</h2>
              <p className="section-copy balanced-text copy-narrow text-[15px] leading-relaxed text-dk-text2">Te explico cómo funciona el acceso, resolvemos tus dudas y vemos qué beca tiene sentido para vos.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="text-center">
              <div className="mb-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                {['15 minutos', 'Online', 'Sin compromiso'].map((item) => (
                  <div key={item} className="inline-flex items-center gap-2 rounded-full border border-turquoise/25 bg-white/[0.035] px-4 py-2 text-sm font-semibold text-dk-text shadow-[0_0_18px_-12px_rgba(24,183,181,0.65)]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-turquoise shadow-[0_0_8px_rgba(24,183,181,0.8)]" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
              <CTAButton href={BOOKING_URL} onClick={openCalendly} size="large" className="shadow-[0_0_30px_rgba(24,183,181,0.24)]">
                Agendar consulta de 15 min
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-6" role="dialog" aria-modal="true" aria-label="Elegir día y horario">
          <button className="absolute inset-0 cursor-default" type="button" aria-label="Cerrar calendario" onClick={() => setOpen(false)} />
          <div className="relative z-10 flex h-[85vh] max-h-[760px] w-[94vw] max-w-[420px] flex-col overflow-hidden rounded-[18px] border border-turquoise/30 bg-dk-bg shadow-[0_0_60px_rgba(24,183,181,0.2)] md:h-[min(90svh,760px)] md:w-full md:max-w-[900px] md:rounded-2xl">
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
    </>
  )
}
