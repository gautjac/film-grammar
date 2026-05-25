import { useState } from 'react'

type GradeId = 'ungraded' | 'corrected' | 'orange-teal' | 'cold-noir' | 'sun-bleach' | 'bypass'

interface GradeDef {
  id: GradeId
  name: string
  description: string
  // SVG filter values
  shadow: string
  mid: string
  highlight: string
  contrast: number
  saturation: number
}

const GRADES: GradeDef[] = [
  { id: 'ungraded', name: 'Ungraded (log/raw)', description: 'Camera output before any grade. Flat contrast, washed-out colour. Maximum latitude for post — but unwatchable as a final image.', shadow: '#5a5a52', mid: '#9c9c8e', highlight: '#c4c4b8', contrast: 0.7, saturation: 0.7 },
  { id: 'corrected', name: 'Color corrected', description: 'Contrast restored, white balance fixed, neutral skin tones. The technical baseline before any stylistic grade. Most documentary stops here.', shadow: '#2a2a26', mid: '#a89e8e', highlight: '#e6dccc', contrast: 1.0, saturation: 1.0 },
  { id: 'orange-teal', name: 'Orange & teal', description: 'The dominant Hollywood grade. Skin tones pushed warm-orange; shadows and environments pushed cool-teal. Maximum colour contrast across the frame.', shadow: '#2a4a58', mid: '#c89870', highlight: '#f0d8b0', contrast: 1.1, saturation: 1.2 },
  { id: 'cold-noir', name: 'Cold noir', description: 'Crushed blacks, desaturated mids, cool overall cast. The look of Fincher, the colder Scandinavian thrillers, the recent crime-procedural register. Threat and clinical detachment.', shadow: '#101418', mid: '#5e6a72', highlight: '#a8b4bc', contrast: 1.3, saturation: 0.75 },
  { id: 'sun-bleach', name: 'Sun-bleached', description: 'Lifted blacks, warm midtones, blown highlights. The Sicario / Mexican-desert grade. Heat, exhaustion, exposed-to-the-elements. Honey light.', shadow: '#4a3826', mid: '#d4a878', highlight: '#fce8c4', contrast: 0.9, saturation: 1.1 },
  { id: 'bypass', name: 'Bleach bypass', description: 'High contrast, desaturated colour. Originally an in-camera process that retained the silver layer in film stock. Saving Private Ryan, Minority Report. Reads as gritty, processed, drained.', shadow: '#1a1a18', mid: '#8a8678', highlight: '#d4d0c4', contrast: 1.4, saturation: 0.55 },
]

const Preview = ({ grade }: { grade: GradeDef }) => {
  const W = 480
  const H = 220
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', background: '#1a1a1a', border: '1px solid var(--color-rule)' }}>
      {/* sky (highlight) */}
      <rect x={0} y={0} width={W} height={H * 0.5} fill={grade.highlight} />
      {/* mountains (mid) */}
      <polygon
        points={`0,${H * 0.5} ${W * 0.25},${H * 0.3} ${W * 0.5},${H * 0.45} ${W * 0.75},${H * 0.28} ${W},${H * 0.5}`}
        fill={grade.mid}
      />
      {/* ground (shadow) */}
      <rect x={0} y={H * 0.5} width={W} height={H * 0.5} fill={grade.shadow} />
      {/* subject */}
      <g>
        <circle cx={W * 0.5} cy={H * 0.55} r={14} fill={grade.mid} stroke={grade.shadow} strokeWidth={1} />
        <rect x={W * 0.5 - 11} y={H * 0.6} width={22} height={36} fill={grade.mid} stroke={grade.shadow} strokeWidth={1} />
      </g>
      {/* Lift / Gamma / Gain bars (visualisation of the three tonal ranges) */}
      <g transform={`translate(${W - 110} ${H * 0.85})`}>
        <text x={0} y={-6} fontSize={9} fill="#fff" opacity={0.7}>shadows · mids · highlights</text>
        <rect x={0} y={0} width={28} height={12} fill={grade.shadow} stroke="#fff" strokeOpacity={0.3} />
        <rect x={32} y={0} width={28} height={12} fill={grade.mid} stroke="#fff" strokeOpacity={0.3} />
        <rect x={64} y={0} width={28} height={12} fill={grade.highlight} stroke="#fff" strokeOpacity={0.3} />
      </g>
    </svg>
  )
}

export function ColorGradingDiagram() {
  const [activeId, setActiveId] = useState<GradeId>('ungraded')
  const active = GRADES.find((g) => g.id === activeId)!

  return (
    <div className="space-y-3">
      <Preview grade={active} />

      <div className="space-y-1.5">
        <div className="flex flex-wrap items-baseline gap-x-3">
          <span className="text-sm font-medium">{active.name}</span>
          <span className="text-xs text-[var(--color-ink)]/55">
            contrast {active.contrast.toFixed(2)} · saturation {active.saturation.toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">{active.description}</p>
      </div>

      <div className="flex flex-wrap gap-1">
        {GRADES.map((g) => (
          <button
            key={g.id}
            onClick={() => setActiveId(g.id)}
            className={`px-2.5 py-1 text-xs border ${
              g.id === activeId
                ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
            }`}
          >
            {g.name}
          </button>
        ))}
      </div>
    </div>
  )
}
