import type { Concept } from '../types'
import { MontageDiagram } from '../diagrams/MontageDiagram'

export const montage: Concept = {
  id: 'montage',
  title: 'Montage: Eisenstein\'s Five Types',
  family: 'Sequence Construction',
  tags: ['fiction', 'documentary'],
  blurb: 'Beyond invisible continuity editing — the Soviet tradition that treats the cut itself as the meaning-making act.',
  prose: (
    <>
      <p>
        In the 1920s the Soviet filmmaker Sergei Eisenstein proposed that editing was not just a way to assemble continuous action but the fundamental act of meaning-making in cinema. Two shots cut together create a third thing — an idea, an emotion, a tension — that exists in neither shot alone. He named this <strong>montage</strong> and proposed five types, ordered by how the editor controls the rhythm.
      </p>
      <p>
        <strong>Metric montage</strong> cuts at fixed time intervals, regardless of content — pure percussion. <strong>Rhythmic montage</strong> cuts on motion inside the shots: a gesture completes, an object enters frame, music hits a beat. <strong>Tonal montage</strong> cuts on the emotional tone of the shot — two unrelated images that share a mood are linked. <strong>Overtonal montage</strong> combines metric, rhythmic, and tonal layers operating at once; most sophisticated modern editing is overtonal. <strong>Intellectual montage</strong> juxtaposes images to produce a new idea — strikers cut with cattle being slaughtered, a bone cut to a spacecraft. The cut becomes an argument.
      </p>
      <p>
        Eisenstein's framework is dated in some ways but remarkably durable in others. The vocabulary is still working currency: a music video edit is rhythmic, a Terrence Malick sequence is tonal, the Kubrick cut from bone to spaceship is the textbook example of intellectual montage. For documentary, the framework is useful when you're cutting an essay-style or argumentative film — tonal and intellectual modes are the doc editor's tools for thinking with images.
      </p>
    </>
  ),
  diagram: <MontageDiagram />,
  stills: [
    {
      src: '/stills/eisenstein-potemkin.jpg',
      caption: 'Sergei Eisenstein, Battleship Potemkin (1925). The film that codified intellectual montage in practice — cuts that produce meaning beyond either shot alone. The Odessa Steps sequence is the canonical demonstration.',
      source: 'Wikimedia Commons',
      license: 'Public domain',
    },
  ],
  cards: [
    {
      id: 'montage-five',
      conceptId: 'montage',
      kind: 'recall',
      front: <>Name Eisenstein's five types of montage.</>,
      back: <>Metric, rhythmic, tonal, overtonal, intellectual.</>,
    },
    {
      id: 'montage-metric',
      conceptId: 'montage',
      kind: 'recall',
      front: <>What is <strong>metric montage</strong>?</>,
      back: <>Cuts at fixed time intervals — every N frames, every M seconds — regardless of what\'s happening in the shot. Rhythm comes purely from duration. Mechanical, percussive.</>,
    },
    {
      id: 'montage-rhythmic',
      conceptId: 'montage',
      kind: 'recall',
      front: <>What is <strong>rhythmic montage</strong> and how does it differ from metric?</>,
      back: <>Cuts driven by motion or content inside the frame — a gesture, a beat, an object entering. Cut intervals vary. Metric is fixed-clock; rhythmic is content-clock.</>,
    },
    {
      id: 'montage-tonal',
      conceptId: 'montage',
      kind: 'recall',
      front: <>What is <strong>tonal montage</strong>?</>,
      back: <>Cuts driven by the emotional tone of each shot — its overall feeling rather than its motion. Shots that share a mood are linked even if their content is unrelated. The cut acts like a key change.</>,
    },
    {
      id: 'montage-overtonal',
      conceptId: 'montage',
      kind: 'recall',
      front: <>What is <strong>overtonal montage</strong> and why is most modern editing overtonal?</>,
      back: <>A combination of metric, rhythmic, and tonal forces operating simultaneously. Most sophisticated editing manages all three layers at once — the editor isn\'t choosing one mode, they\'re tuning all three.</>,
    },
    {
      id: 'montage-intellectual',
      conceptId: 'montage',
      kind: 'recall',
      front: <>What is <strong>intellectual montage</strong> and what's a canonical example?</>,
      back: <>Juxtaposition of two shots to create a new idea not present in either alone. The cut becomes an argument. Eisenstein\'s strikers intercut with cattle being slaughtered; Kubrick\'s bone-to-spaceship in 2001.</>,
    },
    {
      id: 'montage-doc-use',
      conceptId: 'montage',
      kind: 'recall',
      front: <>Which of Eisenstein's modes are most useful in documentary, and why?</>,
      back: <>Tonal and intellectual. Doc editors often work with disparate footage and cut for thematic resonance (tonal) or to advance an argument by juxtaposition (intellectual) rather than for continuity of action.</>,
    },
  ],
}
