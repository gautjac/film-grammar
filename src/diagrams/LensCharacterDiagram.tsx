import { useState } from 'react'

type LensId = 'modern-clean' | 'anamorphic' | 'vintage' | 'cheap-zoom' | 'soft' | 'macro'

interface LensProfile {
  id: LensId
  name: string
  description: string
  contrast: number
  flareHorizontal: boolean
  flareVertical: boolean
  flareColor: string
  bokehShape: 'circle' | 'oval' | 'hexagon' | 'octagon' | 'soft-circle'
  distortion: 'none' | 'barrel' | 'subtle' | 'mustache'
  breathing: number // 0..1
  era: string
}

const LENSES: LensProfile[] = [
  {
    id: 'modern-clean',
    name: 'Modern spherical prime',
    description: 'Contemporary cinema standard. Optimised for sharpness and contrast at all apertures. Bokeh is round; flare is minimal and neutral; minimal distortion; almost no focus breathing. The "transparent" lens. Master Primes, Cooke S7/i.',
    contrast: 1,
    flareHorizontal: false,
    flareVertical: false,
    flareColor: '#fff8e0',
    bokehShape: 'circle',
    distortion: 'none',
    breathing: 0.05,
    era: '2010s–present',
  },
  {
    id: 'anamorphic',
    name: 'Anamorphic',
    description: 'Squeezes a 2.39:1 image onto a 1.78:1 sensor via an aspherical front element. Signatures: horizontal blue flares, oval bokeh, slight edge stretch on close-ups. The "cinematic" look — instantly tells the audience this is cinema.',
    contrast: 0.9,
    flareHorizontal: true,
    flareVertical: false,
    flareColor: '#88a8e8',
    bokehShape: 'oval',
    distortion: 'subtle',
    breathing: 0.15,
    era: '1953–present',
  },
  {
    id: 'vintage',
    name: 'Vintage / uncoated',
    description: 'Older glass, fewer or no anti-reflective coatings. Lower contrast, milky highlights, organic blooming flares. Bokeh often hexagonal (older mechanical irises). Hand-held by Lubezki, the Coens\' DPs, much of the current "warm cinema" look. Cooke Speed Panchros, Canon K35s.',
    contrast: 0.7,
    flareHorizontal: false,
    flareVertical: false,
    flareColor: '#f4d878',
    bokehShape: 'hexagon',
    distortion: 'subtle',
    breathing: 0.25,
    era: '1960s–80s',
  },
  {
    id: 'cheap-zoom',
    name: 'Cheap zoom / kit lens',
    description: 'Mass-market consumer or low-end broadcast glass. Visible barrel distortion at wide end, pincushion at long end. Pronounced focus breathing during pulls (frame edges crawl). Bokeh often octagonal from straight aperture blades. The "amateur" look — sometimes weaponised in indie / found-footage horror.',
    contrast: 0.95,
    flareHorizontal: false,
    flareVertical: false,
    flareColor: '#fff8e0',
    bokehShape: 'octagon',
    distortion: 'mustache',
    breathing: 0.7,
    era: '1990s onwards',
  },
  {
    id: 'soft',
    name: 'Soft / diffusion',
    description: 'Either a deliberately soft lens (Cooke Panchro Classic) or a modern lens with diffusion filter (Black Pro-Mist, Glimmerglass). Lifted blacks, halated highlights, dreamy roll-off. Skin reads kinder. The recent "everything looks like a perfume ad" trend lives here.',
    contrast: 0.65,
    flareHorizontal: false,
    flareVertical: false,
    flareColor: '#fff0d0',
    bokehShape: 'soft-circle',
    distortion: 'none',
    breathing: 0.1,
    era: '2010s revival',
  },
  {
    id: 'macro',
    name: 'Macro / extreme close',
    description: 'A lens that focuses extremely close — 1:1 magnification or higher. Razor-thin depth of field at any aperture; subjects shot inches away. The texture-of-skin, water-on-petal, insect-eye register. Found in title sequences and Errol Morris\' Interrotron close-ups.',
    contrast: 1,
    flareHorizontal: false,
    flareVertical: false,
    flareColor: '#fff8e0',
    bokehShape: 'circle',
    distortion: 'none',
    breathing: 0,
    era: 'specialty',
  },
]

const W = 520
const H = 280

