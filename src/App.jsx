import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Home from "./components/Home/Home/Home"
import Projects from "./components/Projects/Projects"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import { NavbarDefault } from "./components/Navbar/Navbar"
import Skills from "./components/Skills/Skills"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <>
      <div className="font-body max-w-[1440px] mx-auto">
        <NavbarDefault />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}

export default App
