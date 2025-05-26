import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className=" bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
