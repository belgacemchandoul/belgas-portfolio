import { Link } from "react-router-dom";
import TechCard from "./TechCard";

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  description: string;
  techStack: { name: string; link: string }[];
  githubLink: string;
  liveLink: string;
  moreInfoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imageSrc,
  description,
  techStack,
  githubLink,
  liveLink,
  moreInfoLink,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <img src={imageSrc} className="rounded-t-3xl" />
      <section className="rounded-b-3xl p-3 flex flex-col gap-4 bg-zinc-700">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-xl">{title}</p>
          <p className="text-xs text-neutral-400 font-semibold leading-6">
            {description}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {techStack.map((item) => (
            <TechCard
              key={item.name}
              name={item.name}
              link={item.link}
              bgColor="zinc-900"
            />
          ))}
        </div>
        <section>
          <Link to={githubLink}>Github repo</Link>
          <Link to={liveLink}>Live demo</Link>
          <Link to={moreInfoLink}>more information</Link>
        </section>
      </section>
    </div>
  );
};

export default ProjectCard;
