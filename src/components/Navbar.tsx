import { Link } from "react-router-dom";
import navbarItems from "../data/navbarItems.json";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const navbarHover = "hover:text-amber-500 duration-300";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  return (
    <header className="flex justify-between pt-10 font-playpen">
      <Link to="/" className={`${navbarHover}`}>
        Belgacem Chandoul
      </Link>
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
