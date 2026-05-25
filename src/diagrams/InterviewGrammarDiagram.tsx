import { useState } from 'react'
import { Frame, Camera, Subject } from './primitives'

type SetupId = 'off-camera-classic' | 'into-lens' | 'errol-morris' | 'walking-interview' | 'two-camera'

interface Setup {
  id: SetupId
  name: string
  description: string
}

const SETUPS: Setup[] = [
  {
    id: 'off-camera-classic',
    name: 'Off-camera (classic)',
    description: 'Subject looks at an interviewer seated just beside the camera. Eyeline slightly off-lens — the audience reads "subject is talking to someone." The default for almost all documentary interviews since the 1960s. Allows natural conversation; subject never feels stared at.',
  },
  {
    id: 'into-lens',
    name: 'Into the lens',
    description: 'Subject looks directly into the camera. Audience reads "subject is talking to me." Confronting, intimate. Used in essay films, video letters, and certain participatory documentaries. Breaks the fourth wall by design.',
  },
  {
    id: 'errol-morris',
    name: 'Interrotron',
    description: 'Errol Morris\'s invention: a teleprompter-style rig that projects the interviewer\'s face onto a beam splitter in front of the lens. The subject looks directly into the lens but sees the interviewer\'s eyes. Audience reads direct eye contact + the subject feels they\'re in a real conversation. Used in The Fog of War and elsewhere.',
  },
  {
    id: 'walking-interview',
    name: 'Walking interview',
    description: 'Subject and interviewer (or camera) move together through a relevant space — a workplace, a neighbourhood, a contested site. The space generates content; the movement loosens the subject up. Common in journalism and participatory documentary.',
  },
  {
    id: 'two-camera',
    name: 'Two-camera (A + B)',
    description: 'Two cameras simultaneously: one tight on the subject, one wider for cutaways. Lets the editor cut without jump cuts and removes the need for the subject to repeat themselves. Standard for high-end doc and broadcast.',
  },
]

const W = 520
const H = 280

