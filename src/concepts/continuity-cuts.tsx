import type { Concept } from '../types'
import { ContinuityCutsDiagram } from '../diagrams/ContinuityCutsDiagram'

export const continuityCuts: Concept = {
  id: 'continuity-cuts',
  title: 'Match, Jump, L, J',
  family: 'Editing & Coverage',
  tags: ['fiction', 'documentary'],
  blurb: 'The five edits every editor knows by name — how each one moves time, attention, and meaning.',
  prose: (
    <>
      <p>
        Beyond the basic cut between two angles, editors work with a small vocabulary of named edits that each do something specific to time, attention, or meaning. Five are worth knowing fluently: the <strong>match cut</strong>, the <strong>jump cut</strong>, the <strong>L-cut</strong>, the <strong>J-cut</strong>, and the <strong>match-on-action</strong>.
      </p>
      <p>
        The <em>match cut</em> uses visual similarity — shape, motion, colour — to bridge two unrelated images, compressing time or space dramatically. (Kubrick's bone-becoming-spaceship.) The <em>jump cut</em> deliberately violates continuity within the same setup, removing fractions of a second so the subject seems to teleport. Originally taboo, it became style after Godard's <em>Breathless</em>; it's now common practice for tightening interviews.
      </p>
      <p>
        The <em>L-cut</em> and <em>J-cut</em> describe how audio relates to picture across a cut. In an L-cut, the picture changes first while audio from the outgoing shot keeps playing — useful for naturalistic dialogue scenes. In a J-cut, audio from the incoming shot starts before its picture, pulling attention forward into the next scene. (The letters come from the shape of the audio/video bars on a timeline.) The <em>match-on-action</em> hides the cut entirely by completing a movement begun in shot A inside shot B at a different angle. It's the workhorse of invisible editing — the cut you don't notice.
      </p>
    </>
  ),
  diagram: <ContinuityCutsDiagram />,
  cards: [
    {
      id: 'continuity-match-cut',
      conceptId: 'continuity-cuts',
      kind: 'recall',
      front: <>What is a <strong>match cut</strong>?</>,
      back: <>A cut linking two shots by visual similarity — shape, motion, colour. Used to compress time or space dramatically. Canonical example: the bone-to-spaceship cut in 2001.</>,
    },
    {
      id: 'continuity-jump-cut',
      conceptId: 'continuity-cuts',
      kind: 'recall',
      front: <>What is a <strong>jump cut</strong>, and where did it become canonical?</>,
      back: <>Two cuts of the same subject in the same framing with time removed — the subject appears to teleport within the frame. Originally taboo, made canonical by Godard's <em>Breathless</em> (1960). Now common in interview editing.</>,
    },
    {
      id: 'continuity-l-cut',
      conceptId: 'continuity-cuts',
      kind: 'recall',
      front: <>What is an <strong>L-cut</strong>?</>,
      back: <>Picture cuts to the new shot while audio from the outgoing shot continues over it. Named for the L-shape on a timeline (audio extends past the video edit). Softens transitions; common in dialogue scenes.</>,
    },
    {
      id: 'continuity-j-cut',
      conceptId: 'continuity-cuts',
      kind: 'recall',
      front: <>What is a <strong>J-cut</strong> and what does it do for the viewer?</>,
      back: <>Audio from the incoming shot starts before its picture appears. The viewer hears the next scene before seeing it, which pulls attention forward and primes the transition.</>,
    },
    {
      id: 'continuity-match-on-action',
      conceptId: 'continuity-cuts',
      kind: 'recall',
      front: <>What is a <strong>match-on-action</strong>, and why is it called the workhorse of invisible editing?</>,
      back: <>A movement begun in shot A completes in shot B at a different angle. The continuity of motion masks the cut — the eye reads through it without registering the change. The dominant cut type in classical continuity editing.</>,
    },
  ],
}
