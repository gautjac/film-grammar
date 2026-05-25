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
import { cameraAngles } from './camera-angles'
import { cameraMovement } from './camera-movement'
import { depthOfField } from './depth-of-field'
import { diegeticSound } from './diegetic-sound'
import { blocking } from './blocking'
import { montage } from './montage'
import { parallelEditing } from './parallel-editing'
import { productionSound } from './production-sound'
import { colorTheory } from './color-theory'
import { colorTemperature } from './color-temperature'
import { colorPalettes } from './color-palettes'
import { colorGrading } from './color-grading'

export const concepts: Concept[] = [
  shotSizes,
  aspectRatio,
  cameraAngles,
  focalLength,
  depthOfField,
  dollyVsZoom,
  cameraMovement,
  coverage,
  oneEightyRule,
  eyelineMatch,
  continuityCuts,
  blocking,
  montage,
  parallelEditing,
  lighting,
  colorTheory,
  colorTemperature,
  colorPalettes,
  colorGrading,
  diegeticSound,
  productionSound,
  docModes,
]

export const conceptById: Record<string, Concept> = Object.fromEntries(
  concepts.map((c) => [c.id, c]),
)

export const allCards: Card[] = concepts.flatMap((c) => c.cards)

export const cardById: Record<string, Card> = Object.fromEntries(
  allCards.map((c) => [c.id, c]),
)
