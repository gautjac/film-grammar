import { Link } from 'react-router-dom'
import { concepts } from '../concepts'
import type { Family } from '../types'

const FAMILY_ORDER: Family[] = [
  'Framing',
  'Camera Movement',
  'Lensing & Optics',
  'Editing & Coverage',
  'Mise-en-scène',
  'Sequence Construction',
  'Sound',
  'Lighting',
  'Documentary Modes',
]

export function Home() {
  const byFamily = new Map<Family, typeof concepts>()
  for (const c of concepts) {
    const list = byFamily.get(c.family) ?? []
    list.push(c)
    byFamily.set(c.family, list)
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 sm:space-y-12">
      <section className="max-w-2xl space-y-3 sm:space-y-4">
        <h1 className="text-[length:var(--text-display-fluid)] font-serif leading-[1.05]">
          The grammar of film,<br className="hidden sm:block" /> one concept at a time.
        </h1>
        <p className="text-base sm:text-lg text-[var(--color-ink)]/70 leading-relaxed">
          A study tool. Each entry pairs a written explanation with an interactive diagram and a small
          deck of spaced-repetition cards. Fiction and documentary side by side.
        </p>
      </section>

      <section className="space-y-8 sm:space-y-10">
        {FAMILY_ORDER.map((family) => {
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
        })}
      </section>
    </div>
  )
}
