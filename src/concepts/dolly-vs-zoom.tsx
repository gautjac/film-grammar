import type { Concept } from '../types'
import { DollyVsZoomDiagram } from '../diagrams/DollyVsZoomDiagram'

export const dollyVsZoom: Concept = {
  id: 'dolly-vs-zoom',
  title: 'Dolly vs Zoom',
  family: 'Camera Movement',
  tags: ['fiction', 'documentary'],
  blurb: 'A camera moving forward and a lens zooming in look similar on first glance — and feel completely different.',
  prose: (
    <>
      <p>
        Both a dolly-in and a zoom-in bring a subject closer in the frame, but they describe entirely different optical events. A dolly physically moves the camera through space; a zoom changes the lens's focal length while the camera holds still. The difference is perspective — and perspective is what makes a shot feel real.
      </p>
      <p>
        When the camera dollies forward, the relationship between near and far objects shifts the way it does for a human walking. The subject grows faster than the background, parallax pulls past objects, and the brain reads the move as <em>I am moving</em>. A zoom keeps the spatial relationships locked: subject and background scale together, and the result feels flatter — more like a magnification of a photograph than a step into a room.
      </p>
      <p>
        The two combined — pushing in on a dolly while zooming out (or vice versa) — produce the dolly-zoom, sometimes called the <em>Vertigo</em> effect after Hitchcock's 1958 deployment. The subject's size in frame stays constant while the background warps. It's a tell-tale signal of psychological vertigo.
      </p>
    </>
  ),
  diagram: <DollyVsZoomDiagram />,
  cards: [
    {
      id: 'dolly-vs-zoom-difference',
      conceptId: 'dolly-vs-zoom',
      kind: 'recall',
      front: <>What is the optical difference between a dolly-in and a zoom-in?</>,
      back: <>A dolly physically moves the camera through space, changing perspective (parallax). A zoom changes focal length only — perspective is preserved, the image is magnified.</>,
    },
    {
      id: 'dolly-vs-zoom-feel',
      conceptId: 'dolly-vs-zoom',
      kind: 'recall',
      front: <>Why does a dolly feel more "real" than a zoom?</>,
      back: <>Because the brain reads parallax — near and far objects shifting differently — as physical movement through space. A zoom flattens that relationship, so it reads as image manipulation, not motion.</>,
    },
    {
      id: 'dolly-vs-zoom-vertigo',
      conceptId: 'dolly-vs-zoom',
      kind: 'recall',
      front: <>What's a dolly-zoom (Vertigo effect) and what does it convey?</>,
      back: <>Dolly in while zooming out (or vice versa) so the subject stays the same size while the background warps. Used to convey psychological vertigo, dread, or perceptual shock.</>,
    },
    {
      id: 'dolly-vs-zoom-doc',
      conceptId: 'dolly-vs-zoom',
      kind: 'recall',
      front: <>Why do documentary shooters often rely on the zoom more than fiction shooters?</>,
      back: <>Documentary often shoots events you can't restage — there's no time to lay dolly track. Zoom gives quick reframing from a single position, at the cost of the more cinematic dolly feel.</>,
    },
  ],
}
