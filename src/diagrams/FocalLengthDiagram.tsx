import { useState } from 'react'
import { Frame, Camera } from './primitives'

interface Lens {
  mm: number
  label: string
  description: string
  fov: number
}

const LENSES: Lens[] = [
  { mm: 14, label: '14mm — Ultra-wide', fov: 104, description: 'Extreme perspective. Edges distort. Background pushed far away. Used for environmental immersion or visual style.' },
  { mm: 24, label: '24mm — Wide', fov: 73, description: 'Wide angle. Roomy backgrounds, slight distortion at edges. Common for landscapes and wide masters.' },
  { mm: 35, label: '35mm — Wide-normal', fov: 54, description: 'A documentary workhorse. Close to natural human peripheral vision. Versatile, unobtrusive.' },
  { mm: 50, label: '50mm — Normal', fov: 40, description: 'Closest to the eye\'s natural perspective. Neutral compression. The "no opinion" lens.' },
  { mm: 85, label: '85mm — Short telephoto', fov: 24, description: 'Classic portrait lens. Pleasing facial proportions, modest background compression.' },
  { mm: 135, label: '135mm — Telephoto', fov: 15, description: 'Compressed perspective. Background pulled forward, subject isolated. Common for cinematic close-ups.' },
  { mm: 200, label: '200mm — Long lens', fov: 10, description: 'Strong compression. Background looms huge behind subject. Used for documentary distance or dramatic compression.' },
]

export function FocalLengthDiagram() {
  const [idx, setIdx] = useState(3)
  const lens = LENSES[idx]
  const W = 520
  const H = 320

  const subjectX = W * 0.5
  const subjectY = H * 0.55
  const subjectR = 22

  const baselineFov = 40
  const cameraDistance = (subjectR * 2) / Math.tan((lens.fov * Math.PI) / 360)
  const camX = subjectX
  const camY = Math.min(subjectY + cameraDistance, H - 30)
  const compressionFactor = baselineFov / lens.fov
  const bgR = 50 + 60 * Math.min(2, compressionFactor)
  const bgY = subjectY - 60

  const fovRad = (lens.fov * Math.PI) / 180
  const halfH = Math.tan(fovRad / 2) * (camY - 30)
  const fovPts = `${camX},${camY} ${camX - halfH},30 ${camX + halfH},30`

  const previewW = 220
  const previewH = 140

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-3">
        <Frame viewBox={`0 0 ${W} ${H}`}>
          <text x={12} y={20} fontSize={11} fill="#9a9690">side view</text>
          <polygon points={fovPts} fill="var(--color-accent)" opacity={0.08} />
          <circle cx={subjectX} cy={bgY} r={bgR} fill="#ded8cd" stroke="var(--color-ink)" strokeWidth={1} opacity={0.85} />
          <text x={subjectX + bgR + 6} y={bgY} fontSize={10} fill="var(--color-ink)/60">background</text>
          <circle cx={subjectX} cy={subjectY} r={subjectR} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.5} />
          <text x={subjectX + subjectR + 6} y={subjectY + 4} fontSize={10} fill="var(--color-ink)">subject</text>
          <Camera x={camX} y={camY} rotation={-90} label={`${lens.mm}mm · ${lens.fov}° FOV`} />
        </Frame>

        <div className="space-y-2">
          <div className="text-xs uppercase tracking-wider text-[var(--color-ink)]/60">Resulting frame</div>
          <svg
            viewBox={`0 0 ${previewW} ${previewH}`}
            style={{ width: '100%', background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}
          >
            <circle
              cx={previewW * 0.5}
              cy={previewH * 0.42}
              r={Math.min(previewH * 0.85, 30 + 14 * compressionFactor)}
              fill="#ded8cd"
              stroke="var(--color-ink)"
              strokeWidth={1}
            />
            <circle
              cx={previewW * 0.5}
              cy={previewH * 0.62}
              r={previewH * 0.22}
              fill="var(--color-paper)"
              stroke="var(--color-ink)"
              strokeWidth={1.5}
            />
            <rect x={1} y={1} width={previewW - 2} height={previewH - 2} fill="none" stroke="var(--color-accent)" strokeWidth={2} />
          </svg>
          <p className="text-xs text-[var(--color-ink)]/70 leading-relaxed">{lens.description}</p>
        </div>
      </div>

      <div className="space-y-1">
        <input
          type="range"
          min={0}
          max={LENSES.length - 1}
          value={idx}
          onChange={(e) => setIdx(Number(e.target.value))}
          className="w-full accent-[var(--color-accent)]"
        />
        <div className="flex justify-between text-[10px] uppercase tracking-wider text-[var(--color-ink)]/60">
          {LENSES.map((l, i) => (
            <button
              key={l.mm}
              onClick={() => setIdx(i)}
              className={`px-1 ${i === idx ? 'text-[var(--color-accent)] font-bold' : 'hover:text-[var(--color-ink)]'}`}
            >
              {l.mm}
            </button>
          ))}
        </div>
        <p className="text-sm pt-2">{lens.label}</p>
      </div>
    </div>
  )
}
