import React from 'react'
import './FaceRecognization.css'

function FaceRecognization({input, box}) {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
      <img src={input} id='inputImage' width='500px' height='500px' />
      <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>

      </div>
      </div>
    </div>
  )
}

export default FaceRecognization