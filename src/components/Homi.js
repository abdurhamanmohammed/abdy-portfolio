import React from 'react'
import bg1 from "../assets/bg4.jpg"
import {Link} from "react-router-dom"
import "./homistyle.css"
function Homi() {
  return (
    <div className='hone'>
       
           <div className='htwo'>
             <img src={bg1}/>
           </div>
            <div className='hthree'>
                <Link to={"/"}> Hello.</Link>
                <Link className='hfour' to={"/contact"}> My name is </Link>
                <Link to={"/project"}>  abdurhaman.</Link>
                <Link className='hfour' to={"/about"}>Freelancer</Link>
            </div>
        </div>
    
  )
}

export default Homi