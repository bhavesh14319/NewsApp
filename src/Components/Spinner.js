import React from 'react'
import loader from './loader.svg'



export default function spinner() {
  return (
    <div>
      <div className='text-center'>
         <img src={loader} alt="" />
      </div>
    </div>
  )
}

