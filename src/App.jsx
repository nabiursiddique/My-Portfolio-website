import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Home from "./components/Home/Home/Home"
import Projects from "./components/Projects/Projects"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import { NavbarDefault } from "./components/Navbar/Navbar"
import Skills from "./components/Skills/Skills"
import Footer from "./components/Footer/Footer"
import Glow from "./components/Glow/Glow"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"

const App = () => {

  const [currentSection, setCurrentSection] = useState('home');

  // Function to detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: '#', name: 'home' },
        { id: 'about', name: 'about' },
        { id: 'skills', name: 'skills' },
        { id: 'projects', name: 'projects' },
        { id: 'contact', name: 'contact' }
      ];

      const scrollY = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (scrollY >= section.offsetTop - window.innerHeight / 2) {
          setCurrentSection(sections[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dynamic titles and descriptions for each section
  const getTitle = () => {
    switch (currentSection) {
      case 'about':
        return 'Nabiur Siddique | About';
      case 'skills':
        return 'Nabiur Siddique | Skills';
      case 'projects':
        return 'Nabiur Siddique | Projects';
      case 'contact':
        return 'Nabiur Siddique | Contact';
      default:
        return 'Nabiur Siddique';
    }
  };

  const getDescription = () => {
    switch (currentSection) {
      case 'about':
        return 'Learn more about Nabiur Siddique, a passionate web developer.';
      case 'skills':
        return 'skills and expertise of Nabiur Siddique.';
      case 'projects':
        return 'projects completed by Nabiur Siddique.';
      case 'contact':
        return 'Get in touch with Nabiur Siddique.';
      default:
        return 'Home page of Nabiur Siddique.';
    }
  };

  return (
    <>
      <div className="font-body max-w-[1440px] mx-auto">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{getTitle()}</title>
          <meta name="description" content={getDescription()} />
        </Helmet>

        <Glow />
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
