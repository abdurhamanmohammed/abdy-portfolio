import React from 'react'
import "./navestyle.css"
import { Link } from 'react-router-dom'
function Nave() {
  return (
    <div className='none'>
        <ul className='ntwo'>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link className='bbb' to={"/project"}>Project</Link></li>
          <li><Link className='aaa' to={"/contact"}>Contact</Link></li>
        </ul>
        
    </div>
  )
}

export default Nave