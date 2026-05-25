import { useEffect, useState } from 'react'
import { readTheme, setTheme, effectiveTheme, type Theme } from '../lib/theme'

const SunIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx={12} cy={12} r={4} />
    <line x1={12} y1={2} x2={12} y2={4} />
    <line x1={12} y1={20} x2={12} y2={22} />
    <line x1={4.93} y1={4.93} x2={6.34} y2={6.34} />
    <line x1={17.66} y1={17.66} x2={19.07} y2={19.07} />
    <line x1={2} y1={12} x2={4} y2={12} />
    <line x1={20} y1={12} x2={22} y2={12} />
    <line x1={4.93} y1={19.07} x2={6.34} y2={17.66} />
    <line x1={17.66} y1={6.34} x2={19.07} y2={4.93} />
  </svg>
)

const MoonIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const ROTATION: Theme[] = ['system', 'light', 'dark']

export function ThemeToggle() {
  const [theme, setThemeState] = useState<Theme>('system')

  useEffect(() => {
    setThemeState(readTheme())
  }, [])

  // Re-render when system colour scheme changes (only matters in system mode).
  useEffect(() => {
    if (theme !== 'system') return
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => setThemeState((t) => t)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [theme])

  const cycle = () => {
    const i = ROTATION.indexOf(theme)
    const next = ROTATION[(i + 1) % ROTATION.length]
    setTheme(next)
    setThemeState(next)
  }

  const showing = effectiveTheme(theme)
  const label =
    theme === 'system'
      ? `Theme: auto (${showing})`
      : `Theme: ${theme}`

  return (
    <button
      onClick={cycle}
      aria-label={label}
      title={label}
      className="nav-link inline-flex items-center justify-center w-9 h-9 border border-transparent hover:bg-[var(--color-ink)]/5"
    >
      {showing === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
