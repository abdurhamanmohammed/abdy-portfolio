import React from 'react'

import Nave from '../components/Nave'
import Footer from '../components/Footer'
import Mixed from '../components/Mixed'
import pro4 from "../assets/pro6.jpg"
import Aboudata from '../components/Aboudata'
function About() {
  return (
    <div>
      <Nave/>
      <Mixed img1={pro4} text="About." />
      <Aboudata/>
      
      <Footer/>
    </div>
  )
}

export default About