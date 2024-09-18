import projectsDetails from "../data/projectsDetails.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="work" className="font-playpen mt-20 flex flex-col gap-6 leading-7">
      <div className="text-4xl font-semibold">Personal projects🗂️</div>
      <p className=" text-neutral-400">
        Check out some of my latest creations! Here are a few recent projects
        I've poured my creativity into
      </p>
      <section className="flex flex-col gap-16">
        {projectsDetails.map((project) => (
          <ProjectCard
            key={project.name}
            title={project.name}
            description={project.description}
            githubLink={project.githubLink}
            imageSrc={project.imageSrc}
            liveLink={project.liveLink}
            moreInfoLink={project.moreInfoLink}
            techStack={project.techStack}
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
