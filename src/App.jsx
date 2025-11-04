import React from 'react'
import './App.css'

import Navbar from './navbar/Navbar'
import Hero from './Hero/Hero'
import About from './About/About'
import DiscoverFashion from './DiscoverFashion/DiscoverFashion'
import Discover from "./Discover/Discover"
import NewCollection from './NewCollection/NewCollection'
import Reference from './Reference/Reference'
import Popular from './Popular/Popular'
import PastCollections from './PastCollections/PastCollections'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <DiscoverFashion />
      <Discover />
      <NewCollection />
      <Reference />
      <Popular />
      {/* <PastCollections /> */}
      <Footer />
    </div>
  )
}

export default App