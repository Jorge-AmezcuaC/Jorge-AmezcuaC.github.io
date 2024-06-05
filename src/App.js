import './App.css';
import './animations.css';
import './responsive.css'
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
        <h3 className='welcome'>Thanks for visiting my portfolio</h3>
        <p className='subTitle'>{"(You can click on the arrow to go to the top)"}</p>
      </footer>
      <div className='upbutton' onClick={() => window.scrollTo(0,0)}>
        <IoArrowUpCircle size={50} color='#eee'/>
      </div>
    </div>
  );
}

export default App;
