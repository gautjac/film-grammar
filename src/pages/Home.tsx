import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { concepts } from '../concepts'
import type { Family, Medium } from '../types'

const FAMILY_ORDER: Family[] = [
  'Framing',
  'Camera Movement',
  'Lensing & Optics',
  'Editing & Coverage',
  'Mise-en-scène',
  'Sequence Construction',
  'Sound',
  'Lighting',
  'Color',
  'Documentary Modes',
]

const COLLAPSED_KEY = 'film-grammar-collapsed-families'

function readCollapsed(): Set<Family> {
  if (typeof localStorage === 'undefined') return new Set()
  try {
    const raw = localStorage.getItem(COLLAPSED_KEY)
    if (!raw) return new Set()
    const arr = JSON.parse(raw) as Family[]
    return new Set(arr.filter((f) => FAMILY_ORDER.includes(f)))
  } catch {
    return new Set()
  }
}

function writeCollapsed(set: Set<Family>): void {
  if (typeof localStorage === 'undefined') return
  localStorage.setItem(COLLAPSED_KEY, JSON.stringify([...set]))
}

const Caret = ({ open }: { open: boolean }) => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transform: open ? 'rotate(0deg)' : 'rotate(-90deg)',
      transition: 'transform 160ms ease-out',
      flexShrink: 0,
    }}
    aria-hidden="true"
  >
    <polyline points="3,4.5 6,8 9,4.5" />
  </svg>
)

