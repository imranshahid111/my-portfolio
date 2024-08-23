import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footor from "./Components/Footor";
import Namepic from "./Components/Namepic";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Work from "./Components/Work";

export default function App() {
  return (
    <div className="bg-[#181824] md:px-24 px-2">
    <Navbar/>
    <Namepic/>
    <About/>
    <Skills/>
    <Projects/>
    <Work/>
    <Contact/>
    <Footor/>

    {/* <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navbar />} />
    <Route path="/namepic" element={<Namepic />} />
    <Route path="/about" element={<About />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/work" element={<Work/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/footer" element={<Footor/>} />
    </Routes>
    </BrowserRouter> */}

    </div>
  )
}