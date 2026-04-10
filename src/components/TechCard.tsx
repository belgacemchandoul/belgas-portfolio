import { Link } from 'react-router-dom'

interface TechCardProps {
  name: string
  link: string
  bgColor: string
}

const bgMap: Record<string, string> = {
  'zinc-700': 'bg-zinc-700',
  'zinc-900': 'bg-zinc-900',
}

const TechCard = ({ name, link, bgColor }: TechCardProps) => {
  const bgClass = bgMap[bgColor] ?? 'bg-zinc-700'
  return (
    <Link
      to={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${bgClass} rounded-lg text-xs font-light p-[6px] hover:opacity-85 duration-300`}
    >
      {name}
    </Link>
  )
}

export default TechCard
