import React from 'react'

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


function Hero() {
  return (
    <div  >
      
        <div className='gallery__container'>
          <div className='gallery img__container'>
            <img src={img1} alt=""/>
          </div>
          <div className='gallery img__container2'>
            <img src={img2} alt=""/>
            <img src={img3} alt=""/>
          </div>
          <div className='gallery img__container3'>
            <img src={img4} alt=""/>
            <img src={img5} alt=""/>
          </div>
          <div className='gallery img__container4'>
            <img src={img6} alt=""/>
            <img src={img7} alt=""/>
          </div>
          <div className='gallery img__container5'>
            <img src={img8} alt=""/>
            <img src={img9} alt=""/>
          </div>
        </div>

        <div className='text__container'>
        <h1 className='hero__title'> Online Experiences</h1>
<p className='hero__paragraph'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </div>
    </div>
  )
}

export default Hero