import type { Concept } from '../types'
import { DocModesDiagram } from '../diagrams/DocModesDiagram'

export const docModes: Concept = {
  id: 'doc-modes',
  title: 'Nichols\' Documentary Modes',
  family: 'Documentary Modes',
  tags: ['documentary'],
  blurb: 'Bill Nichols\' six modes — expository, observational, participatory, reflexive, poetic, performative — a working taxonomy for how documentary makes meaning.',
  prose: (
    <>
      <p>
        Documentary scholar Bill Nichols proposed a taxonomy of documentary modes that has become standard vocabulary in the field. The modes aren't strict categories — most films mix two or three — but they describe distinct stances a filmmaker can take toward subject, reality, and viewer. Naming them makes it easier to talk about what a documentary is <em>doing</em>.
      </p>
      <p>
        The six modes are <strong>expository</strong> (voice-of-God argument, the classic PBS or BBC essay film), <strong>observational</strong> (fly-on-the-wall, no narration, à la Frederick Wiseman), <strong>participatory</strong> (filmmaker on screen interacting with subjects, like Broomfield or Theroux), <strong>reflexive</strong> (films that expose their own apparatus — Vertov, <em>The Act of Killing</em>), <strong>poetic</strong> (mood and montage over argument — <em>Koyaanisqatsi</em>), and <strong>performative</strong> (the filmmaker's own subjective experience is the subject — Sarah Polley's <em>Stories We Tell</em>).
      </p>
      <p>
        What's useful about Nichols' grid is that it forces a stance question: who is talking, to whom, and how do they claim to know? Expository mode claims authority; observational mode claims modesty; participatory mode claims encounter; reflexive mode claims honesty about its own construction. A documentary that doesn't choose a mode tends to feel diffuse — picking one (or knowingly mixing two) sharpens the form.
      </p>
    </>
  ),
  diagram: <DocModesDiagram />,
  stills: [
    {
      src: '/stills/vertov-man-with-movie-camera.png',
      caption: 'Reflexive mode: the apparatus made visible. Dziga Vertov, Man with a Movie Camera (1929) — the canonical reflexive documentary, in which the camera is the subject of its own film.',
      source: 'Wikimedia Commons',
      license: 'Public domain',
    },
    {
      src: '/stills/ivens-regen.jpg',
      caption: 'Poetic mode: mood and rhythm over argument. Joris Ivens, Regen / Rain (1929). A short city-symphony tone poem of Amsterdam in the rain — an early canonical example of the poetic documentary.',
      source: 'Wikimedia Commons',
      license: 'Public domain',
    },
  ],
  cards: [
    {
      id: 'doc-modes-six',
      conceptId: 'doc-modes',
      kind: 'recall',
      front: <>Name Bill Nichols' six documentary modes.</>,
      back: <>Expository, observational, participatory, reflexive, poetic, performative.</>,
    },
    {
      id: 'doc-modes-expository',
      conceptId: 'doc-modes',
      kind: 'recall',
      front: <>What defines the <strong>expository</strong> mode?</>,
      back: <>Voice-of-God narration making an argument. Images illustrate the argument. Audience addressed directly. Classic PBS / nature-documentary form.</>,
    },
    {
      id: 'doc-modes-observational',
      conceptId: 'doc-modes',
      kind: 'recall',
      front: <>What defines the <strong>observational</strong> mode?</>,
      back: <>No narration, no interviews. The camera observes; the filmmaker withdraws. Long takes, ambient sound. Frederick Wiseman is the canonical example.</>,
    },
    {
      id: 'doc-modes-participatory',
      conceptId: 'doc-modes',
      kind: 'recall',
      front: <>What defines the <strong>participatory</strong> mode?</>,
      back: <>The filmmaker is present in the frame, asking questions, interacting with subjects. The encounter is the film. Broomfield, Theroux, Herzog.</>,
    },
    {
      id: 'doc-modes-reflexive',
      conceptId: 'doc-modes',
      kind: 'recall',
      front: <>What defines the <strong>reflexive</strong> mode?</>,
      back: <>The film exposes its own making — visible crew, the apparatus of cinema, deliberate disruption of the documentary illusion. Vertov's <em>Man with a Movie Camera</em>; <em>The Act of Killing</em>.</>,
    },
    {
      id: 'doc-modes-poetic',
      conceptId: 'doc-modes',
      kind: 'recall',
      front: <>What defines the <strong>poetic</strong> mode?</>,
      back: <>Mood, rhythm, and visual association over argument or narrative. Closer to a tone poem. <em>Koyaanisqatsi</em>; Joris Ivens' early city symphonies.</>,
    },
    {
      id: 'doc-modes-performative',
      conceptId: 'doc-modes',
      kind: 'recall',
      front: <>What defines the <strong>performative</strong> mode?</>,
      back: <>The filmmaker's own subjective experience is the subject. First-person, often autobiographical. "What does this feel like from inside?" rather than "what is this?" Sarah Polley's <em>Stories We Tell</em>.</>,
    },
    {
      id: 'doc-modes-purpose',
      conceptId: 'doc-modes',
      kind: 'recall',
      front: <>Why is the question "which mode is this?" useful even though most documentaries mix modes?</>,
      back: <>Because each mode encodes a different epistemic stance: who is speaking, to whom, claiming to know what? Naming the mode sharpens the form and reveals authorial choices about authority, intimacy, and honesty.</>,
    },
  ],
}
