import { useState } from 'react'

type Scheme = 'mono' | 'analogous' | 'complementary' | 'split' | 'triadic' | 'tetradic'

interface SchemeDef {
  id: Scheme
  name: string
  description: string
  activeFor: (hue: number, segmentHue: number) => boolean
}

const SEG = 12
const SEG_SPAN = 360 / SEG

const norm = (h: number) => ((h % 360) + 360) % 360
const within = (h: number, target: number, span = SEG_SPAN / 2) => {
  const diff = Math.abs(norm(h - target))
  const minDiff = Math.min(diff, 360 - diff)
  return minDiff < span
}

const SCHEMES: SchemeDef[] = [
  {
    id: 'mono',
    name: 'Monochromatic',
    description: 'A single hue with variation in saturation and value only. Reads as unified, calm, sometimes claustrophobic. Used in fiction for psychological compression, in documentary for tonal restraint.',
    activeFor: (h, seg) => within(seg, h),
  },
  {
    id: 'analogous',
    name: 'Analogous',
    description: 'Three to five adjacent hues on the wheel. Harmonious, natural — the colour scheme of forest, beach, sunset. Reads as cohesive without being monotone.',
    activeFor: (h, seg) => within(seg, h) || within(seg, h - SEG_SPAN) || within(seg, h + SEG_SPAN),
  },
  {
    id: 'complementary',
    name: 'Complementary',
    description: 'Two hues directly opposite on the wheel. Maximum contrast — orange and teal, red and green, yellow and violet. The signature of mainstream cinema grading.',
    activeFor: (h, seg) => within(seg, h) || within(seg, h + 180),
  },
  {
    id: 'split',
    name: 'Split complementary',
    description: 'One hue plus the two hues adjacent to its complement. Softer than direct complementary — gives contrast without the visual collision.',
    activeFor: (h, seg) => within(seg, h) || within(seg, h + 180 - SEG_SPAN) || within(seg, h + 180 + SEG_SPAN),
  },
  {
    id: 'triadic',
    name: 'Triadic',
    description: 'Three hues evenly spaced 120° apart. Vibrant, balanced, often used in animation and stylised cinema. Pixar and Wes Anderson lean here.',
    activeFor: (h, seg) => within(seg, h) || within(seg, h + 120) || within(seg, h + 240),
  },
  {
    id: 'tetradic',
    name: 'Tetradic',
    description: 'Two complementary pairs — four hues forming a rectangle on the wheel. Rich and complex; demands one dominant hue and three supports, or the frame fragments.',
    activeFor: (h, seg) => within(seg, h) || within(seg, h + 90) || within(seg, h + 180) || within(seg, h + 270),
  },
]

const HUE_NAMES: Record<number, string> = {
  0: 'red',
  30: 'orange',
  60: 'yellow',
  90: 'chartreuse',
  120: 'green',
  150: 'teal',
  180: 'cyan',
  210: 'azure',
  240: 'blue',
  270: 'violet',
  300: 'magenta',
  330: 'rose',
}

export function ColorWheelDiagram() {
  const [scheme, setScheme] = useState<Scheme>('complementary')
  const [baseHue, setBaseHue] = useState(0)
  const active = SCHEMES.find((s) => s.id === scheme)!

  const W = 320
  const H = 320
  const cx = W / 2
  const cy = H / 2
  const rOuter = 130
  const rInner = 70

  const polar = (deg: number, r: number) => {
    const rad = ((deg - 90) * Math.PI) / 180
    return [cx + Math.cos(rad) * r, cy + Math.sin(rad) * r] as const
  }

  const segPath = (i: number) => {
    const startAng = i * SEG_SPAN - SEG_SPAN / 2
    const endAng = startAng + SEG_SPAN
    const [x1, y1] = polar(startAng, rOuter)
    const [x2, y2] = polar(endAng, rOuter)
    const [x3, y3] = polar(endAng, rInner)
    const [x4, y4] = polar(startAng, rInner)
    const large = SEG_SPAN > 180 ? 1 : 0
    return `M ${x1} ${y1} A ${rOuter} ${rOuter} 0 ${large} 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 ${large} 0 ${x4} ${y4} Z`
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-4">
        <div className="flex justify-center">
          <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: 360, background: 'var(--color-paper)' }}>
            {Array.from({ length: SEG }, (_, i) => {
              const segHue = i * SEG_SPAN
              const isActive = active.activeFor(baseHue, segHue)
              const fill = `oklch(72% ${isActive ? 0.2 : 0.05} ${segHue})`
              return (
                <path
                  key={i}
                  d={segPath(i)}
                  fill={fill}
                  stroke="var(--color-paper)"
                  strokeWidth={2}
                  onClick={() => setBaseHue(segHue)}
                  style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                />
              )
            })}
            <circle cx={cx} cy={cy} r={rInner - 2} fill="var(--color-paper)" />
            <text x={cx} y={cy - 6} fontSize={12} textAnchor="middle" fill="var(--color-ink)">
              base hue
            </text>
            <text x={cx} y={cy + 12} fontSize={14} textAnchor="middle" fill="var(--color-ink)" fontWeight={600}>
              {HUE_NAMES[baseHue] ?? `${baseHue}°`}
            </text>
            {/* Active hue arrows */}
            {Array.from({ length: SEG }, (_, i) => {
              const segHue = i * SEG_SPAN
              if (!active.activeFor(baseHue, segHue)) return null
              const [tx, ty] = polar(segHue, rInner - 6)
              const [sx, sy] = polar(segHue, rInner - 16)
              return (
                <g key={`mark-${i}`}>
                  <circle cx={tx} cy={ty} r={3} fill="var(--color-ink)" />
                  <line x1={sx} y1={sy} x2={tx} y2={ty} stroke="var(--color-ink)" strokeWidth={1.5} />
                </g>
              )
            })}
          </svg>
        </div>

        <div className="space-y-2">
          <div className="text-xs uppercase tracking-[0.14em] text-[var(--color-ink)]/60">{active.name}</div>
          <p className="text-xs sm:text-sm text-[var(--color-ink)]/75 leading-relaxed">{active.description}</p>
          <p className="text-xs text-[var(--color-ink)]/50 pt-1">Tap a segment to set the base hue.</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1">
        {SCHEMES.map((s) => (
          <button
            key={s.id}
            onClick={() => setScheme(s.id)}
            className={`px-2.5 py-1 text-xs border ${
              s.id === scheme
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
