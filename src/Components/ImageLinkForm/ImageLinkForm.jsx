import React from 'react'
import './ImageLinkForm.css'

function ImageLinkForm({onInputChange, onClick}) {
  return (
    <div>
        <p className='f3 center'>
            {`This magic brain will detect faces in your pictures. Give it a try`}
        </p>
        <div className=' center '>
            <div className='form pa4 br3 shadow-5 center' >
                <input type='text' className='f4 pa2 w-70 center' placeholder='Input your image link' onChange={onInputChange} />
                <button className='w-30 grow f4 link ph3 pv2 white bg-light-purple' onClick={onClick}>Detect</button>
            </div>
                
        </div>
    </div>
  )
}

export default ImageLinkForm