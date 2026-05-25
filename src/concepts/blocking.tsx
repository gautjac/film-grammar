import type { Concept } from '../types'
import { BlockingDiagram } from '../diagrams/BlockingDiagram'

export const blocking: Concept = {
  id: 'blocking',
  title: 'Blocking & Depth Staging',
  family: 'Mise-en-scène',
  tags: ['fiction', 'documentary'],
  blurb: 'Where the subjects stand in three-dimensional space — and what that arrangement says before anyone has moved or spoken.',
  prose: (
    <>
      <p>
        <strong>Blocking</strong> is the term for where actors and objects are positioned and how they move within the scene. It's pre-camera vocabulary — the director and DP decide blocking, then choose camera positions that read it. A scene's emotional geometry is set before a single line is delivered: who is closer to whom, who is upstage, who is foregrounded, who is alone in negative space.
      </p>
      <p>
        A small set of canonical patterns recurs. The <strong>line</strong> (or proscenium) puts subjects parallel to camera — theatrical, formal, no depth play. The <strong>triangle</strong> pushes one subject upstage of the other two — the workhorse for three-character scenes, because it makes the upstage figure the observer or the observed. <strong>Deep staging</strong> spreads subjects across foreground, mid, and background simultaneously — the Welles / Toland strategy in Citizen Kane, requiring deep DOF and careful sightlines. The <strong>foreground anchor</strong> places a subject right at camera-near to layer two performances spatially without a literal OTS. <strong>Dispersed</strong> blocking spreads people through space with no geometric pattern — lived-in, often observational, demanding wide framings or movement to hold the relationships.
      </p>
      <p>
        Documentary blocks less than it observes blocking that already exists. A vérité shooter is reading the room — where the subjects stand, who's anchored where, what depth plane carries the meaningful action — and choosing where to put the camera to read what's already there. The vocabulary is the same; the agency shifts.
      </p>
    </>
  ),
  diagram: <BlockingDiagram />,
  cards: [
    {
      id: 'blocking-definition',
      conceptId: 'blocking',
      kind: 'recall',
      front: <>What is <strong>blocking</strong> in filmmaking?</>,
      back: <>The pre-camera positioning and movement of actors and objects within a scene. It's decided before the camera positions are chosen — emotional geometry is set before any line is delivered.</>,
    },
    {
      id: 'blocking-triangle',
      conceptId: 'blocking',
      kind: 'recall',
      front: <>Why is the <strong>triangle</strong> the workhorse blocking pattern for three-character scenes?</>,
      back: <>One subject is pushed upstage of the other two, which makes that figure clearly the observer or the observed — relational logic baked into the geometry. Every angle from the camera reads who is central and who is peripheral.</>,
    },
    {
      id: 'blocking-deep-staging',
      conceptId: 'blocking',
      kind: 'recall',
      front: <>What is <strong>deep staging</strong> and what does it require technically?</>,
      back: <>Subjects spread across foreground, midground, and background simultaneously. Requires deep depth of field (small aperture) or extremely careful blocking so each plane reads. The Welles / Toland approach in Citizen Kane.</>,
    },
    {
      id: 'blocking-foreground-anchor',
      conceptId: 'blocking',
      kind: 'recall',
      front: <>What is <strong>foreground anchor</strong> blocking and what does it accomplish?</>,
      back: <>A subject placed very close to camera anchors the foreground while the main subject sits in midframe. Layers two performances spatially without a literal over-the-shoulder. Creates depth and gives the editor coverage from a single position.</>,
    },
    {
      id: 'blocking-doc-shift',
      conceptId: 'blocking',
      kind: 'recall',
      front: <>How does the role of "blocking" shift in documentary?</>,
      back: <>The documentarian doesn't usually arrange the subjects — they observe blocking that already exists in the room. The same vocabulary (triangle, deep, dispersed) is used to read the scene and choose where to place the camera.</>,
    },
  ],
}
