import './App.css';
import './animations.css';
import './responsive.css'
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { IoArrowUpCircle } from "react-icons/io5";
import { useIsVisible } from './components/useVisible';
import React, {useEffect, useRef} from 'react';

function App() {

  const ref = useRef()
    const isVisible = useIsVisible(ref)

    useEffect(() => {
        if(isVisible){
            document.getElementById('godbye').style.animationPlayState = 'running'
        }
    }, [isVisible])

  return (
    <div className="App">
      <Header/>
      <main>
        <AboutMe/>
        <Skills/>
        <Projects/>
      </main>
      <footer>
        <h3 className='welcome' ref={ref} id='godbye'>Thanks for visiting my portfolio</h3>
        <p className='subTitle'>{"(You can click on the arrow to go to the top)"}</p>
      </footer>
      <div className='upbutton' onClick={() => window.scrollTo(0,0)}>
        <IoArrowUpCircle size={50} color='#eee'/>
      </div>
    </div>
  );
}

export default App;
