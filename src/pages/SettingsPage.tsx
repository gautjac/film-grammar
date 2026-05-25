import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../lib/db'
import {
  downloadReviewHistory,
  importReviewHistory,
  clearReviewHistory,
  type ImportResult,
} from '../lib/export'
import { readTheme, setTheme, effectiveTheme, type Theme } from '../lib/theme'

export function SettingsPage() {
  const reviewCount = useLiveQuery(() => db.reviews.count(), [], 0)
  const [importMsg, setImportMsg] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [confirmClear, setConfirmClear] = useState(false)
  const [theme, setThemeState] = useState<Theme>(() => readTheme())

  const onImportFile = async (file: File) => {
    setError(null)
    setImportMsg(null)
    try {
      const text = await file.text()
      const json = JSON.parse(text)
      const result: ImportResult = await importReviewHistory(json)
      setImportMsg(
        `Imported ${result.total} card${result.total === 1 ? '' : 's'} (${result.added} new, ${result.updated} updated${result.skipped ? `, ${result.skipped} skipped` : ''}).`,
      )
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Import failed.')
    }
  }

  const onClear = async () => {
    if (!confirmClear) {
      setConfirmClear(true)
      return
    }
    await clearReviewHistory()
    setConfirmClear(false)
    setImportMsg('Review history cleared.')
  }

  const chooseTheme = (t: Theme) => {
    setTheme(t)
    setThemeState(t)
  }

  const themeChipClass = (active: boolean) =>
    `px-3 py-1.5 text-xs border ${
      active
        ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
        : 'border-[var(--color-rule)]/60 hover:bg-[var(--color-ink)]/5'
    }`

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 sm:space-y-10">
      <div className="space-y-2">
        <div className="text-[11px] sm:text-xs uppercase tracking-[0.14em] text-[var(--color-ink)]/50 font-sans">
          Settings
        </div>
        <h1 className="text-[length:var(--text-h1-fluid)] font-serif leading-[1.08]">
          Your data, your preferences.
        </h1>
      </div>

      <section className="space-y-3 border-t border-[var(--color-rule)]/30 pt-6">
        <h2 className="text-xs uppercase tracking-[0.14em] text-[var(--color-ink)]/50 font-sans">
          Theme
        </h2>
        <p className="text-sm text-[var(--color-ink)]/70">
          Choose how the site renders. Auto follows your OS setting; effective theme is {effectiveTheme(theme)}.
        </p>
        <div className="flex gap-2">
          <button onClick={() => chooseTheme('system')} className={themeChipClass(theme === 'system')}>auto</button>
          <button onClick={() => chooseTheme('light')} className={themeChipClass(theme === 'light')}>light</button>
          <button onClick={() => chooseTheme('dark')} className={themeChipClass(theme === 'dark')}>dark</button>
        </div>
      </section>

      <section className="space-y-3 border-t border-[var(--color-rule)]/30 pt-6">
        <h2 className="text-xs uppercase tracking-[0.14em] text-[var(--color-ink)]/50 font-sans">
          Review history
        </h2>
        <p className="text-sm text-[var(--color-ink)]/70">
          You have <strong>{reviewCount}</strong> card{reviewCount === 1 ? '' : 's'} in your review history.
          Stored locally in your browser via IndexedDB. Export to keep a backup or move to another device.
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => downloadReviewHistory()}
            className="px-3 py-1.5 text-sm border border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors"
          >
            Download JSON
          </button>
          <label className="px-3 py-1.5 text-sm border border-[var(--color-rule)]/60 hover:bg-[var(--color-ink)]/5 cursor-pointer">
            Import from file
            <input
              type="file"
              accept="application/json"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0]
                if (f) onImportFile(f)
                e.target.value = ''
              }}
            />
          </label>
          <button
            onClick={onClear}
            className={`px-3 py-1.5 text-sm border ${
              confirmClear
                ? 'bg-[var(--color-accent)] text-[var(--color-paper)] border-[var(--color-accent)]'
                : 'border-[var(--color-rule)]/60 hover:bg-[var(--color-ink)]/5'
            }`}
          >
            {confirmClear ? 'Tap again to confirm' : 'Clear history'}
          </button>
          {confirmClear && (
            <button
              onClick={() => setConfirmClear(false)}
              className="px-3 py-1.5 text-sm border border-[var(--color-rule)]/60 hover:bg-[var(--color-ink)]/5"
            >
              cancel
            </button>
          )}
        </div>
        {importMsg && <p className="text-sm text-[var(--color-ink)]/70">{importMsg}</p>}
        {error && <p className="text-sm text-[var(--color-accent)]">{error}</p>}
      </section>

      <div className="pt-2 sm:pt-4">
        <Link to="/" className="text-sm text-[var(--color-ink)]/70 hover:text-[var(--color-accent)] transition-colors">
          ← back to library
        </Link>
      </div>
    </div>
  )
}
