import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import MainAbout from "./components/MainAbout";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
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
        <div className="min-h-screen bg-zinc-900 text-white scroll-smooth overflow-hidden">
          <div className="container mx-auto md:max-w-2xl max-w-xl p-4 ">
            <Navbar />
            <MainAbout />
            <Projects />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
