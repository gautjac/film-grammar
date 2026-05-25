import { useState } from 'react'

type TypeId = 'metric' | 'rhythmic' | 'tonal' | 'overtonal' | 'intellectual'

interface MontageType {
  id: TypeId
  name: string
  description: string
  exemplar: string
}

const TYPES: MontageType[] = [
  { id: 'metric', name: 'Metric', exemplar: 'Eisenstein, Strike (1925); modern action sequences cut to a fixed beat', description: 'Cuts at absolute, measured time intervals — every 24 frames, every two seconds — regardless of what\'s happening in the shot. The rhythm comes purely from the duration of the cut. Mechanical, percussive.' },
  { id: 'rhythmic', name: 'Rhythmic', exemplar: 'Eisenstein, Battleship Potemkin (Odessa Steps); music videos', description: 'Cuts driven by the movement and content inside the frame — the editor cuts on a gesture, a footstep, a beat in the music. Time intervals vary; rhythm comes from internal motion meeting cut points.' },
  { id: 'tonal', name: 'Tonal', exemplar: 'Eisenstein, Mother (1926); contemporary mood-driven editing', description: 'Cuts driven by the emotional tone of each shot — its overall feeling rather than its motion. Shots that share a mood are linked, even if their content is unrelated. The cut becomes a key change.' },
  { id: 'overtonal', name: 'Overtonal', exemplar: 'Eisenstein, October (1928); most sophisticated modern editing', description: 'A combination of metric, rhythmic, and tonal forces operating at once. The sequence reads on all three layers simultaneously. Most "good" modern editing is overtonal — the editor manages all three rhythms together.' },
  { id: 'intellectual', name: 'Intellectual', exemplar: 'Eisenstein, Strike (workers / slaughterhouse); Kubrick, 2001 (bone-to-spaceship)', description: 'Juxtaposition for symbolic or argumentative meaning. The cut creates a new idea not present in either shot alone — strikers intercut with cattle being slaughtered says something neither image says by itself. The most explicitly rhetorical mode.' },
]

const Strip = ({ kind, t }: { kind: TypeId; t: number }) => {
  const w = 520
  const h = 80
  const cy = h / 2

  const cellsForKind = (): { x: number; w: number; tone?: 'a' | 'b' | 'c' }[] => {
    switch (kind) {
      case 'metric':
        return Array.from({ length: 10 }, (_, i) => ({ x: 20 + i * 48, w: 44, tone: (i % 2 === 0 ? 'a' : 'b') as 'a' | 'b' }))
      case 'rhythmic':
        return [
          { x: 20, w: 80, tone: 'a' },
          { x: 104, w: 30, tone: 'b' },
          { x: 138, w: 60, tone: 'a' },
          { x: 202, w: 20, tone: 'c' },
          { x: 226, w: 90, tone: 'a' },
          { x: 320, w: 25, tone: 'b' },
          { x: 349, w: 45, tone: 'a' },
          { x: 398, w: 18, tone: 'c' },
          { x: 420, w: 80, tone: 'a' },
        ]
      case 'tonal':
        return [
          { x: 20, w: 70, tone: 'a' },
          { x: 94, w: 80, tone: 'a' },
          { x: 178, w: 70, tone: 'b' },
          { x: 252, w: 90, tone: 'b' },
          { x: 346, w: 70, tone: 'c' },
          { x: 420, w: 80, tone: 'c' },
        ]
      case 'overtonal':
        return [
          { x: 20, w: 60, tone: 'a' },
          { x: 84, w: 30, tone: 'b' },
          { x: 118, w: 60, tone: 'a' },
          { x: 182, w: 40, tone: 'c' },
          { x: 226, w: 90, tone: 'b' },
          { x: 320, w: 20, tone: 'a' },
          { x: 344, w: 50, tone: 'c' },
          { x: 398, w: 22, tone: 'a' },
          { x: 424, w: 76, tone: 'b' },
        ]
      case 'intellectual':
        return [
          { x: 20, w: 90, tone: 'a' },
          { x: 114, w: 90, tone: 'b' },
          { x: 208, w: 90, tone: 'a' },
          { x: 302, w: 90, tone: 'b' },
          { x: 396, w: 104, tone: 'c' },
        ]
    }
  }

  const cells = cellsForKind()
  const toneFill: Record<'a' | 'b' | 'c', string> = {
    a: 'var(--color-ink)',
    b: 'var(--color-accent)',
    c: '#9a9690',
  }

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
      <text x={10} y={16} fontSize={10} fill="#9a9690">timeline</text>
      {cells.map((c, i) => (
        <rect
          key={i}
          x={c.x}
          y={cy - 18}
          width={c.w - 4}
          height={36}
          fill={toneFill[c.tone ?? 'a']}
          opacity={0.85}
        />
      ))}
      {kind === 'intellectual' && (
        <g>
          <text x={65} y={cy + 38} fontSize={9} fill="var(--color-ink)/70" textAnchor="middle">A</text>
          <text x={159} y={cy + 38} fontSize={9} fill="var(--color-ink)/70" textAnchor="middle">B</text>
          <text x={253} y={cy + 38} fontSize={9} fill="var(--color-ink)/70" textAnchor="middle">A</text>
          <text x={347} y={cy + 38} fontSize={9} fill="var(--color-ink)/70" textAnchor="middle">B</text>
          <text x={448} y={cy + 38} fontSize={9} fill="var(--color-ink)/70" textAnchor="middle">∴ C</text>
        </g>
      )}
      <line x1={t * (w - 40) + 20} y1={cy - 26} x2={t * (w - 40) + 20} y2={cy + 26} stroke="var(--color-accent)" strokeWidth={1.5} opacity={0.4} />
    </svg>
  )
}

export function MontageDiagram() {
  const [activeId, setActiveId] = useState<TypeId>('metric')
  const active = TYPES.find((t) => t.id === activeId)!

  return (
    <div className="space-y-3">
      <Strip kind={activeId} t={0.5} />

      <div className="space-y-1">
        <p className="text-sm">
          <strong>{active.name}.</strong>{' '}{active.description}
        </p>
        <p className="text-xs text-[var(--color-ink)]/60 italic">e.g. {active.exemplar}</p>
      </div>

      <div className="flex flex-wrap gap-1">
        {TYPES.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveId(t.id)}
            className={`px-2.5 py-1 text-xs border ${
              t.id === activeId
                ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      <div className="text-xs text-[var(--color-ink)]/50 leading-relaxed pt-1 border-t border-[var(--color-rule)]/20 mt-2">
        Colours represent shot character. Black = shot type A; red = shot type B; grey = shot type C. Cut spacing is meaningful in metric and overtonal; tone-matching is meaningful in tonal; juxtaposition (∴) is meaningful in intellectual.
      </div>
    </div>
  )
}
