import MainAbout from "./components/MainAbout";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white ">
      <div className="container mx-auto max-w-2xl p-4">
        <Navbar />
        <MainAbout />
        <Projects />
      </div>
    </div>
  );
};

export default App;
