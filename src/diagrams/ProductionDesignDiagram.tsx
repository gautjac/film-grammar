import { useState } from 'react'
import { Frame } from './primitives'

type Layer = 'walls' | 'large-props' | 'dressing' | 'action-props' | 'practicals'

interface LayerDef {
  id: Layer
  name: string
  description: string
}

const LAYERS: LayerDef[] = [
  { id: 'walls', name: 'Set / walls', description: 'The space itself — built walls, ceilings, location interiors. Establishes era, class, geography. The canvas everything else sits on.' },
  { id: 'large-props', name: 'Large props / furniture', description: 'Tables, beds, sofas, machinery. The functional shapes characters move around. Reads as how the room is used.' },
  { id: 'dressing', name: 'Set dressing', description: 'The decoration that fills the space — pictures on walls, books on shelves, plants, rugs. Tells you who lives here without anyone speaking.' },
  { id: 'action-props', name: 'Action props', description: 'Things characters actually touch and use — a phone, a cigarette, a letter. Picked, placed, and continuity-tracked shot to shot.' },
  { id: 'practicals', name: 'Practicals', description: 'In-frame light sources that double as fixtures — table lamps, neon signs, computer screens. Both decoration and motivated light.' },
]

const W = 520
const H = 300

interface LayerVisuals {
  walls: (active: boolean) => React.ReactNode
  largeProps: (active: boolean) => React.ReactNode
  dressing: (active: boolean) => React.ReactNode
  actionProps: (active: boolean) => React.ReactNode
  practicals: (active: boolean) => React.ReactNode
}

const opacity = (active: boolean) => (active ? 1 : 0.12)

const v: LayerVisuals = {
  walls: (a) => (
    <g opacity={opacity(a)}>
      {/* floor */}
      <rect x={0} y={H * 0.65} width={W} height={H * 0.35} fill="#d4c8b0" stroke="var(--color-ink)" strokeWidth={1} />
      {/* back wall */}
      <rect x={0} y={H * 0.12} width={W} height={H * 0.53} fill="#e8e0d0" stroke="var(--color-ink)" strokeWidth={1} />
      {/* perspective lines */}
      <line x1={0} y1={H * 0.12} x2={0} y2={0} stroke="var(--color-ink)" strokeWidth={1} opacity={0.4} />
      <line x1={W} y1={H * 0.12} x2={W} y2={0} stroke="var(--color-ink)" strokeWidth={1} opacity={0.4} />
      {/* window */}
      <rect x={W * 0.62} y={H * 0.22} width={W * 0.18} height={H * 0.28} fill="#c8d8e0" stroke="var(--color-ink)" strokeWidth={1} />
      <line x1={W * 0.71} y1={H * 0.22} x2={W * 0.71} y2={H * 0.5} stroke="var(--color-ink)" strokeWidth={0.5} />
      <line x1={W * 0.62} y1={H * 0.36} x2={W * 0.8} y2={H * 0.36} stroke="var(--color-ink)" strokeWidth={0.5} />
    </g>
  ),
  largeProps: (a) => (
    <g opacity={opacity(a)}>
      {/* table */}
      <rect x={W * 0.12} y={H * 0.6} width={W * 0.32} height={H * 0.06} fill="#8a7050" stroke="var(--color-ink)" strokeWidth={1} />
      <rect x={W * 0.14} y={H * 0.66} width={4} height={H * 0.2} fill="#8a7050" stroke="var(--color-ink)" strokeWidth={0.5} />
      <rect x={W * 0.42} y={H * 0.66} width={4} height={H * 0.2} fill="#8a7050" stroke="var(--color-ink)" strokeWidth={0.5} />
      {/* chair */}
      <rect x={W * 0.18} y={H * 0.62} width={W * 0.06} height={W * 0.05} fill="#a08868" stroke="var(--color-ink)" strokeWidth={0.5} />
    </g>
  ),
  dressing: (a) => (
    <g opacity={opacity(a)}>
      {/* picture frames */}
      <rect x={W * 0.08} y={H * 0.18} width={W * 0.08} height={H * 0.12} fill="#c8a878" stroke="var(--color-ink)" strokeWidth={0.8} />
      <rect x={W * 0.1} y={H * 0.2} width={W * 0.04} height={H * 0.08} fill="#5a5a4a" />
      <rect x={W * 0.2} y={H * 0.16} width={W * 0.06} height={H * 0.08} fill="#c8a878" stroke="var(--color-ink)" strokeWidth={0.8} />
      {/* shelf with books */}
      <rect x={W * 0.32} y={H * 0.32} width={W * 0.18} height={3} fill="#8a7050" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={W * 0.33 + i * 14} y={H * 0.22} width={10} height={H * 0.1} fill={['#7a5a3a', '#5a4a3a', '#8a6a4a', '#6a5a3a', '#7a6a4a', '#5a4a3a'][i]} stroke="var(--color-ink)" strokeWidth={0.4} />
      ))}
      {/* rug */}
      <ellipse cx={W * 0.35} cy={H * 0.88} rx={W * 0.22} ry={H * 0.05} fill="#a8503a" opacity={0.5} />
    </g>
  ),
  actionProps: (a) => (
    <g opacity={opacity(a)}>
      {/* cup on table */}
      <ellipse cx={W * 0.18} cy={H * 0.6} rx={6} ry={2} fill="var(--color-ink)" />
      <rect x={W * 0.18 - 5} y={H * 0.56} width={10} height={6} fill="#e0d0a0" stroke="var(--color-ink)" strokeWidth={0.5} />
      {/* letter */}
      <rect x={W * 0.28} y={H * 0.59} width={W * 0.07} height={H * 0.04} fill="#f4ecd8" stroke="var(--color-ink)" strokeWidth={0.6} transform={`rotate(-8 ${W * 0.31} ${H * 0.61})`} />
      {/* glasses */}
      <circle cx={W * 0.38} cy={H * 0.59} r={3} fill="none" stroke="var(--color-ink)" strokeWidth={1} />
      <circle cx={W * 0.41} cy={H * 0.59} r={3} fill="none" stroke="var(--color-ink)" strokeWidth={1} />
      <line x1={W * 0.385} y1={H * 0.59} x2={W * 0.405} y2={H * 0.59} stroke="var(--color-ink)" strokeWidth={1} />
    </g>
  ),
  practicals: (a) => (
    <g opacity={opacity(a)}>
      {/* lamp on table */}
      <defs>
        <radialGradient id="lamp-glow">
          <stop offset="0%" stopColor="#fff2c0" stopOpacity={0.85} />
          <stop offset="100%" stopColor="#fff2c0" stopOpacity={0} />
        </radialGradient>
      </defs>
      <circle cx={W * 0.5} cy={H * 0.5} r={50} fill="url(#lamp-glow)" />
      <rect x={W * 0.485} y={H * 0.5} width={W * 0.03} height={H * 0.1} fill="#5a4a3a" stroke="var(--color-ink)" strokeWidth={0.5} />
      <polygon
        points={`${W * 0.475},${H * 0.5} ${W * 0.525},${H * 0.5} ${W * 0.535},${H * 0.42} ${W * 0.465},${H * 0.42}`}
        fill="#e0c890"
        stroke="var(--color-ink)"
        strokeWidth={0.8}
      />
      {/* ceiling light */}
      <circle cx={W * 0.75} cy={H * 0.05} r={6} fill="#fff2c0" stroke="var(--color-ink)" strokeWidth={0.5} />
      <circle cx={W * 0.75} cy={H * 0.05} r={20} fill="#fff2c0" opacity={0.25} />
    </g>
  ),
}

