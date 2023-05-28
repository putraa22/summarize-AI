//Pages Components
import Hero from "./components/Hero";
import Demo from "./components/Demo";

// CSS General
import "./App.css";

function App() {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <Demo />

        <span className="text-sm text-end  text-gray-500 font-satoshi">
          ©Hermansyah Putra
        </span>
      </div>
    </main>
  );
}

export default App;