export function Home() {
  const [query, setQuery] = useState('')
  const [familyFilter, setFamilyFilter] = useState<Family | 'all'>('all')
  const [mediumFilter, setMediumFilter] = useState<Medium | 'all'>('all')
  const [collapsed, setCollapsed] = useState<Set<Family>>(() => readCollapsed())

  useEffect(() => {
    writeCollapsed(collapsed)
  }, [collapsed])

  const toggleFamily = (family: Family) => {
    setCollapsed((prev) => {
      const next = new Set(prev)
      if (next.has(family)) next.delete(family)
      else next.add(family)
      return next
    })
  }

  const collapseAll = () => setCollapsed(new Set(FAMILY_ORDER))
  const expandAll = () => setCollapsed(new Set())

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return concepts.filter((c) => {
      if (familyFilter !== 'all' && c.family !== familyFilter) return false
      if (mediumFilter !== 'all' && !c.tags.includes(mediumFilter)) return false
      if (q) {
        const haystack = `${c.title} ${c.blurb} ${c.family}`.toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })
  }, [query, familyFilter, mediumFilter])

  const byFamily = useMemo(() => {
    const m = new Map<Family, typeof concepts>()
    for (const c of filtered) {
      const list = m.get(c.family) ?? []
      list.push(c)
      m.set(c.family, list)
    }
    return m
  }, [filtered])

  const familyCounts = useMemo(() => {
    const m = new Map<Family, number>()
    for (const c of concepts) {
      m.set(c.family, (m.get(c.family) ?? 0) + 1)
    }
    return m
  }, [])

  const totalShown = filtered.length
  const hasSearchOrFilters = query.trim() !== '' || familyFilter !== 'all' || mediumFilter !== 'all'
  // When user is actively searching, auto-expand matching families so results are visible.
  const forceOpenWhileSearching = hasSearchOrFilters

  const allCollapsed = collapsed.size === FAMILY_ORDER.length
  const allExpanded = collapsed.size === 0

  const chipClass = (active: boolean) =>
    `px-2.5 py-1 text-xs border whitespace-nowrap transition-colors ${
      active
        ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
        : 'border-[var(--color-rule)]/60 hover:bg-[var(--color-ink)]/5'
    }`

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 sm:space-y-10">
      <section className="max-w-2xl space-y-3 sm:space-y-4">
        <h1 className="text-[length:var(--text-display-fluid)] font-serif leading-[1.05]">
          The grammar of film,<br className="hidden sm:block" /> one concept at a time.
        </h1>
        <p className="text-base sm:text-lg text-[var(--color-ink)]/70 leading-relaxed">
          A study tool. Each entry pairs a written explanation with an interactive diagram and a small
          deck of spaced-repetition cards. Fiction and documentary side by side.
        </p>
      </section>

      <section className="space-y-3 border-y border-[var(--color-rule)]/30 py-4 sm:py-5">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${concepts.length} concepts…`}
            className="flex-1 px-3 py-2 text-sm bg-transparent border border-[var(--color-rule)]/50 focus:border-[var(--color-accent)] focus:outline-none placeholder:text-[var(--color-ink)]/40"
            aria-label="Search concepts"
          />
          <div className="flex gap-1.5 shrink-0">
            <button onClick={() => setMediumFilter('all')} className={chipClass(mediumFilter === 'all')}>
              all
            </button>
            <button onClick={() => setMediumFilter('fiction')} className={chipClass(mediumFilter === 'fiction')}>
              fiction
            </button>
            <button onClick={() => setMediumFilter('documentary')} className={chipClass(mediumFilter === 'documentary')}>
              documentary
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <button onClick={() => setFamilyFilter('all')} className={chipClass(familyFilter === 'all')}>
            all families · {concepts.length}
          </button>
          {FAMILY_ORDER.map((f) => (
            <button key={f} onClick={() => setFamilyFilter(f)} className={chipClass(familyFilter === f)}>
              {f} · {familyCounts.get(f) ?? 0}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between gap-3 text-xs text-[var(--color-ink)]/60">
          <div className="flex items-center gap-3">
            {hasSearchOrFilters && (
              <>
                <span>{totalShown} concept{totalShown === 1 ? '' : 's'}</span>
                <button
                  onClick={() => {
                    setQuery('')
                    setFamilyFilter('all')
                    setMediumFilter('all')
                  }}
                  className="underline hover:text-[var(--color-accent)]"
                >
                  clear filters
                </button>
              </>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={expandAll}
              disabled={allExpanded}
              className={`underline ${allExpanded ? 'opacity-40' : 'hover:text-[var(--color-accent)]'}`}
            >
              expand all
            </button>
            <button
              onClick={collapseAll}
              disabled={allCollapsed}
              className={`underline ${allCollapsed ? 'opacity-40' : 'hover:text-[var(--color-accent)]'}`}
            >
              collapse all
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        {totalShown === 0 ? (
          <p className="text-[var(--color-ink)]/55 italic">No concepts match those filters.</p>
        ) : (
          FAMILY_ORDER.map((family) => {
            const list = byFamily.get(family)
            if (!list || list.length === 0) return null
            const open = forceOpenWhileSearching ? true : !collapsed.has(family)
            return (
              <div key={family} className="border-b border-[var(--color-rule)]/20 last:border-b-0">
                <h2>
                  <button
                    type="button"
                    onClick={() => toggleFamily(family)}
                    aria-expanded={open}
                    className="w-full flex items-center gap-2 py-3 text-left text-[11px] sm:text-xs uppercase tracking-[0.14em] text-[var(--color-ink)]/55 font-sans hover:text-[var(--color-accent)] transition-colors"
                  >
                    <Caret open={open} />
                    <span>{family}</span>
                    <span className="text-[10px] text-[var(--color-ink)]/40">· {list.length}</span>
                  </button>
                </h2>
                {open && (
                  <ul className="divide-y divide-[var(--color-rule)]/20 border-t border-[var(--color-rule)]/20 pb-2">
                    {list.map((c) => (
                      <li key={c.id}>
                        <Link
                          to={`/c/${c.id}`}
                          className="group block py-3.5 sm:py-4 -mx-2 px-2 hover:bg-[var(--color-ink)]/[0.035] transition-colors"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                            <h3 className="font-serif text-lg sm:text-xl leading-tight shrink-0 sm:basis-[14rem] group-hover:text-[var(--color-accent)] transition-colors">
                              {c.title}
                            </h3>
                            <p className="mt-1.5 sm:mt-0 text-sm text-[var(--color-ink)]/65 leading-snug sm:flex-1 min-w-0">
                              {c.blurb}
                            </p>
                            <div className="mt-2 sm:mt-0 flex gap-1 sm:shrink-0">
                              {c.tags.map((t) => (
                                <span
                                  key={t}
                                  className="text-[10px] uppercase tracking-[0.12em] px-1.5 py-0.5 border border-[var(--color-rule)]/40 text-[var(--color-ink)]/55"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })
        )}
      </section>
    </div>
  )
}
