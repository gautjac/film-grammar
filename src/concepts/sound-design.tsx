import type { Concept } from '../types'
import { SoundDesignDiagram } from '../diagrams/SoundDesignDiagram'

export const soundDesign: Concept = {
  id: 'sound-design',
  title: 'Sound Design & the Mix',
  family: 'Sound',
  tags: ['fiction', 'documentary'],
  blurb: 'A finished soundtrack is five or six layers running simultaneously — dialogue, foley, ambience, designed SFX, score, and the occasional weaponised silence.',
  prose: (
    <>
      <p>
        The audio you hear in a finished film is never one track. It's a stack of five or six independent layers, each constructed and recorded differently, balanced together by a re-recording mixer in a final pass. Knowing the stack is the difference between hearing a film and hearing <em>what someone built</em>.
      </p>
      <p>
        At the top sits <strong>dialogue</strong> — the performer's voice. Captured on set via boom and lavalier, sometimes replaced in post via ADR (Automated Dialogue Replacement) when the production take isn't clean enough. Dialogue is the loudest, most prominent layer; everything else is mixed around it.
      </p>
      <p>
        <strong>Foley</strong> is performed sound, made in a studio by a foley artist watching the cut and matching footsteps, cloth movement, prop interactions. The on-set sound rarely captures these cleanly enough; foley fills in for them. Done well, the audience never hears the seam between production sound and foley. <strong>Ambience</strong> (or <em>atmos</em>) is the continuous background — room tone, traffic, wind, distant voices. It holds the spatial identity of the scene; without it, every dialogue edit pops, the room "dies" between lines.
      </p>
      <p>
        <strong>Designed SFX</strong> are the specific constructed sounds — explosions, gunshots, doors, swooshes, drones, transitions. Built in software from layered field recordings. The amount of designed SFX work is often what separates a budget mix from a feature mix; a fight scene without proper SFX work sounds like a high-school production. <strong>Score</strong> is composed music, written to picture (or temp-tracked early and replaced later). Non-diegetic by default; source music (a song playing in the scene) is technically diegetic and lives in a different rule space.
      </p>
      <p>
        And then there is <strong>silence</strong> — the deliberate absence of layers. A scene that mutes its score, drops to room tone only, or cuts to pure silent black between beats. The single most underused layer in mainstream mixing, often the most effective when used. Bresson made entire scenes from it; <em>No Country for Old Men</em> famously refused score for most of its runtime; the final whisper-into-the-ear in <em>Lost in Translation</em> is held by the silence around it.
      </p>
    </>
  ),
  diagram: <SoundDesignDiagram />,
  cards: [
    {
      id: 'sound-design-stack',
      conceptId: 'sound-design',
      kind: 'recall',
      front: <>Name the six layers in a typical finished film soundtrack.</>,
      back: <>Dialogue, foley, ambience (atmos), designed SFX, score, and (deliberate) silence.</>,
    },
    {
      id: 'sound-design-foley',
      conceptId: 'sound-design',
      kind: 'recall',
      front: <>What is <strong>foley</strong> and where does it happen?</>,
      back: <>Sound performed in a studio (a foley pit) by a foley artist watching the cut and matching footsteps, cloth movement, prop interactions. It fills in for on-set sound the boom and lav couldn't capture cleanly. Done well, the audience never hears the seam.</>,
    },
    {
      id: 'sound-design-ambience',
      conceptId: 'sound-design',
      kind: 'recall',
      front: <>What is <strong>ambience</strong> (or atmos), and what happens without it?</>,
      back: <>The continuous background of a location — room tone, traffic, wind, distant voices. It holds the spatial identity of the scene. Without it, every cut pops and the room "dies" between lines.</>,
    },
    {
      id: 'sound-design-adr',
      conceptId: 'sound-design',
      kind: 'recall',
      front: <>What is <strong>ADR</strong>?</>,
      back: <>Automated Dialogue Replacement. Performers re-record dialogue in a studio while watching the take, replacing the production sound when it isn't clean enough. Standard practice in fiction; rare in documentary because the original recording is the evidence.</>,
    },
    {
      id: 'sound-design-sfx-budget',
      conceptId: 'sound-design',
      kind: 'recall',
      front: <>What often separates a budget mix from a feature mix?</>,
      back: <>The amount of <strong>designed SFX</strong> work. A budget mix uses library sounds straight; a feature mix builds specific sounds from layered field recordings for each beat. A fight scene without proper SFX work sounds amateur.</>,
    },
    {
      id: 'sound-design-silence',
      conceptId: 'sound-design',
      kind: 'recall',
      front: <>Why is <strong>silence</strong> considered a layer and not just the absence of layers?</>,
      back: <>Because it's a deliberate choice — muting score, dropping to room tone only, cutting to pure silence — used as a tool. Bresson built entire scenes from it; No Country for Old Men refused score for most of its runtime. Most underused layer in mainstream mixing.</>,
    },
    {
      id: 'sound-design-score-source',
      conceptId: 'sound-design',
      kind: 'recall',
      front: <>What's the difference between <strong>score</strong> and <strong>source music</strong>?</>,
      back: <>Score is composed (and non-diegetic): exists outside the world of the film, audience only. Source music is diegetic — a song playing on an in-scene radio, jukebox, or car stereo that characters can hear. Two different rule spaces.</>,
    },
  ],
}
