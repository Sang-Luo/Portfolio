import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className=" bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
