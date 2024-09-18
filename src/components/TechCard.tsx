import { Link } from "react-router-dom";

interface TechCardProps {
  name: string;
  link: string;
}

const TechCard: React.FC<TechCardProps> = ({ name, link }) => {
  return (
    <Link
      to={link}
      className=" bg-zinc-700 rounded-lg text-xs font-light p-2 min-w-fit hover:opacity-85 duration-300"
      // preventScrollReset={true}
      target="_blank"
    >
      {name}
    </Link>
  );
};

export default TechCard;
