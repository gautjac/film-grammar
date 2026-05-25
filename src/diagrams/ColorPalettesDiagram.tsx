import { useState } from 'react'

type PaletteId = 'wes' | 'mann' | 'coen' | 'amelie' | 'matrix' | 'monogamous'

interface PaletteDef {
  id: PaletteId
  name: string
  film: string
  swatches: string[]
  description: string
  category: 'analogous' | 'complementary' | 'triadic' | 'monochromatic'
}

const PALETTES: PaletteDef[] = [
  {
    id: 'wes',
    name: 'Pastel triadic',
    film: 'Wes Anderson · The Grand Budapest Hotel (2014)',
    swatches: ['#e9bcb7', '#f6c6a9', '#c8e0e8', '#f3e3b8', '#9bb5a0'],
    description: 'Pastels arranged near-triadic on the wheel, all desaturated to a similar value. Doll-house artifice — every frame composed like a window display. The dominant signature of Anderson\'s work.',
    category: 'triadic',
  },
  {
    id: 'mann',
    name: 'Steel complementary',
    film: 'Michael Mann · Heat (1995)',
    swatches: ['#1a2a3a', '#2c3e50', '#a36b3e', '#d4a373', '#7d8a8f'],
    description: 'Cold blues and warm sodium-vapour ambers — Los Angeles at night. A complementary scheme cooked into the city itself. Modern noir.',
    category: 'complementary',
  },
  {
    id: 'coen',
    name: 'Earthen analogous',
    film: 'Coen Brothers · No Country for Old Men (2007)',
    swatches: ['#7d6342', '#a78a5e', '#c8a87c', '#d4bd92', '#6b5a3e'],
    description: 'Browns, tans, dust — an analogous earth palette. The Texas border made coherent through colour. Limited hue, wide value range.',
    category: 'analogous',
  },
  {
    id: 'amelie',
    name: 'Saturated complementary',
    film: 'Jean-Pierre Jeunet · Amélie (2001)',
    swatches: ['#c44a2a', '#d97c2a', '#3d8b6b', '#1f4d3d', '#f2dca5'],
    description: 'Strong reds and greens — a complementary scheme pushed to nostalgic candy. Paris seen through a child\'s book. Punchier than Mann; warmer than Anderson.',
    category: 'complementary',
  },
  {
    id: 'matrix',
    name: 'Green monochromatic',
    film: 'Wachowskis · The Matrix (1999)',
    swatches: ['#0a1a0e', '#1e3a24', '#3a6b3e', '#5d8a4e', '#a0b85a'],
    description: 'A near-monochromatic green for the simulated world (versus the cool blue real world). Colour as worldbuilding — the audience reads "we are inside the Matrix" before any line of dialogue.',
    category: 'monochromatic',
  },
  {
    id: 'monogamous',
    name: 'Orange & teal',
    film: 'Mainstream cinema · 2005–present',
    swatches: ['#d97a3a', '#e8a45c', '#3d6b78', '#5c8a99', '#f0d8b8'],
    description: 'The complementary grade that has dominated mainstream cinema for two decades. Skin tones pushed warm, environments pushed cool. Reads as "professional Hollywood." Increasingly a cliché.',
    category: 'complementary',
  },
]

const Swatches = ({ palette }: { palette: PaletteDef }) => (
  <div className="flex h-16 sm:h-20 border border-[var(--color-rule)]/40">
    {palette.swatches.map((c, i) => (
      <div
        key={i}
        className="flex-1"
        style={{ background: c }}
        title={c}
      />
    ))}
  </div>
)

export function ColorPalettesDiagram() {
  const [idx, setIdx] = useState(0)
  const active = PALETTES[idx]

  return (
    <div className="space-y-3">
      <Swatches palette={active} />

      <div className="space-y-1.5">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
          <span className="text-sm font-medium">{active.name}</span>
          <span className="text-xs uppercase tracking-wider text-[var(--color-ink)]/60">{active.category}</span>
        </div>
        <p className="text-xs text-[var(--color-ink)]/55 italic">{active.film}</p>
        <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed pt-1">{active.description}</p>
      </div>

      <div className="flex flex-wrap gap-1">
        {PALETTES.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setIdx(i)}
            className={`px-2.5 py-1 text-xs border ${
              i === idx
                ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="border-t border-[var(--color-rule)]/20 pt-3 mt-2">
        <p className="text-xs text-[var(--color-ink)]/60 leading-relaxed">
          Note: swatches are approximations from memory and recreation, not pulled from official frames. Colour scripts in animation studios use literal palette swatches per scene; in live-action the palette emerges from production design + costume + grading together.
        </p>
      </div>
    </div>
  )
}
