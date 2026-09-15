import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <div className="min-h-screen bg-[#08090D] text-[#F5F7FA]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
      </main>
    </div>
  );
}

export default App;