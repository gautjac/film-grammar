import { useState } from 'react'

type RegisterId = 'period' | 'class' | 'role' | 'arc' | 'symbolic'

interface RegisterDef {
  id: RegisterId
  name: string
  description: string
}

const REGISTERS: RegisterDef[] = [
  { id: 'period', name: 'Period', description: 'Costume tells the audience when. Silhouette, fabric, fastenings, footwear — every era has a signature. A pair of jeans in a 1920s scene fractures the world.' },
  { id: 'class', name: 'Class & status', description: 'Tailoring, fabric quality, cleanliness, accessories — wardrobe reads class faster than dialogue. Mr. Darcy\'s coat versus a labourer\'s shirt do the work before either speaks.' },
  { id: 'role', name: 'Role / profession', description: 'Uniform, trade, identifiable type. The cop\'s badge, the doctor\'s scrubs, the trader\'s suspenders. Sometimes literal uniform, sometimes coded — Sicario\'s tactical gear vs. the FBI suits.' },
  { id: 'arc', name: 'Arc / state', description: 'How a character\'s costume changes across a film. Walter White\'s greying and hardening from beige slacks to black hat. Cinderella\'s rags to gown. Costume as visual indicator of internal change.' },
  { id: 'symbolic', name: 'Symbolic', description: 'Colour, pattern, or fabric carrying explicit meaning. The red of Don\'t Look Now. The white of M. Carrie\'s prom dress. Costume promoted from clothing to icon.' },
]

interface FigureSpec {
  id: string
  label: string
  silhouettePath: string
  topColor: string
  bottomColor: string
  detail?: string
}

const FIGURES_BY_REGISTER: Record<RegisterId, FigureSpec[]> = {
  period: [
    { id: 'p1', label: '1860s', silhouettePath: 'M -32 80 Q -50 60 -40 30 L -28 10 L -8 -6 L 8 -6 L 28 10 L 40 30 Q 50 60 32 80 Z', topColor: '#3a2a2a', bottomColor: '#3a2a2a', detail: 'crinoline' },
    { id: 'p2', label: '1920s', silhouettePath: 'M -16 80 L -16 -4 L 16 -4 L 16 80 Z', topColor: '#d4c8a8', bottomColor: '#d4c8a8', detail: 'flapper' },
    { id: 'p3', label: '1950s', silhouettePath: 'M -28 80 Q -32 50 -14 40 L -14 -4 L 14 -4 L 14 40 Q 32 50 28 80 Z', topColor: '#7a4a4a', bottomColor: '#3a3a3a', detail: 'belted' },
    { id: 'p4', label: '1970s', silhouettePath: 'M -22 80 L -22 30 L -14 -4 L 14 -4 L 22 30 L 22 80 Z', topColor: '#a85a3a', bottomColor: '#6a4a2a', detail: 'flared' },
    { id: 'p5', label: '2010s', silhouettePath: 'M -14 80 L -14 -4 L 14 -4 L 14 80 Z', topColor: '#2a3a4a', bottomColor: '#1a1a2a', detail: 'slim' },
  ],
  class: [
    { id: 'c1', label: 'Working', silhouettePath: 'M -16 80 L -16 -4 L 16 -4 L 16 80 Z', topColor: '#6a5a3a', bottomColor: '#3a3a3a', detail: 'workshirt + trousers' },
    { id: 'c2', label: 'Middle', silhouettePath: 'M -16 80 L -16 -4 L 16 -4 L 16 80 Z', topColor: '#4a4a4a', bottomColor: '#2a2a2a', detail: 'shirt + slacks' },
    { id: 'c3', label: 'Upper', silhouettePath: 'M -18 80 L -16 -4 L 16 -4 L 18 80 Z', topColor: '#1a1a1a', bottomColor: '#1a1a1a', detail: 'bespoke suit' },
    { id: 'c4', label: 'Aristocratic', silhouettePath: 'M -22 80 Q -28 40 -18 20 L -16 -4 L 16 -4 L 18 20 Q 28 40 22 80 Z', topColor: '#3a2a3a', bottomColor: '#3a2a3a', detail: 'tailored, accessorised' },
  ],
  role: [
    { id: 'r1', label: 'Cop', silhouettePath: 'M -16 80 L -16 -4 L 16 -4 L 16 80 Z', topColor: '#1a2a3a', bottomColor: '#1a2a3a', detail: 'uniform + badge' },
    { id: 'r2', label: 'Doctor', silhouettePath: 'M -14 80 L -14 -4 L 14 -4 L 14 80 Z', topColor: '#d8e0e8', bottomColor: '#d8e0e8', detail: 'scrubs' },
    { id: 'r3', label: 'Soldier', silhouettePath: 'M -18 80 L -18 -4 L 18 -4 L 18 80 Z', topColor: '#4a5a3a', bottomColor: '#4a5a3a', detail: 'fatigues + gear' },
    { id: 'r4', label: 'Office', silhouettePath: 'M -14 80 L -14 -4 L 14 -4 L 14 80 Z', topColor: '#2a2a3a', bottomColor: '#2a2a3a', detail: 'suit + tie' },
    { id: 'r5', label: 'Criminal', silhouettePath: 'M -15 80 L -15 -4 L 15 -4 L 15 80 Z', topColor: '#0a0a0a', bottomColor: '#0a0a0a', detail: 'all black, hooded' },
  ],
  arc: [
    { id: 'a1', label: 'Act I', silhouettePath: 'M -14 80 L -14 -4 L 14 -4 L 14 80 Z', topColor: '#c8b890', bottomColor: '#a89868', detail: 'soft, beige, ordinary' },
    { id: 'a2', label: 'Act II', silhouettePath: 'M -14 80 L -14 -4 L 14 -4 L 14 80 Z', topColor: '#7a6850', bottomColor: '#5a4838', detail: 'darker, more deliberate' },
    { id: 'a3', label: 'Act III', silhouettePath: 'M -14 80 L -14 -4 L 14 -4 L 14 80 Z', topColor: '#1a1a1a', bottomColor: '#0a0a0a', detail: 'black, hat, hardened' },
  ],
  symbolic: [
    { id: 's1', label: 'Red', silhouettePath: 'M -16 80 L -16 -4 L 16 -4 L 16 80 Z', topColor: '#c43a2a', bottomColor: '#a82a1a', detail: 'attention, blood, warning' },
    { id: 's2', label: 'White', silhouettePath: 'M -16 80 L -16 -4 L 16 -4 L 16 80 Z', topColor: '#f4ecd8', bottomColor: '#e8dcc0', detail: 'innocence, purity, blankness' },
    { id: 's3', label: 'Black', silhouettePath: 'M -16 80 L -16 -4 L 16 -4 L 16 80 Z', topColor: '#0a0a0a', bottomColor: '#0a0a0a', detail: 'mourning, threat, refusal' },
  ],
}

