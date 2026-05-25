import { useState } from 'react'
import { Frame } from './primitives'

const SHOTS = [
  { id: 'els', name: 'Extreme Long Shot', short: 'ELS', headRatio: 0.06, description: 'Subject tiny in environment. Establishes place and scale.' },
  { id: 'ls', name: 'Long Shot', short: 'LS', headRatio: 0.12, description: 'Full body with surrounding space. Locates subject in setting.' },
  { id: 'mls', name: 'Medium Long Shot', short: 'MLS', headRatio: 0.2, description: 'Knees up. Action plus some environment.' },
  { id: 'ms', name: 'Medium Shot', short: 'MS', headRatio: 0.32, description: 'Waist up. Standard conversational framing.' },
  { id: 'mcu', name: 'Medium Close-up', short: 'MCU', headRatio: 0.5, description: 'Chest up. Most common interview framing.' },
  { id: 'cu', name: 'Close-up', short: 'CU', headRatio: 0.78, description: 'Face fills the frame. Emotional weight.' },
  { id: 'ecu', name: 'Extreme Close-up', short: 'ECU', headRatio: 1.4, description: 'Detail — an eye, lips, a hand. Maximum intimacy or isolation.' },
]

export function ShotSizesDiagram() {
  const [activeIdx, setActiveIdx] = useState(3)
  const active = SHOTS[activeIdx]
  const W = 480
  const H = 320
  const cx = W / 2
  const ground = H - 30

  const headSize = H * active.headRatio
  const bodyH = headSize * 4.5
  const bodyW = headSize * 1.8
  const headCy = ground - bodyH

  return (
    <div className="space-y-3">
      <Frame viewBox={`0 0 ${W} ${H}`}>
        <defs>
          <clipPath id="shot-frame">
            <rect x={0} y={0} width={W} height={H} />
          </clipPath>
        </defs>
        <g clipPath="url(#shot-frame)">
          <line x1={0} y1={ground} x2={W} y2={ground} stroke="#9a9690" strokeWidth={1} />
          <circle cx={cx - W * 0.22} cy={ground} r={W * 0.12} fill="#e8e3da" />
          <circle cx={cx + W * 0.28} cy={ground} r={W * 0.18} fill="#ded8cd" />
          <g transform={`translate(${cx} 0)`}>
            <rect
              x={-bodyW / 2}
              y={headCy + headSize / 2}
              width={bodyW}
              height={bodyH - headSize / 2}
              fill="none"
              stroke="var(--color-ink)"
              strokeWidth={1.5}
            />
            <circle
              cx={0}
              cy={headCy}
              r={headSize / 2}
              fill="none"
              stroke="var(--color-ink)"
              strokeWidth={1.5}
            />
            <circle cx={headSize * 0.18} cy={headCy} r={Math.max(1, headSize * 0.06)} fill="var(--color-ink)" />
            <circle cx={-headSize * 0.18} cy={headCy} r={Math.max(1, headSize * 0.06)} fill="var(--color-ink)" />
          </g>
        </g>
        <rect
          x={1}
          y={1}
          width={W - 2}
          height={H - 2}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={2}
        />
        <text x={12} y={22} fontSize={12} fill="var(--color-accent)" fontWeight={600}>
          {active.short} — {active.name}
        </text>
      </Frame>

      <div className="flex flex-wrap gap-1">
        {SHOTS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActiveIdx(i)}
            className={`px-2.5 py-1 text-xs border transition-colors ${
              i === activeIdx
                ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
            }`}
          >
            {s.short}
          </button>
        ))}
      </div>
      <p className="text-sm text-[var(--color-ink)]/70">{active.description}</p>
    </div>
  )
}
