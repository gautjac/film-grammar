import { useState } from 'react'
import { Frame, Subject, Camera } from './primitives'

type MicId = 'boom' | 'lav' | 'shotgun' | 'planted' | 'room-tone' | 'wild'

interface MicDef {
  id: MicId
  name: string
  description: string
}

const MICS: MicDef[] = [
  { id: 'boom', name: 'Boom (overhead)', description: 'A directional mic (often a shotgun) on a long pole, held overhead by a boom operator, pointed down at the subject\'s mouth from just outside frame. The gold standard for sync sound — sounds natural because it mics the head, not the chest. Fiction default.' },
  { id: 'lav', name: 'Lavalier (clip-on)', description: 'A small mic clipped to the subject\'s clothing near the collar. Wireless. Stays with the subject through movement, in/out of frame, in noisy locations. Documentary default — and the news interview standard.' },
  { id: 'shotgun', name: 'Shotgun (handheld)', description: 'A highly directional mic, sometimes mounted to the camera or handheld separately. Picks up what it\'s pointed at, rejects sound from the sides. Useful for fast-changing situations where a boom or lav isn\'t practical.' },
  { id: 'planted', name: 'Planted mic', description: 'A hidden mic placed in the set — taped under a table, inside a lamp, behind a prop. Catches dialogue at a fixed location without needing a boom or lav. Used when both other options are blocked.' },
  { id: 'room-tone', name: 'Room tone', description: 'Not a mic but a discipline: thirty seconds to a minute of "silence" recorded in the location with no one moving or speaking. The texture of the empty room — fridge hum, traffic, HVAC. Editors use it to fill gaps in dialogue so the sonic background stays continuous.' },
  { id: 'wild', name: 'Wild track', description: 'Audio recorded separately from picture — without the camera running, sometimes after the scene wraps. A dialogue line re-recorded clean, an ambience pass, a specific sound effect. Cut into the mix later.' },
]

const W = 520
const H = 320
const subjectX = W * 0.5
const subjectY = H * 0.55

