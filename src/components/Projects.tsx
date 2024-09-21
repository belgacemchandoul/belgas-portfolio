import projectsDetails from "../data/projectsDetails.json";
import ProjectCard from "./ProjectCard";
import { RoughNotationGroup, RoughNotation } from "react-rough-notation";

const Projects = () => {
  return (
    <div
      id="projects"
      className="font-montserrat mt-20 flex flex-col gap-6 leading-7"
    >
      <RoughNotationGroup show={true}>
        <RoughNotation type="bracket" color="#f59e0b" brackets={"left"}>
          <div className="text-3xl md:text-4xl font-semibold">
            Personal projects🗂️
          </div>
        </RoughNotation>
      </RoughNotationGroup>
      <p className=" text-neutral-400">
        Check out some of my latest creations! Here are a few recent projects
        I've poured my creativity into👇🏻
      </p>
      <section className="flex flex-col gap-16 mt-5">
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
