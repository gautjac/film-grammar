import type { Concept } from '../types'
import { FocalLengthDiagram } from '../diagrams/FocalLengthDiagram'

export const focalLength: Concept = {
  id: 'focal-length',
  title: 'Focal Length & Lens Compression',
  family: 'Lensing & Optics',
  tags: ['fiction', 'documentary'],
  blurb: 'How the millimetre number on a lens reshapes space — wide pushes the world away, long flattens it toward the camera.',
  prose: (
    <>
      <p>
        Focal length is a property of the lens: the distance, in millimetres, between the lens's optical centre and the sensor when focused at infinity. In practice, what matters is what it does to the picture. Short focal lengths (wide-angle, 14–35mm) bend space outward — backgrounds appear distant, the edges of the frame stretch, the world looks roomier than it is. Long focal lengths (telephoto, 85mm and up) do the opposite: backgrounds loom large behind the subject, parallel lines flatten, depth gets compressed into layers.
      </p>
      <p>
        A useful experiment: keep the subject the same size in frame while changing lens. To do that, you move the camera. On a 24mm you stand close; on a 200mm you stand far away. The subject's frame size stays put. What changes is everything else — the background scale, the apparent depth, the sense of intimacy or distance.
      </p>
      <p>
        Documentary often privileges wide-normal lenses (28–50mm) because they let a small crew stand close in cramped real spaces without distorting faces. Cinema reaches for both ends of the range for effect — wides for environmental immersion, longs for emotional compression and isolation. The 50mm is sometimes called the "no opinion" lens because it most closely matches what the eye sees.
      </p>
    </>
  ),
  diagram: <FocalLengthDiagram />,
  cards: [
    {
      id: 'focal-length-wide-vs-long',
      conceptId: 'focal-length',
      kind: 'recall',
      front: <>How do wide and long focal lengths differ in how they render background?</>,
      back: <>Wide lenses push the background away and make space look roomier. Long lenses compress depth — the background looms close behind the subject. Same subject size in frame, very different sense of space.</>,
    },
    {
      id: 'focal-length-normal',
      conceptId: 'focal-length',
      kind: 'recall',
      front: <>What's the "normal" focal length on full-frame, and why is it called that?</>,
      back: <>Roughly 50mm. It matches the natural perspective of human central vision — depth and distance look the way the eye perceives them. Sometimes called the "no opinion" lens.</>,
    },
    {
      id: 'focal-length-compression',
      conceptId: 'focal-length',
      kind: 'recall',
      front: <>What is "lens compression" and which lenses produce it?</>,
      back: <>The flattening of apparent depth — making distant objects look closer to the subject. Produced by long focal lengths (telephotos, 85mm+). It's a perspective effect of the camera-to-subject distance, not the lens itself.</>,
    },
    {
      id: 'focal-length-doc-choice',
      conceptId: 'focal-length',
      kind: 'recall',
      front: <>Why do documentary shooters often default to 28–50mm lenses?</>,
      back: <>They work in cramped real spaces with small crews and need to stand close without facial distortion. Wide-normals give roomy backgrounds and natural-looking faces — versatile and unobtrusive.</>,
    },
    {
      id: 'focal-length-portrait',
      conceptId: 'focal-length',
      kind: 'recall',
      front: <>Why is 85mm considered a classic portrait focal length?</>,
      back: <>It gives pleasing facial proportions (no wide-angle distortion of nose-to-ear), produces modest background compression and shallow depth of field, and lets the photographer stand a comfortable distance away.</>,
    },
  ],
}
