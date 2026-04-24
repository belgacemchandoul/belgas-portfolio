import { useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";
import HeroVisual from "../ui/HeroVisual";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
});

const stats = [
  { label: "PRODUCTION STACK ", value: "Multi-tenant agents" },
  { label: "AVAILABILITY", value: "Async, global" },
  { label: "Based in", value: "Doha, Qatar" },
];

const DRIFT_BADGES = [
  "React",
  "FastAPI",
  "LangGraph",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "Claude API",
  "Next.js",
];
// Doubled outside the component so the array reference is stable and never re-created on re-render
const DRIFT_ROW_LEFT = [...DRIFT_BADGES, ...DRIFT_BADGES];
const DRIFT_ROW_RIGHT = [...DRIFT_BADGES, ...DRIFT_BADGES];

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rawX = useTransform(mouseX, [-500, 500], [-8, 8]);
  const rawY = useTransform(mouseY, [-500, 500], [-4, 4]);
  const parallaxX = useSpring(rawX, { stiffness: 100, damping: 30 });
  const parallaxY = useSpring(rawY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    // Mobile: height auto, no flex centering (content sits naturally at top with pt-24)
    // Desktop: full viewport height, flex-centered
    <section className="relative bg-hero-bg overflow-x-hidden lg:min-h-screen lg:flex lg:items-center">
      {/* Dot grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          width: "100%",
          opacity: 0.3,
          backgroundImage:
            "radial-gradient(circle, #2a2a2a 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Lime bloom — bottom left */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(200,242,100,0.03) 0%, transparent 70%)",
        }}
      />

      {/* pt-24 on mobile clears the fixed navbar; lg:py-36 restores desktop spacing */}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-24 pb-16 lg:py-36 w-full">
        <div className="grid lg:grid-cols-[55%_45%] gap-8 items-center">
          {/* ── Left column: text content ── */}
          {/* min-w-0 prevents flex children from overflowing their container */}
          <div className="w-full min-w-0">
            {/* Eyebrow — reduced tracking on mobile to prevent overflow; line break on small screens */}
            <motion.p
              {...fadeUp(0.1)}
              className="font-mono text-[11px] text-muted tracking-[0.08em] sm:tracking-[0.15em] uppercase"
            >
              Senior AI Engineer · <br className="sm:hidden" />
              Doha, Qatar
            </motion.p>

            {/* Headline with mouse parallax */}
            <motion.div
              {...fadeUp(0.25)}
              style={{ x: parallaxX, y: parallaxY }}
            >
              <h1
                className="font-display text-white mt-5"
                style={{ fontSize: "clamp(36px, 8vw, 88px)", lineHeight: 1.0 }}
              >
                Building products
                <br />
                that ship.
              </h1>
            </motion.div>

            {/* Subtext — max-w-full on mobile so it respects container width */}
            <motion.p
              {...fadeUp(0.4)}
              className="font-sans text-[#666] mt-6 w-full max-w-full sm:max-w-lg"
              style={{ fontSize: "18px", lineHeight: 1.8 }}
            >
              I build multi-tenant AI products that ship, bill real customers,
              and don't fall over in production.
            </motion.p>

            {/* CTAs — stack vertically on mobile, row on sm+ */}
            <motion.div
              {...fadeUp(0.55)}
              className="flex flex-col sm:flex-row gap-3 mt-10"
            >
              <MagneticButton
                onClick={() => {
                  const el = document.getElementById("projects");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-lime text-hero-bg font-sans font-medium rounded-full px-7 py-3.5 text-sm hover:bg-lime-dim transition-colors duration-200 w-full sm:w-auto flex items-center justify-center"
              >
                View my work ↓
              </MagneticButton>
              <a
                href="/cv/Belgacem_Chandoul_CV.pdf"
                download
                data-cursor="link"
                className="border border-zinc-700 text-white font-sans text-sm font-medium rounded-full px-7 py-3.5 hover:border-zinc-400 transition-colors duration-200 w-full sm:w-auto flex items-center justify-center"
              >
                Download CV
              </a>
            </motion.div>

            {/* Stat pills */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-16">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.7 + i * 0.1 }}
                  className="bg-surface border border-border-subtle rounded-xl px-4 py-3"
                >
                  <p className="font-mono text-[10px] text-muted uppercase tracking-widest">
                    {stat.label}
                  </p>
                  <p className="font-sans text-[13px] text-white font-medium mt-0.5">
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ── Mobile-only drifting tech stack ── */}
            <div
              aria-hidden="true"
              className="block lg:hidden mt-10 overflow-hidden"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                maskImage:
                  "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              }}
            >
              {/* Row 1 — drifts left. Parent is NOT flex so it doesn't constrain the scrolling child width */}
              <div className="mb-2.5">
                <div
                  className="flex gap-2"
                  style={{
                    width: "max-content",
                    animation: "drift-left 30s linear infinite",
                    willChange: "transform",
                  }}
                >
                  {DRIFT_ROW_LEFT.map((label, i) => (
                    <span
                      key={i}
                      className="font-mono text-[10px] text-zinc-500 bg-surface border border-border-subtle rounded-full px-3 py-1 whitespace-nowrap"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Row 2 — drifts right */}
              <div>
                <div
                  className="flex gap-2"
                  style={{
                    width: "max-content",
                    animation: "drift-right 35s linear infinite",
                    willChange: "transform",
                  }}
                >
                  {DRIFT_ROW_RIGHT.map((label, i) => (
                    <span
                      key={i}
                      className="font-mono text-[10px] text-zinc-500 bg-surface border border-border-subtle rounded-full px-3 py-1 whitespace-nowrap"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right column: interactive visual (desktop only) ── */}
          {/* hidden keeps display:none — no contribution to layout on mobile */}
          <div className="hidden lg:flex items-center justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
