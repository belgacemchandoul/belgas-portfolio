export interface ExperienceItem {
  period: string
  role: string
  company: string
  location: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    period: "Oct 2023 – Present",
    role: "Senior AI Engineer (Contract)",
    company: "Independent · Remote",
    location: "Doha, Qatar",
    bullets: [
      "Shipped FlowIQ, a production multi-tenant AI agent platform on LangGraph and Claude, with per-tenant encrypted credentials, persistent conversation state, and multi-language support (Arabic/English auto-detection)",
      "Built the full stack from scratch: FastAPI backend, Supabase/PostgreSQL, Redis + Celery for async task processing, and Next.js admin dashboard deployed on Vercel",
      "Shipped YouSafe, a Dublin accessibility directory on Next.js 16, Prisma, and NextAuth v5 — delivered with 88/90/100/100 Lighthouse scores, full GDPR compliance, and production SEO",
      "Solved real production problems: LangGraph checkpoint recovery, Celery solo-pool deployment on Railway, asyncpg port configuration for Supabase, and multi-tenant token encryption",
      "Deliver contract engagements for agencies and startups, from fixed-scope builds to ongoing retainers"
    ]
  },
  {
    period: "Feb 2023 – Sep 2023",
    role: "Frontend Developer",
    company: "GnG Esports",
    location: "Tunisia",
    bullets: [
      "Built production React.js marketing platform from scratch, collaborating with designers and product stakeholders",
      "Drove +40% session duration through UI optimization, animation performance tuning, and mobile-first implementation"
    ]
  },
  {
    period: "Feb 2022 – Jul 2022",
    role: "Full-Stack Developer Intern",
    company: "ATB Bank",
    location: "Tunisia",
    bullets: [
      "Built digital banking prototype with JWT authentication and real-time account data rendering",
      "-35% perceived frontend latency through optimised API response handling and targeted memoisation"
    ]
  }
]
