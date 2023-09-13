import React from 'react'
import './Rank.css'

function Rank() {
  return (
    <div className=''>
        <div className='white f3 center'>
            {
                `Jack, your current rank is ...` //it will be dynamic once we fetch data from APIs
            }
        </div>
        <div className='white f1 center '>
            {
                `#5`
            }
        </div>
    </div>
  )
}

export default Rank