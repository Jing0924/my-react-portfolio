import { lazy, Suspense, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/navbar'
import Hero from './components/hero'

const About = lazy(() => import('./components/about'))
const Projects = lazy(() => import('./components/projects'))
const Contact = lazy(() => import('./components/contact'))

function SectionFallback() {
  return <div className="min-h-[30vh]" aria-busy="true" />
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    })
  }, [])

  return (
    <div className="w-full min-h-screen pt-20 text-center">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </div>
  )
}

export default App
