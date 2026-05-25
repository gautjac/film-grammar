import type { Concept } from '../types'
import { CameraAnglesDiagram } from '../diagrams/CameraAnglesDiagram'

export const cameraAngles: Concept = {
  id: 'camera-angles',
  title: 'Camera Angles',
  family: 'Framing',
  tags: ['fiction', 'documentary'],
  blurb: 'Where the camera sits in space — above, below, level — shapes how the audience reads power, vulnerability, and stability.',
  prose: (
    <>
      <p>
        Camera angle describes the vertical relationship between the camera and the subject. The default is <strong>eye-level</strong>: camera at the subject's eye height, neutral and conversational. Documentaries and naturalistic fiction live here most of the time, because it reads as equality between the viewer and the person on screen.
      </p>
      <p>
        From the neutral position, two basic moves: <strong>low angle</strong> (camera below the subject, looking up) makes the subject tower — power, dominance, awe, threat. <strong>High angle</strong> (camera above, looking down) diminishes — vulnerability, smallness, judgement from above. Push the high angle further and you get the <strong>bird's-eye</strong> or overhead shot, a god's-eye view that distances the audience and treats the action as choreography.
      </p>
      <p>
        Separate from angle is the <strong>Dutch angle</strong> (also called canted or tilted): the camera is rolled on its axis so the horizon line tilts within the frame. Not a height change but an orientation change. It encodes unease, disorientation, psychological instability. Used sparingly it's powerful; over-used it becomes a stylistic tic that audiences read as "the filmmaker is trying too hard."
      </p>
    </>
  ),
  diagram: <CameraAnglesDiagram />,
  cards: [
    {
      id: 'camera-angles-eye-level',
      conceptId: 'camera-angles',
      kind: 'recall',
      front: <>What is <strong>eye-level</strong> and why is it the default?</>,
      back: <>Camera at the subject's eye height. Neutral, conversational. Reads as equality between viewer and subject — the working register for documentary and naturalistic fiction.</>,
    },
    {
      id: 'camera-angles-low',
      conceptId: 'camera-angles',
      kind: 'recall',
      front: <>What does a <strong>low angle</strong> do to a subject visually and emotionally?</>,
      back: <>Camera below the subject, looking up. Makes the subject tower. Reads as power, dominance, awe, threat. Classic villain entrance.</>,
    },
    {
      id: 'camera-angles-high',
      conceptId: 'camera-angles',
      kind: 'recall',
      front: <>What does a <strong>high angle</strong> do?</>,
      back: <>Camera above the subject, looking down. Diminishes the subject. Reads as vulnerability, smallness, or judgement from above.</>,
    },
    {
      id: 'camera-angles-birds-eye',
      conceptId: 'camera-angles',
      kind: 'recall',
      front: <>What is a <strong>bird's-eye</strong> or overhead shot, and what does it feel like?</>,
      back: <>Camera directly overhead, looking straight down. God's-eye view — geometric, distancing. Action becomes choreography. Used for crowds, group dynamics, or moments meant to feel observed from outside.</>,
    },
    {
      id: 'camera-angles-dutch',
      conceptId: 'camera-angles',
      kind: 'recall',
      front: <>What is the <strong>Dutch angle</strong> and what's the difference from a high or low angle?</>,
      back: <>Camera rolled on its axis so the horizon tilts within the frame. It's an orientation change, not a height change. Encodes unease, disorientation, instability — different from the height-based dominance/diminishment of high/low.</>,
    },
  ],
}
