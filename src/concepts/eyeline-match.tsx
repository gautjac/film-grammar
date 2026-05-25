import type { Concept } from '../types'
import { EyelineMatchDiagram } from '../diagrams/EyelineMatchDiagram'

export const eyelineMatch: Concept = {
  id: 'eyeline-match',
  title: 'Eyelines & the Match',
  family: 'Editing & Coverage',
  tags: ['fiction', 'documentary'],
  blurb: 'Where a subject looks does as much spatial work as where they stand — both within a single frame and across cuts.',
  prose: (
    <>
      <p>
        The eyeline is one of the most powerful organising forces in a shot. It tells the audience where to look next, who's connected to whom, and what the off-frame world contains. Two separate principles use it: <em>lead room</em> (within a single shot, leave space in the direction the subject looks) and the <em>eyeline match</em> (across cuts, the gazes of two subjects must converge or the geometry collapses).
      </p>
      <p>
        Lead room — sometimes called nose room — is a composition rule. A face pressed against the edge of the frame in the direction it's facing feels cramped, almost claustrophobic. Pull the head back, give the gaze room to travel, and the shot breathes. Documentary interviews almost always observe this; news bulletins often deliberately ignore it for a tighter, more confrontational feel.
      </p>
      <p>
        The eyeline match is a continuity principle for cuts. If subject A is on the left of the frame looking off to the right, the audience expects whatever they're looking at to appear in the next shot on the right, or to be looked-at by subject B from the right side of B's own frame. Break this consistently and the spatial logic of a scene falls apart, even when the 180° rule is technically respected. Together, the 180° rule, the eyeline match, and screen direction form the three-legged stool of continuity geometry.
      </p>
    </>
  ),
  diagram: <EyelineMatchDiagram />,
  cards: [
    {
      id: 'eyeline-lead-room',
      conceptId: 'eyeline-match',
      kind: 'recall',
      front: <>What is <strong>lead room</strong> (nose room) and what happens if you don't leave it?</>,
      back: <>Empty space in the frame in the direction a subject is facing or looking. Without it, the gaze feels trapped against the frame edge and the shot reads as cramped or confrontational.</>,
    },
    {
      id: 'eyeline-match-rule',
      conceptId: 'eyeline-match',
      kind: 'recall',
      front: <>What is the <strong>eyeline match</strong> rule for cuts?</>,
      back: <>Across cuts between two subjects, their gazes must converge. If A looks off-frame right, B should appear on the right of their own frame (or look off-frame left). Otherwise they read as looking at separate things rather than each other.</>,
    },
    {
      id: 'eyeline-three-legged',
      conceptId: 'eyeline-match',
      kind: 'recall',
      front: <>What three rules together form the basic continuity geometry of a scene?</>,
      back: <>The 180° rule, the eyeline match, and consistent screen direction. Break any one and the audience's spatial map of the scene starts to slip.</>,
    },
    {
      id: 'eyeline-shared-gaze',
      conceptId: 'eyeline-match',
      kind: 'recall',
      front: <>When is it correct to have two subjects look the same screen direction across a cut?</>,
      back: <>When they're sharing a gaze at the same off-screen thing — both watching a TV, both reacting to the same event. The "broken" eyeline becomes deliberate spatial information.</>,
    },
  ],
}
