import { db } from './db'
import type { ReviewState } from '../types'

export type Quality = 2 | 3 | 4 | 5

const DAY = 24 * 60 * 60 * 1000

export function fresh(cardId: string, now = Date.now()): ReviewState {
  return {
    cardId,
    easiness: 2.5,
    interval: 0,
    repetitions: 0,
    dueAt: now,
    lastReviewedAt: null,
  }
}

export function applyReview(state: ReviewState, quality: Quality, now = Date.now()): ReviewState {
  let { easiness, interval, repetitions } = state

  if (quality < 3) {
    repetitions = 0
    interval = 1
  } else {
    if (repetitions === 0) interval = 1
    else if (repetitions === 1) interval = 6
    else interval = Math.round(interval * easiness)
    repetitions += 1
  }

  easiness = easiness + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  if (easiness < 1.3) easiness = 1.3

  return {
    ...state,
    easiness,
    interval,
    repetitions,
    dueAt: now + interval * DAY,
    lastReviewedAt: now,
  }
}

export async function getOrCreateState(cardId: string): Promise<ReviewState> {
  const existing = await db.reviews.get(cardId)
  if (existing) return existing
  const next = fresh(cardId)
  await db.reviews.put(next)
  return next
}

export async function recordReview(cardId: string, quality: Quality): Promise<void> {
  const state = await getOrCreateState(cardId)
  const next = applyReview(state, quality)
  await db.reviews.put(next)
}

export async function dueCardIds(now = Date.now()): Promise<string[]> {
  const due = await db.reviews.where('dueAt').belowOrEqual(now).toArray()
  return due.map((r) => r.cardId)
}

export async function unseenCardIds(allCardIds: string[]): Promise<string[]> {
  const seen = new Set((await db.reviews.toArray()).map((r) => r.cardId))
  return allCardIds.filter((id) => !seen.has(id))
}
