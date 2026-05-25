import type { Concept } from '../types'
import { CostumeDiagram } from '../diagrams/CostumeDiagram'

export const costume: Concept = {
  id: 'costume',
  title: 'Costume as Character',
  family: 'Mise-en-scène',
  tags: ['fiction', 'documentary'],
  blurb: 'What a character wears is a sentence written before they speak. Period, class, role, arc, symbol — five things costume can say.',
  prose: (
    <>
      <p>
        Costume is the layer of mise-en-scène that sits closest to the performer. It does work the moment a character walks into frame, before any line of dialogue: it tells the audience <em>when</em> (period), <em>where they sit</em> (class and status), <em>what they do</em> (role and profession), <em>how they are changing</em> (arc), and sometimes <em>what they mean</em> (symbol).
      </p>
      <p>
        <strong>Period</strong> works through silhouette, fabric, fastenings, footwear. Every era has a signature — the crinoline of the 1860s, the flapper drop-waist of the 1920s, the post-war belt-and-pencil-skirt of the 1950s, the flared trousers of the 1970s. A single anachronistic detail can fracture an otherwise convincing world.
      </p>
      <p>
        <strong>Class and status</strong> read through tailoring, fabric quality, cleanliness, accessories. Mr Darcy\'s coat versus a labourer\'s shirt is doing more work than the script. <strong>Role and profession</strong> work through uniform — literal (cop\'s badge, doctor\'s scrubs, soldier\'s fatigues) or coded (Sicario\'s tactical gear, the trader\'s suspenders).
      </p>
      <p>
        <strong>Arc</strong> is costume across time: Walter White moving from beige slacks to a black hat across <em>Breaking Bad</em>; Cinderella from rags to gown and back. The wardrobe department tracks each character\'s evolution and codes it in fabric. <strong>Symbolic</strong> costume is promoted from clothing to icon — the red coat in <em>Don\'t Look Now</em>, the white of M. in <em>Pulp Fiction</em>, the all-black of the assassin or the mourner.
      </p>
      <p>
        Documentary subjects dress themselves, but the documentarian still chooses — whether to ask a subject to "wear something they\'d normally wear," whether to shoot in workwear or street clothes, whether the visual register of the subject\'s wardrobe matches or contrasts with the film\'s argument. Documentary costume is, again, curation rather than construction.
      </p>
    </>
  ),
  diagram: <CostumeDiagram />,
  cards: [
    {
      id: 'costume-five-jobs',
      conceptId: 'costume',
      kind: 'recall',
      front: <>Name five things costume can tell the audience before a line of dialogue.</>,
      back: <>Period (when), class & status (where they sit), role / profession (what they do), arc (how they\'re changing), symbolic (what they mean).</>,
    },
    {
      id: 'costume-period',
      conceptId: 'costume',
      kind: 'recall',
      front: <>What elements of costume carry <strong>period</strong>?</>,
      back: <>Silhouette, fabric, fastenings, footwear. Each era has a signature. A single anachronistic detail can fracture an otherwise convincing world.</>,
    },
    {
      id: 'costume-class',
      conceptId: 'costume',
      kind: 'recall',
      front: <>How does costume read <strong>class and status</strong>?</>,
      back: <>Tailoring quality, fabric, cleanliness, accessories. The cut of a coat does work the dialogue doesn\'t need to.</>,
    },
    {
      id: 'costume-arc',
      conceptId: 'costume',
      kind: 'recall',
      front: <>What is costume <strong>arc</strong>, and what\'s a canonical example?</>,
      back: <>The evolution of a character\'s wardrobe across the film, tracking internal change. Walter White moving from beige slacks to a black hat across Breaking Bad is the often-cited example.</>,
    },
    {
      id: 'costume-symbolic',
      conceptId: 'costume',
      kind: 'recall',
      front: <>What does it mean for a costume to become <strong>symbolic</strong>?</>,
      back: <>Promoted from clothing to icon — the colour, pattern, or fabric carries explicit meaning beyond character. The red coat in Don\'t Look Now, the white of M. in Pulp Fiction, the all-black assassin or mourner.</>,
    },
    {
      id: 'costume-doc',
      conceptId: 'costume',
      kind: 'recall',
      front: <>How does costume work in documentary, where subjects dress themselves?</>,
      back: <>The documentarian still chooses: whether to ask subjects to wear what they normally would, whether to film in workwear or street clothes, whether to use the costume\'s visual register to support or complicate the film\'s argument. Curation, not construction.</>,
    },
  ],
}
