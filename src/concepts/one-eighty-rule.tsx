import type { Concept } from '../types'
import { OneEightyRuleDiagram } from '../diagrams/OneEightyRuleDiagram'

export const oneEightyRule: Concept = {
  id: 'one-eighty-rule',
  title: '180° Rule',
  family: 'Editing & Coverage',
  tags: ['fiction', 'documentary'],
  blurb: 'Keep the camera on one side of the eyeline between two subjects so screen direction stays consistent.',
  prose: (
    <>
      <p>
        The 180° rule is a convention for shooting two characters in conversation: draw an imaginary line between them, and keep the camera on one side of that line for all coverage. The reward is consistency — subject 1 stays on the left of the frame, subject 2 stays on the right, no matter which angle is cutting at any moment.
      </p>
      <p>
        Crossing the line — placing a camera on the opposite side — flips screen direction. In the cut, the audience reads the two characters as having swapped places. For a half-second the brain rejects the geometry, and the scene's spatial logic dissolves. Sometimes that's exactly what you want (disorientation, confrontation, a fight breaking out). Usually it isn't.
      </p>
      <p>
        Documentary uses the same logic for interview-and-cutaway construction, and especially for two-person interviews. Even one camera, panning between subjects, is a 180° decision: which side of the eyeline are you on. Some doc traditions deliberately break the rule — observational films often have no choice — and the looseness becomes a stylistic signature rather than a flaw.
      </p>
    </>
  ),
  diagram: <OneEightyRuleDiagram />,
  cards: [
    {
      id: 'one-eighty-rule-definition',
      conceptId: 'one-eighty-rule',
      kind: 'recall',
      front: <>What is the 180° rule?</>,
      back: <>Draw an imaginary line through the eyeline of two subjects. Keep all cameras on one side of that line so screen direction stays consistent across cuts.</>,
    },
    {
      id: 'one-eighty-rule-cross',
      conceptId: 'one-eighty-rule',
      kind: 'recall',
      front: <>What happens visually when you "cross the line"?</>,
      back: <>The two subjects appear to swap sides of the frame in the cut. The audience momentarily loses spatial bearings — useful for disorientation, otherwise jarring.</>,
    },
    {
      id: 'one-eighty-rule-name',
      conceptId: 'one-eighty-rule',
      kind: 'recall',
      front: <>Why "180" degrees?</>,
      back: <>The eyeline divides the surrounding 360° space into two 180° hemispheres. The rule is: pick one hemisphere and stay in it.</>,
    },
    {
      id: 'one-eighty-rule-doc',
      conceptId: 'one-eighty-rule',
      kind: 'recall',
      front: <>How does the 180° rule apply to documentary interviews?</>,
      back: <>For a two-person interview, the same eyeline logic holds — keep the camera on one side of the line between them. For interview + cutaway, the interviewee should look across the screen toward the implied interviewer.</>,
    },
  ],
}
