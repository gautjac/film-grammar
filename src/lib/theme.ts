export type Theme = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'film-grammar-theme'

export function readTheme(): Theme {
  if (typeof localStorage === 'undefined') return 'system'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark' || stored === 'system') return stored
  return 'system'
}

export function applyTheme(theme: Theme): void {
  const root = document.documentElement
  if (theme === 'system') {
    root.removeAttribute('data-theme')
  } else {
    root.setAttribute('data-theme', theme)
  }
}

export function setTheme(theme: Theme): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, theme)
  }
  applyTheme(theme)
}

export function effectiveTheme(theme: Theme): 'light' | 'dark' {
  if (theme !== 'system') return theme
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
