import React from 'react'
import Tilt from 'react-parallax-tilt'
import brain from './brain.svg'
import './Logo.css'

function Logo() {
  return (
    <div className='ma4 mt0 '>
        <Tilt className='Tilt br2 shadow-2' option={{max : 25}} style={{height: 100, width: 100}}>
            <img src={brain} className='w-90 h-900 flex center' />
        </Tilt>
    </div>
  )
}

export default Logo;