import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// ─── Icosahedron geometry ─────────────────────────────────────────────────────
const PHI = (1 + Math.sqrt(5)) / 2
const RAW: [number, number, number][] = [
  [0, 1, PHI],  [0, -1, PHI],  [0, 1, -PHI],  [0, -1, -PHI],
  [1, PHI, 0],  [-1, PHI, 0],  [1, -PHI, 0],  [-1, -PHI, 0],
  [PHI, 0, 1],  [-PHI, 0, 1],  [PHI, 0, -1],  [-PHI, 0, -1],
]
const NORM = Math.sqrt(1 + PHI * PHI)
const VERTS: [number, number, number][] = RAW.map(([x, y, z]) => [x / NORM, y / NORM, z / NORM])

// 30 edges — each vertex has exactly 5 neighbors
const EDGES: [number, number][] = [
  [0, 1], [0, 4], [0, 5], [0, 8], [0, 9],
  [1, 6], [1, 7], [1, 8], [1, 9],
  [2, 3], [2, 4], [2, 5], [2, 10], [2, 11],
  [3, 6], [3, 7], [3, 10], [3, 11],
  [4, 5], [4, 8], [4, 10],
  [5, 9], [5, 11],
  [6, 7], [6, 8], [6, 10],
  [7, 9], [7, 11],
  [8, 10],
  [9, 11],
]

// ─── Badge orb configuration ──────────────────────────────────────────────────
const BADGES = [
  { label: 'React',      rx: 158, ry: 56, speed: 0.000035, phase: 0 },
  { label: 'FastAPI',    rx: 134, ry: 74, speed: 0.000028, phase: Math.PI * 0.7 },
  { label: 'LangGraph',  rx: 170, ry: 50, speed: 0.000022, phase: Math.PI * 1.4 },
  { label: 'Claude API', rx: 124, ry: 68, speed: 0.000040, phase: Math.PI * 0.3 },
  { label: 'PostgreSQL', rx: 160, ry: 60, speed: 0.000030, phase: Math.PI * 1.1 },
  { label: 'Redis',      rx: 144, ry: 64, speed: 0.000038, phase: Math.PI * 1.8 },
  { label: 'TypeScript', rx: 140, ry: 78, speed: 0.000025, phase: Math.PI * 0.5 },
  { label: 'Next.js',    rx: 164, ry: 52, speed: 0.000032, phase: Math.PI * 1.6 },
]

// ─── Projection constants ─────────────────────────────────────────────────────
const SIZE = 420
const CX = SIZE / 2
const CY = SIZE / 2
const SCALE = 145
const FOV = 4
const ROT_Y_RATE = 0.003 / 16.667   // rad/ms at 60 fps
const ROT_X_RATE = 0.001 / 16.667

// ─── Math helpers (inline, no allocation) ────────────────────────────────────
function rotY(v: [number, number, number], a: number): [number, number, number] {
  const c = Math.cos(a), s = Math.sin(a)
  return [v[0] * c + v[2] * s, v[1], -v[0] * s + v[2] * c]
}
function rotX(v: [number, number, number], a: number): [number, number, number] {
  const c = Math.cos(a), s = Math.sin(a)
  return [v[0], v[1] * c - v[2] * s, v[1] * s + v[2] * c]
}
function project(v: [number, number, number], floatY: number): [number, number, number] {
  const f = FOV / (FOV + v[2])
  return [CX + v[0] * SCALE * f, CY + v[1] * SCALE * f + floatY, v[2]]
}

