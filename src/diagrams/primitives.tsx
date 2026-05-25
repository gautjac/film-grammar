import type { ReactNode } from 'react'

export const STROKE = 'var(--color-ink)'
export const ACCENT = 'var(--color-accent)'
export const MUTED = '#9a9690'

interface FrameProps {
  width?: number
  height?: number
  children: ReactNode
  className?: string
  viewBox?: string
}

export function Frame({
  width = 640,
  height = 360,
  viewBox,
  className,
  children,
}: FrameProps) {
  return (
    <svg
      viewBox={viewBox ?? `0 0 ${width} ${height}`}
      className={className}
      style={{
        width: '100%',
        height: 'auto',
        background: 'var(--color-paper)',
        border: `1px solid var(--color-rule)`,
      }}
    >
      {children}
    </svg>
  )
}

interface CameraProps {
  x: number
  y: number
  rotation?: number
  size?: number
  label?: string
  opacity?: number
}

export function Camera({ x, y, rotation = 0, size = 28, label, opacity = 1 }: CameraProps) {
  const w = size
  const h = size * 0.6
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotation})`} opacity={opacity}>
      <rect
        x={-w / 2}
        y={-h / 2}
        width={w}
        height={h}
        fill="var(--color-ink)"
        stroke={STROKE}
        strokeWidth={1}
      />
      <polygon
        points={`${w / 2},${-h / 4} ${w / 2 + h * 0.4},${-h / 2} ${w / 2 + h * 0.4},${h / 2} ${w / 2},${h / 4}`}
        fill="var(--color-ink)"
      />
      {label && (
        <text
          x={0}
          y={h / 2 + 14}
          fontSize={11}
          textAnchor="middle"
          fill={STROKE}
          transform={`rotate(${-rotation})`}
        >
          {label}
        </text>
      )}
    </g>
  )
}

interface SubjectProps {
  x: number
  y: number
  scale?: number
  facing?: number
  label?: string
}

export function Subject({ x, y, scale = 1, facing = 0, label }: SubjectProps) {
  const r = 10 * scale
  const bodyW = 22 * scale
  const bodyH = 36 * scale
  return (
    <g transform={`translate(${x} ${y})`}>
      <g transform={`rotate(${facing})`}>
        <circle cx={0} cy={-bodyH / 2} r={r} fill="none" stroke={STROKE} strokeWidth={1.5} />
        <path
          d={`M ${-bodyW / 2} ${-bodyH / 2 + r * 0.8}
              Q 0 ${-bodyH / 2 + r * 1.2} ${bodyW / 2} ${-bodyH / 2 + r * 0.8}
              L ${bodyW / 2} ${bodyH / 2}
              L ${-bodyW / 2} ${bodyH / 2} Z`}
          fill="none"
          stroke={STROKE}
          strokeWidth={1.5}
        />
        <circle cx={r * 0.35} cy={-bodyH / 2} r={1.2} fill={STROKE} />
      </g>
      {label && (
        <text x={0} y={bodyH / 2 + 16} fontSize={11} textAnchor="middle" fill={STROKE}>
          {label}
        </text>
      )}
    </g>
  )
}

interface FocalConeProps {
  x: number
  y: number
  rotation?: number
  reach?: number
  spread?: number
  color?: string
  opacity?: number
}

export function FocalCone({
  x,
  y,
  rotation = 0,
  reach = 180,
  spread = 30,
  color = ACCENT,
  opacity = 0.12,
}: FocalConeProps) {
  const half = spread / 2
  const rad = (deg: number) => (deg * Math.PI) / 180
  const x1 = Math.cos(rad(-half)) * reach
  const y1 = Math.sin(rad(-half)) * reach
  const x2 = Math.cos(rad(half)) * reach
  const y2 = Math.sin(rad(half)) * reach
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotation})`}>
      <polygon points={`0,0 ${x1},${y1} ${x2},${y2}`} fill={color} opacity={opacity} />
      <line x1={0} y1={0} x2={x1} y2={y1} stroke={color} strokeDasharray="3 3" strokeWidth={1} />
      <line x1={0} y1={0} x2={x2} y2={y2} stroke={color} strokeDasharray="3 3" strokeWidth={1} />
    </g>
  )
}

interface EyelineProps {
  from: [number, number]
  to: [number, number]
  label?: string
  dashed?: boolean
}

export function Eyeline({ from, to, label, dashed = true }: EyelineProps) {
  const [x1, y1] = from
  const [x2, y2] = to
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={ACCENT}
        strokeWidth={1.5}
        strokeDasharray={dashed ? '4 4' : undefined}
      />
      {label && (
        <text x={mx} y={my - 6} fontSize={11} textAnchor="middle" fill={ACCENT}>
          {label}
        </text>
      )}
    </g>
  )
}

interface FrameBoxProps {
  x: number
  y: number
  width: number
  height: number
  label?: string
  highlight?: boolean
}

export function FrameBox({ x, y, width, height, label, highlight }: FrameBoxProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="none"
        stroke={highlight ? ACCENT : STROKE}
        strokeWidth={highlight ? 2 : 1}
      />
      {label && (
        <text x={x + 6} y={y + 14} fontSize={11} fill={highlight ? ACCENT : STROKE}>
          {label}
        </text>
      )}
    </g>
  )
}

interface AxisProps {
  from: [number, number]
  to: [number, number]
  label?: string
  color?: string
}

export function Axis({ from, to, label, color = MUTED }: AxisProps) {
  const [x1, y1] = from
  const [x2, y2] = to
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={1}
        strokeDasharray="2 4"
      />
      {label && (
        <text x={x2 + 6} y={y2 + 4} fontSize={10} fill={color}>
          {label}
        </text>
      )}
    </g>
  )
}
