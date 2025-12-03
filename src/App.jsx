import { useEffect } from 'react' // 1. 引入 useEffect
import AOS from 'aos'             // 2. 引入 AOS 程式
import 'aos/dist/aos.css'         // 3. 引入 AOS 的 CSS (這行很重要，沒加就不會動！)

// src/App.jsx
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About' // 1. 引入 About
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
      once: true,
    });
  },[]);


  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      
      {/* 2. 放在 Hero 和 Projects 中間 */}
      <About />
      
      <Projects />
      <Contact /> 
    </div>
  )
}

export default App