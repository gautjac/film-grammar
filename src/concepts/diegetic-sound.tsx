import type { Concept } from '../types'
import { DiegeticSoundDiagram } from '../diagrams/DiegeticSoundDiagram'

export const diegeticSound: Concept = {
  id: 'diegetic-sound',
  title: 'Diegetic vs Non-Diegetic Sound',
  family: 'Sound',
  tags: ['fiction', 'documentary'],
  blurb: 'Every sound a film uses is either inside the world (the character could hear it) or outside (only the audience can).',
  prose: (
    <>
      <p>
        The most useful first cut in film sound is also the most basic: every sound in a film is either <strong>diegetic</strong> (sourced from inside the world of the story — the character could hear it) or <strong>non-diegetic</strong> (sourced from outside — only the audience hears it). Dialogue, footsteps, ambient room tone, a radio playing in the corner of the scene: all diegetic. The orchestral score swelling under a kiss; a voiceover narrator addressing the audience: non-diegetic.
      </p>
      <p>
        The line gets interesting at the edges. <strong>Foley</strong> — sound effects recorded in post to replace or enhance diegetic sound — counts as diegetic because it stands in for in-world sound, even though it was added later. Stylised sound design (whooshes, transitions, atmospheric drones with no in-world source) is non-diegetic. And there's a category some scholars call <strong>trans-diegetic</strong>: sound that crosses the boundary, like a character starting to sing along with the score, or non-diegetic music revealed to be coming from a car stereo.
      </p>
      <p>
        Why does this matter? Because the choice between diegetic and non-diegetic encodes a stance toward the audience. Diegetic-only soundscapes (a Bresson film, a Wiseman documentary) ask the viewer to enter the world on its own terms. Heavy non-diegetic scoring shapes emotion from outside, telling the audience how to feel. Most films mix both freely — but knowing which is which lets you read what a filmmaker is doing to you.
      </p>
    </>
  ),
  diagram: <DiegeticSoundDiagram />,
  cards: [
    {
      id: 'diegetic-definition',
      conceptId: 'diegetic-sound',
      kind: 'recall',
      front: <>What is <strong>diegetic</strong> sound?</>,
      back: <>Sound sourced from inside the world of the film — the character could (in principle) hear it. Dialogue, footsteps, room tone, a radio playing in the scene.</>,
    },
    {
      id: 'non-diegetic-definition',
      conceptId: 'diegetic-sound',
      kind: 'recall',
      front: <>What is <strong>non-diegetic</strong> sound?</>,
      back: <>Sound sourced from outside the world of the film — only the audience hears it. Score, voiceover narration, stylised sound design added in post with no in-world source.</>,
    },
    {
      id: 'foley-category',
      conceptId: 'diegetic-sound',
      kind: 'recall',
      front: <>Is <strong>foley</strong> diegetic or non-diegetic?</>,
      back: <>Diegetic. Even though foley is recorded in post, it stands in for in-world sound — a fist on a chest, a cup on a table. The audience reads it as if the character could hear it.</>,
    },
    {
      id: 'trans-diegetic',
      conceptId: 'diegetic-sound',
      kind: 'recall',
      front: <>What is <strong>trans-diegetic</strong> sound?</>,
      back: <>Sound that crosses the boundary between non-diegetic and diegetic — a character singing along with the score, or non-diegetic music revealed to be coming from an in-world stereo.</>,
    },
    {
      id: 'diegetic-stance',
      conceptId: 'diegetic-sound',
      kind: 'recall',
      front: <>What stance toward the audience does a <strong>diegetic-only</strong> soundtrack tend to encode?</>,
      back: <>An ask: enter the world on its own terms. No outside emotional cueing. Common in Bresson, Wiseman observational doc, certain art cinema. Heavy non-diegetic scoring takes the opposite stance, shaping emotion from outside.</>,
    },
  ],
}
