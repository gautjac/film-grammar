import type { Concept } from '../types'
import { ProductionDesignDiagram } from '../diagrams/ProductionDesignDiagram'

export const productionDesign: Concept = {
  id: 'production-design',
  title: 'Production Design',
  family: 'Mise-en-scène',
  tags: ['fiction', 'documentary'],
  blurb: 'Everything in the frame that isn\'t a performer — built, found, dressed, lit — and how those layers tell the audience where, when, and who.',
  prose: (
    <>
      <p>
        <strong>Production design</strong> is the discipline of building the world the camera sees. It covers everything in frame except the performers and the camera itself: the walls, the furniture, the wallpaper, the cup on the table, the lamp glowing in the corner. A production designer leads a department that decides — at every scale, for every shot — what gets seen and what doesn't.
      </p>
      <p>
        The work splits into five practical layers. The <strong>set</strong> (or location): built walls, found spaces, the physical container. The <strong>large props and furniture</strong>: the functional shapes characters move around. The <strong>set dressing</strong>: the decoration that fills empty space — pictures, books, plants, rugs. The <strong>action props</strong>: things characters actually touch — a phone, a letter, a cigarette, tracked for continuity. And the <strong>practicals</strong>: in-frame light sources that double as fixtures, both decoration and motivated light.
      </p>
      <p>
        The register of production design — period, contemporary, futurist, naturalistic, stylised — sets the rules every other department follows. <em>Mad Men</em>'s mid-century Manhattan, the green-tinted Matrix simulation, the doll-house artifice of <em>The Grand Budapest Hotel</em>: each is held primarily by production design, with lighting and grading reinforcing what the design already declared. A consistent register makes a world feel real; a confused one breaks the frame.
      </p>
      <p>
        Documentary mostly inherits production design from real life. The doc shooter chooses locations — what space to shoot in, what frame to put around the existing dressing — and decides what to keep in shot or hide. The discipline becomes one of curation rather than construction. Notice the framed photographs behind a subject in any sit-down interview: the choice of what hangs there is doc production design, even when the wall was always there.
      </p>
    </>
  ),
  diagram: <ProductionDesignDiagram />,
  cards: [
    {
      id: 'prod-design-definition',
      conceptId: 'production-design',
      kind: 'recall',
      front: <>What does <strong>production design</strong> cover?</>,
      back: <>Everything in frame except the performers and the camera — walls, furniture, dressing, action props, practicals. The world the camera sees. Led by a production designer who heads a department.</>,
    },
    {
      id: 'prod-design-five-layers',
      conceptId: 'production-design',
      kind: 'recall',
      front: <>Name the five practical layers of production design.</>,
      back: <>Set / walls; large props & furniture; set dressing; action props; practicals (in-frame light sources).</>,
    },
    {
      id: 'prod-design-action-props',
      conceptId: 'production-design',
      kind: 'recall',
      front: <>What are <strong>action props</strong> and why do they need continuity tracking?</>,
      back: <>Things characters actually touch and use — phone, letter, cigarette. They need shot-to-shot continuity (where the cup is on the table, how full it is, which hand it\'s in) or the cut will pop.</>,
    },
    {
      id: 'prod-design-practicals',
      conceptId: 'production-design',
      kind: 'recall',
      front: <>What is a <strong>practical</strong> in production design?</>,
      back: <>An in-frame light source that doubles as a set fixture — a table lamp, a neon sign, a computer screen. Reads as decoration; functions as motivated light. Both the production designer and the DP own it.</>,
    },
    {
      id: 'prod-design-register',
      conceptId: 'production-design',
      kind: 'recall',
      front: <>What does it mean for production design to set a film\'s <strong>register</strong>?</>,
      back: <>The register (period, contemporary, futurist, naturalistic, stylised) is the rule set the other departments follow. Production design declares it first; lighting and grading reinforce. A consistent register makes a world feel real; a confused one breaks the frame.</>,
    },
    {
      id: 'prod-design-doc',
      conceptId: 'production-design',
      kind: 'recall',
      front: <>How does production design work in documentary, where you can\'t build the world?</>,
      back: <>It becomes curation rather than construction. The doc shooter chooses locations and decides what to frame in or hide. The framed photos behind an interview subject are doc production design even though the wall existed before the camera arrived.</>,
    },
  ],
}