export function ProductionDesignDiagram() {
  const [enabled, setEnabled] = useState<Record<Layer, boolean>>({
    walls: true,
    'large-props': true,
    dressing: true,
    'action-props': true,
    practicals: true,
  })
  const [focused, setFocused] = useState<Layer>('walls')

  const toggle = (l: Layer) => setEnabled((s) => ({ ...s, [l]: !s[l] }))

  return (
    <div className="space-y-3">
      <Frame viewBox={`0 0 ${W} ${H}`}>
        <text x={12} y={20} fontSize={11} fill="#9a9690">interior · build-up by layer</text>
        {v.walls(enabled.walls)}
        {v.largeProps(enabled['large-props'])}
        {v.dressing(enabled.dressing)}
        {v.practicals(enabled.practicals)}
        {v.actionProps(enabled['action-props'])}
      </Frame>

      <div className="space-y-2">
        <div className="text-xs uppercase tracking-[0.14em] text-[var(--color-ink)]/60">
          {LAYERS.find((l) => l.id === focused)?.name}
        </div>
        <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">
          {LAYERS.find((l) => l.id === focused)?.description}
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-[10px] uppercase tracking-wider text-[var(--color-ink)]/55">
          Tap to toggle layer · click name to read
        </p>
        <div className="flex flex-wrap gap-1">
          {LAYERS.map((l) => (
            <div key={l.id} className="flex">
              <button
                onClick={() => toggle(l.id)}
                aria-pressed={enabled[l.id]}
                className={`px-2 py-1 text-xs border-y border-l ${
                  enabled[l.id]
                    ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                    : 'border-[var(--color-rule)] text-[var(--color-ink)]/40'
                }`}
              >
                {enabled[l.id] ? '●' : '○'}
              </button>
              <button
                onClick={() => setFocused(l.id)}
                className={`px-2 py-1 text-xs border ${
                  focused === l.id
                    ? 'bg-[var(--color-ink)]/10 border-[var(--color-ink)]'
                    : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
                }`}
              >
                {l.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
