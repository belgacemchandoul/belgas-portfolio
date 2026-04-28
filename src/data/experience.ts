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
    role: "Full-Stack Engineer",
    company: "Independent · Remote",
    location: "Doha, Qatar",
    bullets: [
      "Built and shipped FlowIQ, a multi-tenant AI agent platform for automating business workflows. Owned the full stack: FastAPI backend, Supabase/PostgreSQL, Redis + Celery for async processing, LangGraph for agent state, Claude API integration, and a Next.js admin dashboard",
      "Shipped YouSafe, a production Next.js 16 app with Prisma, NextAuth v5, Leaflet maps, and a full Tiptap CMS. Lighthouse scores of 88/90/100/100, GDPR compliance, and SEO-ready",
      "Solved real production problems across the stack: deployment quirks on Railway, async DB configuration with Supabase, multi-tenant architecture, and the practical realities of running AI integrations in production",
      "Took on contract engagements for startups and product teams, both fixed-scope project work and ongoing development",
      "Built additional full-stack applications across the stack: dashboards, content platforms, and internal tools. Comfortable with the full lifecycle from data modeling to deployment"
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
