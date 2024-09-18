import techStack from "../data/techStack.json";
import TechCard from "./TechCard";
import { RoughNotationGroup, RoughNotation } from "react-rough-notation";
const MainAbout = () => {
  return (
    <div className=" flex font-playpen justify-between items-center mt-20">
      <div className="flex flex-col gap-6">
        <RoughNotationGroup show={true}>
          <span className="text-4xl font-semibold">Hey👋🏻, I'm Belgacem.</span>
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
                Click here
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
