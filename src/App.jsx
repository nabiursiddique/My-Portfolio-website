import About from "./components/About/About"
import Home from "./components/Home/Home/Home"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import { NavbarDefault } from "./components/Shared/Navbar/Navbar"
import Skills from "./components/Skills/Skills"

const App = () => {
  return (
    <>
      <div className="font-body max-w-[1440px] mx-auto">
        <NavbarDefault />
        <Home />
        <About />
        <Skills />
      </div>
      <ScrollToTop />
    </>
  )
}

export default App
