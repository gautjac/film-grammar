import { useState } from 'react'
import { Frame, Camera, Subject } from './primitives'

type MoveId = 'pan' | 'tilt' | 'dolly' | 'truck' | 'pedestal' | 'crane' | 'handheld' | 'whip' | 'push-in' | 'oner'

interface MoveDef {
  id: MoveId
  name: string
  axis: 'rotation-y' | 'rotation-x' | 'translation' | 'compound' | 'organic'
  description: string
}

const MOVES: MoveDef[] = [
  { id: 'pan', name: 'Pan', axis: 'rotation-y', description: 'Camera rotates horizontally on a fixed axis. The body of the camera doesn\'t move; only the lens swings left-right. Used to follow a subject across a space or reveal information on either side.' },
  { id: 'tilt', name: 'Tilt', axis: 'rotation-x', description: 'Camera rotates vertically on a fixed axis. Lens swings up-down. Reveals a tall subject from feet to head, or sky to ground.' },
  { id: 'dolly', name: 'Dolly', axis: 'translation', description: 'Camera physically translates toward or away from the subject — usually on a wheeled platform or track. "Dolly in" pushes closer; "dolly out" pulls back.' },
  { id: 'truck', name: 'Truck / Track', axis: 'translation', description: 'Camera physically translates sideways while staying parallel to the subject. Used to follow a walking subject or sweep along a row of objects.' },
  { id: 'pedestal', name: 'Pedestal', axis: 'translation', description: 'Camera physically translates up or down without tilting. The frame rises or sinks. Less common than its rotation cousin, the tilt.' },
  { id: 'crane', name: 'Crane / Jib', axis: 'compound', description: 'Camera lifted and arced through space on a mechanical arm. Combines vertical and horizontal translation. Iconic for grand reveals and final pull-back shots.' },
  { id: 'push-in', name: 'Push-in (slow dolly)', axis: 'translation', description: 'A slow, often unnoticed dolly toward the subject during a held shot. The frame creeps in. Used to concentrate attention without cutting — a quiet emotional escalator.' },
  { id: 'whip', name: 'Whip pan', axis: 'rotation-y', description: 'An extremely fast pan, fast enough that the image blurs. Often used as a transition between scenes or to suggest sudden attention.' },
  { id: 'handheld', name: 'Handheld', axis: 'organic', description: 'Camera held by the operator without a tripod or stabiliser. Organic shake, micro-corrections. Reads as immediate, present, vérité. The documentary default.' },
  { id: 'oner', name: 'Oner / Long take', axis: 'compound', description: 'Not a movement per se but a discipline: a single unbroken shot covering an entire scene or long stretch of action. Demands choreography of camera, performers, and crew. Birdman, Children of Men, Russian Ark.' },
]

const W = 520
const H = 280

const SubjectGroup = () => (
  <>
    <Subject x={W * 0.7} y={H * 0.55} facing={-90} label="subject" />
    <circle cx={W * 0.78} cy={H * 0.78} r={W * 0.05} fill="#ded8cd" />
    <circle cx={W * 0.62} cy={H * 0.78} r={W * 0.04} fill="#ded8cd" opacity={0.7} />
  </>
)

