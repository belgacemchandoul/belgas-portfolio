import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer
      className="pb-10 mt-20 flex flex-col gap-9 font-montserrat font-light text-sm"
      id="contact"
    >
      <div className="flex justify-between">
        <Tilt>
          <Link
            to="/"
            className="hover:text-amber-500 duration-300 flex flex-col leading-none"
          >
            <span className="tracking-[-0.05em]">Belgacem</span>
            <span className="tracking-[0.2em]">Chandoul</span>
          </Link>
        </Tilt>
        <section className="flex gap-5">
          <Link
            to="https://www.linkedin.com/in/belgacem-chandoul/"
            className="hover:text-blue-600 duration-300"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </Link>
          <Link
            to="https://github.com/belgacemchandoul"
            className="hover:opacity-75 duration-300"
            title="Github"
          >
            <GitHubIcon />
          </Link>
          <a
            href="mailto:bchandoul6@gmail.com"
            title="Contact me through email"
            className="hover:text-red-500 duration-300"
          >
            <EmailIcon />
          </a>
        </section>
      </div>
      <div className="text-center text-xs font-extralight">
        ©️ {currentYear} - Made with ❤️
      </div>
    </footer>
  );
};

export default Footer;
