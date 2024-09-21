import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import navbarItems from "../data/navbarItems.json";
import Tilt from "react-parallax-tilt";
const navbarHover = "hover:text-amber-500 duration-300";
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (_to: string, id: string) => {
    if (location.pathname === "/") {
      scroller.scrollTo(id, {
        smooth: true,
        duration: 500,
      });
    } else {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(id, {
          smooth: true,
          duration: 500,
        });
      }, 100);
    }
  };
  return (
    <header className="flex justify-between pt-10 font-montserrat font-light text-sm">
      <Tilt>
        <Link to="/" className={`${navbarHover} flex flex-col leading-none `}>
          <span className="tracking-[-0.05em]">Belgacem</span>
          <span className="tracking-[0.2em]">Chandoul</span>
        </Link>
      </Tilt>
      <nav className="flex items-center gap-10">
        <ul className="flex gap-6">
          {navbarItems.map((item) => (
            <li
              key={item.name}
              className={`${navbarHover} cursor-pointer`}
              onClick={() => handleNavigation("/", item.link.replace("#", ""))}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
