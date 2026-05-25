import { useState } from 'react'
import { Frame, Camera } from './primitives'

type Setup = '1pt' | '2pt' | '3pt' | 'rembrandt' | 'silhouette' | 'high-key' | 'low-key'

interface SetupDef {
  id: Setup
  name: string
  lights: { id: string; x: number; y: number; intensity: number; label: string }[]
  description: string
  faceShading: 'half' | 'soft' | 'even' | 'triangle' | 'silhouette' | 'flat' | 'sliver'
}

const cx = 240
const cy = 170

const SETUPS: SetupDef[] = [
  {
    id: '1pt',
    name: 'Key only',
    lights: [{ id: 'key', x: cx - 120, y: cy - 60, intensity: 1, label: 'key' }],
    faceShading: 'half',
    description: 'One light, hard shadow. Half the face in light, half in dark. Dramatic, severe, low-cost. Default for film noir and many one-person doc shoots.',
  },
  {
    id: '2pt',
    name: 'Key + fill',
    lights: [
      { id: 'key', x: cx - 120, y: cy - 60, intensity: 1, label: 'key' },
      { id: 'fill', x: cx + 110, y: cy - 30, intensity: 0.4, label: 'fill' },
    ],
    faceShading: 'soft',
    description: 'Key from one side, softer fill from the other. The fill lifts the shadow side so the face is readable. Broadcast and corporate-interview default.',
  },
  {
    id: '3pt',
    name: '3-point (classic)',
    lights: [
      { id: 'key', x: cx - 120, y: cy - 60, intensity: 1, label: 'key' },
      { id: 'fill', x: cx + 110, y: cy - 30, intensity: 0.4, label: 'fill' },
      { id: 'back', x: cx + 30, y: cy + 110, intensity: 0.7, label: 'back / kicker' },
    ],
    faceShading: 'soft',
    description: 'Key + fill + back light. The back (or "kicker") rims the subject from behind, separating them from the background. The canonical setup for narrative interviews and many fiction setups.',
  },
  {
    id: 'rembrandt',
    name: 'Rembrandt',
    lights: [{ id: 'key', x: cx - 90, y: cy - 130, intensity: 1, label: 'key (high, 45°)' }],
    faceShading: 'triangle',
    description: 'Key light high and to one side, roughly 45° down. Creates the characteristic triangle of light on the shadow-side cheek. Painterly, intimate, drawn from the Dutch master\'s portraits.',
  },
  {
    id: 'silhouette',
    name: 'Silhouette',
    lights: [{ id: 'back', x: cx, y: cy + 130, intensity: 1, label: 'back only' }],
    faceShading: 'silhouette',
    description: 'Only a strong back light behind the subject. Face goes black, outline glows. Used to anonymise a subject (whistleblower interview) or for stylised drama.',
  },
  {
    id: 'high-key',
    name: 'High-key',
    lights: [
      { id: 'key', x: cx - 80, y: cy - 100, intensity: 1, label: 'key (soft)' },
      { id: 'fill', x: cx + 80, y: cy - 60, intensity: 0.85, label: 'fill (large soft)' },
      { id: 'back', x: cx + 30, y: cy + 110, intensity: 0.5, label: 'back' },
    ],
    faceShading: 'flat',
    description: 'Very low contrast — fill almost matches key. Bright, even, optimistic. Sitcom and commercial register. Common in lifestyle documentary.',
  },
  {
    id: 'low-key',
    name: 'Low-key',
    lights: [
      { id: 'key', x: cx - 110, y: cy - 90, intensity: 1, label: 'key (hard)' },
      { id: 'back', x: cx + 40, y: cy + 100, intensity: 0.6, label: 'back (subtle)' },
    ],
    faceShading: 'sliver',
    description: 'High contrast — hard key, almost no fill. Most of the frame in shadow. Thriller, noir, intimate doc moments. The opposite of high-key.',
  },
]

