import React from 'react'
import airbnb from "../Images/airbnb.png"
import './style.css';



function Nav() {
  return (
    <div  >
       <div className='nav__container' >
        <img src={airbnb} alt="nav"/>
        </div> 
        
    </div>
  )
}

export default Nav