import type { Concept } from '../types'
import { AspectRatioDiagram } from '../diagrams/AspectRatioDiagram'

export const aspectRatio: Concept = {
  id: 'aspect-ratio',
  title: 'Aspect Ratio & the Rule of Thirds',
  family: 'Framing',
  tags: ['fiction', 'documentary'],
  blurb: 'The shape of the frame and the classical grid for placing what matters inside it.',
  prose: (
    <>
      <p>
        Aspect ratio is the proportion of the frame: width divided by height. It's the first compositional choice a film makes — before any camera move, any lighting setup, any cut — and it shapes everything that follows. A 4:3 Academy frame is almost square; a 2.39:1 anamorphic frame is twice as wide as it is tall. The same subject placed in those two frames creates entirely different stories.
      </p>
      <p>
        The contemporary working set: <strong>4:3</strong> (silent era, old TV, deliberate retro), <strong>16:9</strong> (HDTV, online video, most documentaries), <strong>2.39:1</strong> (modern cinematic widescreen), <strong>1:1</strong> (Instagram, some art-doc), <strong>9:16</strong> (phone-native vertical, short-form journalism). Picking a ratio is picking what the audience reads first — a tight face, an environment, a relationship between people, the sky over a city.
      </p>
      <p>
        Once the frame shape is set, the <strong>rule of thirds</strong> gives a starting grid for placement. Divide the frame in thirds horizontally and vertically; the four intersections of those lines are the "strong points." Eyes, horizons, key subjects often land on these intersections. It isn't a law — symmetry and centred framing also have power — but it's the default that most working DPs and operators carry in their head, especially in documentary where you compose under pressure.
      </p>
    </>
  ),
  diagram: <AspectRatioDiagram />,
  cards: [
    {
      id: 'aspect-ratio-definition',
      conceptId: 'aspect-ratio',
      kind: 'recall',
      front: <>What is aspect ratio, and why is the choice consequential?</>,
      back: <>The width-to-height proportion of the frame. It's the first compositional choice and shapes everything else — what reads first (face, environment, relationships), how negative space behaves, the cultural register (4:3 retro, 2.39:1 cinematic, 9:16 phone-native).</>,
    },
    {
      id: 'aspect-ratio-set',
      conceptId: 'aspect-ratio',
      kind: 'recall',
      front: <>Name the five most common contemporary aspect ratios and one use of each.</>,
      back: <>4:3 (Academy / retro), 16:9 (HDTV / most docs / online), 2.39:1 (anamorphic cinematic widescreen), 1:1 (Instagram / art-doc), 9:16 (vertical / phone-native).</>,
    },
    {
      id: 'aspect-ratio-thirds',
      conceptId: 'aspect-ratio',
      kind: 'recall',
      front: <>What is the rule of thirds?</>,
      back: <>Divide the frame in thirds both horizontally and vertically; the four line intersections are "strong points" for placing eyes, horizons, and key subjects. A default starting grid, not a law.</>,
    },
    {
      id: 'aspect-ratio-anamorphic',
      conceptId: 'aspect-ratio',
      kind: 'recall',
      front: <>Why does 2.39:1 widescreen "feel cinematic"?</>,
      back: <>The wider frame isolates verticals (a single face has lots of negative space on either side) and is built for two-shots, landscapes, and lateral composition. Cultural association with theatrical cinema reinforces the feel.</>,
    },
    {
      id: 'aspect-ratio-vertical',
      conceptId: 'aspect-ratio',
      kind: 'recall',
      front: <>What changes compositionally when working in 9:16 vertical?</>,
      back: <>Backgrounds barely register — there's almost no horizontal context. Composition becomes vertical and figure-dominant. Lead room operates up-down rather than left-right.</>,
    },
  ],
}
