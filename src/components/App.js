import React from 'react'
import Header from './Header'
import Nav from './Nav'
import About from './About'
import Journey from './Journey'
import Project from './Projects'
import Contact from './Contact'
import Footer from './Footer'

import './../styles/main.css'

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <main>
        <About />
        <Journey />
        <Project/>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;
