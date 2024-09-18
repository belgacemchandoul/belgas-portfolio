import techStack from "../data/techStack.json";
import TechCard from "./TechCard";

const MainAbout = () => {
  return (
    <div className=" flex font-playpen justify-between items-center mt-20">
      <div className="flex flex-col gap-8 ">
        <div className="flex flex-col gap-6">
          <span className="text-4xl font-semibold">Hey👋🏻, I'm Belgacem.</span>
          <span className=" text-l text-neutral-400 leading-7">
            A front-end developer from Tunisia, with a Bachelor Degree in
            Computer Science Applied to E-Business. I turn modern tech into
            digital magic, crafting sleek and snappy web experiences with a
            trusty toolkit that includes:
          </span>
          <div className="flex gap-3 flex-wrap">
            {techStack.map((item) => (
              <TechCard name={item.name} link={item.link} key={item.name} />
            ))}
          </div>
          <span className=" text-l text-neutral-400 leading-7">
            Want to dive deeper?{" "}
            <span className="hover:text-amber-500 cursor-pointer">
              Click here
            </span>{" "}
            to download my resume.
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainAbout;
