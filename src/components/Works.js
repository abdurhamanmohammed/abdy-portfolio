import React from 'react'
import "./workstyle.css"
import pro4 from "../assets/pro5.jpg"
import pro1 from "../assets/pro1.jpg"
import pro2 from "../assets/pro2.jpg"

function Works() {
  return (
    <div className='works'>
        <h1>my recent works</h1>
        <div className='wone'>
            <div className='wtwo'>
                <div className='wthree'><img src={pro4}/></div>
                <div className='wfour'><h4>my apple project</h4></div>
            </div>
            <div className='wtwo'>
                <div className='wthree'><img src={pro1}/></div>
                <div className='wfour'><h4>my apple project</h4></div>
            </div>
            <div className='wtwo'>
                <div className='wthree'><img src={pro2}/></div>
                <div className='wfour'><h4>my apple project</h4></div>
            </div>
            
        </div>
    </div>
  )
}

export default Works