const renderScene = (lens: LensProfile) => {
  const cx = W / 2
  const cy = H * 0.5

  return (
    <g>
      {/* sky / background */}
      <rect x={0} y={0} width={W} height={H * 0.6} fill="#7a8a9a" opacity={lens.contrast} />
      <rect x={0} y={H * 0.6} width={W} height={H * 0.4} fill="#5a4a3a" opacity={lens.contrast} />

      {/* lifted blacks for low-contrast lenses */}
      {lens.contrast < 0.8 && (
        <rect x={0} y={0} width={W} height={H} fill={lens.flareColor} opacity={(1 - lens.contrast) * 0.45} />
      )}

      {/* subject (silhouette) */}
      <g transform={lens.distortion === 'barrel' ? `translate(${cx} ${cy}) scale(1.05, 1) translate(${-cx} ${-cy})` : ''}>
        <circle cx={cx - 60} cy={cy - 20} r={26} fill="#e0c8a8" stroke="var(--color-ink)" strokeWidth={0.8} />
        <rect x={cx - 86} y={cy + 6} width={52} height={70} fill="#4a3a3a" stroke="var(--color-ink)" strokeWidth={0.8} />
      </g>

      {/* bokeh balls in background */}
      {[0, 1, 2, 3, 4].map((i) => {
        const bx = cx + 20 + i * 60
        const by = cy - 40 + (i % 2) * 60
        const r = 18
        switch (lens.bokehShape) {
          case 'circle':
            return <circle key={i} cx={bx} cy={by} r={r} fill="#fff2d0" opacity={0.55} />
          case 'oval':
            return <ellipse key={i} cx={bx} cy={by} rx={r * 0.55} ry={r * 1.1} fill="#fff2d0" opacity={0.55} />
          case 'hexagon':
            return (
              <polygon
                key={i}
                points={`${bx},${by - r} ${bx + r * 0.87},${by - r / 2} ${bx + r * 0.87},${by + r / 2} ${bx},${by + r} ${bx - r * 0.87},${by + r / 2} ${bx - r * 0.87},${by - r / 2}`}
                fill="#fff2c0"
                opacity={0.5}
              />
            )
          case 'octagon':
            return (
              <polygon
                key={i}
                points={`${bx - r * 0.4},${by - r} ${bx + r * 0.4},${by - r} ${bx + r},${by - r * 0.4} ${bx + r},${by + r * 0.4} ${bx + r * 0.4},${by + r} ${bx - r * 0.4},${by + r} ${bx - r},${by + r * 0.4} ${bx - r},${by - r * 0.4}`}
                fill="#fff2d0"
                opacity={0.5}
              />
            )
          case 'soft-circle':
            return (
              <g key={i}>
                <circle cx={bx} cy={by} r={r * 1.3} fill="#fff2d0" opacity={0.25} />
                <circle cx={bx} cy={by} r={r} fill="#fff2d0" opacity={0.5} />
              </g>
            )
        }
      })}

      {/* anamorphic horizontal flare */}
      {lens.flareHorizontal && (
        <g>
          <line x1={0} y1={cy - 50} x2={W} y2={cy - 50} stroke={lens.flareColor} strokeWidth={3} opacity={0.55} />
          <line x1={0} y1={cy - 50} x2={W} y2={cy - 50} stroke={lens.flareColor} strokeWidth={1} opacity={0.95} />
          <circle cx={W * 0.78} cy={cy - 50} r={14} fill={lens.flareColor} opacity={0.7} />
        </g>
      )}

      {/* vintage organic flare bloom */}
      {lens.id === 'vintage' && (
        <g>
          <defs>
            <radialGradient id="vintage-flare">
              <stop offset="0%" stopColor={lens.flareColor} stopOpacity={0.7} />
              <stop offset="100%" stopColor={lens.flareColor} stopOpacity={0} />
            </radialGradient>
          </defs>
          <circle cx={W * 0.78} cy={cy - 60} r={60} fill="url(#vintage-flare)" />
        </g>
      )}

      {/* soft / diffusion bloom around highlights */}
      {lens.id === 'soft' && (
        <g>
          <defs>
            <radialGradient id="soft-bloom">
              <stop offset="0%" stopColor="#fff8d8" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#fff8d8" stopOpacity={0} />
            </radialGradient>
          </defs>
          {[0, 1, 2, 3, 4].map((i) => {
            const bx = cx + 20 + i * 60
            const by = cy - 40 + (i % 2) * 60
            return <circle key={i} cx={bx} cy={by} r={40} fill="url(#soft-bloom)" />
          })}
        </g>
      )}

      {/* cheap-zoom distortion grid */}
      {lens.distortion === 'mustache' && (
        <g opacity={0.4} stroke="var(--color-accent)" strokeWidth={0.5} fill="none">
          <path d={`M 20 ${H * 0.85} Q ${W / 2} ${H * 0.78} ${W - 20} ${H * 0.85}`} />
          <path d={`M 20 ${H * 0.92} Q ${W / 2} ${H * 0.99} ${W - 20} ${H * 0.92}`} />
        </g>
      )}
    </g>
  )
}

export function LensCharacterDiagram() {
  const [activeId, setActiveId] = useState<LensId>('modern-clean')
  const active = LENSES.find((l) => l.id === activeId)!

  return (
    <div className="space-y-3">
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', background: '#1a1a1a', border: '1px solid var(--color-rule)' }}>
        {renderScene(active)}
        <rect x={1} y={1} width={W - 2} height={H - 2} fill="none" stroke="var(--color-accent)" strokeWidth={2} />
      </svg>

      <div className="space-y-1.5">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
          <span className="text-sm font-medium">{active.name}</span>
          <span className="text-xs text-[var(--color-ink)]/55">{active.era}</span>
        </div>
        <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">{active.description}</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-1 text-[10px] uppercase tracking-wider text-[var(--color-ink)]/60 pt-1">
          <span>contrast · {active.contrast.toFixed(2)}</span>
          <span>bokeh · {active.bokehShape}</span>
          <span>distortion · {active.distortion}</span>
          <span>breathing · {active.breathing.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1">
        {LENSES.map((l) => (
          <button
            key={l.id}
            onClick={() => setActiveId(l.id)}
            className={`px-2.5 py-1 text-xs border ${
              l.id === activeId
                ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                : 'border-[var(--color-rule)] hover:bg-[var(--color-ink)]/5'
            }`}
          >
            {l.name}
          </button>
        ))}
      </div>
    </div>
  )
}
