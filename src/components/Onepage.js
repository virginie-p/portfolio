import React from 'react'
import Header from './Header'
import Nav from './Nav'
import About from './About'
import Journey from './Journey'
import Projects from './Projects'
import ProjectsList from './../ProjectsList'
import Contact from './Contact'
import Footer from './Footer'

function OnePage() {
    return (
        <div>
            <Nav />
            <Header />
            <main>
            <About />
            <Journey />
            <Projects projects={ProjectsList}/>
            <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default OnePage