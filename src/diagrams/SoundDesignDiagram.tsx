import { useState } from 'react'

type LayerId = 'dialogue' | 'foley' | 'ambience' | 'sfx' | 'score' | 'silence'

interface LayerDef {
  id: LayerId
  name: string
  short: string
  description: string
  color: string
  // pattern: an array of cells where each value is a relative amplitude 0..1
  pattern: number[]
}

const LAYERS: LayerDef[] = [
  { id: 'dialogue', name: 'Dialogue', short: 'DX', color: 'var(--color-ink)', description: 'The performer\'s spoken voice. Usually production sound (boom + lav) sometimes ADR\'d (replaced in post). Almost always the loudest and most prominent layer; everything else is mixed around it.', pattern: [0.2, 0.7, 0.85, 0.65, 0.8, 0.9, 0.7, 0.4, 0.6, 0.85, 0.75, 0.5, 0.35, 0.7, 0.85, 0.6] },
  { id: 'foley', name: 'Foley', short: 'FY', color: '#7a5a3a', description: 'Sounds performed in a studio to match what the camera saw — footsteps, cloth movement, prop interactions. Recorded in a foley pit by a foley artist watching the cut. Layered under the picture as if it had always been there.', pattern: [0.15, 0.4, 0.25, 0.5, 0.3, 0.45, 0.2, 0.35, 0.45, 0.3, 0.5, 0.35, 0.25, 0.4, 0.3, 0.5] },
  { id: 'ambience', name: 'Ambience / atmos', short: 'AMB', color: '#5a7a8a', description: 'The continuous background of a location — traffic, wind, HVAC, distant voices, birds. Recorded on set as room tone or sourced from libraries. Holds the scene\'s spatial identity. Without it, every cut pops.', pattern: [0.25, 0.22, 0.28, 0.24, 0.26, 0.23, 0.27, 0.25, 0.24, 0.28, 0.23, 0.26, 0.25, 0.27, 0.24, 0.26] },
  { id: 'sfx', name: 'Designed SFX', short: 'SFX', color: 'var(--color-accent)', description: 'Specific designed sounds — explosions, gunshots, doors, swooshes, drones, transitions. Constructed in software (often from layered field recordings). What separates a budget mix from a feature mix is how much SFX work was done.', pattern: [0, 0, 0.85, 0, 0, 0, 0, 0.7, 0, 0, 0, 0.9, 0, 0, 0, 0.4] },
  { id: 'score', name: 'Score / music', short: 'MX', color: '#8a4a7a', description: 'Composed music written to picture (or temp-tracked then replaced). Non-diegetic — exists outside the world. Source music (a song playing in a scene) is technically diegetic and lives in a different rule space.', pattern: [0.4, 0.45, 0.5, 0.55, 0.6, 0.55, 0.5, 0.55, 0.6, 0.65, 0.7, 0.65, 0.6, 0.55, 0.5, 0.55] },
  { id: 'silence', name: 'Silence', short: 'SIL', color: 'transparent', description: 'The deliberate absence of layers. A scene that mutes its score, drops to room tone only, or cuts to pure black-silence between beats. Used as a tool, not an oversight. The most underused layer in mainstream mixing.', pattern: [] },
]

const W = 520
const H = 280
const tracksY = 50
const trackH = 26
const trackGap = 6
const labelW = 40
const playheadX = W * 0.6

