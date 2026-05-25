import { useState } from 'react'
import { Frame, Camera, Subject } from './primitives'

type AngleId = 'eye-level' | 'low' | 'high' | 'birds-eye' | 'dutch'

interface AngleDef {
  id: AngleId
  name: string
  cam: { x: number; y: number; rot: number }
  description: string
}

const W = 480
const H = 280
const subjectX = W * 0.5
const subjectY = H * 0.75

const ANGLES: AngleDef[] = [
  { id: 'eye-level', name: 'Eye-level', cam: { x: W * 0.85, y: subjectY - 50, rot: 180 }, description: 'Camera at the subject\'s eye height. Neutral, conversational. The default register — the audience reads the subject as an equal.' },
  { id: 'low', name: 'Low angle', cam: { x: W * 0.85, y: H * 0.92, rot: 180 - 25 }, description: 'Camera below eye level, looking up. Makes the subject tower; reads as power, dominance, awe, or threat. A villain\'s establishing shot.' },
  { id: 'high', name: 'High angle', cam: { x: W * 0.85, y: H * 0.12, rot: 180 + 25 }, description: 'Camera above eye level, looking down. Diminishes the subject; reads as vulnerability, smallness, or judgement from above.' },
  { id: 'birds-eye', name: "Bird's-eye / overhead", cam: { x: subjectX + 4, y: H * 0.05, rot: 90 }, description: 'Camera directly overhead. A god\'s-eye view — geometric, distancing. Common for choreography, crowds, or moments meant to feel observed from outside.' },
  { id: 'dutch', name: 'Dutch / canted', cam: { x: W * 0.85, y: subjectY - 50, rot: 180 + 18 }, description: 'Camera rolled on its axis so the horizon tilts. Unease, disorientation, instability. Used sparingly — over-use turns it into a tic.' },
]

const FramePreview = ({ angle }: { angle: AngleId }) => {
  const pW = 240
  const pH = 140
  const cx = pW * 0.5
  const cy = pH * 0.55

  const renderFigure = (rotation = 0, scale = 1, headOffset: { x: number; y: number } = { x: 0, y: 0 }) => (
    <g transform={`translate(${cx} ${cy}) rotate(${rotation}) scale(${scale})`}>
      <circle cx={headOffset.x} cy={headOffset.y - 30} r={14} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.5} />
      <rect x={-16} y={headOffset.y - 16} width={32} height={48} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.5} />
    </g>
  )

  const containerStyle = (angle === 'dutch')
    ? { transform: 'rotate(-12deg)', transformOrigin: 'center' }
    : {}

  switch (angle) {
    case 'eye-level':
      return (
        <svg viewBox={`0 0 ${pW} ${pH}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
          {renderFigure(0, 1.3)}
        </svg>
      )
    case 'low':
      return (
        <svg viewBox={`0 0 ${pW} ${pH}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
          <g transform={`translate(${cx} ${cy + 16})`}>
            <ellipse cx={0} cy={-50} rx={20} ry={9} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.5} />
            <polygon points="-22,-46 22,-46 26,40 -26,40" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.5} />
            <line x1={-32} y1={-pH * 0.4} x2={-26} y2={-46} stroke="#9a9690" strokeDasharray="2 3" />
            <line x1={32} y1={-pH * 0.4} x2={26} y2={-46} stroke="#9a9690" strokeDasharray="2 3" />
            <text x={0} y={-pH * 0.42} fontSize={9} textAnchor="middle" fill="#9a9690">ceiling visible</text>
          </g>
        </svg>
      )
    case 'high':
      return (
        <svg viewBox={`0 0 ${pW} ${pH}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
          <g transform={`translate(${cx} ${cy + 5})`}>
            <circle cx={0} cy={-22} r={20} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.5} />
            <polygon points="-14,-6 14,-6 12,30 -12,30" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.5} />
            <ellipse cx={0} cy={42} rx={32} ry={6} fill="#ded8cd" />
            <text x={0} y={62} fontSize={9} textAnchor="middle" fill="#9a9690">floor visible</text>
          </g>
        </svg>
      )
    case 'birds-eye':
      return (
        <svg viewBox={`0 0 ${pW} ${pH}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
          <g transform={`translate(${cx} ${cy + 5})`}>
            <ellipse cx={-30} cy={20} rx={6} ry={3} fill="#ded8cd" />
            <ellipse cx={30} cy={20} rx={6} ry={3} fill="#ded8cd" />
            <circle cx={0} cy={0} r={18} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.5} />
            <circle cx={0} cy={0} r={5} fill="var(--color-ink)" opacity={0.4} />
            <polygon points="-10,20 10,20 8,40 -8,40" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.5} />
            <text x={0} y={60} fontSize={9} textAnchor="middle" fill="#9a9690">looking straight down</text>
          </g>
        </svg>
      )
    case 'dutch':
      return (
        <svg viewBox={`0 0 ${pW} ${pH}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
          <g style={containerStyle}>
            {renderFigure(0, 1.3)}
          </g>
          <line x1={10} y1={pH * 0.5 + 16} x2={pW - 10} y2={pH * 0.5 - 16} stroke="var(--color-accent)" strokeDasharray="3 3" strokeWidth={1} />
          <text x={pW - 4} y={pH * 0.5 - 22} fontSize={9} textAnchor="end" fill="var(--color-accent)">tilted horizon</text>
        </svg>
      )
  }
}

export function CameraAnglesDiagram() {
  const [activeId, setActiveId] = useState<AngleId>('eye-level')
  const active = ANGLES.find((a) => a.id === activeId)!

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-3">
        <Frame viewBox={`0 0 ${W} ${H}`}>
          <text x={12} y={20} fontSize={11} fill="#9a9690">side view</text>
          <line x1={0} y1={subjectY + 30} x2={W} y2={subjectY + 30} stroke="#9a9690" />
          <Subject x={subjectX} y={subjectY} facing={-90} />
          <text x={subjectX} y={subjectY + 52} fontSize={10} textAnchor="middle" fill="var(--color-ink)">subject</text>
          {ANGLES.map((a) => (
            <g key={a.id} opacity={a.id === activeId ? 1 : 0.18} style={{ cursor: 'pointer' }} onClick={() => setActiveId(a.id)}>
              <Camera x={a.cam.x} y={a.cam.y} rotation={a.cam.rot} size={a.id === activeId ? 28 : 22} />
              {a.id === activeId && (
                <line
                  x1={a.cam.x}
                  y1={a.cam.y}
                  x2={subjectX}
                  y2={subjectY - 30}
                  stroke="var(--color-accent)"
                  strokeWidth={1}
                  strokeDasharray="3 3"
                  opacity={0.7}
                />
              )}
            </g>
          ))}
        </Frame>

        <div className="space-y-2">
          <div className="text-xs uppercase tracking-wider text-[var(--color-ink)]/60">Resulting frame: {active.name}</div>
          <FramePreview angle={activeId} />
          <p className="text-xs text-[var(--color-ink)]/70 leading-relaxed">{active.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1">
        {ANGLES.map((a) => (
          <button
            key={a.id}
            onClick={() => setActiveId(a.id)}
            className={`px-2.5 py-1 text-xs border ${
              a.id === activeId
                ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
            }`}
          >
            {a.name}
          </button>
        ))}
      </div>
    </div>
  )
}
