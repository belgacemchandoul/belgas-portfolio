import { Link } from "react-router-dom";

interface TechCardProps {
  name: string;
  link: string;
  bgColor: string;
}

const TechCard: React.FC<TechCardProps> = ({ name, link, bgColor }) => {
  return (
    <Link
      to={link}
      className={` bg-${bgColor} rounded-lg text-xs font-light p-[6px] hover:opacity-85 duration-300 `}
      // preventScrollReset={true}
      target="_blank"
    >
      {name}
    </Link>
  );
};

export default TechCard;
