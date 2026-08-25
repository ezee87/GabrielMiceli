export const VARIANT_STORAGE_KEY = 'davi_landing_variant'

const isVariant = (value) => value === 'A' || value === 'B'

function readStoredVariant(storage) {
  try {
    const value = storage?.getItem(VARIANT_STORAGE_KEY)
    return isVariant(value) ? value : null
  } catch {
    return null
  }
}

function storeVariant(storage, variant) {
  try {
    storage?.setItem(VARIANT_STORAGE_KEY, variant)
  } catch {
    // La landing sigue funcionando aunque localStorage esté bloqueado.
  }
}

export function resolveLandingVariant({
  pathname = typeof window !== 'undefined' ? window.location.pathname : '/',
  search = typeof window !== 'undefined' ? window.location.search : '',
  storage = typeof window !== 'undefined' ? window.localStorage : null,
  random = Math.random,
} = {}) {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'
  if (normalizedPath !== '/landing') return null

  const params = new URLSearchParams(search)
  const forcedVariant = params.get('variant')?.toUpperCase()

  if (isVariant(forcedVariant)) {
    storeVariant(storage, forcedVariant)
    return forcedVariant
  }

  const storedVariant = readStoredVariant(storage)
  if (storedVariant) return storedVariant

  const assignedVariant = random() < 0.5 ? 'A' : 'B'
  storeVariant(storage, assignedVariant)
  return assignedVariant
}
