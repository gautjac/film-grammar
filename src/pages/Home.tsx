import { useMemo, useState } from 'react'
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

export function Home() {
  const [query, setQuery] = useState('')
  const [familyFilter, setFamilyFilter] = useState<Family | 'all'>('all')
  const [mediumFilter, setMediumFilter] = useState<Medium | 'all'>('all')

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
  const hasFilters = query.trim() !== '' || familyFilter !== 'all' || mediumFilter !== 'all'

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
        {hasFilters && (
          <div className="flex items-center gap-3 text-xs text-[var(--color-ink)]/60">
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
          </div>
        )}
      </section>

      <section className="space-y-8 sm:space-y-10">
        {totalShown === 0 ? (
          <p className="text-[var(--color-ink)]/55 italic">No concepts match those filters.</p>
        ) : (
          FAMILY_ORDER.map((family) => {
            const list = byFamily.get(family)
            if (!list || list.length === 0) return null
            return (
              <div key={family} className="space-y-3">
                <h2 className="text-[11px] sm:text-xs uppercase tracking-[0.14em] text-[var(--color-ink)]/50 font-sans">
                  {family}
                </h2>
                <ul className="divide-y divide-[var(--color-rule)]/20 border-y border-[var(--color-rule)]/20">
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
              </div>
            )
          })
        )}
      </section>
    </div>
  )
}
