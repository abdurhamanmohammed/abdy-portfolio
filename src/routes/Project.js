import React from 'react'
import Nave from '../components/Nave'
import Footer from '../components/Footer'
import Mixed from '../components/Mixed'
import pro6 from "../assets/pro7.jpg"
import Works from '../components/Works'
function Project() {
  return (
    <div>
        <Nave/>
      <Mixed img1={pro6} text="Project."/>
      <Works/>
      <Footer/>
    </div>
  )
}

export default Project