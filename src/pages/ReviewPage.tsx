import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { allCards, cardById } from '../concepts'
import { db } from '../lib/db'
import { recordReview, type Quality } from '../lib/srs'

interface QueueState {
  loading: boolean
  ids: string[]
}

export function ReviewPage() {
  const [queue, setQueue] = useState<QueueState>({ loading: true, ids: [] })
  const [revealed, setRevealed] = useState(false)
  const [sessionCount, setSessionCount] = useState(0)

  const buildQueue = async () => {
    const now = Date.now()
    const reviews = await db.reviews.toArray()
    const seen = new Map(reviews.map((r) => [r.cardId, r] as const))
    const dueIds: string[] = []
    const newIds: string[] = []
    for (const card of allCards) {
      const state = seen.get(card.id)
      if (!state) newIds.push(card.id)
      else if (state.dueAt <= now) dueIds.push(card.id)
    }
    dueIds.sort(() => Math.random() - 0.5)
    newIds.sort(() => Math.random() - 0.5)
    setQueue({ loading: false, ids: [...dueIds, ...newIds.slice(0, 10)] })
  }

  useEffect(() => {
    buildQueue()
  }, [])

  const currentId = queue.ids[0]
  const current = currentId ? cardById[currentId] : null

  const onAnswer = async (q: Quality) => {
    if (!current) return
    await recordReview(current.id, q)
    setSessionCount((n) => n + 1)
    setRevealed(false)
    setQueue((s) => ({ ...s, ids: s.ids.slice(1) }))
  }

  const buttons = useMemo(
    () =>
      [
        { q: 2 as Quality, label: 'Again', sub: '< 1d' },
        { q: 3 as Quality, label: 'Hard', sub: 'short' },
        { q: 4 as Quality, label: 'Good', sub: 'normal' },
        { q: 5 as Quality, label: 'Easy', sub: 'long' },
      ],
    [],
  )

  if (queue.loading) {
    return <div className="max-w-3xl mx-auto px-6 py-10 text-[var(--color-ink)]/60">Loading queue…</div>
  }

  if (!current) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-10 space-y-4">
        <h1 className="text-3xl">Nothing due.</h1>
        <p className="text-[var(--color-ink)]/70">
          {sessionCount > 0
            ? `You reviewed ${sessionCount} card${sessionCount === 1 ? '' : 's'} this session.`
            : 'No new cards to learn and nothing due. Come back later or add more concepts.'}
        </p>
        <Link to="/" className="underline text-sm">← back to library</Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 space-y-6">
      <div className="flex items-center justify-between text-xs uppercase tracking-wider text-[var(--color-ink)]/50">
        <span>Review · {queue.ids.length} left</span>
        <Link to={`/c/${current.conceptId}`} className="underline">
          {current.conceptId}
        </Link>
      </div>

      <div className="border border-[var(--color-rule)]/40 bg-[var(--color-paper)] min-h-[280px] p-8 flex flex-col">
        <div className="text-xs uppercase tracking-wider text-[var(--color-ink)]/50 mb-4">
          {current.kind === 'recall' ? 'Recall' : 'Recognize'}
        </div>
        <div className="text-lg leading-relaxed">{current.front}</div>
        {revealed && (
          <>
            <div className="border-t border-[var(--color-rule)]/30 my-6" />
            <div className="text-[var(--color-ink)]/85 leading-relaxed">{current.back}</div>
          </>
        )}
        <div className="flex-1" />
        {!revealed ? (
          <div className="pt-6">
            <button
              onClick={() => setRevealed(true)}
              className="px-4 py-2 border border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors"
            >
              Show answer
            </button>
          </div>
        ) : (
          <div className="pt-6 grid grid-cols-4 gap-2">
            {buttons.map((b) => (
              <button
                key={b.q}
                onClick={() => onAnswer(b.q)}
                className="flex flex-col items-center py-3 border border-[var(--color-rule)]/50 hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors"
              >
                <span className="text-sm">{b.label}</span>
                <span className="text-[10px] uppercase tracking-wider opacity-60">{b.sub}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <p className="text-xs text-[var(--color-ink)]/50">
        Reviewed this session: {sessionCount}
      </p>
    </div>
  )
}
