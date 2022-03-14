import React, { Component } from 'react'
import loader from './loader.svg'

// export default class spinner extends Component {
//   render() {
//     return (
//       
//     )
//   }
// }


export default function spinner() {
  return (
    <div>
      <div className='text-center'>
         <img src={loader} alt="" />
      </div>
    </div>
  )
}

