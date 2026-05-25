/* Compact stand-alone mini-diagrams designed for use as the front of recognize cards.
 * Each is a self-contained SVG, sized for an inline card display.
 */

import { Camera, Subject } from './primitives'

const baseFrame = (w = 320, h = 200) => ({ w, h })

const Wrapper = ({ width = 320, height = 200, children, label }: { width?: number; height?: number; children: React.ReactNode; label?: string }) => (
  <div className="space-y-2">
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{ width: '100%', maxWidth: 420, background: 'var(--color-paper)', border: '1px solid var(--color-rule)' }}
    >
      {children}
    </svg>
    {label && <p className="text-xs text-[var(--color-ink)]/55 italic">{label}</p>}
  </div>
)

// ----- Shot sizes -----

export const MiniCU = () => {
  const { w, h } = baseFrame()
  const cx = w / 2
  const cy = h * 0.5
  const headSize = h * 0.85
  return (
    <Wrapper>
      <circle cx={cx} cy={cy - headSize * 0.05} r={headSize / 2} fill="none" stroke="var(--color-ink)" strokeWidth={1.8} />
      <circle cx={cx + headSize * 0.18} cy={cy - headSize * 0.05} r={4} fill="var(--color-ink)" />
      <circle cx={cx - headSize * 0.18} cy={cy - headSize * 0.05} r={4} fill="var(--color-ink)" />
    </Wrapper>
  )
}

export const MiniMS = () => {
  const { w, h } = baseFrame()
  const cx = w / 2
  const headR = h * 0.18
  return (
    <Wrapper>
      <circle cx={cx} cy={h * 0.32} r={headR} fill="none" stroke="var(--color-ink)" strokeWidth={1.8} />
      <rect x={cx - headR * 1.5} y={h * 0.45} width={headR * 3} height={h * 0.6} fill="none" stroke="var(--color-ink)" strokeWidth={1.8} />
    </Wrapper>
  )
}

export const MiniLS = () => {
  const { w, h } = baseFrame()
  const cx = w / 2
  const headR = h * 0.06
  const ground = h * 0.88
  return (
    <Wrapper>
      <line x1={0} y1={ground} x2={w} y2={ground} stroke="#9a9690" />
      <circle cx={cx} cy={ground - h * 0.4} r={headR} fill="none" stroke="var(--color-ink)" strokeWidth={1.5} />
      <rect x={cx - headR * 1.5} y={ground - h * 0.34} width={headR * 3} height={h * 0.3} fill="none" stroke="var(--color-ink)" strokeWidth={1.5} />
    </Wrapper>
  )
}

// ----- Camera angles -----

export const MiniLowAngle = () => {
  const { w, h } = baseFrame()
  const cx = w / 2
  return (
    <Wrapper>
      <g transform={`translate(${cx} ${h * 0.4})`}>
        <ellipse cx={0} cy={-50} rx={26} ry={11} fill="none" stroke="var(--color-ink)" strokeWidth={1.5} />
        <polygon points="-28,-46 28,-46 32,80 -32,80" fill="none" stroke="var(--color-ink)" strokeWidth={1.5} />
      </g>
      <line x1={20} y1={20} x2={w - 20} y2={6} stroke="#9a9690" strokeDasharray="2 3" />
      <text x={w / 2} y={18} fontSize={9} textAnchor="middle" fill="#9a9690">ceiling visible</text>
    </Wrapper>
  )
}

export const MiniHighAngle = () => {
  const { w, h } = baseFrame()
  const cx = w / 2
  return (
    <Wrapper>
      <g transform={`translate(${cx} ${h * 0.45})`}>
        <circle cx={0} cy={-26} r={22} fill="none" stroke="var(--color-ink)" strokeWidth={1.5} />
        <polygon points="-14,-10 14,-10 12,34 -12,34" fill="none" stroke="var(--color-ink)" strokeWidth={1.5} />
        <ellipse cx={0} cy={46} rx={50} ry={6} fill="#ded8cd" />
      </g>
      <text x={w / 2} y={h - 12} fontSize={9} textAnchor="middle" fill="#9a9690">floor visible</text>
    </Wrapper>
  )
}

export const MiniDutch = () => {
  const { w, h } = baseFrame()
  const cx = w / 2
  return (
    <Wrapper>
      <g transform={`translate(${cx} ${h / 2}) rotate(-14)`}>
        <circle cx={0} cy={-30} r={20} fill="none" stroke="var(--color-ink)" strokeWidth={1.5} />
        <rect x={-22} y={-10} width={44} height={68} fill="none" stroke="var(--color-ink)" strokeWidth={1.5} />
      </g>
      <line x1={10} y1={h * 0.55 + 18} x2={w - 10} y2={h * 0.55 - 18} stroke="var(--color-accent)" strokeDasharray="3 3" />
    </Wrapper>
  )
}

// ----- Lighting -----

