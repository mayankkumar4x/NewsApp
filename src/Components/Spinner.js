import React, { Component } from 'react'
import loadingpic from '../loadingpic.gif';
const Spinner=()=> {
    return (
      <div className='text-center my-3'>
        <img src={loadingpic} alt="pic" style={{width:'30px', height:'30px'}} />
      </div>
    )
  
}
export default Spinner
