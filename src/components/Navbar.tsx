import { Link } from "react-router-dom";
import navbarItems from "../data/navbarItems.json";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Tilt from "react-parallax-tilt";
const navbarHover = "hover:text-amber-500 duration-300";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
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
            <li key={item.name} className={`${navbarHover}`}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setDarkMode((prevMode) => !prevMode)}
          className="cursor-pointer"
        >
          {darkMode ? (
            <LightModeIcon sx={{ fontSize: 20 }} />
          ) : (
            <DarkModeIcon sx={{ fontSize: 20 }} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