const Face = ({ shading }: { shading: SetupDef['faceShading'] }) => {
  const r = 32
  const halfPath = `M ${cx - r} ${cy - r} L ${cx} ${cy - r} L ${cx} ${cy + r} L ${cx - r} ${cy + r} Z`

  const baseCircle = (
    <circle cx={cx} cy={cy} r={r} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.5} />
  )

  switch (shading) {
    case 'half':
      return (
        <g>
          {baseCircle}
          <path
            d={`M ${cx} ${cy - r} A ${r} ${r} 0 0 0 ${cx} ${cy + r} Z`}
            fill="var(--color-ink)"
            opacity={0.7}
          />
        </g>
      )
    case 'soft':
      return (
        <g>
          {baseCircle}
          <path d={halfPath} fill="var(--color-ink)" opacity={0.18} />
        </g>
      )
    case 'even':
    case 'flat':
      return baseCircle
    case 'triangle':
      return (
        <g>
          {baseCircle}
          <path
            d={`M ${cx} ${cy - r} A ${r} ${r} 0 0 0 ${cx} ${cy + r} Z`}
            fill="var(--color-ink)"
            opacity={0.5}
          />
          <path
            d={`M ${cx - 5} ${cy - 5} L ${cx + 5} ${cy - 8} L ${cx + 3} ${cy + 6} Z`}
            fill="var(--color-paper)"
            opacity={0.95}
          />
        </g>
      )
    case 'silhouette':
      return (
        <g>
          <circle cx={cx} cy={cy} r={r} fill="var(--color-ink)" stroke="none" />
          <circle cx={cx} cy={cy} r={r + 2} fill="none" stroke="var(--color-accent)" strokeWidth={2} opacity={0.7} />
        </g>
      )
    case 'sliver':
      return (
        <g>
          <circle cx={cx} cy={cy} r={r} fill="var(--color-ink)" opacity={0.85} />
          <path
            d={`M ${cx - r} ${cy - 5} A ${r} ${r} 0 0 1 ${cx - r * 0.5} ${cy - r} L ${cx - r * 0.3} ${cy - r * 0.7} A ${r * 0.8} ${r * 0.8} 0 0 0 ${cx - r * 0.8} ${cy} Z`}
            fill="var(--color-paper)"
            opacity={0.85}
          />
        </g>
      )
  }
}

export function LightingDiagram() {
  const [activeId, setActiveId] = useState<Setup>('3pt')
  const active = SETUPS.find((s) => s.id === activeId)!
  const W = 480
  const H = 340

  return (
    <div className="space-y-3">
      <Frame viewBox={`0 0 ${W} ${H}`}>
        <text x={12} y={20} fontSize={11} fill="#9a9690">top-down view · {active.name}</text>
        {active.lights.map((light) => (
          <g key={light.id}>
            <defs>
              <radialGradient id={`g-${light.id}`}>
                <stop offset="0%" stopColor="var(--color-accent)" stopOpacity={light.intensity * 0.4} />
                <stop offset="100%" stopColor="var(--color-accent)" stopOpacity={0} />
              </radialGradient>
            </defs>
            <circle cx={light.x} cy={light.y} r={70} fill={`url(#g-${light.id})`} />
            <circle cx={light.x} cy={light.y} r={10} fill="var(--color-accent)" />
            <line
              x1={light.x}
              y1={light.y}
              x2={cx}
              y2={cy}
              stroke="var(--color-accent)"
              strokeWidth={1}
              strokeDasharray="3 3"
              opacity={0.6}
            />
            <text x={light.x} y={light.y + 22} fontSize={10} textAnchor="middle" fill="var(--color-accent)">
              {light.label}
            </text>
          </g>
        ))}
        <Face shading={active.faceShading} />
        <text x={cx} y={cy + 56} fontSize={10} textAnchor="middle" fill="var(--color-ink)/70">subject</text>
        <Camera x={cx} y={cy + 130} rotation={-90} />
        <text x={cx} y={cy + 165} fontSize={10} textAnchor="middle" fill="var(--color-ink)/70">camera</text>
      </Frame>

      <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">
        <strong>{active.name}.</strong> {active.description}
      </p>

      <div className="flex flex-wrap gap-1">
        {SETUPS.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveId(s.id)}
            className={`px-2.5 py-1 text-xs border ${
              s.id === activeId
                ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>
    </div>
  )
}
