import { Link } from "react-router-dom";
import navbarItems from "../data/navbarItems.json";
import LightModeIcon from "@mui/icons-material/LightMode";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
const Navbar = () => {
  return (
    <header className="flex mx-auto justify-evenly container mt-10 font-playpen">
      <Link to="/">Belgacem Chandoul</Link>
      <nav className="flex items-center gap-10">
        <ul className="flex gap-6">
          {navbarItems.map((item) => (
            <li key={item.name}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div>
          <LightModeIcon sx={{ fontSize: 20 }} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
