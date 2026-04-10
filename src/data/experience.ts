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
    role: "Full-Stack Engineer & Founder",
    company: "Freelance / Independent",
    location: "Doha, Qatar",
    bullets: [
      "Built and deployed FlowIQ, a multi-tenant AI SaaS platform designed to automate clinic workflows through a WhatsApp-based AI agent",
      "Designed backend systems using Python, FastAPI, PostgreSQL, and Redis, handling concurrent sessions and ensuring reliability",
      "Implemented asynchronous workflows for scheduling and notifications, with a focus on production stability",
      "Built YouSafe, a full-stack accessibility platform for a Dublin-based use case, achieving strong performance and accessibility scores",
      "Developed multiple full-stack applications including dashboards, job boards, and content platforms, covering the full development lifecycle from frontend to backend to deployment"
    ]
  },
  {
    period: "Feb 2023 – Sep 2023",
    role: "Frontend Developer",
    company: "GnG Esports",
    location: "Tunisia",
    bullets: [
      "Built production React.js marketing platform from scratch, collaborating with designers and stakeholders",
      "+40% session duration through UI optimisation, animation performance tuning, and mobile-first implementation"
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
