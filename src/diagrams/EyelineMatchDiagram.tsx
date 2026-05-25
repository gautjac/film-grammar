import { useState } from 'react'
import { Subject } from './primitives'

type Mode = 'lead-room' | 'eyeline-match' | 'wrong'

export function EyelineMatchDiagram() {
  const [mode, setMode] = useState<Mode>('lead-room')

  const Box = ({ children, label }: { children: React.ReactNode; label?: string }) => (
    <div className="flex-1 min-w-0">
      {label && <div className="text-xs uppercase tracking-wider text-[var(--color-ink)]/60 mb-1">{label}</div>}
      <svg
        viewBox="0 0 240 140"
        style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}
      >
        {children}
      </svg>
    </div>
  )

  const renderLeadRoom = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Box label="Lead room — wrong">
          <Subject x={185} y={130} facing={45} scale={1.6} />
          <text x={185} y={20} fontSize={9} textAnchor="middle" fill="var(--color-accent)">no space for eyes to travel</text>
        </Box>
        <Box label="Lead room — right">
          <Subject x={70} y={130} facing={45} scale={1.6} />
          <text x={170} y={75} fontSize={10} textAnchor="middle" fill="var(--color-ink)/50">→</text>
          <text x={170} y={50} fontSize={9} textAnchor="middle" fill="var(--color-ink)/60">space for the gaze</text>
        </Box>
      </div>
      <p className="text-sm text-[var(--color-ink)]/80">
        <strong>Lead room</strong> (also called <em>nose room</em>): leave space in the direction the subject is looking. Without it, the gaze feels trapped against the edge of the frame.
      </p>
    </div>
  )

  const renderEyelineMatch = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Box label="Shot A — subject looks right">
          <Subject x={60} y={130} facing={-45} scale={1.6} />
          <line x1={75} y1={88} x2={235} y2={75} stroke="var(--color-accent)" strokeWidth={1.5} strokeDasharray="3 3" />
          <text x={155} y={68} fontSize={9} textAnchor="middle" fill="var(--color-accent)">eyeline → off-frame right</text>
        </Box>
        <Box label="Shot B — return, subject on right">
          <Subject x={185} y={130} facing={45} scale={1.6} />
          <line x1={5} y1={75} x2={170} y2={88} stroke="var(--color-accent)" strokeWidth={1.5} strokeDasharray="3 3" />
          <text x={85} y={68} fontSize={9} textAnchor="middle" fill="var(--color-accent)">eyeline ← off-frame left</text>
        </Box>
      </div>
      <p className="text-sm text-[var(--color-ink)]/80">
        <strong>Eyeline match</strong>: across the cut, the two subjects' gazes must converge. If A looks toward off-frame right, B should appear in the right area or look toward off-frame left. The audience reads them as facing each other even though they're never in the same frame.
      </p>
    </div>
  )

  const renderWrong = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Box label="Shot A">
          <Subject x={60} y={130} facing={-45} scale={1.6} />
          <line x1={75} y1={88} x2={235} y2={75} stroke="var(--color-accent)" strokeWidth={1.5} strokeDasharray="3 3" />
          <text x={155} y={68} fontSize={9} textAnchor="middle" fill="var(--color-accent)">looking right</text>
        </Box>
        <Box label="Shot B — broken eyeline">
          <Subject x={60} y={130} facing={-45} scale={1.6} />
          <line x1={75} y1={88} x2={235} y2={75} stroke="var(--color-accent)" strokeWidth={1.5} strokeDasharray="3 3" />
          <text x={155} y={68} fontSize={9} textAnchor="middle" fill="var(--color-accent)">also looking right</text>
        </Box>
      </div>
      <p className="text-sm text-[var(--color-ink)]/80">
        When both subjects look the same screen direction across the cut, they read as looking at the same off-screen thing — not at each other. Useful for shared-gaze moments (both watching a TV); confusing otherwise.
      </p>
    </div>
  )

  return (
    <div className="space-y-3">
      {mode === 'lead-room' && renderLeadRoom()}
      {mode === 'eyeline-match' && renderEyelineMatch()}
      {mode === 'wrong' && renderWrong()}
      <div className="flex flex-wrap gap-2">
        {([
          ['lead-room', 'Lead room'],
          ['eyeline-match', 'Eyeline match'],
          ['wrong', 'Broken eyeline'],
        ] as [Mode, string][]).map(([m, label]) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-3 py-1.5 text-xs border ${
              mode === m
                ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
