import type { Card, Concept } from '../types'
import { shotSizes } from './shot-sizes'
import { dollyVsZoom } from './dolly-vs-zoom'
import { oneEightyRule } from './one-eighty-rule'
import { focalLength } from './focal-length'
import { coverage } from './coverage'
import { docModes } from './doc-modes'
import { eyelineMatch } from './eyeline-match'
import { aspectRatio } from './aspect-ratio'
import { continuityCuts } from './continuity-cuts'
import { lighting } from './lighting'

export const concepts: Concept[] = [
  shotSizes,
  aspectRatio,
  focalLength,
  dollyVsZoom,
  coverage,
  oneEightyRule,
  eyelineMatch,
  continuityCuts,
  lighting,
  docModes,
]

export const conceptById: Record<string, Concept> = Object.fromEntries(
  concepts.map((c) => [c.id, c]),
)

export const allCards: Card[] = concepts.flatMap((c) => c.cards)

export const cardById: Record<string, Card> = Object.fromEntries(
  allCards.map((c) => [c.id, c]),
)
