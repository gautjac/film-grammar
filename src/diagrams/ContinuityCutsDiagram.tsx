import { useState } from 'react'

type CutId = 'match' | 'jump' | 'l-cut' | 'j-cut' | 'action'

interface CutDef {
  id: CutId
  name: string
  description: string
}

const CUTS: CutDef[] = [
  { id: 'match', name: 'Match cut', description: 'Two shots linked by visual similarity — shape, motion, color. Famous example: the bone tossed into the air becoming a spacecraft in 2001. Compresses centuries (or kilometres) into a single beat.' },
  { id: 'jump', name: 'Jump cut', description: 'Same subject, same framing, removed time. The subject seems to teleport within the frame. Originally taboo, made canonical by Godard\'s Breathless (1960). Common in interviews to compress speech.' },
  { id: 'l-cut', name: 'L-cut', description: 'Audio from the outgoing shot continues over the incoming picture. Named for the timeline shape — video cuts first, audio holds. Softens transitions; common in dialogue scenes for naturalism.' },
  { id: 'j-cut', name: 'J-cut', description: 'Audio from the incoming shot starts before its picture. The reverse of an L-cut. The viewer hears what they\'re about to see — pulls attention forward into the next scene.' },
  { id: 'action', name: 'Match-on-action', description: 'A movement begun in shot A completes in shot B at a different angle. The continuity of motion masks the cut; the eye reads through it without registering the change. The workhorse of invisible editing.' },
]

