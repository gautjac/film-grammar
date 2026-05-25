import { Link, useParams } from 'react-router-dom'
import { conceptById } from '../concepts'
import { Stills } from '../components/Stills'

export function ConceptPage() {
  const { id } = useParams<{ id: string }>()
  const concept = id ? conceptById[id] : undefined

  if (!concept) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <p>Concept not found.</p>
        <Link to="/" className="underline">Back to library</Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-7 sm:space-y-9">
      <div className="space-y-2">
        <div className="text-[11px] sm:text-xs uppercase tracking-[0.14em] text-[var(--color-ink)]/50 font-sans flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>{concept.family}</span>
          {concept.tags.map((t) => (
            <span key={t} className="before:content-['·'] before:mr-2">{t}</span>
          ))}
        </div>
        <h1 className="text-[length:var(--text-h1-fluid)] font-serif leading-[1.08]">
          {concept.title}
        </h1>
        <p className="text-base sm:text-lg text-[var(--color-ink)]/70 leading-relaxed pt-1">
          {concept.blurb}
        </p>
      </div>

      {concept.diagram && (
        <div className="my-2 sm:my-4 -mx-4 sm:mx-0">
          <div className="px-4 sm:px-0">
            {concept.diagram}
          </div>
        </div>
      )}

      <article className="prose-block space-y-4 text-[var(--color-ink)]/85 leading-relaxed text-[15px] sm:text-base">
        {concept.prose}
      </article>

      {concept.stills && concept.stills.length > 0 && (
        <div className="border-t border-[var(--color-rule)]/30 pt-6 sm:pt-7">
          <Stills stills={concept.stills} />
        </div>
      )}

      <section className="space-y-3 border-t border-[var(--color-rule)]/30 pt-6 sm:pt-7">
        <h2 className="text-[11px] sm:text-xs uppercase tracking-[0.14em] text-[var(--color-ink)]/50 font-sans">
          Cards in this concept ({concept.cards.length})
        </h2>
        <ul className="space-y-2">
          {concept.cards.map((card) => (
            <li
              key={card.id}
              className="text-sm border-l-2 border-[var(--color-rule)]/40 pl-3 text-[var(--color-ink)]/80"
            >
              {card.front}
            </li>
          ))}
        </ul>
      </section>

      <div className="pt-2 sm:pt-4">
        <Link
          to="/"
          className="text-sm text-[var(--color-ink)]/70 hover:text-[var(--color-accent)] transition-colors"
        >
          ← back to library
        </Link>
      </div>
    </div>
  )
}
