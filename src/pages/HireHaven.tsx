import ProjectDetailsPage from '../components/ProjectDetailsPage'
import projectsDetails from '../data/projectsDetails.json'

const data = projectsDetails[3]

const HireHaven = () => {
  return (
    <ProjectDetailsPage
      title={data.name}
      description={data.description}
      imgSrc={data.imageSrc}
      summary={data.summary}
      category={data.category}
      status={data.status}
      market={data.market}
      metrics={data.metrics}
      githubLink={data.githubLink}
      liveLink={data.liveLink}
      features={data.features}
      techStack={data.techStack.map((t) => ({
        name: t.name,
        link: t.link,
        desc: t.description,
      }))}
    />
  )
}

export default HireHaven
