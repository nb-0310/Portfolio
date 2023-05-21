import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <Footer />
        </>
    )
}

export default App