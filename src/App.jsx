import Home from "./components/Home/Home/Home"
import { NavbarDefault } from "./components/Shared/Navbar/Navbar"

const App = () => {
  return (
    <div className="font-body">
      <NavbarDefault />
      <Home />
    </div>
  )
}

export default App
