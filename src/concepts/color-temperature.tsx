import type { Concept } from '../types'
import { ColorTemperatureDiagram } from '../diagrams/ColorTemperatureDiagram'

export const colorTemperature: Concept = {
  id: 'color-temperature',
  title: 'Color Temperature & White Balance',
  family: 'Color',
  tags: ['fiction', 'documentary'],
  blurb: 'The Kelvin scale that names every light source — and the white-balance decision that tells the camera which one to call "neutral".',
  prose: (
    <>
      <p>
        Every light source has a colour, measured on the Kelvin scale. Counter-intuitively, low numbers are warm (orange) and high numbers are cool (blue). A candle is roughly 1800K, a tungsten bulb 2700K, midday sun 5600K, an overcast sky 7500K, deep blue hour 10000K. The eye normalises this in real time — you don't perceive your living room as orange — but the camera doesn't. Whatever colour temperature you tell the camera is "neutral" becomes the white in the frame; every other source shifts away from it.
      </p>
      <p>
        <strong>White balancing to tungsten</strong> (3200K) tells the camera "what I'm pointing at right now is what white should look like." If you then turn the camera toward daylight, the daylight reads as blue. <strong>White balancing to daylight</strong> (5600K) does the opposite — daylight reads neutral, tungsten interiors read orange. The decision is one of the most consequential in cinematography: it sets the entire colour register of the scene.
      </p>
      <p>
        <strong>Mixed light</strong> is the constant practical problem. A room with both a window and a lamp has two colour temperatures fighting for dominance. The cinematographer's options: pick one as "correct" and let the other drift, gel the lamps to match the window (or vice versa), block one source, or embrace the mix as a stylistic choice. Documentary shoots in real spaces and almost always lives with mixed light; fiction sets often gel and rebalance for unity.
      </p>
      <p>
        Deliberately mis-balancing is its own language. A daylight-balanced camera in a tungsten interior produces the orange "domestic warmth" of countless drama interiors. A tungsten-balanced camera outdoors produces the cyan-blue of moonlight (true moonlight is technically neutral, but the convention is read by audiences).
      </p>
    </>
  ),
  diagram: <ColorTemperatureDiagram />,
  cards: [
    {
      id: 'color-temp-kelvin',
      conceptId: 'color-temperature',
      kind: 'recall',
      front: <>On the Kelvin scale, which way is warm and which way is cool?</>,
      back: <>Counter-intuitive: <em>low</em> numbers are warm (orange) and <em>high</em> numbers are cool (blue). Candle ≈ 1800K, tungsten ≈ 2700K, daylight ≈ 5600K, overcast ≈ 7500K.</>,
    },
    {
      id: 'color-temp-sources',
      conceptId: 'color-temperature',
      kind: 'recall',
      front: <>What are the Kelvin values for tungsten, daylight, and overcast?</>,
      back: <>Tungsten ≈ 3200K (warm orange-yellow), daylight ≈ 5600K (neutral white), overcast ≈ 7500K (cool blue).</>,
    },
    {
      id: 'color-temp-white-balance',
      conceptId: 'color-temperature',
      kind: 'recall',
      front: <>What does <strong>white balance</strong> tell the camera?</>,
      back: <>Which colour temperature to call "neutral white." Whatever you balance to looks neutral; every other source in the scene shifts away from that anchor.</>,
    },
    {
      id: 'color-temp-mixed-light',
      conceptId: 'color-temperature',
      kind: 'recall',
      front: <>What is <strong>mixed light</strong> and how can a cinematographer handle it?</>,
      back: <>A scene with two colour temperatures fighting (window + lamp). Options: pick one as correct and let the other drift, gel one source to match the other, block one source, or embrace the mix stylistically. Documentary usually lives with it; fiction often unifies.</>,
    },
    {
      id: 'color-temp-deliberate-mis',
      conceptId: 'color-temperature',
      kind: 'recall',
      front: <>What's the convention for shooting moonlight, and is it physically accurate?</>,
      back: <>Cyan-blue, often produced by balancing tungsten while shooting outdoors. True moonlight is roughly neutral white (it's reflected sunlight), but the blue convention has been so consistent that audiences read it as moonlight.</>,
    },
  ],
}
