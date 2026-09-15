import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main id="home" className="min-h-screen bg-[#050505] pt-20">
        <div className="flex min-h-[80vh] items-center justify-center">
          <h1 className="text-4xl font-black text-white">
            ARDRA <span className="neon-yellow">SURESH</span>
          </h1>
        </div>
      </main>
    </>
  );
}

export default App;