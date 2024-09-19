import { Link } from "react-router-dom";
import TechCard from "./TechCard";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

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
      <Link
        to={moreInfoLink}
        target="_blank"
        className="relative group overflow-hidden"
      >
        <img
          src={imageSrc}
          className="rounded-t-3xl transition-transform duration-500 ease-in-out transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      </Link>

      <section className="rounded-b-3xl p-3 flex flex-col gap-4 bg-zinc-700 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-white via-transparent to-transparent opacity-25 rounded-full filter blur-2xl pointer-events-none"></div>
        <div className="flex flex-col gap-2">
          <section className="flex items-center justify-between">
            <p className="font-semibold text-xl">{title}</p>
            <section className="flex items-center gap-2">
              <Link
                to={githubLink}
                target="_blank"
                className="hover:text-amber-500 duration-300"
                title="Github repo"
              >
                <GitHubIcon />
              </Link>
              <Link
                to={liveLink}
                target="_blank"
                className=" hover:text-amber-500 duration-300"
                title="Live demo"
              >
                <OpenInNewIcon />
              </Link>
            </section>
          </section>
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
      </section>
    </div>
  );
};

export default ProjectCard;