// ─── Component ────────────────────────────────────────────────────────────────
const HeroVisual = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef       = useRef<number>()
  const timeRef      = useRef(0)
  const lastTRef     = useRef<number | null>(null)
  const edgeRefs     = useRef<(SVGLineElement | null)[]>(new Array(EDGES.length).fill(null))
  const badgeRefs    = useRef<(HTMLDivElement | null)[]>(new Array(BADGES.length).fill(null))

  // Mouse parallax on the whole visual
  const mvX = useMotionValue(0)
  const mvY = useMotionValue(0)
  const spX = useSpring(mvX, { stiffness: 80, damping: 25 })
  const spY = useSpring(mvY, { stiffness: 80, damping: 25 })

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      const el = containerRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      mvX.set(((e.clientX - r.left - r.width  / 2) / (r.width  / 2)) * -12)
      mvY.set(((e.clientY - r.top  - r.height / 2) / (r.height / 2)) * -8)
    }
    window.addEventListener('mousemove', onMouse, { passive: true })
    return () => window.removeEventListener('mousemove', onMouse)
  }, [mvX, mvY])

  useEffect(() => {
    let paused = false

    const onVis = () => {
      paused = document.hidden
      if (!paused) lastTRef.current = null   // avoid time-jump on resume
    }
    document.addEventListener('visibilitychange', onVis)

    const frame = (now: number) => {
      rafRef.current = requestAnimationFrame(frame)
      if (paused) return

      if (lastTRef.current === null) lastTRef.current = now
      const dt = Math.min(now - lastTRef.current, 100)   // cap so tab-switch doesn't jump
      lastTRef.current = now
      timeRef.current += dt

      const t = timeRef.current
      const floatY = Math.sin((t / 4000) * Math.PI * 2) * 8   // ±8px, period 4 s

      // ── Project all vertices once
      const proj = VERTS.map(v => project(rotX(rotY(v, t * ROT_Y_RATE), t * ROT_X_RATE), floatY))

      // ── Update SVG edges
      for (let i = 0; i < EDGES.length; i++) {
        const el = edgeRefs.current[i]
        if (!el) continue
        const [a, b] = EDGES[i]
        const [x1, y1, z1] = proj[a]
        const [x2, y2, z2] = proj[b]
        const zAvg = (z1 + z2) / 2                           // −1 … +1
        const op   = (0.1 + ((zAvg + 1) / 2) * 0.5).toFixed(3)  // 0.1 … 0.6
        el.setAttribute('x1', x1.toFixed(1))
        el.setAttribute('y1', y1.toFixed(1))
        el.setAttribute('x2', x2.toFixed(1))
        el.setAttribute('y2', y2.toFixed(1))
        el.setAttribute('stroke-opacity', op)
      }

      // ── Update badge orbs
      for (let i = 0; i < BADGES.length; i++) {
        const el = badgeRefs.current[i]
        if (!el) continue

        const stagger = 800 + i * 80
        if (t < stagger) { el.style.opacity = '0'; continue }

        const b     = BADGES[i]
        const angle = t * b.speed + b.phase
        const bx    = b.rx * Math.cos(angle)
        const by    = b.ry * Math.sin(angle) + floatY
        const sinV  = Math.sin(angle)
        const scale = (0.78 + sinV * 0.22).toFixed(3)          // 0.56 … 1.0

        const entry = Math.min(1, (t - stagger) / 400)
        const depth = Math.max(0.15, 0.42 + sinV * 0.42)       // 0.15 … 0.84
        el.style.opacity   = (entry * depth).toFixed(3)
        el.style.transform = `translate(calc(-50% + ${bx.toFixed(1)}px), calc(-50% + ${by.toFixed(1)}px)) scale(${scale})`
      }
    }

    rafRef.current = requestAnimationFrame(frame)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ x: spX, y: spY, width: SIZE, height: SIZE }}
      className="relative flex-shrink-0"
    >
      {/* Ambient glow behind the wireframe */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(200,242,100,0.05) 0%, transparent 65%)',
        }}
      />

      {/* Icosahedron wireframe */}
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        width={SIZE}
        height={SIZE}
        aria-hidden="true"
        className="absolute inset-0"
      >
        {EDGES.map((_, i) => (
          <line
            key={i}
            ref={el => { edgeRefs.current[i] = el }}
            stroke="#C8F264"
            strokeWidth="1"
            strokeOpacity="0"
            strokeLinecap="round"
          />
        ))}
      </svg>

      {/* Floating badge orbs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {BADGES.map((badge, i) => (
          <div
            key={badge.label}
            ref={el => { badgeRefs.current[i] = el }}
            className="absolute pointer-events-auto font-mono text-[10px] text-zinc-400 bg-surface border border-border-subtle rounded-full px-3 py-1 whitespace-nowrap select-none hover:bg-lime/10 hover:text-lime hover:border-lime/30 hover:shadow-[0_0_14px_rgba(200,242,100,0.18)] transition-all duration-200"
            style={{ left: '50%', top: '50%', opacity: 0 }}
          >
            {badge.label}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default HeroVisual
