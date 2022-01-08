import img1 from "./components/Proj/pulse.png"
import img2 from "./components/Proj/health.jpg"
import './App.css';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Proj from './components/Proj/Proj';
import Skill from './components/Skill/Skill';
import Contact from "./components/contect/Contact";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skill />
      <Proj />
      <Contact />
    </>
  );
}

export default App;
