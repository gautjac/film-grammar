import { useState } from 'react'
import { Frame } from './primitives'

type QualityId = 'hard' | 'soft' | 'natural' | 'motivated' | 'practical' | 'mixed'

interface QualityDef {
  id: QualityId
  name: string
  description: string
  source: 'small-far' | 'large-near' | 'sun' | 'window' | 'in-frame' | 'multi'
  shadowSoftness: number // 0 = razor edge, 1 = diffuse
  intensity: number
}

const QUALITIES: QualityDef[] = [
  { id: 'hard', name: 'Hard light', description: 'Source small relative to subject. Direct, razor-edged shadows; high contrast between lit and unlit sides; texture exaggerated. Direct sun, bare bulb, undiffused HMI. Reads as dramatic, harsh, exposing.', source: 'small-far', shadowSoftness: 0, intensity: 1 },
  { id: 'soft', name: 'Soft light', description: 'Source large relative to subject. Gradual shadows, low contrast, textures smoothed. Overcast sky, softbox, north-facing window. Flattering, classical portrait light.', source: 'large-near', shadowSoftness: 0.85, intensity: 0.9 },
  { id: 'natural', name: 'Natural / available', description: 'Whatever the sun, sky, or location already provides — no added lights. The documentary default. Quality varies through the day: hard at noon, soft at golden hour, dim and cool at blue hour.', source: 'sun', shadowSoftness: 0.3, intensity: 0.95 },
  { id: 'motivated', name: 'Motivated light', description: 'Added light that mimics a visible in-scene source — a window, a lamp, a fire. The audience never sees the actual film light. Reads as natural even though it isn\'t.', source: 'window', shadowSoftness: 0.55, intensity: 0.85 },
  { id: 'practical', name: 'Practical-driven', description: 'The light source IS in the frame — a table lamp, a screen, a neon sign, a fire. No off-camera lights needed. Tight quarters, cinéma vérité, recent low-budget thrillers, much of Lubezki\'s work.', source: 'in-frame', shadowSoftness: 0.4, intensity: 0.7 },
  { id: 'mixed', name: 'Mixed sources', description: 'Multiple sources at different intensities, temperatures, and qualities. The real-world default — a room with a window AND a lamp AND a TV. Hardest to balance; richest when balanced well.', source: 'multi', shadowSoftness: 0.5, intensity: 0.85 },
]

const W = 520
const H = 280
const subjectX = W * 0.4
const subjectY = H * 0.55

const renderSource = (q: QualityDef) => {
  switch (q.source) {
    case 'small-far':
      return (
        <g>
          <circle cx={W * 0.82} cy={H * 0.18} r={8} fill="#fff2c0" stroke="var(--color-ink)" strokeWidth={1} />
          <text x={W * 0.82} y={H * 0.05} fontSize={9} textAnchor="middle" fill="var(--color-ink)/70">small · far · hard</text>
          {/* light rays */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} x1={W * 0.82} y1={H * 0.18} x2={subjectX + (i - 2) * 8} y2={subjectY - 30} stroke="#f4d878" strokeWidth={0.5} opacity={0.4} />
          ))}
        </g>
      )
    case 'large-near':
      return (
        <g>
          <defs>
            <radialGradient id="ql-soft">
              <stop offset="0%" stopColor="#fff2d0" stopOpacity={0.7} />
              <stop offset="100%" stopColor="#fff2d0" stopOpacity={0.1} />
            </radialGradient>
          </defs>
          <ellipse cx={W * 0.7} cy={H * 0.3} rx={80} ry={60} fill="url(#ql-soft)" />
          <rect x={W * 0.62} y={H * 0.18} width={70} height={50} fill="#f0e8d0" stroke="var(--color-ink)" strokeWidth={1} opacity={0.85} />
          <text x={W * 0.7} y={H * 0.06} fontSize={9} textAnchor="middle" fill="var(--color-ink)/70">large · near · soft</text>
        </g>
      )
    case 'sun':
      return (
        <g>
          <circle cx={W * 0.84} cy={H * 0.14} r={16} fill="#fff0b0" stroke="var(--color-ink)" strokeWidth={0.8} />
          <circle cx={W * 0.84} cy={H * 0.14} r={26} fill="#fff0b0" opacity={0.3} />
          {/* sky gradient */}
          <defs>
            <linearGradient id="ql-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a8c8e0" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#a8c8e0" stopOpacity={0} />
            </linearGradient>
          </defs>
          <rect x={0} y={0} width={W} height={H * 0.5} fill="url(#ql-sky)" />
          <text x={W * 0.84} y={H * 0.05} fontSize={9} textAnchor="middle" fill="var(--color-ink)/70">sun · noon</text>
        </g>
      )
    case 'window':
      return (
        <g>
          <rect x={W * 0.65} y={H * 0.15} width={W * 0.2} height={H * 0.45} fill="#d4e4f0" stroke="var(--color-ink)" strokeWidth={1} />
          <line x1={W * 0.75} y1={H * 0.15} x2={W * 0.75} y2={H * 0.6} stroke="var(--color-ink)" strokeWidth={0.6} />
          <line x1={W * 0.65} y1={H * 0.38} x2={W * 0.85} y2={H * 0.38} stroke="var(--color-ink)" strokeWidth={0.6} />
          <text x={W * 0.75} y={H * 0.07} fontSize={9} textAnchor="middle" fill="var(--color-ink)/70">window light · motivated</text>
          <defs>
            <linearGradient id="ql-window" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#fff2d0" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#fff2d0" stopOpacity={0} />
            </linearGradient>
          </defs>
          <polygon points={`${W * 0.65},${H * 0.15} ${W * 0.65},${H * 0.6} ${subjectX},${subjectY + 20} ${subjectX},${subjectY - 30}`} fill="url(#ql-window)" />
        </g>
      )
    case 'in-frame':
      return (
        <g>
          {/* table lamp in scene */}
          <defs>
            <radialGradient id="ql-prac">
              <stop offset="0%" stopColor="#fff8c0" stopOpacity={0.7} />
              <stop offset="100%" stopColor="#fff8c0" stopOpacity={0} />
            </radialGradient>
          </defs>
          <circle cx={W * 0.65} cy={H * 0.45} r={60} fill="url(#ql-prac)" />
          <polygon points={`${W * 0.63},${H * 0.4} ${W * 0.67},${H * 0.4} ${W * 0.69},${H * 0.32} ${W * 0.61},${H * 0.32}`} fill="#d4b878" stroke="var(--color-ink)" strokeWidth={1} />
          <rect x={W * 0.643} y={H * 0.4} width={W * 0.014} height={H * 0.12} fill="#3a3a3a" />
          <text x={W * 0.65} y={H * 0.07} fontSize={9} textAnchor="middle" fill="var(--color-ink)/70">practical · in-frame fixture</text>
        </g>
      )
    case 'multi':
      return (
        <g>
          <circle cx={W * 0.85} cy={H * 0.18} r={10} fill="#fff0b0" stroke="var(--color-ink)" strokeWidth={1} />
          <text x={W * 0.85} y={H * 0.06} fontSize={8} textAnchor="middle" fill="var(--color-ink)/60">window</text>
          <defs>
            <radialGradient id="ql-mix1">
              <stop offset="0%" stopColor="#fff2c0" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#fff2c0" stopOpacity={0} />
            </radialGradient>
          </defs>
          <circle cx={W * 0.72} cy={H * 0.55} r={40} fill="url(#ql-mix1)" />
          <polygon points={`${W * 0.7},${H * 0.5} ${W * 0.74},${H * 0.5} ${W * 0.755},${H * 0.42} ${W * 0.685},${H * 0.42}`} fill="#d4b878" stroke="var(--color-ink)" strokeWidth={0.8} />
          <text x={W * 0.72} y={H * 0.72} fontSize={8} textAnchor="middle" fill="var(--color-ink)/60">lamp</text>
          <rect x={W * 0.13} y={H * 0.32} width={W * 0.12} height={H * 0.16} fill="#3a4a5a" stroke="var(--color-ink)" strokeWidth={0.8} />
          <rect x={W * 0.14} y={H * 0.34} width={W * 0.1} height={H * 0.12} fill="#88a8c0" />
          <text x={W * 0.19} y={H * 0.55} fontSize={8} textAnchor="middle" fill="var(--color-ink)/60">screen</text>
        </g>
      )
  }
}

