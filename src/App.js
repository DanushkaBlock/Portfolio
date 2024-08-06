import Navbar from "./components/NavBar/navbar"
import './App.css';
import Intro from "./components/intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/works/works";
import Tools from "./components/Contact/tools";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Tools/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
 