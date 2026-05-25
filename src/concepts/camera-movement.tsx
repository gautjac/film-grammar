import type { Concept } from '../types'
import { CameraMovementDiagram } from '../diagrams/CameraMovementDiagram'

export const cameraMovement: Concept = {
  id: 'camera-movement',
  title: 'Camera Movement Vocabulary',
  family: 'Camera Movement',
  tags: ['fiction', 'documentary'],
  blurb: 'Ten named camera movements every set and edit room uses — pan, tilt, dolly, truck, pedestal, crane, push-in, whip, handheld, oner.',
  prose: (
    <>
      <p>
        A working vocabulary of camera movements lets a crew communicate fast — "pan left, then tilt up" is more useful than gesturing. Movements split into three rough families: <em>rotations</em> (the body of the camera doesn't move; only its orientation), <em>translations</em> (the body of the camera physically moves through space), and <em>organic</em> motion (handheld, where the operator's body is the rig).
      </p>
      <p>
        The pure rotations: <strong>pan</strong> (horizontal), <strong>tilt</strong> (vertical), and the extreme version, the <strong>whip pan</strong> (fast enough to blur, often used as a transition). The pure translations: <strong>dolly</strong> (toward/away from subject), <strong>truck</strong> or track (sideways, parallel to subject), <strong>pedestal</strong> (up/down without tilting). A <strong>crane</strong> or jib combines vertical and horizontal translation on a mechanical arm — the classic grand-reveal or final pull-back shot.
      </p>
      <p>
        Beyond the basic moves: the <strong>push-in</strong> is a slow, often unnoticed dolly toward the subject, used to concentrate attention without cutting. <strong>Handheld</strong> is the operator as the rig — the documentary default, organic and immediate. The <strong>oner</strong> (long take) isn't a movement but a discipline: a single unbroken shot through a scene, demanding choreography of camera, performers, and crew. Birdman, Children of Men, Russian Ark.
      </p>
    </>
  ),
  diagram: <CameraMovementDiagram />,
  cards: [
    {
      id: 'camera-movement-pan-vs-truck',
      conceptId: 'camera-movement',
      kind: 'recall',
      front: <>What's the difference between a <strong>pan</strong> and a <strong>truck</strong>?</>,
      back: <>A pan is a rotation — the camera body stays put, only the lens swings horizontally. A truck (or track) is a translation — the entire camera body moves sideways through space.</>,
    },
    {
      id: 'camera-movement-pedestal-vs-tilt',
      conceptId: 'camera-movement',
      kind: 'recall',
      front: <>What's the difference between a <strong>tilt</strong> and a <strong>pedestal</strong>?</>,
      back: <>Tilt is a rotation — the camera stays at one height but its lens swings up or down. Pedestal is a translation — the entire camera physically moves up or down without changing orientation.</>,
    },
    {
      id: 'camera-movement-push-in',
      conceptId: 'camera-movement',
      kind: 'recall',
      front: <>What is a <strong>push-in</strong> and what's it used for?</>,
      back: <>A slow, often unnoticed dolly toward the subject during a held shot. Used to concentrate attention without cutting — a quiet emotional escalator.</>,
    },
    {
      id: 'camera-movement-whip',
      conceptId: 'camera-movement',
      kind: 'recall',
      front: <>What is a <strong>whip pan</strong>?</>,
      back: <>An extremely fast pan, fast enough that the image blurs. Often used as a transition between scenes or to suggest sudden attention.</>,
    },
    {
      id: 'camera-movement-crane',
      conceptId: 'camera-movement',
      kind: 'recall',
      front: <>What does a <strong>crane</strong> or jib do?</>,
      back: <>Lifts the camera and arcs it through space on a mechanical arm — combining vertical and horizontal translation. Iconic for grand reveals and final pull-back shots.</>,
    },
    {
      id: 'camera-movement-handheld',
      conceptId: 'camera-movement',
      kind: 'recall',
      front: <>Why is <strong>handheld</strong> the documentary default?</>,
      back: <>The operator's body is the rig — organic shake, fast micro-corrections, instant repositioning. Reads as immediate, present, vérité. You can't easily lay dolly track in unstaged real spaces.</>,
    },
    {
      id: 'camera-movement-oner',
      conceptId: 'camera-movement',
      kind: 'recall',
      front: <>What is a <strong>oner</strong> (long take), and why is it a discipline rather than a movement?</>,
      back: <>A single unbroken shot through an entire scene or long stretch of action. It demands choreography of camera, performers, and crew rather than being one specific motion. Birdman, Children of Men, Russian Ark.</>,
    },
  ],
}
