import { motion } from "framer-motion";
import TechBadge from "./TechBadge";

interface FeaturedProject {
  name: string;
  tagline: string;
  category: string;
  status: string;
  market: string[];
  metrics: string[];
  techStack: { name: string; link: string }[];
}

// Architecture diagram — WhatsApp → FastAPI → LangGraph → PostgreSQL / Redis
const ArchDiagram = () => (
  <div
    className="w-full h-full min-h-[260px] flex items-center justify-center p-6 select-none"
    aria-hidden="true"
  >
    <div className="w-full max-w-xs flex flex-col gap-3 font-mono text-[11px]">
      {[
        {
          label: "WhatsApp",
          color: "text-lime",
          border: "border-lime/30 bg-lime/5",
        },
        {
          label: "FastAPI",
          color: "text-zinc-300",
          border: "border-zinc-700 bg-surface-2",
        },
        {
          label: "LangGraph + Claude",
          color: "text-zinc-300",
          border: "border-zinc-700 bg-surface-2",
        },
      ].map((node, i) => (
        <div key={node.label} className="flex flex-col items-center gap-1">
          <div
            className={`w-full text-center border rounded-lg px-3 py-2 ${node.color} ${node.border}`}
          >
            {node.label}
          </div>
          {i < 2 && (
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              className="w-px h-4 bg-lime/40"
            />
          )}
        </div>
      ))}

      {/* Bottom split */}
      <div className="flex items-start gap-2">
        {["PostgreSQL", "Redis + Celery"].map((label, i) => (
          <div key={label} className="flex flex-col items-center gap-1 flex-1">
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6 + i * 0.3,
              }}
              className="w-px h-3 bg-lime/40 self-center"
            />
            <div className="w-full text-center border border-zinc-700 bg-surface-2 text-zinc-300 rounded-lg px-2 py-2">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FeaturedProjectCard = ({
  name,
  tagline,
  category,
  status,
  market,
  metrics,
  techStack,
}: FeaturedProject) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ boxShadow: "0 0 40px rgba(200,242,100,0.05)" }}
      className="bg-surface rounded-2xl border border-border-subtle overflow-hidden"
      style={{ borderTop: "1px solid rgba(200,242,100,0.18)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr]">
        {/* Left — content */}
        <div className="p-8 flex flex-col gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="bg-lime/10 text-lime border border-lime/20 font-mono text-[11px] rounded-full px-3 py-1">
              {category}
            </span>
            {status === "live" && (
              <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"
                  aria-hidden="true"
                />
                Live — Doha, Qatar
              </span>
            )}
          </div>

          <h3
            className="font-display text-white"
            style={{ fontSize: "40px", lineHeight: 1.1 }}
          >
            {name}
          </h3>

          <p
            className="font-sans text-[#888] max-w-md"
            style={{ fontSize: "16px", lineHeight: 1.7 }}
          >
            {tagline}
          </p>

          {metrics.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {metrics.map((m) => (
                <span
                  key={m}
                  className="bg-surface-2 text-zinc-400 font-mono text-xs rounded-full px-3 py-1.5"
                >
                  {m}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {techStack.slice(0, 7).map((t) => (
              <TechBadge key={t.name} label={t.name} href={t.link} />
            ))}
          </div>

          {market.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {market.map((m) => (
                <span
                  key={m}
                  className="bg-lime/10 text-lime font-mono text-xs rounded-full px-3 py-1"
                >
                  {m}
                </span>
              ))}
            </div>
          )}

          <p className="font-mono text-[11px] text-muted mt-auto pt-2">
            Private — Production-ready — seeking pilot clinics
          </p>
        </div>

        {/* Right — architecture diagram */}
        <div className="border-t lg:border-t-0 lg:border-l border-border-subtle bg-hero-bg flex items-center justify-center">
          <ArchDiagram />
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProjectCard;
