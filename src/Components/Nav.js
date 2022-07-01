import React from 'react'
import airbnb from "../Images/airbnb.png"
import './style.css';
import img1 from "../Images/img1.png"
import img2 from "../Images/img2.png"
import img3 from "../Images/img3.png"
import img4 from "../Images/img4.png"
import img5 from "../Images/img5.png"
import img6 from "../Images/img6.png"
import img7 from "../Images/img7.png"
import img8 from "../Images/img8.png"
import img9 from "../Images/img9.png"


function Nav() {
  return (
    <div  >
       <div className='nav__container' >
        <img src={airbnb} alt="nav"/>
        </div> 
        <div className='gallery__container'>
          <div className='gallery__img__container'>
            <img src={img1}/>
          </div>
          <div className='gallery__img__container2'>
            <img src={img2}/>
            <img src={img3}/>
          </div>
          <div className='gallery__img__container3'>
            <img src={img4}/>
            <img src={img5}/>
          </div>
          <div className='gallery__img__container4'>
            <img src={img6}/>
            <img src={img7}/>
          </div>
          <div className='gallery__img__container5'>
            <img src={img8}/>
            <img src={img9}/>
          </div>
        </div>
    </div>
  )
}

export default Nav