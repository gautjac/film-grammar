import { useState } from 'react'

type PatternId = 'cross' | 'parallel' | 'climax' | 'split'

interface PatternDef {
  id: PatternId
  name: string
  description: string
  // Each cell is { storyline: 'A' | 'B', width: number }
  cells: { line: 'A' | 'B'; w: number }[]
}

const PATTERNS: PatternDef[] = [
  {
    id: 'cross',
    name: 'Crosscutting (alternating)',
    description: 'Cuts alternate between two parallel storylines happening simultaneously. The convention since Griffith\'s Birth of a Nation (1915). Audience reads the two as happening at the same time even when they\'re geographically separate.',
    cells: [
      { line: 'A', w: 60 },
      { line: 'B', w: 60 },
      { line: 'A', w: 50 },
      { line: 'B', w: 50 },
      { line: 'A', w: 60 },
      { line: 'B', w: 60 },
      { line: 'A', w: 55 },
      { line: 'B', w: 65 },
    ],
  },
  {
    id: 'parallel',
    name: 'Parallel action (thematic)',
    description: 'Two storylines linked thematically rather than temporally — the audience may not know whether they\'re happening at the same time. The Godfather baptism scene cuts between a christening and a string of mob hits; the link is moral, not chronological.',
    cells: [
      { line: 'A', w: 90 },
      { line: 'B', w: 80 },
      { line: 'A', w: 70 },
      { line: 'B', w: 60 },
      { line: 'A', w: 50 },
      { line: 'B', w: 40 },
      { line: 'A', w: 30 },
      { line: 'B', w: 40 },
    ],
  },
  {
    id: 'climax',
    name: 'Accelerating climax',
    description: 'Cuts grow shorter as the sequence accelerates toward convergence — the chase, the rescue, the simultaneous reveal. Cross-cut intervals shrink to build velocity. The audience\'s pulse rises with the cut rate.',
    cells: [
      { line: 'A', w: 90 },
      { line: 'B', w: 80 },
      { line: 'A', w: 55 },
      { line: 'B', w: 45 },
      { line: 'A', w: 30 },
      { line: 'B', w: 25 },
      { line: 'A', w: 18 },
      { line: 'B', w: 16 },
      { line: 'A', w: 14 },
      { line: 'B', w: 14 },
      { line: 'A', w: 50 },
    ],
  },
  {
    id: 'split',
    name: 'Split-screen',
    description: 'Both storylines on screen simultaneously, divided spatially within the frame. A more literal form of parallelism — the audience reads both at once. Brian De Palma, 24, certain Run Lola Run sequences. Distinct from crosscutting because nothing is cut.',
    cells: [],
  },
]

const W = 520
const H = 130

const Strip = ({ pattern }: { pattern: PatternDef }) => {
  if (pattern.id === 'split') {
    return (
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
        <text x={12} y={20} fontSize={11} fill="#9a9690">single shot, divided spatially</text>
        <rect x={20} y={30} width={(W - 40) / 2 - 2} height={H - 50} fill="var(--color-ink)" opacity={0.85} />
        <rect x={20 + (W - 40) / 2 + 2} y={30} width={(W - 40) / 2 - 2} height={H - 50} fill="var(--color-accent)" opacity={0.85} />
        <text x={20 + (W - 40) / 4} y={H - 30} fontSize={10} textAnchor="middle" fill="var(--color-paper)">storyline A</text>
        <text x={20 + (W - 40) * 0.75} y={H - 30} fontSize={10} textAnchor="middle" fill="var(--color-paper)">storyline B</text>
        <text x={W / 2} y={H - 4} fontSize={9} textAnchor="middle" fill="#9a9690">spatial parallelism, not temporal cuts</text>
      </svg>
    )
  }

  let x = 20
  const trackHA = 32
  const trackHB = 32
  const yA = 32
  const yB = yA + trackHA + 8

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
      <text x={-4} y={yA + 20} fontSize={10} textAnchor="end" fill="#9a9690">A</text>
      <text x={-4} y={yB + 20} fontSize={10} textAnchor="end" fill="#9a9690">B</text>
      {pattern.cells.map((c, i) => {
        const rect = (
          <rect
            key={i}
            x={x}
            y={c.line === 'A' ? yA : yB}
            width={Math.max(c.w - 2, 6)}
            height={c.line === 'A' ? trackHA : trackHB}
            fill={c.line === 'A' ? 'var(--color-ink)' : 'var(--color-accent)'}
            opacity={0.85}
          />
        )
        x += c.w
        return rect
      })}
      <text x={20} y={H - 4} fontSize={9} fill="#9a9690">time →</text>
    </svg>
  )
}

export function ParallelEditingDiagram() {
  const [activeId, setActiveId] = useState<PatternId>('cross')
  const active = PATTERNS.find((p) => p.id === activeId)!

  return (
    <div className="space-y-3">
      <svg viewBox="0 0 520 0" style={{ display: 'none' }}>
        <defs />
      </svg>
      <div style={{ overflow: 'hidden' }}>
        <Strip pattern={active} />
      </div>

      <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">
        <strong>{active.name}.</strong> {active.description}
      </p>

      <div className="flex flex-wrap gap-1">
        {PATTERNS.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveId(p.id)}
            className={`px-2.5 py-1 text-xs border ${
              p.id === activeId
                ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>
    </div>
  )
}
