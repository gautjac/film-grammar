import { Link, useParams } from 'react-router-dom'
import { conceptById } from '../concepts'

export function ConceptPage() {
  const { id } = useParams<{ id: string }>()
  const concept = id ? conceptById[id] : undefined

  if (!concept) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-10">
        <p>Concept not found.</p>
        <Link to="/" className="underline">Back to library</Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 space-y-8">
      <div className="space-y-2">
        <div className="text-xs uppercase tracking-wider text-[var(--color-ink)]/50">
          {concept.family}
          <span className="ml-3">
            {concept.tags.map((t) => (
              <span key={t} className="mr-1">· {t}</span>
            ))}
          </span>
        </div>
        <h1 className="text-4xl">{concept.title}</h1>
      </div>

      {concept.diagram && <div className="my-4">{concept.diagram}</div>}

      <article className="prose-block space-y-4 text-[var(--color-ink)]/85 leading-relaxed">
        {concept.prose}
      </article>

      <section className="space-y-3 border-t border-[var(--color-rule)]/30 pt-6">
        <h2 className="text-xs uppercase tracking-wider text-[var(--color-ink)]/50">
          Cards in this concept ({concept.cards.length})
        </h2>
        <ul className="space-y-2">
          {concept.cards.map((card) => (
            <li
              key={card.id}
              className="text-sm border-l-2 border-[var(--color-rule)]/40 pl-3"
            >
              {card.front}
            </li>
          ))}
        </ul>
      </section>

      <div className="pt-4">
        <Link to="/" className="text-sm underline">← back to library</Link>
      </div>
    </div>
  )
}