export function InterviewGrammarDiagram() {
  const [setupId, setSetupId] = useState<SetupId>('off-camera-classic')
  const active = SETUPS.find((s) => s.id === setupId)!

  const renderScene = () => {
    switch (setupId) {
      case 'off-camera-classic':
        return (
          <g>
            <Subject x={W * 0.32} y={H * 0.55} facing={-20} label="subject" />
            {/* eyeline */}
            <line x1={W * 0.36} y1={H * 0.42} x2={W * 0.78} y2={H * 0.38} stroke="var(--color-accent)" strokeWidth={1.5} strokeDasharray="4 3" />
            <Camera x={W * 0.72} y={H * 0.55} rotation={180} />
            <text x={W * 0.72} y={H * 0.72} fontSize={10} textAnchor="middle" fill="var(--color-ink)/60">camera</text>
            <circle cx={W * 0.86} cy={H * 0.4} r={10} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.5} />
            <text x={W * 0.86} y={H * 0.58} fontSize={10} textAnchor="middle" fill="var(--color-ink)/60">interviewer</text>
            <text x={W * 0.5} y={H * 0.18} fontSize={11} textAnchor="middle" fill="var(--color-accent)">eyeline slightly off-lens</text>
          </g>
        )
      case 'into-lens':
        return (
          <g>
            <Subject x={W * 0.32} y={H * 0.55} facing={0} label="subject" />
            <line x1={W * 0.36} y1={H * 0.42} x2={W * 0.72} y2={H * 0.4} stroke="var(--color-accent)" strokeWidth={2} />
            <Camera x={W * 0.72} y={H * 0.55} rotation={180} />
            <text x={W * 0.72} y={H * 0.72} fontSize={10} textAnchor="middle" fill="var(--color-ink)/60">camera</text>
            <text x={W * 0.5} y={H * 0.18} fontSize={11} textAnchor="middle" fill="var(--color-accent)">eyeline straight to lens</text>
            <text x={W * 0.5} y={H * 0.95} fontSize={10} textAnchor="middle" fill="var(--color-ink)/55">audience reads: subject is talking to me</text>
          </g>
        )
      case 'errol-morris':
        return (
          <g>
            <Subject x={W * 0.32} y={H * 0.55} facing={0} label="subject" />
            <line x1={W * 0.36} y1={H * 0.42} x2={W * 0.7} y2={H * 0.4} stroke="var(--color-accent)" strokeWidth={2} />
            {/* Interrotron beam splitter */}
            <rect x={W * 0.66} y={H * 0.3} width={6} height={36} fill="#88a8c4" stroke="var(--color-ink)" strokeWidth={0.8} opacity={0.7} transform={`rotate(45 ${W * 0.69} ${H * 0.48})`} />
            <text x={W * 0.69} y={H * 0.28} fontSize={9} textAnchor="middle" fill="var(--color-ink)/70">beam splitter</text>
            <Camera x={W * 0.78} y={H * 0.55} rotation={180} />
            {/* interviewer monitor below */}
            <rect x={W * 0.62} y={H * 0.78} width={W * 0.14} height={H * 0.12} fill="#3a3a3a" stroke="var(--color-ink)" strokeWidth={0.8} />
            <circle cx={W * 0.69} cy={H * 0.84} r={6} fill="#e0c8a8" />
            <text x={W * 0.69} y={H * 0.96} fontSize={9} textAnchor="middle" fill="var(--color-ink)/60">interviewer\'s face on monitor</text>
            <path d={`M ${W * 0.69} ${H * 0.78} L ${W * 0.7} ${H * 0.5}`} stroke="var(--color-accent)" strokeWidth={1} strokeDasharray="2 3" />
            <text x={W * 0.5} y={H * 0.18} fontSize={11} textAnchor="middle" fill="var(--color-accent)">direct eye contact + real conversation</text>
          </g>
        )
      case 'walking-interview':
        return (
          <g>
            <line x1={0} y1={H * 0.85} x2={W} y2={H * 0.85} stroke="#9a9690" strokeDasharray="2 4" />
            <Subject x={W * 0.28} y={H * 0.7} facing={90} label="subject" />
            <Subject x={W * 0.42} y={H * 0.72} facing={-90} scale={0.85} />
            <text x={W * 0.42} y={H * 0.9} fontSize={9} textAnchor="middle" fill="var(--color-ink)/60">interviewer</text>
            <Camera x={W * 0.58} y={H * 0.7} rotation={180} />
            <text x={W * 0.58} y={H * 0.9} fontSize={10} textAnchor="middle" fill="var(--color-ink)/60">camera (handheld)</text>
            <path d={`M ${W * 0.18} ${H * 0.78} L ${W * 0.68} ${H * 0.78}`} stroke="var(--color-accent)" strokeWidth={1.5} strokeDasharray="4 4" markerEnd="url(#arr-i)" />
            <defs>
              <marker id="arr-i" markerWidth={7} markerHeight={7} refX={6} refY={3.5} orient="auto">
                <polygon points="0 0, 7 3.5, 0 7" fill="var(--color-accent)" />
              </marker>
            </defs>
            <text x={W * 0.4} y={H * 0.94} fontSize={10} textAnchor="middle" fill="var(--color-accent)">all three moving through space</text>
          </g>
        )
      case 'two-camera':
        return (
          <g>
            <Subject x={W * 0.34} y={H * 0.55} facing={-20} label="subject" />
            {/* A camera (tight) */}
            <Camera x={W * 0.7} y={H * 0.5} rotation={180} />
            <text x={W * 0.7} y={H * 0.4} fontSize={10} textAnchor="middle" fill="var(--color-ink)/60">A · tight</text>
            <polygon points={`${W * 0.66},${H * 0.5} ${W * 0.4},${H * 0.42} ${W * 0.4},${H * 0.58}`} fill="var(--color-accent)" opacity={0.08} />
            {/* B camera (wide) */}
            <Camera x={W * 0.74} y={H * 0.75} rotation={180 - 20} size={24} />
            <text x={W * 0.74} y={H * 0.9} fontSize={10} textAnchor="middle" fill="var(--color-ink)/60">B · wide</text>
            <polygon points={`${W * 0.7},${H * 0.74} ${W * 0.36},${H * 0.4} ${W * 0.36},${H * 0.78}`} fill="var(--color-accent)" opacity={0.05} />
            <circle cx={W * 0.85} cy={H * 0.4} r={8} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.2} />
            <text x={W * 0.85} y={H * 0.55} fontSize={9} textAnchor="middle" fill="var(--color-ink)/60">interviewer</text>
          </g>
        )
    }
  }

  return (
    <div className="space-y-3">
      <Frame viewBox={`0 0 ${W} ${H}`}>
        <text x={12} y={20} fontSize={11} fill="#9a9690">top-down · {active.name}</text>
        {renderScene()}
      </Frame>

      <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">
        <strong>{active.name}.</strong> {active.description}
      </p>

      <div className="flex flex-wrap gap-1">
        {SETUPS.map((s) => (
          <button
            key={s.id}
            onClick={() => setSetupId(s.id)}
            className={`px-2.5 py-1 text-xs border ${
              s.id === setupId
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
