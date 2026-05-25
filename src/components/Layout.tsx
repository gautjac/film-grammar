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
    `nav-link inline-flex items-center gap-1.5 px-2.5 py-1.5 text-sm border whitespace-nowrap ${
      isActive
        ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
        : 'border-transparent hover:bg-[var(--color-ink)]/5'
    }`

  return (
    <div className="min-h-full flex flex-col">
      <header className="border-b border-[var(--color-rule)]/30 bg-[var(--color-paper)] sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-paper)]/85">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 sm:gap-6">
          <NavLink
            to="/"
            className="font-serif text-lg sm:text-xl tracking-tight whitespace-nowrap shrink-0"
          >
            Film Grammar
          </NavLink>
          <nav className="flex gap-1 ml-auto items-center">
            <NavLink to="/" end className={navClass}>
              Library
            </NavLink>
            <NavLink to="/review" className={navClass}>
              <span>Review</span>
              {queue > 0 && (
                <span className="inline-block min-w-[1.5em] text-center text-[10px] font-medium bg-[var(--color-accent)] text-[var(--color-paper)] px-1.5 py-0.5 rounded-sm leading-tight">
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
      <footer className="border-t border-[var(--color-rule)]/30 mt-10 sm:mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 text-xs text-[var(--color-ink)]/50">
          Personal study notes — diagrams in SVG, reviews local-first via Dexie.
        </div>
      </footer>
    </div>
  )
}
