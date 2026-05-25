import { useState } from 'react'
import { Frame, Camera, Subject } from './primitives'

type ModeId = 'expository' | 'observational' | 'participatory' | 'reflexive' | 'poetic' | 'performative'

interface Mode {
  id: ModeId
  name: string
  short: string
  exemplar: string
  feature: string
  description: string
}

const MODES: Mode[] = [
  { id: 'expository', name: 'Expository', short: 'EXP', exemplar: 'classic Ken Burns; nature documentaries', feature: 'Voice-of-God narration argues a thesis. Images illustrate the argument. Audience addressed directly.', description: 'The oldest documentary mode. A narrator (often unseen) tells you what the world is, and the footage is evidence. Persuasive, didactic, organised by argument.' },
  { id: 'observational', name: 'Observational', short: 'OBS', exemplar: 'Frederick Wiseman; direct cinema; cinéma vérité (US strand)', feature: 'No narration, no interviews. Camera observes; reality unfolds. The fly on the wall.', description: 'The filmmaker withdraws. Long takes, no music, no voice. Faith that meaning emerges from watching ordinary life closely. Editing is the only intervention.' },
  { id: 'participatory', name: 'Participatory', short: 'PAR', exemplar: 'Nick Broomfield; Louis Theroux; Werner Herzog', feature: 'Filmmaker present in the frame, asking questions, interacting with subjects.', description: 'The encounter between filmmaker and subject is the film. The presence of the camera is acknowledged. Interviews, conversations, on-screen filmmaker.' },
  { id: 'reflexive', name: 'Reflexive', short: 'REF', exemplar: 'Dziga Vertov, Man with a Movie Camera; The Act of Killing', feature: 'The film exposes its own making. Mirrors, visible crew, the apparatus of cinema.', description: 'Documentary about documentary. Forces the viewer to reckon with how representations are constructed. The fourth wall is gone.' },
  { id: 'poetic', name: 'Poetic', short: 'POE', exemplar: 'Joris Ivens, Rain; Godfrey Reggio, Koyaanisqatsi', feature: 'Mood, rhythm, association. Fragmented imagery. Argument by montage.', description: 'Closer to a tone poem than a thesis. Organised by feeling and visual association rather than narrative. Early documentary tradition; modern art-doc.' },
  { id: 'performative', name: 'Performative', short: 'PER', exemplar: 'Marlon Riggs, Tongues Untied; Sarah Polley, Stories We Tell', feature: 'Filmmaker\'s subjective experience is the subject. First-person, often autobiographical.', description: 'Asks "what does this feel like, from inside?" rather than "what is this?". Truth claims are explicitly personal, sometimes emotional or poetic. Often overlaps with poetic mode.' },
]

