import React from 'react'
import './Navigation.css'

function Navigation({onRouteChange}) {
  return (
        <nav className='navigation'>
            <p className='f3 link dim black underline pa3 pointer' onClick={()=>onRouteChange('signin')}>SignOut</p>
        </nav> 
    )
}

export default Navigation