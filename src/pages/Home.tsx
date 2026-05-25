import { Link } from 'react-router-dom'
import { concepts } from '../concepts'
import type { Family } from '../types'

const FAMILY_ORDER: Family[] = [
  'Framing',
  'Camera Movement',
  'Lensing & Optics',
  'Editing & Coverage',
  'Sound',
  'Lighting',
  'Mise-en-scène',
  'Documentary Modes',
  'Sequence Construction',
]

export function Home() {
  const byFamily = new Map<Family, typeof concepts>()
  for (const c of concepts) {
    const list = byFamily.get(c.family) ?? []
    list.push(c)
    byFamily.set(c.family, list)
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
      <section className="max-w-2xl space-y-3">
        <h1 className="text-4xl">The grammar of film, one concept at a time.</h1>
        <p className="text-[var(--color-ink)]/70 leading-relaxed">
          A study tool. Each entry pairs a written explanation with an interactive diagram and a small
          deck of spaced-repetition cards. Fiction and documentary side by side.
        </p>
      </section>

      <section className="space-y-6">
        {FAMILY_ORDER.map((family) => {
          const list = byFamily.get(family)
          if (!list || list.length === 0) return null
          return (
            <div key={family} className="space-y-2">
              <h2 className="text-xs uppercase tracking-wider text-[var(--color-ink)]/50">
                {family}
              </h2>
              <ul className="divide-y divide-[var(--color-rule)]/20 border-y border-[var(--color-rule)]/20">
                {list.map((c) => (
                  <li key={c.id}>
                    <Link
                      to={`/c/${c.id}`}
                      className="flex items-baseline gap-4 py-3 hover:bg-[var(--color-ink)]/5 px-2 -mx-2 transition-colors"
                    >
                      <span className="font-serif text-lg">{c.title}</span>
                      <span className="text-sm text-[var(--color-ink)]/60 flex-1">{c.blurb}</span>
                      <span className="flex gap-1">
                        {c.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 border border-[var(--color-rule)]/40 text-[var(--color-ink)]/60"
                          >
                            {t}
                          </span>
                        ))}
                      </span>
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