export function ProductionSoundDiagram() {
  const [activeId, setActiveId] = useState<MicId>('boom')
  const active = MICS.find((m) => m.id === activeId)!

  const renderMic = () => {
    switch (active.id) {
      case 'boom':
        return (
          <g>
            <line x1={W * 0.15} y1={H * 0.05} x2={subjectX} y2={H * 0.2} stroke="var(--color-ink)" strokeWidth={2} />
            <g transform={`translate(${subjectX} ${H * 0.22})`}>
              <rect x={-12} y={0} width={24} height={36} fill="var(--color-ink)" />
              <text x={0} y={-6} fontSize={10} textAnchor="middle" fill="var(--color-ink)">mic</text>
            </g>
            <ellipse cx={subjectX} cy={H * 0.42} rx={50} ry={36} fill="var(--color-accent)" opacity={0.12} />
            <text x={W * 0.15} y={H * 0.03} fontSize={10} fill="#9a9690">boom op</text>
            <text x={subjectX + 60} y={H * 0.42} fontSize={9} fill="var(--color-accent)">pickup pattern</text>
          </g>
        )
      case 'lav':
        return (
          <g>
            <circle cx={subjectX} cy={subjectY - 10} r={4} fill="var(--color-accent)" />
            <text x={subjectX + 10} y={subjectY - 8} fontSize={9} fill="var(--color-accent)">lav on collar</text>
            <ellipse cx={subjectX} cy={subjectY - 10} rx={26} ry={22} fill="var(--color-accent)" opacity={0.15} />
            <path d={`M ${subjectX + 5} ${subjectY - 4} Q ${subjectX + 30} ${subjectY + 20} ${subjectX + 70} ${subjectY + 50}`} fill="none" stroke="var(--color-accent)" strokeWidth={1.5} strokeDasharray="3 3" />
            <text x={subjectX + 75} y={subjectY + 55} fontSize={9} fill="var(--color-accent)">wireless to mixer</text>
          </g>
        )
      case 'shotgun':
        return (
          <g>
            <g transform={`translate(${W * 0.82} ${H * 0.55})`}>
              <rect x={-30} y={-6} width={50} height={12} fill="var(--color-ink)" />
              <text x={0} y={-14} fontSize={9} textAnchor="middle" fill="var(--color-ink)/70">shotgun</text>
            </g>
            <polygon
              points={`${W * 0.79},${H * 0.55} ${subjectX + 20},${H * 0.4} ${subjectX + 20},${H * 0.7}`}
              fill="var(--color-accent)"
              opacity={0.12}
            />
            <line x1={W * 0.79} y1={H * 0.55} x2={subjectX + 20} y2={H * 0.4} stroke="var(--color-accent)" strokeDasharray="2 3" />
            <line x1={W * 0.79} y1={H * 0.55} x2={subjectX + 20} y2={H * 0.7} stroke="var(--color-accent)" strokeDasharray="2 3" />
            <text x={subjectX + 50} y={H * 0.55} fontSize={9} fill="var(--color-accent)">narrow pickup</text>
          </g>
        )
      case 'planted':
        return (
          <g>
            <rect x={subjectX - 70} y={subjectY + 30} width={140} height={14} fill="#ded8cd" stroke="var(--color-ink)" strokeWidth={1} />
            <text x={subjectX} y={subjectY + 56} fontSize={9} textAnchor="middle" fill="var(--color-ink)/70">table</text>
            <circle cx={subjectX - 20} cy={subjectY + 32} r={3} fill="var(--color-accent)" />
            <text x={subjectX - 20} y={subjectY + 28} fontSize={8} textAnchor="middle" fill="var(--color-accent)">hidden mic</text>
            <ellipse cx={subjectX - 20} cy={subjectY + 32} rx={50} ry={28} fill="var(--color-accent)" opacity={0.12} />
          </g>
        )
      case 'room-tone':
        return (
          <g>
            <text x={W / 2} y={H * 0.22} fontSize={11} textAnchor="middle" fill="#9a9690">no speech · no movement · just texture</text>
            {[0, 1, 2, 3].map((i) => (
              <line
                key={i}
                x1={W * 0.15}
                y1={H * 0.4 + i * 24}
                x2={W * 0.85}
                y2={H * 0.4 + i * 24}
                stroke="var(--color-ink)"
                strokeWidth={1}
                opacity={0.15 + i * 0.05}
                strokeDasharray={`${1 + i} ${4 + i}`}
              />
            ))}
            <text x={W / 2} y={H * 0.78} fontSize={9} textAnchor="middle" fill="#9a9690">fridge hum, traffic, HVAC — continuous low background</text>
          </g>
        )
      case 'wild':
        return (
          <g>
            <text x={W / 2} y={H * 0.25} fontSize={11} textAnchor="middle" fill="#9a9690">audio recorded separately from picture</text>
            <rect x={W * 0.18} y={H * 0.4} width={W * 0.28} height={H * 0.15} fill="var(--color-ink)" opacity={0.85} />
            <text x={W * 0.32} y={H * 0.5} fontSize={10} textAnchor="middle" fill="var(--color-paper)">picture track</text>
            <rect x={W * 0.55} y={H * 0.4} width={W * 0.28} height={H * 0.15} fill="var(--color-accent)" opacity={0.85} />
            <text x={W * 0.69} y={H * 0.5} fontSize={10} textAnchor="middle" fill="var(--color-paper)">wild audio</text>
            <text x={W / 2} y={H * 0.7} fontSize={9} textAnchor="middle" fill="#9a9690">cut together later in the mix</text>
          </g>
        )
    }
  }

  return (
    <div className="space-y-3">
      <Frame viewBox={`0 0 ${W} ${H}`}>
        <text x={12} y={20} fontSize={11} fill="#9a9690">side view · {active.name}</text>
        {active.id !== 'room-tone' && active.id !== 'wild' && (
          <>
            <Subject x={subjectX} y={subjectY} facing={180} label="subject speaking" />
            <Camera x={W * 0.18} y={H * 0.78} rotation={-15} />
            <text x={W * 0.18} y={H * 0.92} fontSize={10} textAnchor="middle" fill="var(--color-ink)/60">camera</text>
          </>
        )}
        {renderMic()}
      </Frame>

      <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">
        <strong>{active.name}.</strong> {active.description}
      </p>

      <div className="flex flex-wrap gap-1">
        {MICS.map((m) => (
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
