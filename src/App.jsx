import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { useState } from 'react'
import InstitutionalPage from './pages/InstitutionalPage'
import VariantWhatsappPage from './pages/VariantWhatsappPage'
import VariantBookingPage from './pages/VariantBookingPage'
import { resolveLandingVariant } from './utils/variantResolver'

export default function App() {
  const [variant] = useState(() => resolveLandingVariant())

  if (import.meta.env.DEV) {
    console.log('Landing variant:', variant ?? 'institutional')
  }

  const page = variant === 'A'
    ? <VariantWhatsappPage />
    : variant === 'B'
      ? <VariantBookingPage />
      : <InstitutionalPage />

  return (
    <>
      {page}
      <Analytics />
      <SpeedInsights />
    </>
  )
}
