import FeaturedProjectCard from '../ui/FeaturedProjectCard'
import ProjectCard from '../ui/ProjectCard'
import rawData from '../../data/projectsDetails.json'

interface TechItem {
  name: string
  link: string
  description: string
}

interface FeaturedProject {
  id: string
  name: string
  tagline: string
  category: string
  status: string
  featured: true
  market: string[]
  metrics: string[]
  description: string
  techStack: TechItem[]
  githubLink: null
  liveLink: null
  moreInfoLink: null
  imageSrc?: string
}

interface RegularProject {
  id: string
  name: string
  category: string
  status: string
  featured: false
  market: string[]
  metrics: string[]
  description: string
  techStack: TechItem[]
  githubLink: string
  liveLink: string
  moreInfoLink: string
  imageSrc?: string
}

type ProjectData = FeaturedProject | RegularProject

const allProjects = rawData as unknown as ProjectData[]
const featuredProject = allProjects.find((p): p is FeaturedProject => p.featured === true)!
const regularProjects = allProjects.filter((p): p is RegularProject => p.featured === false)

const Projects = () => {
  return (
    <section id="projects" className="bg-hero-bg py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p className="font-mono text-[11px] text-muted tracking-widest uppercase">
          selected work
        </p>

        {/* Heading */}
        <h2 className="font-display text-white mt-3" style={{ fontSize: '52px' }}>
          Projects
        </h2>

        {/* Featured card — full width */}
        <div className="mt-12">
          <FeaturedProjectCard
            name={featuredProject.name}
            tagline={featuredProject.tagline}
            category={featuredProject.category}
            status={featuredProject.status}
            market={featuredProject.market}
            metrics={featuredProject.metrics}
            techStack={featuredProject.techStack}
          />
        </div>

        {/* Regular cards — 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {regularProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              category={project.category}
              status={project.status}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              moreInfoLink={project.moreInfoLink}
              imageSrc={project.imageSrc}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