const Timeline = ({ cut }: { cut: CutId }) => {
  const w = 480
  const h = 100
  const trackH = 18
  const trackY1 = 18
  const trackY2 = trackY1 + trackH + 10

  const renderBars = () => {
    switch (cut) {
      case 'match':
      case 'action':
        return (
          <>
            <rect x={20} y={trackY1} width={200} height={trackH} fill="var(--color-ink)" opacity={0.85} />
            <rect x={220} y={trackY1} width={200} height={trackH} fill="var(--color-accent)" opacity={0.85} />
            <rect x={20} y={trackY2} width={200} height={trackH} fill="var(--color-ink)" opacity={0.4} />
            <rect x={220} y={trackY2} width={200} height={trackH} fill="var(--color-accent)" opacity={0.4} />
          </>
        )
      case 'jump':
        return (
          <>
            <rect x={20} y={trackY1} width={120} height={trackH} fill="var(--color-ink)" opacity={0.85} />
            <rect x={150} y={trackY1} width={80} height={trackH} fill="var(--color-ink)" opacity={0.85} />
            <rect x={240} y={trackY1} width={120} height={trackH} fill="var(--color-ink)" opacity={0.85} />
            <rect x={20} y={trackY2} width={120} height={trackH} fill="var(--color-ink)" opacity={0.4} />
            <rect x={150} y={trackY2} width={80} height={trackH} fill="var(--color-ink)" opacity={0.4} />
            <rect x={240} y={trackY2} width={120} height={trackH} fill="var(--color-ink)" opacity={0.4} />
          </>
        )
      case 'l-cut':
        return (
          <>
            <rect x={20} y={trackY1} width={180} height={trackH} fill="var(--color-ink)" opacity={0.85} />
            <rect x={200} y={trackY1} width={220} height={trackH} fill="var(--color-accent)" opacity={0.85} />
            <rect x={20} y={trackY2} width={280} height={trackH} fill="var(--color-ink)" opacity={0.4} />
            <rect x={300} y={trackY2} width={120} height={trackH} fill="var(--color-accent)" opacity={0.4} />
            <line x1={200} y1={trackY1 - 4} x2={200} y2={trackY2 + trackH + 4} stroke="var(--color-accent)" strokeDasharray="2 3" strokeWidth={1} />
            <line x1={300} y1={trackY1 - 4} x2={300} y2={trackY2 + trackH + 4} stroke="var(--color-accent)" strokeDasharray="2 3" strokeWidth={1} />
          </>
        )
      case 'j-cut':
        return (
          <>
            <rect x={20} y={trackY1} width={260} height={trackH} fill="var(--color-ink)" opacity={0.85} />
            <rect x={280} y={trackY1} width={140} height={trackH} fill="var(--color-accent)" opacity={0.85} />
            <rect x={20} y={trackY2} width={180} height={trackH} fill="var(--color-ink)" opacity={0.4} />
            <rect x={200} y={trackY2} width={220} height={trackH} fill="var(--color-accent)" opacity={0.4} />
            <line x1={200} y1={trackY1 - 4} x2={200} y2={trackY2 + trackH + 4} stroke="var(--color-accent)" strokeDasharray="2 3" strokeWidth={1} />
            <line x1={280} y1={trackY1 - 4} x2={280} y2={trackY2 + trackH + 4} stroke="var(--color-accent)" strokeDasharray="2 3" strokeWidth={1} />
          </>
        )
    }
  }

  return (
    <svg viewBox={`-30 0 ${w + 30} ${h}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
      <text x={-8} y={trackY1 + 13} fontSize={10} textAnchor="end" fill="#9a9690">VID</text>
      <text x={-8} y={trackY2 + 13} fontSize={10} textAnchor="end" fill="#9a9690">AUD</text>
      {renderBars()}
      <text x={20} y={h - 6} fontSize={9} fill="#9a9690">shot A</text>
      <text x={w - 60} y={h - 6} fontSize={9} fill="var(--color-accent)">shot B</text>
    </svg>
  )
}

const FramePair = ({ cut }: { cut: CutId }) => {
  const dimensions = { w: 200, h: 120 }
  const Box = ({ children }: { children: React.ReactNode }) => (
    <svg
      viewBox={`0 0 ${dimensions.w} ${dimensions.h}`}
      style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}
    >
      {children}
    </svg>
  )
  const Subj = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) => (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx={0} cy={0} r={10} fill="none" stroke="var(--color-ink)" strokeWidth={1.5} />
      <rect x={-8} y={8} width={16} height={20} fill="none" stroke="var(--color-ink)" strokeWidth={1.5} />
    </g>
  )
  switch (cut) {
    case 'match':
      return (
        <div className="grid grid-cols-2 gap-2">
          <Box>
            <line x1={20} y1={80} x2={180} y2={50} stroke="var(--color-ink)" strokeWidth={3} />
            <text x={100} y={110} fontSize={10} textAnchor="middle" fill="var(--color-ink)/60">bone airborne</text>
          </Box>
          <Box>
            <line x1={20} y1={50} x2={180} y2={80} stroke="var(--color-ink)" strokeWidth={3} />
            <text x={100} y={110} fontSize={10} textAnchor="middle" fill="var(--color-ink)/60">spacecraft in orbit</text>
          </Box>
        </div>
      )
    case 'jump':
      return (
        <div className="grid grid-cols-2 gap-2">
          <Box>
            <Subj x={70} y={60} scale={1.2} />
            <text x={100} y={110} fontSize={10} textAnchor="middle" fill="var(--color-ink)/60">looking left</text>
          </Box>
          <Box>
            <Subj x={130} y={60} scale={1.2} />
            <text x={100} y={110} fontSize={10} textAnchor="middle" fill="var(--color-ink)/60">moments later, shifted</text>
          </Box>
        </div>
      )
    case 'l-cut':
      return (
        <div className="grid grid-cols-2 gap-2">
          <Box>
            <Subj x={100} y={55} scale={1.4} />
            <text x={100} y={110} fontSize={10} textAnchor="middle" fill="var(--color-ink)/60">A still speaking…</text>
          </Box>
          <Box>
            <Subj x={100} y={55} scale={1.4} />
            <text x={100} y={110} fontSize={10} textAnchor="middle" fill="var(--color-accent)">…audio holds, B reacts</text>
          </Box>
        </div>
      )
    case 'j-cut':
      return (
        <div className="grid grid-cols-2 gap-2">
          <Box>
            <Subj x={100} y={55} scale={1.4} />
            <text x={100} y={110} fontSize={10} textAnchor="middle" fill="var(--color-accent)">we hear B already…</text>
          </Box>
          <Box>
            <Subj x={100} y={55} scale={1.4} />
            <text x={100} y={110} fontSize={10} textAnchor="middle" fill="var(--color-ink)/60">…then cut to B</text>
          </Box>
        </div>
      )
    case 'action':
      return (
        <div className="grid grid-cols-2 gap-2">
          <Box>
            <Subj x={70} y={70} scale={1.2} />
            <path d="M 80 60 L 110 50" stroke="var(--color-accent)" strokeWidth={2} markerEnd="url(#arr)" />
            <defs>
              <marker id="arr" markerWidth={6} markerHeight={6} refX={5} refY={3} orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="var(--color-accent)" />
              </marker>
            </defs>
            <text x={100} y={110} fontSize={10} textAnchor="middle" fill="var(--color-ink)/60">reaches for door</text>
          </Box>
          <Box>
            <Subj x={130} y={70} scale={1.2} />
            <path d="M 120 55 L 150 65" stroke="var(--color-accent)" strokeWidth={2} markerEnd="url(#arr2)" />
            <defs>
              <marker id="arr2" markerWidth={6} markerHeight={6} refX={5} refY={3} orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="var(--color-accent)" />
              </marker>
            </defs>
            <text x={100} y={110} fontSize={10} textAnchor="middle" fill="var(--color-ink)/60">door opens, new angle</text>
          </Box>
        </div>
      )
  }
}

export function ContinuityCutsDiagram() {
  const [activeId, setActiveId] = useState<CutId>('match')
  const active = CUTS.find((c) => c.id === activeId)!

  return (
    <div className="space-y-3">
      <FramePair cut={activeId} />
      <Timeline cut={activeId} />
      <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">
        <strong>{active.name}.</strong> {active.description}
      </p>
      <div className="flex flex-wrap gap-1">
        {CUTS.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveId(c.id)}
            className={`px-2.5 py-1 text-xs border ${
              c.id === activeId
                ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  )
}
