import type { Concept } from '../types'
import { ArchivalDiagram } from '../diagrams/ArchivalDiagram'

export const archival: Concept = {
  id: 'archival',
  title: 'Archival, Re-enactment & the Unfilmable',
  family: 'Documentary Modes',
  tags: ['documentary'],
  blurb: 'Six strategies for representing what the camera couldn\'t be there for — actual archive, still photos, dramatised re-enactment, animation, deliberate absence, and the hybrids that combine them.',
  prose: (
    <>
      <p>
        Documentary often has to represent events that happened before the camera arrived — a murder, a war, a private moment, a childhood. Six strategies have emerged. Each carries a different claim about truth, and that claim is part of the film's argument whether the filmmaker notices it or not.
      </p>
      <p>
        <strong>Archival footage</strong> is actual film, video, or audio from the time depicted — newsreels, home movies, security cameras, broadcast media. It reads as the most "authentic," though every archive choice is still an editorial one (Kapadia's <em>Amy</em> and <em>Senna</em> are built almost entirely from archive; the construction is invisible because it pretends not to be construction). <strong>Still photographs</strong> given motion by slow camera moves — the so-called <strong>Ken Burns effect</strong> — turn an unmoving image into something that reads as cinema. Cheap, evocative, now ubiquitous to the point of cliché.
      </p>
      <p>
        <strong>Re-enactment</strong> uses actors or stand-ins to dramatise the past. Risks looking cheap or dishonest if the film doesn't declare what it's doing; can be devastating when the stylisation is deliberate. Errol Morris's <em>The Thin Blue Line</em> made re-enactment respectable in modern documentary; Joshua Oppenheimer's <em>The Act of Killing</em> made it reflexive — perpetrators re-staging their own crimes. <strong>Animation</strong> represents the past in a form that's honest about its own construction — no one mistakes animation for record, and animation is free from the legal and ethical problems that surround photographing real people in dramatic situations. Ari Folman's <em>Waltz with Bashir</em> is the canonical feature-length animated documentary.
      </p>
      <p>
        <strong>Absence</strong> is a stance: refuse to show what can't be shown. Black frame, blank screen, audio-only — often combined with archival testimony or recordings. Claude Lanzmann's nine-hour <em>Shoah</em> refuses to use any archival imagery of the camps; the absence becomes the form. <strong>Hybrid</strong> documentary mixes two or more of these strategies inside a single film — archive plus interview plus animation plus re-enactment, with the cut between strategies doing as much work as anything else. Sarah Polley's <em>Stories We Tell</em> is built this way, and increasingly so is most ambitious creative documentary.
      </p>
      <p>
        Whichever strategy you choose, the choice is the argument. Picking re-enactment over archive is a claim that the dramatic feel matters more than the literal record. Picking absence is a claim that some things should not be re-staged. Picking hybrid is a claim that no single mode can hold what you're trying to say.
      </p>
    </>
  ),
  diagram: <ArchivalDiagram />,
  cards: [
    {
      id: 'archival-six-strategies',
      conceptId: 'archival',
      kind: 'recall',
      front: <>Name six strategies a documentary can use to represent events the camera wasn't there for.</>,
      back: <>Archival footage; still photographs (Ken Burns); re-enactment; animation; absence / black frame; hybrid forms combining several.</>,
    },
    {
      id: 'archival-archive-editorial',
      conceptId: 'archival',
      kind: 'recall',
      front: <>Why is "archival footage" not as "authentic" as it looks?</>,
      back: <>Every choice about which archive to use, where to cut, what context to drop, and which shots to favour is editorial. Films built almost entirely from archive (Kapadia's Amy, Senna) read as authentic precisely because the construction is invisible.</>,
    },
    {
      id: 'archival-ken-burns',
      conceptId: 'archival',
      kind: 'recall',
      front: <>What is the <strong>Ken Burns effect</strong>?</>,
      back: <>Slow camera moves across still photographs — pans, push-ins, pull-outs — that give an unmoving image cinematic motion. Named after Ken Burns's 1990 PBS series The Civil War. Now ubiquitous in historical documentary.</>,
    },
    {
      id: 'archival-reenactment-risks',
      conceptId: 'archival',
      kind: 'recall',
      front: <>What are the risks and what's the reward of <strong>re-enactment</strong> in documentary?</>,
      back: <>Risks: looking cheap or dishonest if the film doesn't declare what it's doing. Reward: when the stylisation is deliberate it can be devastating. Errol Morris's The Thin Blue Line made re-enactment respectable in modern doc; The Act of Killing made it reflexive.</>,
    },
    {
      id: 'archival-animation',
      conceptId: 'archival',
      kind: 'recall',
      front: <>Why does <strong>animation</strong> work for some doc subjects when re-enactment doesn't?</>,
      back: <>Animation is honest about its construction — no one mistakes it for record — and free from the legal/ethical problems of photographing real people in dramatic situations. Used for trauma, secrets, the unfilmable. Waltz with Bashir is the canonical example.</>,
    },
    {
      id: 'archival-absence',
      conceptId: 'archival',
      kind: 'recall',
      front: <>How does <strong>absence</strong> work as a strategy, and what film is built on it?</>,
      back: <>Refusal: black frame, blank screen, audio-only. A stance that some events should not be re-staged. Claude Lanzmann's nine-hour Shoah refuses all archival imagery of the camps — the absence becomes the form.</>,
    },
    {
      id: 'archival-choice-as-argument',
      conceptId: 'archival',
      kind: 'recall',
      front: <>Why is the choice of strategy itself part of the documentary's argument?</>,
      back: <>Picking re-enactment over archive claims dramatic feel matters more than literal record. Picking absence claims some things should not be re-staged. Picking hybrid claims no single mode can hold the subject. The choice is the argument whether the filmmaker notices or not.</>,
    },
  ],
}