const Figure = ({ spec }: { spec: FigureSpec }) => (
  <g>
    {/* head */}
    <circle cx={0} cy={-22} r={14} fill="#e0c8a8" stroke="var(--color-ink)" strokeWidth={1} />
    {/* upper body */}
    <path
      d={spec.silhouettePath.replace(/L (-?\d+) 80/g, (_m, x) => `L ${x} 40`).replace(/Q (-?\d+) 60 (-?\d+) 80/g, (_m, qx, ex) => `Q ${qx} 30 ${ex} 40`).replace(/Z$/, '')}
      fill={spec.topColor}
      stroke="var(--color-ink)"
      strokeWidth={0.8}
    />
    {/* lower body */}
    <rect x={-14} y={40} width={28} height={40} fill={spec.bottomColor} stroke="var(--color-ink)" strokeWidth={0.8} />
  </g>
)

export function CostumeDiagram() {
  const [register, setRegister] = useState<RegisterId>('period')
  const figures = FIGURES_BY_REGISTER[register]
  const W = 520
  const H = 200
  const cellW = W / figures.length

  return (
    <div className="space-y-3">
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
        {figures.map((spec, i) => {
          const cx = cellW * (i + 0.5)
          const cy = H * 0.5
          return (
            <g key={spec.id} transform={`translate(${cx} ${cy})`}>
              <Figure spec={spec} />
              <text x={0} y={H * 0.5 - 12} fontSize={11} textAnchor="middle" fill="var(--color-ink)" fontWeight={500}>{spec.label}</text>
              {spec.detail && <text x={0} y={H * 0.5} fontSize={9} textAnchor="middle" fill="var(--color-ink)/60">{spec.detail}</text>}
            </g>
          )
        })}
      </svg>

      <div className="space-y-1.5">
        <div className="text-xs uppercase tracking-[0.14em] text-[var(--color-ink)]/60">
          {REGISTERS.find((r) => r.id === register)?.name}
        </div>
        <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">
          {REGISTERS.find((r) => r.id === register)?.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1">
        {REGISTERS.map((r) => (
          <button
            key={r.id}
            onClick={() => setRegister(r.id)}
            className={`px-2.5 py-1 text-xs border ${
              r.id === register
                ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
            }`}
          >
            {r.name}
          </button>
        ))}
      </div>
    </div>
  )
}
