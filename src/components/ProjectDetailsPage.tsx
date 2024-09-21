import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { RoughNotationGroup, RoughNotation } from "react-rough-notation";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
interface ProjectDetailsPageProps {
  title: string;
  description: string;
  imgSrc: string;
  summary: string;
  techStack: { name: string; desc: string; link: string }[];
  features: { feature: string; featureDesc: string }[];
}

const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = ({
  title,
  description,
  features,
  imgSrc,
  summary,
  techStack,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="min-h-screen bg-zinc-900 text-white scroll-smooth font-montserrat overflow-hidden">
          <div className="container mx-auto  p-4 md:max-w-2xl max-w-xl">
            <Navbar />
            <main className="mt-20 flex flex-col gap-12 leading-7 relative">
              <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-white via-transparent to-transparent opacity-30 rounded-full filter blur-xl pointer-events-none"></div>
              <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-64 h-64 bg-gradient-to-br from-white via-transparent to-transparent opacity-30 rounded-full filter blur-xl pointer-events-none"></div>
              <RoughNotationGroup show={true}>
                <div className="flex flex-col gap-3">
                  <div className="text-3xl md:text-4xl font-extrabold ">
                    <RoughNotation
                      type="circle"
                      color="#f59e0b"
                      padding={[10, 10]}
                    >
                      {title}
                    </RoughNotation>
                  </div>
                  <p className="text-lg md:text-xl font-light">{description}</p>
                </div>
                <img src={imgSrc} className="rounded-xl" />
                <div className="flex flex-col gap-3">
                  <div className="text-3xl font-bold max-w-fit">
                    <RoughNotation type="underline" color="#f59e0b">
                      Summary
                    </RoughNotation>
                  </div>
                  <div className="text-lg font-extralight">{summary}</div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="text-3xl font-bold">
                    <RoughNotation type="underline" color="#f59e0b">
                      TechStack
                    </RoughNotation>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {techStack.map((item) => (
                      <li key={item.name} className="font-extralight">
                        <Link
                          to={item.link}
                          target="_blank"
                          className="hover:text-amber-500 duration-300 mr-2 font-normal "
                        >
                          {item.name}:
                        </Link>
                        {item.desc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="text-3xl font-bold">
                    <RoughNotation type="underline" color="#f59e0b">
                      Features
                    </RoughNotation>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {features.map((feature) => (
                      <li key={feature.feature} className="font-extralight">
                        <span>
                          <span className="font-normal mr-1">
                            {feature.feature}:{" "}
                          </span>
                          {feature.featureDesc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RoughNotationGroup>
            </main>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsPage;