const Annotation = ({ move }: { move: MoveId }) => {
  const camX = W * 0.22
  const camY = H * 0.55

  const arrow = (d: string, color = 'var(--color-accent)') => (
    <path d={d} fill="none" stroke={color} strokeWidth={2} markerEnd="url(#arr-m)" />
  )

  switch (move) {
    case 'pan':
      return (
        <g>
          <Camera x={camX} y={camY} rotation={0} />
          <path d={`M ${camX - 30} ${camY - 30} A 50 50 0 0 1 ${camX + 30} ${camY - 30}`} fill="none" stroke="var(--color-accent)" strokeWidth={2} markerEnd="url(#arr-m)" />
          <text x={camX} y={camY - 40} fontSize={10} textAnchor="middle" fill="var(--color-accent)">rotate horizontally</text>
        </g>
      )
    case 'tilt':
      return (
        <g>
          <Camera x={camX} y={camY} rotation={0} />
          <path d={`M ${camX + 40} ${camY - 30} A 50 50 0 0 1 ${camX + 40} ${camY + 30}`} fill="none" stroke="var(--color-accent)" strokeWidth={2} markerEnd="url(#arr-m)" />
          <text x={camX + 70} y={camY} fontSize={10} textAnchor="start" fill="var(--color-accent)">rotate vertically</text>
        </g>
      )
    case 'dolly':
    case 'push-in':
      return (
        <g>
          <Camera x={camX + 30} y={camY} rotation={0} opacity={0.3} />
          <Camera x={camX} y={camY} rotation={0} />
          {arrow(`M ${camX} ${camY - 24} L ${camX + 80} ${camY - 24}`)}
          <text x={camX + 40} y={camY - 32} fontSize={10} textAnchor="middle" fill="var(--color-accent)">
            {move === 'push-in' ? 'slow push toward subject' : 'translate forward / back'}
          </text>
        </g>
      )
    case 'truck':
      return (
        <g>
          <Camera x={camX} y={camY - 30} rotation={0} opacity={0.3} />
          <Camera x={camX} y={camY + 30} rotation={0} opacity={0.3} />
          <Camera x={camX} y={camY} rotation={0} />
          {arrow(`M ${camX + 25} ${camY - 40} L ${camX + 25} ${camY + 40}`)}
          <text x={camX + 55} y={camY} fontSize={10} textAnchor="start" fill="var(--color-accent)">translate sideways</text>
        </g>
      )
    case 'pedestal':
      return (
        <g>
          <Camera x={camX} y={camY} rotation={0} />
          {arrow(`M ${camX - 35} ${camY + 30} L ${camX - 35} ${camY - 30}`)}
          <text x={camX - 60} y={camY} fontSize={10} textAnchor="end" fill="var(--color-accent)">translate up / down</text>
        </g>
      )
    case 'crane':
      return (
        <g>
          <line x1={camX - 60} y1={H * 0.95} x2={camX - 30} y2={camY + 10} stroke="var(--color-ink)" strokeWidth={2} />
          <line x1={camX - 30} y1={camY + 10} x2={camX} y2={camY} stroke="var(--color-ink)" strokeWidth={2} />
          <Camera x={camX} y={camY} rotation={0} />
          <path d={`M ${camX - 10} ${camY + 60} A 60 60 0 0 1 ${camX + 50} ${camY}`} fill="none" stroke="var(--color-accent)" strokeWidth={2} markerEnd="url(#arr-m)" />
          <text x={camX + 30} y={camY + 60} fontSize={10} textAnchor="middle" fill="var(--color-accent)">arc through space</text>
        </g>
      )
    case 'whip':
      return (
        <g>
          <Camera x={camX} y={camY} rotation={0} />
          <path d={`M ${camX - 40} ${camY - 26} L ${camX + 80} ${camY - 26}`} fill="none" stroke="var(--color-accent)" strokeWidth={5} opacity={0.4} />
          <path d={`M ${camX - 40} ${camY - 26} L ${camX + 80} ${camY - 26}`} fill="none" stroke="var(--color-accent)" strokeWidth={2} markerEnd="url(#arr-m)" />
          <text x={camX + 30} y={camY - 36} fontSize={10} textAnchor="middle" fill="var(--color-accent)">fast pan (blurs)</text>
        </g>
      )
    case 'handheld':
      return (
        <g>
          <Camera x={camX} y={camY} rotation={-2} />
          <Camera x={camX + 3} y={camY - 2} rotation={1} opacity={0.3} />
          <Camera x={camX - 2} y={camY + 2} rotation={2} opacity={0.3} />
          <text x={camX} y={camY - 30} fontSize={10} textAnchor="middle" fill="var(--color-accent)">organic shake</text>
          <text x={camX} y={camY + 36} fontSize={9} textAnchor="middle" fill="#9a9690">no tripod, no stabiliser</text>
        </g>
      )
    case 'oner':
      return (
        <g>
          <Camera x={camX - 30} y={camY + 15} rotation={10} opacity={0.25} />
          <Camera x={camX} y={camY} rotation={0} />
          <Camera x={camX + 30} y={camY - 15} rotation={-10} opacity={0.25} />
          <path d={`M ${camX - 50} ${camY + 35} Q ${camX} ${camY - 50} ${camX + 80} ${camY}`} fill="none" stroke="var(--color-accent)" strokeWidth={2} strokeDasharray="4 3" markerEnd="url(#arr-m)" />
          <text x={camX + 20} y={camY + 50} fontSize={10} textAnchor="middle" fill="var(--color-accent)">one unbroken shot</text>
        </g>
      )
  }
}

export function CameraMovementDiagram() {
  const [activeId, setActiveId] = useState<MoveId>('pan')
  const active = MOVES.find((m) => m.id === activeId)!

  return (
    <div className="space-y-3">
      <Frame viewBox={`0 0 ${W} ${H}`}>
        <defs>
          <marker id="arr-m" markerWidth={7} markerHeight={7} refX={6} refY={3.5} orient="auto">
            <polygon points="0 0, 7 3.5, 0 7" fill="var(--color-accent)" />
          </marker>
        </defs>
        <text x={12} y={20} fontSize={11} fill="#9a9690">top-down view · {active.name}</text>
        <line x1={0} y1={H * 0.85} x2={W} y2={H * 0.85} stroke="#9a9690" />
        <SubjectGroup />
        <Annotation move={activeId} />
      </Frame>

      <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">
        <strong>{active.name}.</strong> {active.description}
      </p>

      <div className="flex flex-wrap gap-1">
        {MOVES.map((m) => (
          <button
            key={m.id}
            onClick={() => setActiveId(m.id)}
            className={`px-2.5 py-1 text-xs border ${
              m.id === activeId
                ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>
    </div>
  )
}
