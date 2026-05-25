import type { Concept } from '../types'
import { LightingDiagram } from '../diagrams/LightingDiagram'

export const lighting: Concept = {
  id: 'lighting',
  title: 'Three-Point Lighting & Beyond',
  family: 'Lighting',
  tags: ['fiction', 'documentary'],
  blurb: 'Key, fill, back — the three roles every other lighting setup is a variation on.',
  prose: (
    <>
      <p>
        Almost all narrative lighting traces back to three functional roles. The <strong>key light</strong> is the main source — the strongest light on the subject, usually placed to one side, shaping the face with light and shadow. The <strong>fill light</strong>, weaker and softer, sits opposite the key to lift the shadow side so the face stays readable. The <strong>back light</strong> (sometimes called a kicker or hair light) comes from behind the subject and rims their outline, separating them from the background.
      </p>
      <p>
        Together these are the classical three-point setup, and it remains the canonical starting point for narrative interviews. Subtract a light and you get something more severe (key-only is film noir); add or shape lights and you start describing every other named look — Rembrandt (high key, 45° down, triangle on the cheek), silhouette (back only, face black), high-key (low contrast, optimistic), low-key (high contrast, threatening).
      </p>
      <p>
        Documentary improvises around these principles more than it executes them. A windowed café becomes a soft side-key, an open doorway becomes a back-light. Reading a real space as "where is my key, where is my fill, what's giving me separation?" is a working habit that lets you make decisions fast in environments you can't rebuild.
      </p>
    </>
  ),
  diagram: <LightingDiagram />,
  cards: [
    {
      id: 'lighting-three-roles',
      conceptId: 'lighting',
      kind: 'recall',
      front: <>What are the three functional lights in a classical setup, and what does each do?</>,
      back: <>Key (main light, shapes the face, usually to one side), fill (softer light opposite the key, lifts the shadow side), back / kicker (from behind, rims the subject and separates them from the background).</>,
    },
    {
      id: 'lighting-rembrandt',
      conceptId: 'lighting',
      kind: 'recall',
      front: <>What is <strong>Rembrandt lighting</strong> and what's its visual signature?</>,
      back: <>Key light placed high and 45° to one side of the face. The signature: a small triangle of light on the shadow-side cheek, formed between the nose-shadow and the cheek bone. Painterly, intimate.</>,
    },
    {
      id: 'lighting-high-vs-low-key',
      conceptId: 'lighting',
      kind: 'recall',
      front: <>What's the difference between <strong>high-key</strong> and <strong>low-key</strong> lighting?</>,
      back: <>High-key: low contrast, fill almost matches key, bright and even. Sitcom / commercial / lifestyle. Low-key: high contrast, hard key, little or no fill, lots of shadow. Noir, thriller, intimate doc.</>,
    },
    {
      id: 'lighting-silhouette',
      conceptId: 'lighting',
      kind: 'recall',
      front: <>What lighting setup produces a silhouette, and what's it useful for?</>,
      back: <>Only a back light, no front lighting. The face goes black, the outline glows. Used to anonymise a subject (whistleblower, source) or for stylised drama.</>,
    },
    {
      id: 'lighting-doc-improvisation',
      conceptId: 'lighting',
      kind: 'recall',
      front: <>How does documentary lighting differ from fiction in practice?</>,
      back: <>Documentary usually doesn't build the three lights — it finds them in a real space. A window becomes the key, an open doorway becomes a back-light. The working habit is reading available light through the three-point vocabulary.</>,
    },
  ],
}
