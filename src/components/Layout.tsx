import { NavLink, Outlet } from 'react-router-dom'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../lib/db'
import { allCards } from '../concepts'

export function Layout() {
  const dueCount = useLiveQuery(async () => {
    const now = Date.now()
    return db.reviews.where('dueAt').belowOrEqual(now).count()
  }, [], 0)

  const seenIds = useLiveQuery(async () => {
    const rows = await db.reviews.toArray()
    return new Set(rows.map((r) => r.cardId))
  }, [], new Set<string>())

  const unseen = allCards.filter((c) => !seenIds?.has(c.id)).length
  const queue = (dueCount ?? 0) + unseen

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-1.5 text-sm border ${
      isActive
        ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
        : 'border-transparent hover:bg-[var(--color-ink)]/5'
    }`

  return (
    <div className="min-h-full flex flex-col">
      <header className="border-b border-[var(--color-rule)]/30 bg-[var(--color-paper)]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-6">
          <NavLink to="/" className="font-serif text-xl tracking-tight">
            Film Grammar
          </NavLink>
          <nav className="flex gap-1 ml-auto items-center">
            <NavLink to="/" end className={navClass}>
              Library
            </NavLink>
            <NavLink to="/review" className={navClass}>
              Review
              {queue > 0 && (
                <span className="ml-2 inline-block min-w-[1.5em] text-center text-xs bg-[var(--color-accent)] text-[var(--color-paper)] px-1.5 rounded-sm">
                  {queue}
                </span>
              )}
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-[var(--color-rule)]/30 mt-12">
        <div className="max-w-5xl mx-auto px-6 py-4 text-xs text-[var(--color-ink)]/50">
          Personal study notes — diagrams in SVG, reviews local-first via Dexie.
        </div>
      </footer>
    </div>
  )
}
