import { useState } from 'react'
import { Frame, Camera, Subject } from './primitives'

type BlockingId = 'line' | 'triangle' | 'deep' | 'foreground-anchor' | 'dispersed'

interface BlockingDef {
  id: BlockingId
  name: string
  positions: { x: number; y: number; label: string; scale?: number }[]
  description: string
}

const W = 520
const H = 320
const camera = { x: W * 0.5, y: H * 0.92 }

const BLOCKINGS: BlockingDef[] = [
  {
    id: 'line',
    name: 'Line / proscenium',
    positions: [
      { x: W * 0.32, y: H * 0.45, label: 'A' },
      { x: W * 0.5, y: H * 0.45, label: 'B' },
      { x: W * 0.68, y: H * 0.45, label: 'C' },
    ],
    description: 'Subjects arrayed in a flat line parallel to the camera. Theatrical, formal — every face equally visible, no depth play. Common in classical television, group photographs, deliberate flatness for stylistic effect.',
  },
  {
    id: 'triangle',
    name: 'Triangle',
    positions: [
      { x: W * 0.35, y: H * 0.55, label: 'A' },
      { x: W * 0.65, y: H * 0.55, label: 'B' },
      { x: W * 0.5, y: H * 0.35, label: 'C' },
    ],
    description: 'Three subjects in a triangle, one pushed upstage (further from camera). Reads as relational — the upstage subject is observed by or observing the downstage pair. The default for three-character scenes.',
  },
  {
    id: 'deep',
    name: 'Deep staging',
    positions: [
      { x: W * 0.4, y: H * 0.65, label: 'A (foreground)', scale: 1.3 },
      { x: W * 0.55, y: H * 0.45, label: 'B (mid)' },
      { x: W * 0.62, y: H * 0.25, label: 'C (background)', scale: 0.7 },
    ],
    description: 'Subjects spread across multiple depth planes — foreground, mid, background — simultaneously in focus or readable. The Welles / Toland strategy. Demands deep depth of field or sharp blocking.',
  },
  {
    id: 'foreground-anchor',
    name: 'Foreground anchor',
    positions: [
      { x: W * 0.25, y: H * 0.78, label: 'A (close)', scale: 1.6 },
      { x: W * 0.55, y: H * 0.45, label: 'B (subject)' },
    ],
    description: 'A subject placed very close to camera anchors the foreground, with the main subject pushed mid-frame. Used to create over-the-shoulder feel without a literal OTS, or to layer two performances spatially.',
  },
  {
    id: 'dispersed',
    name: 'Dispersed',
    positions: [
      { x: W * 0.2, y: H * 0.4, label: 'A' },
      { x: W * 0.75, y: H * 0.6, label: 'B' },
      { x: W * 0.4, y: H * 0.75, label: 'C' },
      { x: W * 0.6, y: H * 0.3, label: 'D' },
    ],
    description: 'Subjects scattered through the space with no clear geometric pattern. Reads as natural, lived-in — a party, a busy room, observational documentary. Demands movement-led shooting or wide framings to hold the relationships.',
  },
]

export function BlockingDiagram() {
  const [activeId, setActiveId] = useState<BlockingId>('triangle')
  const active = BLOCKINGS.find((b) => b.id === activeId)!

  const renderPreview = () => {
    const pW = 240
    const pH = 140
    const camY = H * 0.92
    return (
      <svg viewBox={`0 0 ${pW} ${pH}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
        {active.positions
          .slice()
          .sort((a, b) => b.y - a.y)
          .map((p, i) => {
            const distance = camY - p.y
            const closenessScale = 1.6 - (distance / camY) * 1.4
            const finalScale = (p.scale ?? 1) * closenessScale * 1.1
            const fx = (p.x / W) * pW
            const fy = pH * 0.95 - finalScale * 38
            return (
              <g key={i} transform={`translate(${fx} ${fy}) scale(${finalScale})`}>
                <circle cx={0} cy={-12} r={6} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1} />
                <rect x={-7} y={-6} width={14} height={20} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1} />
              </g>
            )
          })}
      </svg>
    )
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-3">
        <Frame viewBox={`0 0 ${W} ${H}`}>
          <text x={12} y={20} fontSize={11} fill="#9a9690">top-down view · {active.name}</text>
          <line x1={0} y1={H * 0.85} x2={W} y2={H * 0.85} stroke="#9a9690" />
          {active.positions.map((p, i) => (
            <g key={i}>
              <Subject x={p.x} y={p.y} facing={180} scale={p.scale ?? 1} />
              <text x={p.x} y={p.y + 30} fontSize={9} textAnchor="middle" fill="var(--color-ink)/70">{p.label}</text>
            </g>
          ))}
          <Camera x={camera.x} y={camera.y} rotation={-90} label="camera" />
        </Frame>

        <div className="space-y-2">
          <div className="text-xs uppercase tracking-wider text-[var(--color-ink)]/60">Resulting frame</div>
          {renderPreview()}
          <p className="text-xs text-[var(--color-ink)]/70 leading-relaxed">{active.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1">
        {BLOCKINGS.map((b) => (
          <button
            key={b.id}
            onClick={() => setActiveId(b.id)}
            className={`px-2.5 py-1 text-xs border ${
              b.id === activeId
                ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
            }`}
          >
            {b.name}
          </button>
        ))}
      </div>
    </div>
  )
}
