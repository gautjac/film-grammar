import { useState } from 'react'
import { Frame } from './primitives'

type StrategyId = 'archival' | 'photo' | 'reenactment' | 'animation' | 'absence' | 'hybrid'

interface Strategy {
  id: StrategyId
  name: string
  description: string
  exemplar: string
}

const STRATEGIES: Strategy[] = [
  {
    id: 'archival',
    name: 'Archival footage',
    description: 'Actual film, video, or audio from the time depicted. Newsreels, home movies, found footage, security cameras, broadcast media. The most "authentic" feeling — but every archive choice is still an editorial choice.',
    exemplar: 'Asif Kapadia\'s Amy, Senna · films built almost entirely from archive',
  },
  {
    id: 'photo',
    name: 'Still photographs (Ken Burns)',
    description: 'Still photographs given motion by slow camera moves — pans across, push-ins, pull-outs. Named after Ken Burns\'s PBS use. Cheap, evocative, and now so common in historical documentary it\'s shorthand for "earnest archive piece."',
    exemplar: 'Ken Burns, The Civil War (1990)',
  },
  {
    id: 'reenactment',
    name: 'Re-enactment',
    description: 'The past dramatised by actors or stand-ins. Risks looking cheap or dishonest if not declared; can be devastating when stylised deliberately. Crime documentaries lean here; The Act of Killing made it reflexive.',
    exemplar: 'Errol Morris, The Thin Blue Line · Joshua Oppenheimer, The Act of Killing',
  },
  {
    id: 'animation',
    name: 'Animation',
    description: 'Drawn or rendered representation of past events. Honest about its construction — no one mistakes animation for record — and free from the legal/ethical problems of re-enactment. Used for trauma, secrets, the unfilmable.',
    exemplar: 'Ari Folman, Waltz with Bashir (2008) · feature-length animated doc',
  },
  {
    id: 'absence',
    name: 'Absence / black frame',
    description: 'Refuse to show what can\'t be shown. Black frame, blank screen, audio-only. A stance: this event will not be re-staged. Often combined with archival audio (testimony, recordings) over blackness.',
    exemplar: 'Claude Lanzmann, Shoah (1985) · refuses archival imagery of camps',
  },
  {
    id: 'hybrid',
    name: 'Hybrid forms',
    description: 'Mixing two or more strategies inside a single film. Archival photos + animation + interview + observational footage. Increasingly the default in contemporary creative documentary. The choice of when to switch becomes the form.',
    exemplar: 'Sarah Polley, Stories We Tell (2012) · interview + archival + staged re-enactment',
  },
]

const W = 520
const H = 240

