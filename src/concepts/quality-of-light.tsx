import type { Concept } from '../types'
import { QualityOfLightDiagram } from '../diagrams/QualityOfLightDiagram'

export const qualityOfLight: Concept = {
  id: 'quality-of-light',
  title: 'Quality of Light',
  family: 'Lighting',
  tags: ['fiction', 'documentary'],
  blurb: 'Hard vs soft, motivated vs practical, available vs added — the texture of a light is as consequential as its position.',
  prose: (
    <>
      <p>
        Where a light sits (key / fill / back) describes one axis. <em>What that light is</em> describes another. The <strong>quality</strong> of light is its texture — how the shadow falls, how the transition from lit to dark behaves, how skin and fabric read under it.
      </p>
      <p>
        <strong>Hard light</strong> comes from a small source relative to the subject — the sun, a bare bulb, an undiffused HMI. It casts razor-edged shadows, exaggerates texture (skin pores, fabric weave, stubble), and produces high contrast between lit and unlit sides. Reads as dramatic, harsh, exposing. <strong>Soft light</strong> comes from a large source relative to the subject — an overcast sky, a softbox, a north-facing window. Shadows transition gradually, contrast is gentle, skin and fabric smooth out. Reads as flattering, classical, kind.
      </p>
      <p>
        Beyond hard / soft is the question of <em>where the light comes from in the story</em>. <strong>Natural</strong> or <strong>available light</strong> is what the location already provides — the documentary default, varying through the day from hard noon sun to soft golden hour to dim cool blue hour. <strong>Motivated light</strong> is added light that pretends to come from a visible in-scene source — a window we see, a lamp we see, a fire we see. The audience reads it as natural even though the actual film light is hidden. <strong>Practical-driven</strong> goes further: the visible fixture <em>is</em> the light. A table lamp, a TV screen, a neon sign, a single match. No off-camera lights needed. Tight quarters, cinéma vérité, much of Lubezki's late work.
      </p>
      <p>
        <strong>Mixed sources</strong> is the real-world default: a room with a window <em>and</em> a lamp <em>and</em> a TV. Each has its own intensity, temperature, and quality. Hardest to balance — richest when balanced well. Reading a film through quality of light asks: how big is the source? Where does the story say it's coming from? And how many sources are competing?
      </p>
    </>
  ),
  diagram: <QualityOfLightDiagram />,
  cards: [
    {
      id: 'qol-hard-vs-soft',
      conceptId: 'quality-of-light',
      kind: 'recall',
      front: <>What determines whether light is <strong>hard</strong> or <strong>soft</strong>?</>,
      back: <>The <em>size of the source relative to the subject</em>. Small source = hard light, razor-edged shadows, high contrast. Large source = soft light, gradual shadows, low contrast. Distance only matters because it changes apparent size.</>,
    },
    {
      id: 'qol-natural',
      conceptId: 'quality-of-light',
      kind: 'recall',
      front: <>What does <strong>natural / available light</strong> mean, and how does its quality change through the day?</>,
      back: <>Whatever the location provides — no added film lights. The documentary default. Quality varies: hard at noon (sun small in the sky), soft at overcast or golden hour, dim and cool at blue hour.</>,
    },
    {
      id: 'qol-motivated',
      conceptId: 'quality-of-light',
      kind: 'recall',
      front: <>What is <strong>motivated light</strong>?</>,
      back: <>Added film light that mimics a visible in-scene source — pretends to come from a window, a lamp, a fire the audience can see. The actual film light is hidden off-camera; the audience reads the scene as naturally lit.</>,
    },
    {
      id: 'qol-practical-driven',
      conceptId: 'quality-of-light',
      kind: 'recall',
      front: <>What is <strong>practical-driven</strong> lighting?</>,
      back: <>The visible fixture in the scene actually <em>is</em> the light — table lamp, TV screen, neon sign, fire. No off-camera lights needed. Used in cinéma vérité, low-budget thrillers, much of Emmanuel Lubezki's recent work.</>,
    },
    {
      id: 'qol-mixed',
      conceptId: 'quality-of-light',
      kind: 'recall',
      front: <>Why is <strong>mixed-source</strong> light both the hardest and the most common situation?</>,
      back: <>Real rooms have multiple sources (window + lamp + screen), each with its own intensity, temperature, and quality. Hardest to balance — they fight each other. Richest when balanced well — depth, layered shadow, multiple colour temperatures coexisting.</>,
    },
  ],
}
