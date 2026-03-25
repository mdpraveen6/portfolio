import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Skill from "./components/skill";
import Academics from "./components/academic";
import Projects from "./components/project";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/project" element={<Projects />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/academic" element={<Academics />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;