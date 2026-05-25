import type { ReactNode } from 'react'

export type Medium = 'fiction' | 'documentary'

export type Family =
  | 'Framing'
  | 'Camera Movement'
  | 'Lensing & Optics'
  | 'Editing & Coverage'
  | 'Sound'
  | 'Lighting'
  | 'Mise-en-scène'
  | 'Documentary Modes'
  | 'Sequence Construction'

export interface Still {
  src: string
  caption: string
  source: string
  license: string
}

export interface Card {
  id: string
  conceptId: string
  front: ReactNode
  back: ReactNode
  kind: 'recall' | 'recognize'
}

export interface Concept {
  id: string
  title: string
  family: Family
  tags: Medium[]
  blurb: string
  prose: ReactNode
  diagram?: ReactNode
  stills?: Still[]
  cards: Card[]
}

export interface ReviewState {
  cardId: string
  easiness: number
  interval: number
  repetitions: number
  dueAt: number
  lastReviewedAt: number | null
}
