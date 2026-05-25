import type { Concept } from '../types'
import { ProductionSoundDiagram } from '../diagrams/ProductionSoundDiagram'

export const productionSound: Concept = {
  id: 'production-sound',
  title: 'Production Sound',
  family: 'Sound',
  tags: ['fiction', 'documentary'],
  blurb: 'How sync sound is captured on set — boom, lav, shotgun, planted mic — plus the two non-mic disciplines (room tone, wild track) that quietly save the mix.',
  prose: (
    <>
      <p>
        Production sound is the audio captured on set, during the take, in sync with picture. The technical choice the sound recordist makes — which mic, placed where — shapes everything downstream. Three mic options dominate. The <strong>boom</strong> (a directional mic on a long pole, held overhead by a boom operator) captures speech from above the subject's head, just outside frame; it sounds natural because human speech radiates upward from the mouth. The <strong>lavalier</strong> (or "lav") is a tiny clip-on mic on the subject's chest, often wireless. It stays with the subject through movement and noisy locations. The <strong>shotgun</strong> is a highly directional mic, sometimes camera-mounted, that picks up what it's pointed at and rejects what it isn't.
      </p>
      <p>
        Fiction favours the boom — better tone, no chest rustle, no clothing snag. Documentary favours the lav — the subject moves, the room is loud, the crew is small. Both forms reach for the <strong>planted mic</strong> when neither works: a hidden mic taped under a table, inside a lamp, behind a prop. Catches dialogue at a fixed location without anyone holding gear.
      </p>
      <p>
        Two disciplines aren't mic types but recording habits: <strong>room tone</strong> (thirty seconds to a minute of the location with no one speaking or moving — fridge hum, distant traffic, HVAC) and <strong>wild track</strong> (audio recorded separately from picture, often after the scene wraps — a re-take of a line, an ambience pass, a specific sound effect). Editors live or die by these. Room tone fills gaps in dialogue so the sonic background stays continuous across cuts; wild track gives the mix a clean version of whatever the on-set recording missed. Without them, every dialogue edit pops.
      </p>
    </>
  ),
  diagram: <ProductionSoundDiagram />,
  cards: [
    {
      id: 'prod-sound-boom-vs-lav',
      conceptId: 'production-sound',
      kind: 'recall',
      front: <>What's the difference between a <strong>boom</strong> and a <strong>lavalier</strong> mic, and when is each preferred?</>,
      back: <>A boom is a directional mic on a long pole, held overhead by a boom operator. A lav is a small clip-on mic on the subject's clothing. Fiction usually prefers boom (more natural tone, no clothing rustle); documentary usually prefers lav (subject moves freely, loud locations, small crew).</>,
    },
    {
      id: 'prod-sound-shotgun',
      conceptId: 'production-sound',
      kind: 'recall',
      front: <>What is a <strong>shotgun</strong> mic and what makes it useful?</>,
      back: <>A highly directional mic that picks up what it's pointed at and rejects sound from the sides. Often camera-mounted or handheld separately. Useful for fast-changing situations where a boom or lav can't be set up in time.</>,
    },
    {
      id: 'prod-sound-planted',
      conceptId: 'production-sound',
      kind: 'recall',
      front: <>What is a <strong>planted</strong> mic and when is it used?</>,
      back: <>A hidden mic placed in the set — taped under a table, inside a lamp, behind a prop. Used to catch dialogue at a fixed location when boom and lav are both impractical (very wide shot, no good lav placement, complex blocking).</>,
    },
    {
      id: 'prod-sound-room-tone',
      conceptId: 'production-sound',
      kind: 'recall',
      front: <>What is <strong>room tone</strong> and why is it recorded?</>,
      back: <>Thirty seconds to a minute of "silence" recorded on location with no speech or movement — the texture of the empty room (fridge, traffic, HVAC). Editors fill gaps in dialogue with it so the sonic background stays continuous across cuts. Without it, every edit pops.</>,
    },
    {
      id: 'prod-sound-wild-track',
      conceptId: 'production-sound',
      kind: 'recall',
      front: <>What is a <strong>wild track</strong> and how does it differ from sync sound?</>,
      back: <>Audio recorded separately from picture, without the camera running — a clean retake of a line, an ambience pass, a specific sound effect. Sync sound is captured in real time with picture; wild track is captured independently and cut into the mix later.</>,
    },
  ],
}