export const MiniRembrandt = () => {
  const { w, h } = baseFrame()
  const cx = w / 2
  const cy = h / 2
  const r = 50
  return (
    <Wrapper>
      <circle cx={cx} cy={cy} r={r} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.5} />
      <path
        d={`M ${cx} ${cy - r} A ${r} ${r} 0 0 0 ${cx} ${cy + r} Z`}
        fill="var(--color-ink)"
        opacity={0.45}
      />
      <path
        d={`M ${cx - 8} ${cy - 8} L ${cx + 8} ${cy - 12} L ${cx + 4} ${cy + 10} Z`}
        fill="var(--color-paper)"
        opacity={0.95}
      />
      <circle cx={cx - 90} cy={cy - 80} r={8} fill="var(--color-accent)" />
    </Wrapper>
  )
}

export const MiniSilhouette = () => {
  const { w, h } = baseFrame()
  const cx = w / 2
  return (
    <Wrapper>
      <defs>
        <radialGradient id="silh-glow" cx="50%" cy="100%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity={0.4} />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity={0} />
        </radialGradient>
      </defs>
      <rect x={0} y={0} width={w} height={h} fill="url(#silh-glow)" />
      <g transform={`translate(${cx} ${h * 0.45})`}>
        <circle cx={0} cy={0} r={26} fill="var(--color-ink)" />
        <rect x={-22} y={20} width={44} height={70} fill="var(--color-ink)" />
      </g>
    </Wrapper>
  )
}

// ----- Bokeh shapes -----

export const MiniHexBokeh = () => {
  const { w, h } = baseFrame()
  return (
    <Wrapper>
      <rect x={0} y={0} width={w} height={h} fill="#2a2a2a" />
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const bx = 50 + (i % 3) * 90 + (Math.floor(i / 3) % 2) * 30
        const by = 50 + Math.floor(i / 3) * 70
        const r = 22
        return (
          <polygon
            key={i}
            points={`${bx},${by - r} ${bx + r * 0.87},${by - r / 2} ${bx + r * 0.87},${by + r / 2} ${bx},${by + r} ${bx - r * 0.87},${by + r / 2} ${bx - r * 0.87},${by - r / 2}`}
            fill="#fff2c0"
            opacity={0.55}
          />
        )
      })}
    </Wrapper>
  )
}

export const MiniAnamorphic = () => {
  const { w, h } = baseFrame()
  const cx = w / 2
  const cy = h / 2
  return (
    <Wrapper>
      <rect x={0} y={0} width={w} height={h} fill="#1a1a1a" />
      <line x1={0} y1={cy - 10} x2={w} y2={cy - 10} stroke="#88a8e8" strokeWidth={2} opacity={0.55} />
      <line x1={0} y1={cy - 10} x2={w} y2={cy - 10} stroke="#cce4ff" strokeWidth={0.8} opacity={0.95} />
      <circle cx={cx + 80} cy={cy - 10} r={12} fill="#88a8e8" opacity={0.75} />
      <circle cx={cx - 40} cy={cy + 40} r={8} fill="#88a8e8" opacity={0.45} />
    </Wrapper>
  )
}

// ----- Doc strategy -----

export const MiniInterrotron = () => {
  const { w, h } = baseFrame()
  return (
    <Wrapper>
      <Subject x={w * 0.3} y={h * 0.65} facing={0} label="" />
      <line x1={w * 0.34} y1={h * 0.5} x2={w * 0.7} y2={h * 0.5} stroke="var(--color-accent)" strokeWidth={2} />
      <rect x={w * 0.66} y={h * 0.35} width={6} height={36} fill="#88a8c4" stroke="var(--color-ink)" strokeWidth={0.8} opacity={0.75} transform={`rotate(45 ${w * 0.69} ${h * 0.53})`} />
      <Camera x={w * 0.78} y={h * 0.5} rotation={180} />
      <rect x={w * 0.62} y={h * 0.78} width={w * 0.14} height={h * 0.15} fill="#3a3a3a" stroke="var(--color-ink)" strokeWidth={0.8} />
      <circle cx={w * 0.69} cy={h * 0.85} r={8} fill="#e0c8a8" />
    </Wrapper>
  )
}

// ----- 180° line crossing -----

export const MiniLineCrossing = () => {
  const { w, h } = baseFrame(320, 220)
  return (
    <Wrapper>
      <line x1={0} y1={h / 2} x2={w} y2={h / 2} stroke="#9a9690" strokeDasharray="3 4" />
      <Subject x={w * 0.25} y={h * 0.5} facing={90} />
      <Subject x={w * 0.75} y={h * 0.5} facing={-90} />
      <Camera x={w * 0.5} y={h * 0.12} rotation={90} />
      <text x={w / 2} y={h * 0.05} fontSize={10} textAnchor="middle" fill="var(--color-accent)">camera position?</text>
    </Wrapper>
  )
}
