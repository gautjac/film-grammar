import type { Concept } from '../types'
import { CoverageDiagram } from '../diagrams/CoverageDiagram'

export const coverage: Concept = {
  id: 'coverage',
  title: 'Coverage & the Master Shot',
  family: 'Editing & Coverage',
  tags: ['fiction', 'documentary'],
  blurb: 'A scene is usually shot many times, from many angles. Coverage is the menu the editor will cut from.',
  prose: (
    <>
      <p>
        On a fiction set, a scene is rarely shot just once. It's shot several times — the same performance, from different camera positions — to give the editor coverage: a set of options to cut between. The grammar of coverage is what holds a scene together once you start cutting from one camera to another.
      </p>
      <p>
        The traditional starting point is the <em>master shot</em>: a wide angle that captures the whole scene from beginning to end. The master locates everyone in space and time. From there, the production shoots tighter coverage — two-shots, over-the-shoulders, close-ups, and any inserts on objects or hands. The editor weaves these into a sequence where the master keeps the spatial logic clear while the closer shots carry performance.
      </p>
      <p>
        Documentary inverts this hierarchy. There is rarely a true master because you can't re-stage life. Instead, a doc shooter is constantly making coverage decisions in the moment: stay wide for context, push in for emotion, grab an insert of a hand or a face for transition material. The same vocabulary still applies — wide for orientation, close for performance — but the cinematographer is also the editor's scout, banking options on the fly.
      </p>
    </>
  ),
  diagram: <CoverageDiagram />,
  cards: [
    {
      id: 'coverage-master-purpose',
      conceptId: 'coverage',
      kind: 'recall',
      front: <>What is a master shot, and what's its purpose in coverage?</>,
      back: <>A wide shot of the whole scene from start to finish, taken from one angle. It locates everyone in space and provides a "safe" cut the editor can return to whenever orientation is lost in the closer coverage.</>,
    },
    {
      id: 'coverage-typical-set',
      conceptId: 'coverage',
      kind: 'recall',
      front: <>What's a typical coverage set for a two-person conversation?</>,
      back: <>Master, two-shot, OTS on A, OTS on B, clean CU on A, clean CU on B, and inserts (hands, objects). The editor cuts between them.</>,
    },
    {
      id: 'coverage-ots',
      conceptId: 'coverage',
      kind: 'recall',
      front: <>What does OTS stand for and what makes it different from a clean close-up?</>,
      back: <>Over-the-shoulder. Frames one subject with the other subject's shoulder anchoring the foreground — keeps both spatially connected. A clean CU drops the shoulder, isolating the subject for emotional weight.</>,
    },
    {
      id: 'coverage-doc-difference',
      conceptId: 'coverage',
      kind: 'recall',
      front: <>How does documentary coverage differ from fiction coverage?</>,
      back: <>Doc can't re-stage events, so there's no true master. The shooter banks coverage in the moment — wide for context, tight for emotion, inserts for transitions — making editing decisions while filming.</>,
    },
    {
      id: 'coverage-insert',
      conceptId: 'coverage',
      kind: 'recall',
      front: <>What is an "insert" shot and what is it useful for?</>,
      back: <>A close-up of a detail — hands, an object, a clock, a glass. The editor drops them in between dialogue coverage to control rhythm, hide cuts, or land a specific story beat.</>,
    },
  ],
}
