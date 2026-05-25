import { useState } from 'react'

interface Source {
  k: number
  label: string
  description: string
}

const SOURCES: Source[] = [
  { k: 1800, label: 'Candle', description: 'Deep orange. Pre-electric light. Used in fiction for intimacy, night interiors, period drama.' },
  { k: 2700, label: 'Tungsten', description: 'Warm yellow-orange. Household incandescent bulbs and traditional film lights. The "indoors" colour.' },
  { k: 3200, label: 'Tungsten film light', description: 'Standard warm cinema light. Slightly cooler than household tungsten. The reference point for indoor sync sound.' },
  { k: 4300, label: 'Fluorescent / overcast street', description: 'Neutral-to-slightly-green. Office lighting, gymnasiums, hospitals. The colour of bureaucratic interiors and convenience stores.' },
  { k: 5600, label: 'Daylight', description: 'Neutral white. The reference point for outdoor sync sound. HMI lights and most LED panels target this.' },
  { k: 7500, label: 'Overcast / open shade', description: 'Cool blue. Light from the sky without the sun. The look of cloudy days, snow scenes, melancholy outdoor moods.' },
  { k: 10000, label: 'Deep shade / blue hour', description: 'Saturated blue. Twilight after sunset, deep shadows. Reads as cold, twilight, otherworldly.' },
]

// Approximate Kelvin → RGB lookup. Standard cinematographic mapping.
function kelvinToRgb(k: number): [number, number, number] {
  const temp = k / 100
  let r: number, g: number, b: number

  if (temp <= 66) {
    r = 255
    g = Math.min(255, Math.max(0, 99.4708 * Math.log(temp) - 161.12))
    if (temp <= 19) b = 0
    else b = Math.min(255, Math.max(0, 138.518 * Math.log(temp - 10) - 305.0448))
  } else {
    r = Math.min(255, Math.max(0, 329.6987 * Math.pow(temp - 60, -0.1332)))
    g = Math.min(255, Math.max(0, 288.122 * Math.pow(temp - 60, -0.0755)))
    b = 255
  }

  return [Math.round(r), Math.round(g), Math.round(b)]
}

const rgbStr = (rgb: [number, number, number], alpha = 1) =>
  `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`

export function ColorTemperatureDiagram() {
  const [idx, setIdx] = useState(4)
  const source = SOURCES[idx]
  const tint = kelvinToRgb(source.k)
  const sceneTint = kelvinToRgb(source.k)

  const W = 480
  const H = 240

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-3">
        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', background: '#1a1a1a', border: '1px solid var(--color-rule)' }}>
          <defs>
            <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={rgbStr(sceneTint, 0.6)} />
              <stop offset="100%" stopColor={rgbStr(sceneTint, 0.85)} />
            </linearGradient>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={rgbStr(sceneTint, 0.5)} />
              <stop offset="100%" stopColor={rgbStr(sceneTint, 0.2)} />
            </linearGradient>
          </defs>
          {/* sky */}
          <rect x={0} y={0} width={W} height={H * 0.6} fill="url(#sky)" />
          {/* ground */}
          <rect x={0} y={H * 0.6} width={W} height={H * 0.4} fill="url(#ground)" />
          {/* subject silhouette */}
          <g>
            <circle cx={W * 0.5} cy={H * 0.55} r={18} fill={rgbStr(tint, 0.95)} stroke="#000" strokeWidth={1} />
            <rect x={W * 0.5 - 14} y={H * 0.6} width={28} height={42} fill={rgbStr(tint, 0.95)} stroke="#000" strokeWidth={1} />
          </g>
          {/* light source marker */}
          <circle cx={W * 0.85} cy={H * 0.2} r={18} fill={rgbStr(tint, 1)} stroke="#000" strokeWidth={1} opacity={0.85} />
          <text x={W * 0.85} y={H * 0.18} fontSize={10} textAnchor="middle" fill="#000" fontWeight={600}>
            {source.k}K
          </text>
        </svg>

        <div className="space-y-2">
          <div className="text-xs uppercase tracking-[0.14em] text-[var(--color-ink)]/60">{source.k}K · {source.label}</div>
          <p className="text-xs sm:text-sm text-[var(--color-ink)]/75 leading-relaxed">{source.description}</p>
          <div className="flex items-center gap-2 pt-1">
            <span className="text-[10px] uppercase tracking-wider text-[var(--color-ink)]/50">colour</span>
            <span
              className="inline-block w-8 h-4 border border-[var(--color-rule)]/40"
              style={{ background: rgbStr(tint, 1) }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <input
          type="range"
          min={0}
          max={SOURCES.length - 1}
          value={idx}
          onChange={(e) => setIdx(Number(e.target.value))}
          className="w-full accent-[var(--color-accent)]"
        />
        <div className="flex justify-between text-[10px] uppercase tracking-wider text-[var(--color-ink)]/55">
          <span>warm 1800K</span>
          <span>5600K daylight</span>
          <span>cool 10000K</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1">
        {SOURCES.map((s, i) => (
          <button
            key={s.k}
            onClick={() => setIdx(i)}
            className={`px-2.5 py-1 text-xs border ${
              i === idx
                ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
            }`}
          >
            {s.k}K
          </button>
        ))}
      </div>
    </div>
  )
}
