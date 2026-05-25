import { db } from './db'
import type { ReviewState } from '../types'

export interface ExportPayload {
  format: 'film-grammar/v1'
  exportedAt: number
  reviews: ReviewState[]
}

export async function exportReviewHistory(): Promise<ExportPayload> {
  const reviews = await db.reviews.toArray()
  return {
    format: 'film-grammar/v1',
    exportedAt: Date.now(),
    reviews,
  }
}

export async function downloadReviewHistory(): Promise<void> {
  const payload = await exportReviewHistory()
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  const date = new Date().toISOString().slice(0, 10)
  a.href = url
  a.download = `film-grammar-reviews-${date}.json`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  setTimeout(() => URL.revokeObjectURL(url), 0)
}

export interface ImportResult {
  added: number
  updated: number
  skipped: number
  total: number
}

function looksLikeReviewState(x: unknown): x is ReviewState {
  if (!x || typeof x !== 'object') return false
  const r = x as Record<string, unknown>
  return (
    typeof r.cardId === 'string' &&
    typeof r.easiness === 'number' &&
    typeof r.interval === 'number' &&
    typeof r.repetitions === 'number' &&
    typeof r.dueAt === 'number'
  )
}

export async function importReviewHistory(payload: unknown): Promise<ImportResult> {
  if (!payload || typeof payload !== 'object') {
    throw new Error('Invalid payload — expected JSON object.')
  }
  const p = payload as Record<string, unknown>
  if (p.format !== 'film-grammar/v1') {
    throw new Error(`Unrecognised format: ${String(p.format)}. Expected "film-grammar/v1".`)
  }
  if (!Array.isArray(p.reviews)) {
    throw new Error('Payload has no "reviews" array.')
  }

  const valid = (p.reviews as unknown[]).filter(looksLikeReviewState)
  const skipped = (p.reviews as unknown[]).length - valid.length

  const existing = new Set((await db.reviews.toArray()).map((r) => r.cardId))
  let added = 0
  let updated = 0

  await db.reviews.bulkPut(valid)
  for (const v of valid) {
    if (existing.has(v.cardId)) updated += 1
    else added += 1
  }

  return { added, updated, skipped, total: valid.length }
}

export async function clearReviewHistory(): Promise<void> {
  await db.reviews.clear()
}
