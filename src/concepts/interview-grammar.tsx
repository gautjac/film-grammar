import type { Concept } from '../types'
import { InterviewGrammarDiagram } from '../diagrams/InterviewGrammarDiagram'
import { MiniInterrotron } from '../diagrams/MiniDiagrams'

export const interviewGrammar: Concept = {
  id: 'interview-grammar',
  title: 'Interview Grammar',
  family: 'Documentary Modes',
  tags: ['documentary'],
  blurb: 'The conventions of the documentary interview — where the eyeline falls, where the interviewer sits, how many cameras roll, why the Interrotron exists.',
  prose: (
    <>
      <p>
        The sit-down interview is the documentary form\'s workhorse and its most over-used shot. Most viewers can\'t name it but instantly recognise it: medium-close-up subject, slightly off-centre in frame, eyeline travelling to an interviewer just outside the lens. The conventions of that shot have hardened over sixty years, and a handful of decisions inside them carry real authorial weight.
      </p>
      <p>
        The <strong>classic off-camera setup</strong> places the interviewer beside the camera, just out of frame. The subject\'s eyeline lands a few degrees off the lens. The audience reads "subject is talking to someone" — a conversation they\'re overhearing. This is the default for almost every documentary since the 1960s. It allows natural conversation and never makes the subject feel stared at.
      </p>
      <p>
        <strong>Direct-to-lens</strong> interviewing puts the eyeline straight into the camera. The audience reads "subject is talking to <em>me</em>." Confronting, intimate, used in essay films and certain participatory work. Errol Morris went further with the <strong>Interrotron</strong>: a teleprompter-style rig that projects the interviewer\'s face onto a beam splitter in front of the lens. The subject looks at the interviewer\'s eyes but speaks straight into the camera. The audience reads direct eye contact while the subject feels they\'re in a real conversation.
      </p>
      <p>
        The <strong>walking interview</strong> moves the encounter through a space — a workplace, a contested site, a city block. The space generates content; the motion loosens the subject. Common in journalism (Theroux, Broomfield) and in participatory documentary generally. <strong>Two-camera setups</strong> (A tight on the subject, B wider for cutaways) let the editor cut without jump cuts and remove the need for the subject to repeat themselves. Standard for high-end broadcast and feature documentary.
      </p>
      <p>
        Whatever the rig, the small choices all carry weight: lavalier vs. boom, eye level vs. slightly above or below, framing tight or with some headroom and lead room, neutral background or revealing one. Every interview is a stack of these choices, and each adds up to a stance toward the subject.
      </p>
    </>
  ),
  diagram: <InterviewGrammarDiagram />,
  cards: [
    {
      id: 'interview-classic-off',
      conceptId: 'interview-grammar',
      kind: 'recall',
      front: <>What is the <strong>classic off-camera</strong> interview setup, and what does it tell the audience?</>,
      back: <>Interviewer just beside the camera, out of frame. Subject\'s eyeline a few degrees off the lens. Audience reads "subject is talking to someone" — a conversation they\'re overhearing. The default since the 1960s.</>,
    },
    {
      id: 'interview-into-lens',
      conceptId: 'interview-grammar',
      kind: 'recall',
      front: <>What changes when a subject looks <strong>straight into the lens</strong>?</>,
      back: <>The audience reads "subject is talking to me." Confronting, intimate. The fourth wall is broken by design. Used in essay films, video letters, and certain participatory documentaries.</>,
    },
    {
      id: 'interview-interrotron',
      conceptId: 'interview-grammar',
      kind: 'recall',
      front: <>What is the <strong>Interrotron</strong>, and what problem does it solve?</>,
      back: <>Errol Morris\'s rig: a teleprompter-style device that projects the interviewer\'s face onto a beam splitter in front of the lens. The subject looks the interviewer in the eye but speaks straight into the camera. Audience reads direct eye contact + subject has a real conversation.</>,
    },
    {
      id: 'interview-walking',
      conceptId: 'interview-grammar',
      kind: 'recall',
      front: <>What is a <strong>walking interview</strong> and why is it used?</>,
      back: <>Subject + interviewer (and camera) move together through a relevant space — workplace, neighbourhood, contested site. The space generates content; the motion loosens the subject up. Common in journalism (Theroux, Broomfield) and participatory work.</>,
    },
    {
      id: 'interview-two-camera',
      conceptId: 'interview-grammar',
      kind: 'recall',
      front: <>What does the <strong>two-camera setup</strong> (A + B) buy the editor?</>,
      back: <>The ability to cut tight ↔ wide without jump cuts, and freedom from asking the subject to repeat themselves. Standard for high-end broadcast and feature documentary.</>,
    },
    {
      id: 'interview-stack-of-choices',
      conceptId: 'interview-grammar',
      kind: 'recall',
      front: <>What small choices stack up to form an interview's "stance" toward its subject?</>,
      back: <>Eyeline (off-camera vs. lens), framing (tight CU vs. MCU with lead room), camera height (level vs. slightly above/below), mic choice (lav vs. boom), background (neutral vs. revealing). Each is a stance.</>,
    },
    {
      id: 'interview-recognize-interrotron',
      conceptId: 'interview-grammar',
      kind: 'recognize',
      front: (
        <>
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-ink)]/55 mb-3">Which interview setup is this?</p>
          <MiniInterrotron />
        </>
      ),
      back: <>Errol Morris's Interrotron — beam splitter in front of the lens projects the interviewer's face onto a monitor below; subject looks at the interviewer but speaks straight into camera.</>,
    },
  ],
}
