import type { Concept } from '../types'
import { ShotSizesDiagram } from '../diagrams/ShotSizesDiagram'

export const shotSizes: Concept = {
  id: 'shot-sizes',
  title: 'Shot Sizes',
  family: 'Framing',
  tags: ['fiction', 'documentary'],
  blurb: 'The taxonomy of how much of the subject fills the frame, from ELS to ECU.',
  prose: (
    <>
      <p>
        Shot size is the most basic vocabulary in visual storytelling: how much of the subject — usually a person — sits within the frame. The scale is a continuum, but a working canon of seven names is enough to communicate on set, in an edit, or in shot lists.
      </p>
      <p>
        The standard ladder runs from <em>extreme long shot</em> (subject barely visible inside an environment) to <em>extreme close-up</em> (a sliver of detail). Each step changes what the audience reads first: location, action, behaviour, or emotion. A scene typically draws from a few rungs rather than the full ladder.
      </p>
      <p>
        Documentary leans heavily on the medium close-up — the canonical interview frame, chest to just above the head. Fiction uses the full range more freely, often pairing a wide for orientation with closer coverage for performance. Both forms exploit the same principle: bigger framings concentrate attention.
      </p>
    </>
  ),
  diagram: <ShotSizesDiagram />,
  cards: [
    {
      id: 'shot-sizes-els',
      conceptId: 'shot-sizes',
      kind: 'recall',
      front: <>What does <strong>ELS</strong> stand for, and what does it show?</>,
      back: <>Extreme Long Shot. Subject tiny in a wider environment — used to establish place, scale, or isolation.</>,
    },
    {
      id: 'shot-sizes-mcu',
      conceptId: 'shot-sizes',
      kind: 'recall',
      front: <>What's the canonical framing for a documentary interview?</>,
      back: <>Medium close-up (MCU) — roughly chest up. Tight enough for emotional read, loose enough for hands and posture.</>,
    },
    {
      id: 'shot-sizes-ladder',
      conceptId: 'shot-sizes',
      kind: 'recall',
      front: <>List the seven shot sizes from widest to tightest.</>,
      back: <>ELS, LS, MLS, MS, MCU, CU, ECU. (Extreme long, long, medium long, medium, medium close-up, close-up, extreme close-up.)</>,
    },
    {
      id: 'shot-sizes-cu-purpose',
      conceptId: 'shot-sizes',
      kind: 'recall',
      front: <>What's the storytelling function of moving from MS to CU within a scene?</>,
      back: <>Concentrates attention on performance and emotion. The wider shot located the subject; the closer one reads them.</>,
    },
  ],
}
