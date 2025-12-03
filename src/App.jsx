// src/App.jsx
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About' // 1. 引入 About
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
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