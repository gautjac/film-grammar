import { useState } from 'react'
import { Frame, Subject, Camera, Axis, Eyeline } from './primitives'

export function OneEightyRuleDiagram() {
  const [camPos, setCamPos] = useState<'A' | 'B' | 'C' | 'X'>('A')

  const W = 520
  const H = 340
  const subjA: [number, number] = [W * 0.32, H * 0.5]
  const subjB: [number, number] = [W * 0.62, H * 0.5]

  const cameras: Record<typeof camPos, { x: number; y: number; rot: number; label: string; valid: boolean }> = {
    A: { x: W * 0.47, y: H * 0.82, rot: -90, label: 'Cam A — wide two-shot', valid: true },
    B: { x: W * 0.18, y: H * 0.72, rot: -45, label: 'Cam B — OTS on subject 1', valid: true },
    C: { x: W * 0.76, y: H * 0.72, rot: -135, label: 'Cam C — OTS on subject 2', valid: true },
    X: { x: W * 0.47, y: H * 0.18, rot: 90, label: 'Cam X — crosses the line', valid: false },
  }

  const cam = cameras[camPos]

  const renderPreview = () => {
    const pW = 240
    const pH = 140

    if (camPos === 'B') {
      return (
        <svg viewBox={`0 0 ${pW} ${pH}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
          <Subject x={pW * 0.3} y={pH * 0.85} scale={1.4} facing={0} />
          <Subject x={pW * 0.7} y={pH * 0.7} scale={0.9} facing={180} />
          <text x={pW * 0.5} y={pH - 6} fontSize={9} textAnchor="middle" fill="var(--color-ink)">subject 1 over shoulder → subject 2 faces left</text>
        </svg>
      )
    }
    if (camPos === 'C') {
      return (
        <svg viewBox={`0 0 ${pW} ${pH}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
          <Subject x={pW * 0.7} y={pH * 0.85} scale={1.4} facing={0} />
          <Subject x={pW * 0.3} y={pH * 0.7} scale={0.9} facing={180} />
          <text x={pW * 0.5} y={pH - 6} fontSize={9} textAnchor="middle" fill="var(--color-ink)">subject 2 over shoulder → subject 1 faces right</text>
        </svg>
      )
    }
    if (camPos === 'X') {
      return (
        <svg viewBox={`0 0 ${pW} ${pH}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
          <Subject x={pW * 0.35} y={pH * 0.75} scale={1.1} facing={180} />
          <Subject x={pW * 0.65} y={pH * 0.75} scale={1.1} facing={0} />
          <text x={pW * 0.5} y={pH - 6} fontSize={9} textAnchor="middle" fill="var(--color-accent)">screen positions swap — disorienting cut</text>
        </svg>
      )
    }
    return (
      <svg viewBox={`0 0 ${pW} ${pH}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
        <Subject x={pW * 0.32} y={pH * 0.75} scale={1.1} facing={90} />
        <Subject x={pW * 0.68} y={pH * 0.75} scale={1.1} facing={-90} />
        <text x={pW * 0.5} y={pH - 6} fontSize={9} textAnchor="middle" fill="var(--color-ink)">both subjects visible, facing each other</text>
      </svg>
    )
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-3">
        <Frame viewBox={`0 0 ${W} ${H}`}>
          <Axis from={[-20, H * 0.5]} to={[W + 20, H * 0.5]} label="180° line" />
          <Eyeline from={subjA} to={subjB} dashed={false} />
          <Subject x={subjA[0]} y={subjA[1]} facing={90} label="subject 1" />
          <Subject x={subjB[0]} y={subjB[1]} facing={-90} label="subject 2" />
          <Camera x={cam.x} y={cam.y} rotation={cam.rot} label={cam.label} />
          {!cam.valid && (
            <text x={W / 2} y={28} fontSize={12} textAnchor="middle" fill="var(--color-accent)" fontWeight={600}>
              crossing the line
            </text>
          )}
        </Frame>

        <div className="space-y-2">
          <div className="text-xs uppercase tracking-wider text-[var(--color-ink)]/60">Resulting shot</div>
          {renderPreview()}
          <p className="text-xs text-[var(--color-ink)]/70 leading-relaxed">
            {camPos === 'A' && 'Master shot. Establishes spatial relationship — subject 1 on the left, subject 2 on the right.'}
            {camPos === 'B' && 'Over-the-shoulder on subject 1. Subject 2 still on the right of the frame — consistent.'}
            {camPos === 'C' && 'Reverse OTS on subject 2. Subject 1 still on the left — consistent.'}
            {camPos === 'X' && 'Camera has crossed the eyeline. In the cut, subjects appear to swap sides. The audience loses spatial bearings.'}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {(['A', 'B', 'C', 'X'] as const).map((p) => (
          <button
            key={p}
            onClick={() => setCamPos(p)}
            className={`px-3 py-1.5 text-xs border ${
              camPos === p
                ? p === 'X'
                  ? 'bg-[var(--color-accent)] text-[var(--color-paper)] border-[var(--color-accent)]'
                  : 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
            }`}
          >
            Camera {p}
          </button>
        ))}
      </div>
    </div>
  )
}
