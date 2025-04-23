import React, { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Particle  from "./components/Particle"
import Skills from "./components/Skills"
import Project from "./components/Projects"
import Contact from "./components/contact"
import Footer from "./components/Footer"

function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[]);

  return (
    <>
    <Particle />
<Navbar />   
     <Hero />
     <Skills />
     <Project/>
     <Contact /> 
     <Footer/> 
          </>
  )
}

export default App
