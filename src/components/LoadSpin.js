import React, { Component } from 'react'
import loading from './loading.gif'

export class LoadSpin extends Component {
  
  render() {
    return (
      <div className='text-center'>
        <img src= {loading} alt="loading.gif" />
      </div>
    )
  }
}

export default LoadSpin
