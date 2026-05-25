import type { Concept } from '../types'
import { ColorWheelDiagram } from '../diagrams/ColorWheelDiagram'

export const colorTheory: Concept = {
  id: 'color-theory',
  title: 'Color Theory & the Wheel',
  family: 'Color',
  tags: ['fiction', 'documentary'],
  blurb: 'The six classical relationships between hues — monochromatic, analogous, complementary, split-complementary, triadic, tetradic — and what each one says about a film.',
  prose: (
    <>
      <p>
        The colour wheel is the working geography of hue. Twelve segments, 30° apart — red, orange, yellow, green, blue, violet plus the colours between. From the wheel you read six classical relationships, each producing a different feeling in a frame.
      </p>
      <p>
        <strong>Monochromatic</strong> is one hue at varied saturation and value — restrained, sometimes claustrophobic, used for psychological compression or tonal economy. <strong>Analogous</strong> is three to five adjacent hues — the natural-world palette of forest, beach, sunset. Reads as cohesive without being monotone. <strong>Complementary</strong> is two opposite hues; the absolute-maximum contrast a frame can hold. The orange-and-teal grade that has dominated mainstream cinema for two decades is a complementary scheme: warm skin against cool environment.
      </p>
      <p>
        <strong>Split-complementary</strong> softens the collision — one hue plus the two hues flanking its complement. <strong>Triadic</strong> picks three hues evenly spaced 120° apart; vibrant and balanced, the signature of Pixar and Wes Anderson. <strong>Tetradic</strong> is two complementary pairs forming a rectangle on the wheel; rich and complex, but demands one dominant hue and three supports or the frame fragments.
      </p>
      <p>
        Reading a film through this lens is a useful exercise. Ask: how many hues does this scene actually contain? Are they adjacent or opposite? What's the ratio of dominant to supporting colour? The answers describe the cinematographer's stance.
      </p>
    </>
  ),
  diagram: <ColorWheelDiagram />,
  cards: [
    {
      id: 'color-theory-six',
      conceptId: 'color-theory',
      kind: 'recall',
      front: <>Name the six classical colour-wheel relationships.</>,
      back: <>Monochromatic, analogous, complementary, split-complementary, triadic, tetradic.</>,
    },
    {
      id: 'color-theory-complementary',
      conceptId: 'color-theory',
      kind: 'recall',
      front: <>What is a <strong>complementary</strong> scheme, and where is it dominant in cinema?</>,
      back: <>Two hues directly opposite on the wheel — maximum visual contrast. Orange-and-teal (warm skin / cool environment) has dominated mainstream colour grading for the past two decades.</>,
    },
    {
      id: 'color-theory-analogous',
      conceptId: 'color-theory',
      kind: 'recall',
      front: <>What is an <strong>analogous</strong> scheme and why does it feel natural?</>,
      back: <>Three to five adjacent hues on the wheel. Matches the way colours actually appear in nature — forest, beach, sunset all sit in narrow hue bands. Reads as cohesive without being monotone.</>,
    },
    {
      id: 'color-theory-triadic',
      conceptId: 'color-theory',
      kind: 'recall',
      front: <>What is a <strong>triadic</strong> scheme and what kinds of films lean on it?</>,
      back: <>Three hues evenly spaced 120° apart on the wheel. Vibrant and balanced. Pixar, Wes Anderson, much stylised animation. Demands a dominant + two supports or it shouts.</>,
    },
    {
      id: 'color-theory-monochromatic',
      conceptId: 'color-theory',
      kind: 'recall',
      front: <>What does a <strong>monochromatic</strong> palette do emotionally?</>,
      back: <>One hue at varied saturation and value. Restrained, unified, can feel claustrophobic or contemplative. Used for psychological compression, single-location tone-setting, or strict tonal economy.</>,
    },
  ],
}
