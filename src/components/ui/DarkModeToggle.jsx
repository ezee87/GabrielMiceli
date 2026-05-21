import { useState, useEffect } from 'react'

/**
 * DarkModeToggle — botón discreto para alternar modo claro / oscuro.
 * - El modo claro es el default.
 * - Persiste la preferencia en localStorage.
 * - Si la URL tiene ?theme=dark, activa dark mode al cargar.
 */
export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const params = new URLSearchParams(window.location.search)
    if (params.get('theme') === 'dark') return true
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    const el = document.documentElement
    if (dark) {
      el.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      el.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark((d) => !d)}
      title={dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      aria-label={dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium rounded-full border border-charcoal/20 dark:border-white/20 text-charcoal/60 dark:text-dk-text2 hover:bg-charcoal/5 dark:hover:bg-white/10 transition-colors duration-200 select-none"
    >
      <span aria-hidden="true">{dark ? '☀' : '☾'}</span>
      {dark ? 'Modo claro' : 'Modo oscuro'}
    </button>
  )
}