const renderViz = (id: StrategyId) => {
  switch (id) {
    case 'archival':
      return (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={20 + i * 124}
              y={H * 0.25}
              width={108}
              height={H * 0.5}
              fill="#9a8c70"
              stroke="var(--color-ink)"
              strokeWidth={1}
              opacity={0.7 + i * 0.07}
            />
          ))}
          {/* sprocket holes */}
          {[0, 1, 2, 3].map((i) => Array.from({ length: 6 }, (_, j) => (
            <rect key={`s-${i}-${j}`} x={26 + i * 124 + j * 16} y={H * 0.18} width={3} height={6} fill="var(--color-ink)" />
          )))}
          <text x={W / 2} y={H * 0.92} fontSize={11} textAnchor="middle" fill="var(--color-ink)/70">found film · newsreels · home movies</text>
        </g>
      )
    case 'photo':
      return (
        <g>
          <rect x={W * 0.18} y={H * 0.2} width={W * 0.42} height={H * 0.55} fill="#d4c8a8" stroke="var(--color-ink)" strokeWidth={2} />
          <rect x={W * 0.2} y={H * 0.22} width={W * 0.38} height={H * 0.51} fill="#8a7a5a" />
          {/* Ken Burns pan rectangles */}
          <rect x={W * 0.22} y={H * 0.26} width={W * 0.18} height={H * 0.3} fill="none" stroke="var(--color-accent)" strokeWidth={1.5} strokeDasharray="3 3" />
          <rect x={W * 0.4} y={H * 0.4} width={W * 0.16} height={H * 0.3} fill="none" stroke="var(--color-accent)" strokeWidth={1.5} strokeDasharray="3 3" />
          <path d={`M ${W * 0.32} ${H * 0.42} L ${W * 0.48} ${H * 0.55}`} stroke="var(--color-accent)" strokeWidth={1.5} markerEnd="url(#arr-a)" />
          <text x={W * 0.78} y={H * 0.5} fontSize={11} textAnchor="middle" fill="var(--color-ink)/70">still photo</text>
          <text x={W * 0.78} y={H * 0.62} fontSize={10} textAnchor="middle" fill="var(--color-accent)">slow camera push</text>
        </g>
      )
    case 'reenactment':
      return (
        <g>
          <rect x={W * 0.1} y={H * 0.15} width={W * 0.8} height={H * 0.7} fill="#1a1a1a" stroke="var(--color-ink)" strokeWidth={1} />
          {/* stylised figures */}
          <circle cx={W * 0.32} cy={H * 0.42} r={12} fill="#d4a878" stroke="var(--color-ink)" strokeWidth={0.6} />
          <rect x={W * 0.32 - 11} y={H * 0.5} width={22} height={H * 0.22} fill="#4a3a3a" />
          <circle cx={W * 0.55} cy={H * 0.42} r={12} fill="#d4a878" stroke="var(--color-ink)" strokeWidth={0.6} />
          <rect x={W * 0.55 - 11} y={H * 0.5} width={22} height={H * 0.22} fill="#2a2a3a" />
          {/* spotlight */}
          <defs>
            <radialGradient id="spot">
              <stop offset="0%" stopColor="#fff8e0" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#fff8e0" stopOpacity={0} />
            </radialGradient>
          </defs>
          <circle cx={W * 0.45} cy={H * 0.5} r={80} fill="url(#spot)" />
          <text x={W * 0.5} y={H * 0.95} fontSize={10} textAnchor="middle" fill="var(--color-ink)/70">actors performing the past</text>
        </g>
      )
    case 'animation':
      return (
        <g>
          {/* abstract animated frame */}
          <rect x={W * 0.18} y={H * 0.2} width={W * 0.64} height={H * 0.55} fill="#f0c878" stroke="var(--color-ink)" strokeWidth={1.5} />
          <circle cx={W * 0.32} cy={H * 0.42} r={16} fill="#c4502a" stroke="var(--color-ink)" strokeWidth={1.2} />
          <rect x={W * 0.5} y={H * 0.35} width={W * 0.2} height={H * 0.3} fill="#3a5a7a" stroke="var(--color-ink)" strokeWidth={1.2} />
          <path d={`M ${W * 0.34} ${H * 0.48} Q ${W * 0.5} ${H * 0.62} ${W * 0.66} ${H * 0.5}`} fill="none" stroke="var(--color-ink)" strokeWidth={2} />
          <text x={W * 0.5} y={H * 0.92} fontSize={10} textAnchor="middle" fill="var(--color-ink)/70">drawn / rendered representation</text>
        </g>
      )
    case 'absence':
      return (
        <g>
          <rect x={W * 0.18} y={H * 0.18} width={W * 0.64} height={H * 0.55} fill="#0a0a0a" />
          {/* audio waveform suggestion */}
          {Array.from({ length: 40 }, (_, i) => {
            const h = 4 + Math.abs(Math.sin(i * 0.7)) * 24
            return (
              <rect
                key={i}
                x={W * 0.22 + i * 8}
                y={H * 0.45 - h / 2}
                width={3}
                height={h}
                fill="var(--color-accent)"
                opacity={0.65}
              />
            )
          })}
          <text x={W * 0.5} y={H * 0.92} fontSize={10} textAnchor="middle" fill="var(--color-ink)/70">testimony over blackness · refusal to show</text>
        </g>
      )
    case 'hybrid':
      return (
        <g>
          {/* archive */}
          <rect x={20} y={H * 0.18} width={W * 0.2} height={H * 0.32} fill="#9a8c70" stroke="var(--color-ink)" strokeWidth={1} />
          <text x={20 + W * 0.1} y={H * 0.56} fontSize={9} textAnchor="middle" fill="var(--color-ink)/70">archive</text>
          {/* interview */}
          <rect x={W * 0.25} y={H * 0.18} width={W * 0.2} height={H * 0.32} fill="#d4c8b0" stroke="var(--color-ink)" strokeWidth={1} />
          <circle cx={W * 0.35} cy={H * 0.32} r={10} fill="#e0c8a8" stroke="var(--color-ink)" strokeWidth={0.6} />
          <text x={W * 0.35} y={H * 0.56} fontSize={9} textAnchor="middle" fill="var(--color-ink)/70">interview</text>
          {/* animation */}
          <rect x={W * 0.5} y={H * 0.18} width={W * 0.2} height={H * 0.32} fill="#f0c878" stroke="var(--color-ink)" strokeWidth={1} />
          <text x={W * 0.5 + W * 0.1} y={H * 0.56} fontSize={9} textAnchor="middle" fill="var(--color-ink)/70">animation</text>
          {/* reenactment */}
          <rect x={W * 0.75} y={H * 0.18} width={W * 0.2} height={H * 0.32} fill="#1a1a1a" stroke="var(--color-ink)" strokeWidth={1} />
          <text x={W * 0.75 + W * 0.1} y={H * 0.56} fontSize={9} textAnchor="middle" fill="#d4c8b0">re-enactment</text>
          {/* cut arrows */}
          <line x1={W * 0.22} y1={H * 0.74} x2={W * 0.95} y2={H * 0.74} stroke="var(--color-accent)" strokeWidth={1.5} markerEnd="url(#arr-a)" />
          <text x={W / 2} y={H * 0.9} fontSize={10} textAnchor="middle" fill="var(--color-accent)">cut between strategies · the choice becomes the form</text>
        </g>
      )
  }
}

export function ArchivalDiagram() {
  const [activeId, setActiveId] = useState<StrategyId>('archival')
  const active = STRATEGIES.find((s) => s.id === activeId)!

  return (
    <div className="space-y-3">
      <Frame viewBox={`0 0 ${W} ${H}`}>
        <defs>
          <marker id="arr-a" markerWidth={7} markerHeight={7} refX={6} refY={3.5} orient="auto">
            <polygon points="0 0, 7 3.5, 0 7" fill="var(--color-accent)" />
          </marker>
        </defs>
        <text x={12} y={20} fontSize={11} fill="#9a9690">{active.name}</text>
        {renderViz(activeId)}
      </Frame>

      <div className="space-y-1">
        <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">
          <strong>{active.name}.</strong> {active.description}
        </p>
        <p className="text-xs text-[var(--color-ink)]/55 italic">e.g. {active.exemplar}</p>
      </div>

      <div className="flex flex-wrap gap-1">
        {STRATEGIES.map((s) => (
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
