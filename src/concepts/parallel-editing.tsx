import type { Concept } from '../types'
import { ParallelEditingDiagram } from '../diagrams/ParallelEditingDiagram'

export const parallelEditing: Concept = {
  id: 'parallel-editing',
  title: 'Parallel Editing & Crosscutting',
  family: 'Sequence Construction',
  tags: ['fiction', 'documentary'],
  blurb: 'Cutting between two (or more) storylines so the audience reads them simultaneously — the foundation of every chase, rescue, and morally loaded juxtaposition.',
  prose: (
    <>
      <p>
        <strong>Crosscutting</strong> alternates cuts between two storylines happening at the same time but in different places — the chase and the kidnap victim, the operating room and the waiting family, the two halves of a phone call. D.W. Griffith codified the convention in <em>Birth of a Nation</em> (1915), and audiences have read it the same way ever since: when the editor cuts between two lines of action, those two lines are happening simultaneously.
      </p>
      <p>
        <strong>Parallel action</strong> is the broader category — two storylines linked, but not necessarily by simultaneity. The famous baptism sequence in <em>The Godfather</em> intercuts a christening with a series of mob hits. The link isn't strictly chronological; it's moral. The cut creates the meaning. (When parallel action stops being temporal and starts being thematic, you're sliding toward intellectual montage in Eisenstein's terms.)
      </p>
      <p>
        Cut rhythm carries weight. An <strong>accelerating climax</strong> — cuts that grow shorter as the sequence converges — is the rescue-arrives-just-in-time engine of mainstream cinema. The audience's pulse follows the cut rate. <strong>Split-screen</strong> is the literal form of the same idea: both storylines simultaneously, divided spatially within the frame instead of separated in time. Documentary uses crosscutting freely too — observational films cut between two events at a protest, an event film alternates between performers and audience reaction. The grammar is the same; the agency moves to the editor's table.
      </p>
    </>
  ),
  diagram: <ParallelEditingDiagram />,
  cards: [
    {
      id: 'parallel-crosscutting-def',
      conceptId: 'parallel-editing',
      kind: 'recall',
      front: <>What is <strong>crosscutting</strong>?</>,
      back: <>Editing that alternates cuts between two storylines happening at the same time in different places. The convention since Griffith — the audience reads the two as simultaneous.</>,
    },
    {
      id: 'parallel-thematic-vs-temporal',
      conceptId: 'parallel-editing',
      kind: 'recall',
      front: <>What's the difference between <strong>crosscutting</strong> and <strong>thematic parallel action</strong>?</>,
      back: <>Crosscutting implies simultaneity — two lines happening at the same time. Thematic parallel action links two lines by meaning rather than time (The Godfather baptism/murders) — the cut creates moral or symbolic resonance, not chronology.</>,
    },
    {
      id: 'parallel-climax',
      conceptId: 'parallel-editing',
      kind: 'recall',
      front: <>What pattern of cut rhythm is typical of an <strong>accelerating climax</strong>?</>,
      back: <>Cuts grow progressively shorter as the sequence converges. Cut rate rises; the audience's pulse follows. The classic chase / rescue / simultaneous-reveal engine.</>,
    },
    {
      id: 'parallel-split-screen',
      conceptId: 'parallel-editing',
      kind: 'recall',
      front: <>How is <strong>split-screen</strong> different from crosscutting, and what does it accomplish?</>,
      back: <>Both storylines appear on screen at once, divided spatially within the frame rather than separated in time. No cuts needed — the audience reads both in parallel. De Palma, 24, Run Lola Run.</>,
    },
    {
      id: 'parallel-doc-use',
      conceptId: 'parallel-editing',
      kind: 'recall',
      front: <>How is crosscutting used in documentary?</>,
      back: <>Observational and event films cut between two simultaneous events (two halves of a protest; performers and audience; speaker and crowd reaction). The grammar is the same as fiction; the structure is found at the edit rather than written in advance.</>,
    },
  ],
}