export function DocModesDiagram() {
  const [activeId, setActiveId] = useState<ModeId>('expository')
  const active = MODES.find((m) => m.id === activeId)!

  const W = 480
  const H = 280

  const filmmakerPos: [number, number] = [W * 0.18, H * 0.28]
  const subjectPos: [number, number] = [W * 0.5, H * 0.5]
  const viewerPos: [number, number] = [W * 0.82, H * 0.78]

  const renderTriangle = () => {
    switch (activeId) {
      case 'expository':
        return (
          <g>
            <Camera x={filmmakerPos[0]} y={filmmakerPos[1]} rotation={0} label="filmmaker / narrator" />
            <Subject x={subjectPos[0]} y={subjectPos[1]} label="subject" />
            <circle cx={viewerPos[0]} cy={viewerPos[1]} r={14} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.5} />
            <text x={viewerPos[0]} y={viewerPos[1] + 28} fontSize={10} textAnchor="middle" fill="var(--color-ink)">viewer</text>
            <line x1={filmmakerPos[0]} y1={filmmakerPos[1]} x2={subjectPos[0]} y2={subjectPos[1]} stroke="var(--color-ink)" strokeWidth={1} />
            <line x1={filmmakerPos[0]} y1={filmmakerPos[1]} x2={viewerPos[0]} y2={viewerPos[1]} stroke="var(--color-accent)" strokeWidth={2} />
            <text x={(filmmakerPos[0] + viewerPos[0]) / 2 - 30} y={(filmmakerPos[1] + viewerPos[1]) / 2} fontSize={10} fill="var(--color-accent)">narration</text>
          </g>
        )
      case 'observational':
        return (
          <g>
            <Camera x={W * 0.12} y={H * 0.85} rotation={-30} size={22} label="filmmaker (withdrawn)" />
            <Subject x={subjectPos[0]} y={subjectPos[1]} label="subject" />
            <Subject x={subjectPos[0] + 60} y={subjectPos[1] + 30} scale={0.85} />
            <circle cx={viewerPos[0]} cy={viewerPos[1]} r={14} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.5} />
            <text x={viewerPos[0]} y={viewerPos[1] + 28} fontSize={10} textAnchor="middle" fill="var(--color-ink)">viewer</text>
            <line x1={W * 0.16} y1={H * 0.82} x2={subjectPos[0] - 20} y2={subjectPos[1] + 10} stroke="var(--color-ink)" strokeWidth={1} strokeDasharray="3 3" />
            <text x={W * 0.34} y={H * 0.94} fontSize={10} fill="var(--color-ink)/60">observes from outside</text>
          </g>
        )
      case 'participatory':
        return (
          <g>
            <Camera x={W * 0.28} y={H * 0.42} rotation={20} label="filmmaker (in frame)" />
            <Subject x={W * 0.28} y={H * 0.42} scale={0.4} />
            <Subject x={subjectPos[0] + 40} y={subjectPos[1]} label="subject" />
            <circle cx={viewerPos[0]} cy={viewerPos[1]} r={14} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.5} />
            <text x={viewerPos[0]} y={viewerPos[1] + 28} fontSize={10} textAnchor="middle" fill="var(--color-ink)">viewer</text>
            <line x1={W * 0.32} y1={H * 0.45} x2={subjectPos[0] + 15} y2={subjectPos[1]} stroke="var(--color-accent)" strokeWidth={2} />
            <text x={W * 0.42} y={H * 0.4} fontSize={10} fill="var(--color-accent)">interaction</text>
          </g>
        )
      case 'reflexive':
        return (
          <g>
            <Camera x={filmmakerPos[0]} y={filmmakerPos[1]} rotation={0} label="filmmaker" />
            <Camera x={subjectPos[0] - 20} y={subjectPos[1]} rotation={180} size={22} />
            <text x={subjectPos[0] + 4} y={subjectPos[1] + 24} fontSize={10} textAnchor="middle" fill="var(--color-ink)">subject = the apparatus</text>
            <circle cx={viewerPos[0]} cy={viewerPos[1]} r={14} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.5} />
            <text x={viewerPos[0]} y={viewerPos[1] + 28} fontSize={10} textAnchor="middle" fill="var(--color-ink)">viewer</text>
            <line x1={filmmakerPos[0] + 14} y1={filmmakerPos[1]} x2={subjectPos[0] - 40} y2={subjectPos[1]} stroke="var(--color-accent)" strokeWidth={1.5} strokeDasharray="3 3" />
          </g>
        )
      case 'poetic':
        return (
          <g>
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const x = W * 0.2 + (i % 3) * W * 0.22
              const y = H * 0.25 + Math.floor(i / 3) * H * 0.32
              return (
                <rect key={i} x={x} y={y} width={W * 0.18} height={H * 0.22} fill="#ded8cd" stroke="var(--color-ink)" strokeWidth={0.8} opacity={0.7 + (i % 2) * 0.3} />
              )
            })}
            <text x={W / 2} y={H * 0.95} fontSize={10} textAnchor="middle" fill="var(--color-ink)/70">imagery in association — argument by montage</text>
          </g>
        )
      case 'performative':
        return (
          <g>
            <Camera x={filmmakerPos[0]} y={filmmakerPos[1]} rotation={0} />
            <Subject x={filmmakerPos[0]} y={filmmakerPos[1] + 4} scale={0.5} />
            <text x={filmmakerPos[0]} y={filmmakerPos[1] + 50} fontSize={10} textAnchor="middle" fill="var(--color-accent)">filmmaker = subject</text>
            <circle cx={viewerPos[0]} cy={viewerPos[1]} r={14} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.5} />
            <text x={viewerPos[0]} y={viewerPos[1] + 28} fontSize={10} textAnchor="middle" fill="var(--color-ink)">viewer</text>
            <line x1={filmmakerPos[0] + 10} y1={filmmakerPos[1] + 10} x2={viewerPos[0] - 14} y2={viewerPos[1] - 4} stroke="var(--color-accent)" strokeWidth={2} />
            <text x={(filmmakerPos[0] + viewerPos[0]) / 2 - 30} y={(filmmakerPos[1] + viewerPos[1]) / 2 - 8} fontSize={10} fill="var(--color-accent)">first-person experience</text>
          </g>
        )
    }
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-3">
        <Frame viewBox={`0 0 ${W} ${H}`}>{renderTriangle()}</Frame>

        <div className="space-y-3">
          <div>
            <div className="text-xs uppercase tracking-wider text-[var(--color-ink)]/60">{active.short} — {active.name}</div>
            <p className="text-sm font-medium mt-1">{active.feature}</p>
          </div>
          <p className="text-xs text-[var(--color-ink)]/70 leading-relaxed">{active.description}</p>
          <p className="text-xs text-[var(--color-ink)]/60 italic">e.g. {active.exemplar}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => setActiveId(m.id)}
            className={`px-2 py-1.5 text-xs border ${
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
