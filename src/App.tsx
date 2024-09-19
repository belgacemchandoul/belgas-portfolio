import Footer from "./components/Footer";
import MainAbout from "./components/MainAbout";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white scroll-smooth">
      <div className="container mx-auto max-w-2xl p-4">
        <Navbar />
        <MainAbout />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default App;
