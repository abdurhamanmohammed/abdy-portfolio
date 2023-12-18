import React from 'react'
import './mixstyle.css'

function Mixed(props) {
  return (
    <div className='mone'>
        <div className='mtwo'>
            <img src={props.img1}/>
            
        </div>
        <div className='mthree'>
        <h1>{props.text}</h1>
        <p>{props.paragrah}</p>
        </div>
    </div>
  )
}

export default Mixed