const renderSubject = (q: QualityDef) => {
  const shadowOffset = q.source === 'small-far' ? 50 : q.source === 'sun' ? 25 : q.source === 'in-frame' ? 22 : q.source === 'window' ? -30 : 18
  const shadowOpacity = q.shadowSoftness < 0.2 ? 0.7 : q.shadowSoftness < 0.5 ? 0.5 : 0.3
  const shadowBlur = q.shadowSoftness * 8

  return (
    <g>
      <defs>
        <filter id="shadow-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation={shadowBlur} />
        </filter>
      </defs>
      {/* cast shadow on wall */}
      <ellipse
        cx={subjectX + shadowOffset}
        cy={subjectY + 60}
        rx={28 + Math.abs(shadowOffset) * 0.25}
        ry={14}
        fill="var(--color-ink)"
        opacity={shadowOpacity}
        filter="url(#shadow-blur)"
      />
      {/* subject body — face lit on light source side */}
      <g>
        <circle cx={subjectX} cy={subjectY - 12} r={20} fill="#e0c8a8" stroke="var(--color-ink)" strokeWidth={1} />
        {/* lit half */}
        <path
          d={`M ${subjectX} ${subjectY - 32} A 20 20 0 0 1 ${subjectX} ${subjectY + 8} Z`}
          fill="#1a1a1a"
          opacity={q.shadowSoftness < 0.2 ? 0.85 : q.shadowSoftness < 0.5 ? 0.55 : 0.25}
          transform={q.source === 'window' ? `scale(-1, 1) translate(${-subjectX * 2}, 0)` : ''}
        />
        <rect x={subjectX - 14} y={subjectY + 8} width={28} height={42} fill="#3a3a3a" stroke="var(--color-ink)" strokeWidth={0.8} />
      </g>
    </g>
  )
}

export function QualityOfLightDiagram() {
  const [activeId, setActiveId] = useState<QualityId>('hard')
  const active = QUALITIES.find((q) => q.id === activeId)!

  return (
    <div className="space-y-3">
      <Frame viewBox={`0 0 ${W} ${H}`}>
        <text x={12} y={20} fontSize={11} fill="#9a9690">side view · {active.name}</text>
        {/* floor */}
        <line x1={0} y1={H * 0.85} x2={W} y2={H * 0.85} stroke="#9a9690" />
        {renderSource(active)}
        {renderSubject(active)}
      </Frame>

      <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">
        <strong>{active.name}.</strong> {active.description}
      </p>

      <div className="flex flex-wrap gap-1">
        {QUALITIES.map((q) => (
          <button
            key={q.id}
            onClick={() => setActiveId(q.id)}
            className={`px-2.5 py-1 text-xs border ${
              q.id === activeId
                ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
            }`}
          >
            {q.name}
          </button>
        ))}
      </div>
    </div>
  )
}
