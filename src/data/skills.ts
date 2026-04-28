export interface SkillGroup {
  group: string
  items: string[]
}

export const skills: SkillGroup[] = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"] },
  { group: "Backend", items: ["Python", "FastAPI", "Node.js", "REST APIs", "WebSockets", "Celery"] },
  { group: "AI & LLMs", items: ["LangGraph", "LangChain", "Claude API", "Hugging Face", "Prompt Engineering"] },
  { group: "Data", items: ["PostgreSQL", "Supabase", "Prisma ORM", "Redis", "MongoDB"] },
  { group: "Infra", items: ["Railway", "Vercel", "Netlify", "Docker", "GitHub Actions", "Twilio"] },
]
