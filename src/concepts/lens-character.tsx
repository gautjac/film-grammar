import type { Concept } from '../types'
import { LensCharacterDiagram } from '../diagrams/LensCharacterDiagram'
import { MiniHexBokeh, MiniAnamorphic } from '../diagrams/MiniDiagrams'

export const lensCharacter: Concept = {
  id: 'lens-character',
  title: 'Lens Character',
  family: 'Lensing & Optics',
  tags: ['fiction', 'documentary'],
  blurb: 'Every lens has a personality — contrast, flares, bokeh shape, distortion, breathing. Beyond focal length and aperture, this is what makes one piece of glass look different from another.',
  prose: (
    <>
      <p>
        Two lenses set to the same focal length and aperture, pointed at the same scene, produce different images. The difference is what cinematographers call <strong>lens character</strong> — a stack of qualities that includes contrast, flare behaviour, bokeh shape, distortion, and focus breathing. Manufacturers don't advertise it directly, but DPs pick lenses primarily on character once focal length and aperture are decided.
      </p>
      <p>
        <strong>Contrast</strong> describes how the lens renders the difference between bright and dark. Modern, multi-coated optics deliver high contrast and deep blacks — clean, technically perfect, sometimes clinical. Vintage and uncoated glass delivers lower contrast, milky shadows, and gentler highlight roll-off. The recent "warm cinema" look (Lubezki, the Coens' DPs, much of A24's output) leans on lower-contrast vintage glass for organic depth.
      </p>
      <p>
        <strong>Flare</strong> is what happens when a bright source hits the front element directly. Modern lenses suppress flare; vintage lenses bloom with it. <strong>Anamorphic</strong> lenses — designed to squeeze a wide image onto a standard sensor — flare horizontally in characteristic blue streaks. The blue anamorphic flare is the single most recognisable visual signature in cinema, the thing that instantly says "this is a movie, not a TV show."
      </p>
      <p>
        <strong>Bokeh</strong> is the quality of out-of-focus areas. Modern primes render bokeh as round, neutral blobs. Anamorphics oval. Older lenses with non-circular irises produce hexagonal or octagonal shapes from the aperture blades. <strong>Distortion</strong> is geometric — barrel (lines bow outward), pincushion (lines bow inward), mustache (a complex mix in cheap zooms). <strong>Breathing</strong> is the change in focal length during a focus pull — cheap lenses crawl visibly at the edges; cinema primes are designed to suppress it.
      </p>
      <p>
        Documentary often shoots whatever zoom comes mounted on the camera; the character question shifts to lens <em>treatment</em> — adding a diffusion filter (Black Pro-Mist, Glimmerglass) to take the edge off a clinical modern lens, or accepting the cheap-zoom barrel distortion as documentary signature. The recent "everything looks like a perfume ad" trend in narrative cinema is largely the deliberate use of diffusion to soften otherwise too-clean glass.
      </p>
    </>
  ),
  diagram: <LensCharacterDiagram />,
  cards: [
    {
      id: 'lens-character-definition',
      conceptId: 'lens-character',
      kind: 'recall',
      front: <>What is <strong>lens character</strong>?</>,
      back: <>The stack of optical qualities that distinguishes one lens from another at the same focal length and aperture: contrast, flare, bokeh shape, distortion, focus breathing. Cinematographers pick lenses primarily on character once focal length is decided.</>,
    },
    {
      id: 'lens-character-contrast',
      conceptId: 'lens-character',
      kind: 'recall',
      front: <>How does <strong>contrast</strong> differ between modern and vintage lenses?</>,
      back: <>Modern multi-coated optics render high contrast and deep blacks (clean, sometimes clinical). Vintage uncoated glass delivers lower contrast, milky shadows, gentler highlight roll-off. The current "warm cinema" look leans on vintage glass for the organic feel.</>,
    },
    {
      id: 'lens-character-anamorphic-flare',
      conceptId: 'lens-character',
      kind: 'recall',
      front: <>What's the signature flare of an <strong>anamorphic</strong> lens?</>,
      back: <>A long horizontal streak in blue, produced when a bright source hits the aspherical front element. The single most recognisable visual signature in cinema — instantly says "this is a movie."</>,
    },
    {
      id: 'lens-character-bokeh',
      conceptId: 'lens-character',
      kind: 'recall',
      front: <>What determines the shape of <strong>bokeh</strong> (out-of-focus highlights)?</>,
      back: <>The shape of the aperture iris. Modern primes have many curved blades → round bokeh. Older lenses had fewer straight blades → hexagonal or octagonal. Anamorphic optics → oval bokeh. The shape is a lens fingerprint.</>,
    },
    {
      id: 'lens-character-breathing',
      conceptId: 'lens-character',
      kind: 'recall',
      front: <>What is <strong>focus breathing</strong>?</>,
      back: <>The change in apparent focal length during a focus pull — the frame edges crawl in or out as focus shifts. Cheap zooms breathe heavily; cinema primes are specifically designed to suppress it. Distracting on a long take, invisible on a cut.</>,
    },
    {
      id: 'lens-character-diffusion',
      conceptId: 'lens-character',
      kind: 'recall',
      front: <>Why do contemporary DPs often use <strong>diffusion filters</strong> on modern lenses?</>,
      back: <>To soften the clinical perfection of multi-coated modern glass — lift blacks, halate highlights, ease skin. Black Pro-Mist and Glimmerglass are the common filters. The recent "perfume ad" / A24 look is largely deliberate diffusion on otherwise too-clean lenses.</>,
    },
    {
      id: 'lens-character-doc',
      conceptId: 'lens-character',
      kind: 'recall',
      front: <>How does the lens-character question shift in documentary?</>,
      back: <>Doc often shoots whatever zoom is mounted; the question becomes <em>treatment</em> rather than choice — adding a diffusion filter to take the edge off clinical glass, or accepting cheap-zoom distortion as documentary signature. The character is curated through filtration, not selected through glass.</>,
    },
    {
      id: 'lens-character-recognize-hex',
      conceptId: 'lens-character',
      kind: 'recognize',
      front: (
        <>
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-ink)]/55 mb-3">What kind of lens produces this bokeh?</p>
          <MiniHexBokeh />
        </>
      ),
      back: <>Vintage / older glass with a fewer-bladed aperture iris. Hexagonal bokeh is the iris fingerprint of older lenses; modern primes produce round bokeh through curved blades.</>,
    },
    {
      id: 'lens-character-recognize-anamorphic',
      conceptId: 'lens-character',
      kind: 'recognize',
      front: (
        <>
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-ink)]/55 mb-3">What kind of lens produces this flare?</p>
          <MiniAnamorphic />
        </>
      ),
      back: <>Anamorphic lens. The signature horizontal blue streak comes from the aspherical front element that squeezes a wide image onto a standard sensor.</>,
    },
  ],
}
