import React from 'react'
import Nave from '../components/Nave'
import Footer from '../components/Footer'
import Mixed from '../components/Mixed'
import pro1 from "../assets/bg3.jpg"
import Contchild from "../components/Contchild"
function Contact() {
  return (
    <div>
      <Nave/>
      <Mixed img1={pro1} text="Contact."/>
      <Contchild/>
      <Footer/>
    </div>
  )
}

export default Contact