export function SoundDesignDiagram() {
  const [enabled, setEnabled] = useState<Record<LayerId, boolean>>({
    dialogue: true,
    foley: true,
    ambience: true,
    sfx: true,
    score: true,
    silence: false,
  })
  const [focused, setFocused] = useState<LayerId>('dialogue')

  const toggle = (id: LayerId) => setEnabled((s) => ({ ...s, [id]: !s[id] }))

  const visibleLayers = LAYERS.filter((l) => l.id !== 'silence' && enabled[l.id])
  const cellW = (W - labelW - 16) / 16

  return (
    <div className="space-y-3">
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}>
        <text x={12} y={20} fontSize={11} fill="#9a9690">mix timeline · {visibleLayers.length} layers active</text>
        {/* time markers */}
        <line x1={labelW + 8} y1={30} x2={W - 8} y2={30} stroke="#9a9690" strokeWidth={0.5} />
        {[0, 4, 8, 12, 16].map((i) => (
          <g key={i}>
            <line
              x1={labelW + 8 + i * cellW}
              y1={28}
              x2={labelW + 8 + i * cellW}
              y2={32}
              stroke="#9a9690"
            />
          </g>
        ))}

        {/* playhead */}
        {enabled.silence ? null : (
          <line x1={playheadX} y1={tracksY - 8} x2={playheadX} y2={tracksY + visibleLayers.length * (trackH + trackGap)} stroke="var(--color-accent)" strokeWidth={1} strokeDasharray="3 3" opacity={0.5} />
        )}

        {visibleLayers.map((layer, idx) => {
          const y = tracksY + idx * (trackH + trackGap)
          return (
            <g key={layer.id}>
              <text x={labelW} y={y + trackH * 0.65} fontSize={10} textAnchor="end" fill={layer.color === 'var(--color-ink)' ? 'var(--color-ink)' : layer.color} fontWeight={500}>
                {layer.short}
              </text>
              {/* track baseline */}
              <line x1={labelW + 8} y1={y + trackH / 2} x2={W - 8} y2={y + trackH / 2} stroke="#d4d0c4" strokeWidth={0.5} />
              {layer.pattern.map((amp, i) => {
                if (amp === 0) return null
                const x = labelW + 8 + i * cellW
                const h = Math.max(2, amp * trackH * 0.9)
                return (
                  <rect
                    key={i}
                    x={x + 0.5}
                    y={y + (trackH - h) / 2}
                    width={cellW - 2}
                    height={h}
                    fill={layer.color}
                    opacity={0.85}
                  />
                )
              })}
            </g>
          )
        })}

        {enabled.silence && visibleLayers.length === 0 && (
          <text x={W / 2} y={H * 0.55} fontSize={14} textAnchor="middle" fill="var(--color-ink)/40" fontStyle="italic">
            — silence —
          </text>
        )}
      </svg>

      <div className="space-y-2">
        <div className="text-xs uppercase tracking-[0.14em] text-[var(--color-ink)]/60">
          {LAYERS.find((l) => l.id === focused)?.name}
        </div>
        <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">
          {LAYERS.find((l) => l.id === focused)?.description}
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-[10px] uppercase tracking-wider text-[var(--color-ink)]/55">
          Toggle layers · click name to read
        </p>
        <div className="flex flex-wrap gap-1">
          {LAYERS.map((l) => {
            const isSilence = l.id === 'silence'
            return (
              <div key={l.id} className="flex">
                <button
                  onClick={() => {
                    if (isSilence) {
                      // silence is a special mode: enable it means mute everything else
                      const turningOn = !enabled.silence
                      setEnabled({
                        dialogue: !turningOn,
                        foley: !turningOn,
                        ambience: !turningOn,
                        sfx: !turningOn,
                        score: !turningOn,
                        silence: turningOn,
                      })
                    } else {
                      toggle(l.id)
                    }
                  }}
                  aria-pressed={enabled[l.id]}
                  className={`px-2 py-1 text-xs border-y border-l ${
                    enabled[l.id]
                      ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                      : 'border-[var(--color-rule)] text-[var(--color-ink)]/40'
                  }`}
                >
                  {enabled[l.id] ? '●' : '○'}
                </button>
                <button
                  onClick={() => setFocused(l.id)}
                  className={`px-2 py-1 text-xs border ${
                    focused === l.id
                      ? 'bg-[var(--color-ink)]/10 border-[var(--color-ink)]'
                      : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
                  }`}
                >
                  {l.name}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
