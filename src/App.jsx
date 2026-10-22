import React, { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Home from './components/Home'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loading from './components/Loading'

import 'lenis/dist/lenis.css'

gsap.registerPlugin(ScrollTrigger)

// Configured once globally outside the component
ScrollTrigger.config({
  ignoreMobileResize: true // Prevents stutter when the mobile browser URL bar hides/shows
})

const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const updateLenis = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateLenis)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(updateLenis)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Loading />
      <CustomCursor />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </>
  )
}

export default App