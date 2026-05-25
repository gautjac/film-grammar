import { useState } from 'react'

interface Ratio {
  id: string
  label: string
  w: number
  h: number
  description: string
}

const RATIOS: Ratio[] = [
  { id: '4:3', label: '4:3 (1.33)', w: 4, h: 3, description: 'Academy era / television / Super 8. Square-ish. The classic frame from the silent era through the 1950s and most pre-HD TV.' },
  { id: '16:9', label: '16:9 (1.78)', w: 16, h: 9, description: 'HDTV standard. Most online video, most contemporary television, most documentaries. A useful default.' },
  { id: '2.39:1', label: '2.39:1 — anamorphic', w: 239, h: 100, description: 'Modern cinematic widescreen. Two-shot friendly, isolates verticals (a single face has lots of negative space on either side). Reads as "cinema."' },
  { id: '1:1', label: '1:1 — square', w: 1, h: 1, description: 'Instagram-era. Forces centred composition; no lead room game. Some hybrid art-documentary work uses this.' },
  { id: '9:16', label: '9:16 — vertical', w: 9, h: 16, description: 'Phone-native. Strong vertical emphasis. Eats negative space at the sides; backgrounds barely register. Increasingly common in short-form doc and journalism.' },
]

export function AspectRatioDiagram() {
  const [idx, setIdx] = useState(1)
  const [showThirds, setShowThirds] = useState(true)
  const ratio = RATIOS[idx]

  const containerW = 480
  const containerH = 280
  const aspectRatio = ratio.w / ratio.h
  let frameW = containerW * 0.9
  let frameH = frameW / aspectRatio
  if (frameH > containerH * 0.9) {
    frameH = containerH * 0.9
    frameW = frameH * aspectRatio
  }
  const offsetX = (containerW - frameW) / 2
  const offsetY = (containerH - frameH) / 2

  const subjectCx = offsetX + frameW * (2 / 3)
  const subjectCy = offsetY + frameH * 0.55
  const subjectR = Math.min(frameW, frameH) * 0.18

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-3">
        <svg
          viewBox={`0 0 ${containerW} ${containerH}`}
          style={{ width: '100%', background: '#1a1a1a', border: '1px solid var(--color-rule)' }}
        >
          <rect x={offsetX} y={offsetY} width={frameW} height={frameH} fill="var(--color-paper)" />
          <circle cx={subjectCx - subjectR * 1.6} cy={subjectCy + subjectR * 0.4} r={subjectR * 0.9} fill="#ded8cd" />
          <circle
            cx={subjectCx}
            cy={subjectCy}
            r={subjectR}
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth={1.5}
          />
          <rect
            x={subjectCx - subjectR * 0.8}
            y={subjectCy + subjectR * 0.5}
            width={subjectR * 1.6}
            height={subjectR * 1.5}
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth={1.5}
          />
          {showThirds && (
            <g stroke="var(--color-accent)" strokeDasharray="3 4" strokeWidth={1} opacity={0.7}>
              <line x1={offsetX + frameW / 3} y1={offsetY} x2={offsetX + frameW / 3} y2={offsetY + frameH} />
              <line x1={offsetX + (2 * frameW) / 3} y1={offsetY} x2={offsetX + (2 * frameW) / 3} y2={offsetY + frameH} />
              <line x1={offsetX} y1={offsetY + frameH / 3} x2={offsetX + frameW} y2={offsetY + frameH / 3} />
              <line x1={offsetX} y1={offsetY + (2 * frameH) / 3} x2={offsetX + frameW} y2={offsetY + (2 * frameH) / 3} />
            </g>
          )}
          <rect x={offsetX} y={offsetY} width={frameW} height={frameH} fill="none" stroke="var(--color-paper)" strokeWidth={2} />
        </svg>

        <div className="space-y-2">
          <div className="text-xs uppercase tracking-wider text-[var(--color-ink)]/60">{ratio.label}</div>
          <p className="text-xs text-[var(--color-ink)]/70 leading-relaxed">{ratio.description}</p>
          <label className="flex items-center gap-2 text-xs pt-1 cursor-pointer">
            <input
              type="checkbox"
              checked={showThirds}
              onChange={(e) => setShowThirds(e.target.checked)}
              className="accent-[var(--color-accent)]"
            />
            <span>Rule-of-thirds overlay</span>
          </label>
        </div>
      </div>

      <div className="flex flex-wrap gap-1">
        {RATIOS.map((r, i) => (
          <button
            key={r.id}
            onClick={() => setIdx(i)}
            className={`px-2.5 py-1 text-xs border ${
              i === idx
                ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
            }`}
          >
            {r.id}
          </button>
        ))}
      </div>
    </div>
  )
}
