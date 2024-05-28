import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { IoArrowUpCircle } from "react-icons/io5";

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <AboutMe/>
        <Skills/>
        <Projects/>
      </main>
      <footer>
        <h3>Thanks for visiting my portfolio</h3>
        <p>{"(You can click on the arrow to go to the top)"}</p>
      </footer>
        <IoArrowUpCircle/>
    </div>
  );
}

export default App;
