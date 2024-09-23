import techStack from "../data/techStack.json";
import TechCard from "./TechCard";
import { RoughNotationGroup, RoughNotation } from "react-rough-notation";
import resume from "../assets/Belgacem_Chandoul.pdf";

const MainAbout = () => {
  return (
    <div className=" relative flex font-montserrat justify-between items-center mt-20">
      <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-white via-transparent to-transparent opacity-30 rounded-full filter blur-xl pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-64 h-64 bg-gradient-to-br from-white via-transparent to-transparent opacity-30 rounded-full filter blur-xl pointer-events-none"></div>
      <div className="flex flex-col gap-6">
        <RoughNotationGroup show={true}>
          <span className="text-3xl md:text-4xl font-semibold">
            Hey👋🏻, I'm Belgacem.
          </span>
          <span className=" text-neutral-400 leading-7">
            A{" "}
            <RoughNotation type="underline" color="#f59e0b">
              front-end developer{" "}
            </RoughNotation>{" "}
            from Tunisia, with a Bachelor Degree in Computer Science Applied to
            E-Business. I turn modern tech into digital magic, crafting sleek
            and snappy web experiences with a trusty toolkit that includes:
          </span>
          <div className="flex gap-3 flex-wrap">
            {techStack.map((item) => (
              <TechCard
                key={item.name}
                name={item.name}
                link={item.link}
                bgColor="zinc-700"
              />
            ))}
          </div>
          <span className=" text-neutral-400 leading-7">
            Want to dive deeper?{" "}
            <RoughNotation type="circle" color="#f59e0b" padding={[8, 0]}>
              {" "}
              <span className="cursor-pointer hover:opacity-85 duration-300">
                <a href={resume} download="Belgacem Chandoul's resume">
                  Click here
                </a>
              </span>{" "}
            </RoughNotation>
            to download my resume.
          </span>
        </RoughNotationGroup>
      </div>
    </div>
  );
};

export default MainAbout;
