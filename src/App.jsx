import React from 'react'
import './App.css'

import Navbar from './navbar/Navbar'
import Hero from './Hero/Hero'
import About from './About/About'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App