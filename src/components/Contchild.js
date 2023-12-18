import React from 'react'
import "./conchilstyle.css"
function Contchild() {
  return (
    <div>
      <div className='form'>
         <form>
            <label>Your Name</label>
            <input type='text' required></input>
            <label>Email</label>
            <input type='text' required></input>
            <label>Subject</label>
            <input type='text' required></input>
            <label>Message</label>
            <textarea required rows="6" placeholder='Type your message here'/>
            <button className='btn'>submit</button>
         </form>
      </div>
    </div>
  )
}

export default Contchild