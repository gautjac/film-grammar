import type { Concept } from '../types'
import { ColorPalettesDiagram } from '../diagrams/ColorPalettesDiagram'

export const colorPalettes: Concept = {
  id: 'color-palettes',
  title: 'Color Palettes & Scripts',
  family: 'Color',
  tags: ['fiction', 'documentary'],
  blurb: 'A film\'s palette is its colour signature — chosen during production design, costume, lighting, and grading. Some are written as a "colour script" before a frame is shot.',
  prose: (
    <>
      <p>
        A film's palette — the set of colours it actually puts on screen — isn't an accident. It's the cumulative result of decisions made across <strong>production design</strong> (the colours of the sets and locations), <strong>costume</strong> (what the performers wear), <strong>lighting</strong> (the temperature and quality of the sources), and <strong>colour grading</strong> (the final pass in post-production that pushes the whole image one direction). When those four agree, the film feels coherent. When they disagree, the eye reads "inconsistent" without knowing why.
      </p>
      <p>
        In animation, this is formalised as a <strong>colour script</strong>: a sequence of small painted thumbnails, one per major beat of the film, mapping the emotional arc as a chromatic journey. Pixar's colour scripts are famous — they're drawn before the first frame is rendered, and they're the reference the entire colour department works from. Live-action rarely produces a literal colour script document, but the underlying discipline is the same: the cinematographer and director are building one in their heads.
      </p>
      <p>
        Some director-cinematographer pairings have palette signatures so distinctive they're recognisable in a single frame. Anderson's pastel triadic, Mann's steel-and-amber complementary, the Coens' earthen analogous, the Wachowskis' green Matrix, Mann's sodium-lit Heat. The signatures aren't accidents and they aren't decorations — they're part of how each filmmaker thinks. Reading a film through palette is a fast way to read its authorship.
      </p>
      <p>
        Documentary has the same tools available, with the same constraint as everywhere else: you can't restage. Doc palette decisions happen during location scouting (what spaces you choose to shoot in), camera/lens choice (which renders colour differently — some sensors lean magenta, others lean green), and grading. The palette is "found" rather than "designed", but the discipline of reading it still applies.
      </p>
    </>
  ),
  diagram: <ColorPalettesDiagram />,
  cards: [
    {
      id: 'color-palettes-four-sources',
      conceptId: 'color-palettes',
      kind: 'recall',
      front: <>Where does a film's palette actually come from? Name the four contributing decisions.</>,
      back: <>Production design (sets, props, locations), costume (what performers wear), lighting (source temperature and quality), and colour grading (the post-production pass that pushes the whole image). When those four agree, the palette feels coherent.</>,
    },
    {
      id: 'color-palettes-color-script',
      conceptId: 'color-palettes',
      kind: 'recall',
      front: <>What is a <strong>colour script</strong>, and where did the practice formalise?</>,
      back: <>A sequence of small painted thumbnails — one per major beat — mapping a film's emotional arc as a chromatic journey. Animation, especially Pixar, formalised it. Drawn before the first frame is rendered; the colour department works from it.</>,
    },
    {
      id: 'color-palettes-anderson',
      conceptId: 'color-palettes',
      kind: 'recall',
      front: <>Describe Wes Anderson's signature palette type.</>,
      back: <>Pastels arranged near-triadic on the wheel, desaturated to a similar value. Doll-house artifice — every frame composed like a window display. Recognisable in a single frame.</>,
    },
    {
      id: 'color-palettes-mann',
      conceptId: 'color-palettes',
      kind: 'recall',
      front: <>Michael Mann's Heat has a famous complementary palette. What is it, and where does it come from?</>,
      back: <>Cold blues against warm sodium-vapour amber — the colour scheme of Los Angeles streets at night. The complementary scheme is cooked into the city's actual light sources, then heightened by lensing and grading.</>,
    },
    {
      id: 'color-palettes-orange-teal',
      conceptId: 'color-palettes',
      kind: 'recall',
      front: <>What is the "orange and teal" palette, and why is it sometimes called a cliché?</>,
      back: <>A complementary grade pushing skin tones warm and environments cool. Has dominated mainstream cinema since the mid-2000s. Cliché because it became the default look applied indiscriminately — a Hollywood-professional shortcut rather than a considered choice.</>,
    },
    {
      id: 'color-palettes-doc',
      conceptId: 'color-palettes',
      kind: 'recall',
      front: <>How does palette work in documentary, given that you can't restage?</>,
      back: <>The palette is "found" rather than "designed." Decisions move upstream — location scouting (which spaces), camera/lens choice (sensor colour science), and grading. The discipline of reading the palette still applies even though the levers shift.</>,
    },
  ],
}
