import { useState } from 'react'
import { Frame, Subject } from './primitives'

type SoundId = 'dialogue' | 'footsteps' | 'radio' | 'foley' | 'score' | 'vo' | 'sfx-post'

interface SoundDef {
  id: SoundId
  label: string
  category: 'diegetic' | 'non-diegetic'
  description: string
  position: 'inside' | 'outside'
}

const SOUNDS: SoundDef[] = [
  { id: 'dialogue', label: 'Character dialogue', category: 'diegetic', position: 'inside', description: 'The character speaks; we hear them. Sound source visible in the frame.' },
  { id: 'footsteps', label: 'Footsteps, ambient', category: 'diegetic', position: 'inside', description: 'The character\'s steps, room tone, distant traffic. Sound from the world of the film, whether or not the source is visible.' },
  { id: 'radio', label: 'Radio in the room', category: 'diegetic', position: 'inside', description: 'Music coming from a radio, TV, or speaker that exists inside the scene. Diegetic even though it\'s music.' },
  { id: 'foley', label: 'Foley (post-added)', category: 'diegetic', position: 'inside', description: 'Sounds recorded later to replace or enhance diegetic sound — a fist on a chest, a cup on a table. Reads as diegetic because it represents in-world sound.' },
  { id: 'score', label: 'Score / underscore', category: 'non-diegetic', position: 'outside', description: 'Music heard by the audience but not by the characters. Sourced outside the world of the film. The most common non-diegetic element.' },
  { id: 'vo', label: 'Voiceover narration', category: 'non-diegetic', position: 'outside', description: 'A narrator speaking to the audience from outside the scene. Common in documentary expository mode and in literary fiction adaptations.' },
  { id: 'sfx-post', label: 'Stylised SFX', category: 'non-diegetic', position: 'outside', description: 'Whooshes, stings, transitions added in post that don\'t correspond to any in-world source. Borderline cases — sometimes called non-diegetic sound design.' },
]

export function DiegeticSoundDiagram() {
  const [activeId, setActiveId] = useState<SoundId>('dialogue')
  const active = SOUNDS.find((s) => s.id === activeId)!

  const W = 520
  const H = 320

  const frameX = W * 0.15
  const frameY = H * 0.18
  const frameW = W * 0.6
  const frameH = H * 0.55

  return (
    <div className="space-y-3">
      <Frame viewBox={`0 0 ${W} ${H}`}>
        <rect
          x={frameX}
          y={frameY}
          width={frameW}
          height={frameH}
          fill="#fdfaf3"
          stroke="var(--color-ink)"
          strokeWidth={1.5}
        />
        <text x={frameX + 6} y={frameY + 16} fontSize={10} fill="#9a9690">the world of the film</text>

        <Subject x={frameX + frameW * 0.4} y={frameY + frameH * 0.8} facing={-30} label="character" />
        <rect x={frameX + frameW * 0.65} y={frameY + frameH * 0.65} width={28} height={20} fill="#ded8cd" stroke="var(--color-ink)" strokeWidth={1} />
        <text x={frameX + frameW * 0.65 + 14} y={frameY + frameH * 0.65 + 13} fontSize={8} textAnchor="middle" fill="var(--color-ink)/60">radio</text>

        <text x={W * 0.92} y={frameY + 16} fontSize={10} textAnchor="end" fill="#9a9690">outside the film</text>

        {active.position === 'inside' ? (
          <g>
            {[0, 1, 2].map((i) => (
              <circle
                key={i}
                cx={frameX + frameW * (active.id === 'radio' ? 0.65 + 0.04 : 0.4)}
                cy={frameY + frameH * (active.id === 'radio' ? 0.65 + 0.05 : 0.6)}
                r={20 + i * 14}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth={1.5}
                opacity={0.6 - i * 0.18}
              />
            ))}
            <text x={frameX + frameW * 0.5} y={frameY + frameH + 28} fontSize={11} textAnchor="middle" fill="var(--color-accent)">
              source inside the world — diegetic
            </text>
          </g>
        ) : (
          <g>
            <g transform={`translate(${W * 0.88} ${frameY + frameH * 0.5})`}>
              <circle r={18} fill="var(--color-accent)" opacity={0.6} />
              <text y={4} fontSize={10} textAnchor="middle" fill="var(--color-paper)">♪</text>
            </g>
            <path
              d={`M ${W * 0.86} ${frameY + frameH * 0.5} Q ${frameX + frameW + 30} ${frameY + frameH * 0.6} ${frameX + frameW + 8} ${frameY + frameH * 0.55}`}
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth={1.5}
              strokeDasharray="3 3"
              markerEnd="url(#arr-s)"
            />
            <defs>
              <marker id="arr-s" markerWidth={6} markerHeight={6} refX={5} refY={3} orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="var(--color-accent)" />
              </marker>
            </defs>
            <text x={W * 0.88} y={frameY + frameH + 28} fontSize={11} textAnchor="middle" fill="var(--color-accent)">
              source outside the world — non-diegetic
            </text>
          </g>
        )}
      </Frame>

      <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">
        <strong>{active.label} — {active.category}.</strong> {active.description}
      </p>

      <div className="space-y-2">
        <div className="text-[10px] uppercase tracking-wider text-[var(--color-ink)]/60">Diegetic (from inside the world)</div>
        <div className="flex flex-wrap gap-1">
          {SOUNDS.filter((s) => s.category === 'diegetic').map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`px-2.5 py-1 text-xs border ${
                s.id === activeId
                  ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                  : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
        <div className="text-[10px] uppercase tracking-wider text-[var(--color-ink)]/60 pt-1">Non-diegetic (from outside)</div>
        <div className="flex flex-wrap gap-1">
          {SOUNDS.filter((s) => s.category === 'non-diegetic').map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`px-2.5 py-1 text-xs border ${
                s.id === activeId
                  ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                  : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
