import { useState } from 'react'
import { Frame, Camera, Subject, FrameBox } from './primitives'

type ShotId = 'master' | 'two-shot' | 'ots-a' | 'ots-b' | 'cu-a' | 'cu-b' | 'insert'

interface ShotDef {
  id: ShotId
  name: string
  cam: { x: number; y: number; rot: number }
  description: string
}

const W = 520
const H = 340

const subjA: [number, number] = [W * 0.36, H * 0.5]
const subjB: [number, number] = [W * 0.6, H * 0.5]
const tableY = H * 0.52
const tableW = W * 0.34

const SHOTS: ShotDef[] = [
  { id: 'master', name: 'Master', cam: { x: W * 0.48, y: H * 0.92, rot: -90 }, description: 'Wide shot covering the whole scene from one angle. Establishes geography. Every cut later can return here for orientation.' },
  { id: 'two-shot', name: 'Two-shot', cam: { x: W * 0.48, y: H * 0.82, rot: -90 }, description: 'Both subjects in frame, tighter than the master. The conversation as a unit, without yet picking sides.' },
  { id: 'ots-a', name: 'OTS on A', cam: { x: W * 0.78, y: H * 0.78, rot: -135 }, description: 'Over-the-shoulder on subject A. B\'s shoulder anchors the frame in the foreground; A is the read.' },
  { id: 'ots-b', name: 'OTS on B', cam: { x: W * 0.18, y: H * 0.78, rot: -45 }, description: 'Reverse OTS. A\'s shoulder in foreground, B is the read. Cut together with OTS on A for shot/reverse-shot.' },
  { id: 'cu-a', name: 'CU on A', cam: { x: W * 0.78, y: H * 0.5, rot: 180 }, description: 'Clean close-up of subject A — no shoulder. Use sparingly, when the performance needs all the weight.' },
  { id: 'cu-b', name: 'CU on B', cam: { x: W * 0.18, y: H * 0.5, rot: 0 }, description: 'Clean close-up of B. Pairs with CU on A for intense exchanges.' },
  { id: 'insert', name: 'Insert', cam: { x: W * 0.48, y: H * 0.65, rot: -90 }, description: 'A detail in the scene — hands, a glass, an object on the table. Drops in between coverage to control rhythm or land a specific beat.' },
]

export function CoverageDiagram() {
  const [activeId, setActiveId] = useState<ShotId>('master')
  const active = SHOTS.find((s) => s.id === activeId)!

  const renderPreview = () => {
    const pW = 240
    const pH = 140
    switch (activeId) {
      case 'master':
        return (
          <svg viewBox={`0 0 ${pW} ${pH}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
            <rect x={pW * 0.3} y={pH * 0.7} width={pW * 0.4} height={pH * 0.08} fill="#ded8cd" />
            <Subject x={pW * 0.36} y={pH * 0.65} facing={90} scale={0.9} />
            <Subject x={pW * 0.64} y={pH * 0.65} facing={-90} scale={0.9} />
          </svg>
        )
      case 'two-shot':
        return (
          <svg viewBox={`0 0 ${pW} ${pH}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
            <Subject x={pW * 0.32} y={pH * 0.78} facing={90} scale={1.4} />
            <Subject x={pW * 0.68} y={pH * 0.78} facing={-90} scale={1.4} />
          </svg>
        )
      case 'ots-a':
        return (
          <svg viewBox={`0 0 ${pW} ${pH}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
            <Subject x={pW * 0.78} y={pH * 1.0} facing={-45} scale={1.6} />
            <Subject x={pW * 0.38} y={pH * 0.78} facing={-90} scale={1.2} />
            <text x={pW / 2} y={pH - 6} fontSize={9} textAnchor="middle" fill="var(--color-ink)/60">A reads, B's shoulder foreground</text>
          </svg>
        )
      case 'ots-b':
        return (
          <svg viewBox={`0 0 ${pW} ${pH}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
            <Subject x={pW * 0.22} y={pH * 1.0} facing={45} scale={1.6} />
            <Subject x={pW * 0.62} y={pH * 0.78} facing={90} scale={1.2} />
            <text x={pW / 2} y={pH - 6} fontSize={9} textAnchor="middle" fill="var(--color-ink)/60">B reads, A's shoulder foreground</text>
          </svg>
        )
      case 'cu-a':
        return (
          <svg viewBox={`0 0 ${pW} ${pH}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
            <Subject x={pW * 0.5} y={pH * 1.05} facing={-90} scale={2.4} />
          </svg>
        )
      case 'cu-b':
        return (
          <svg viewBox={`0 0 ${pW} ${pH}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
            <Subject x={pW * 0.5} y={pH * 1.05} facing={90} scale={2.4} />
          </svg>
        )
      case 'insert':
        return (
          <svg viewBox={`0 0 ${pW} ${pH}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
            <rect x={pW * 0.1} y={pH * 0.45} width={pW * 0.8} height={pH * 0.25} fill="#ded8cd" stroke="var(--color-ink)" strokeWidth={1} />
            <circle cx={pW * 0.35} cy={pH * 0.45} r={pH * 0.12} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.2} />
            <text x={pW * 0.62} y={pH * 0.6} fontSize={10} fill="var(--color-ink)/70">object detail</text>
          </svg>
        )
    }
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-3">
        <Frame viewBox={`0 0 ${W} ${H}`}>
          <text x={12} y={20} fontSize={11} fill="#9a9690">top-down view</text>
          <rect x={W * 0.48 - tableW / 2} y={tableY - 6} width={tableW} height={12} fill="#ded8cd" stroke="var(--color-ink)" strokeWidth={1} opacity={0.7} />
          <Subject x={subjA[0]} y={subjA[1]} facing={90} label="A" />
          <Subject x={subjB[0]} y={subjB[1]} facing={-90} label="B" />
          {SHOTS.map((s) => {
            const isActive = s.id === activeId
            return (
              <g key={s.id} opacity={isActive ? 1 : 0.18} style={{ cursor: 'pointer' }} onClick={() => setActiveId(s.id)}>
                <Camera x={s.cam.x} y={s.cam.y} rotation={s.cam.rot} size={isActive ? 28 : 22} label={isActive ? s.name : undefined} />
              </g>
            )
          })}
          <FrameBox x={1} y={1} width={W - 2} height={H - 2} />
        </Frame>

        <div className="space-y-2">
          <div className="text-xs uppercase tracking-wider text-[var(--color-ink)]/60">Resulting shot: {active.name}</div>
          {renderPreview()}
          <p className="text-xs text-[var(--color-ink)]/70 leading-relaxed">{active.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1">
        {SHOTS.map((s) => (
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
