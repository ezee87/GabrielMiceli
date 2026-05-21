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
      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full border border-charcoal/30 dark:border-dk-blue/70 text-charcoal/70 dark:text-dk-blue dark:bg-dk-blue/10 hover:bg-charcoal/10 dark:hover:bg-dk-blue/20 transition-colors duration-200 select-none"
    >
      <span aria-hidden="true">{dark ? '☀' : '☾'}</span>
      {dark ? 'Modo claro' : 'Modo oscuro'}
    </button>
  )
}
