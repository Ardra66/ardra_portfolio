import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />

      <main>
<Hero />
        <section
          id="home"
          className="flex min-h-screen items-center justify-center"
        >
          <div className="text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-400">
              Welcome to my portfolio
            </p>

            <h1 className="text-5xl font-bold md:text-7xl">
              Ardra Suresh
            </h1>

            <p className="mt-5 text-lg text-gray-400">
              Frontend / MERN Stack Developer
            </p>
          </div>
        </section>

        <section id="about" className="min-h-screen" />
        <section id="skills" className="min-h-screen" />
        <section id="projects" className="min-h-screen" />
        <section id="experience" className="min-h-screen" />
        <section id="contact" className="min-h-screen" />
      </main>
    </>
  );
}

export default App;
