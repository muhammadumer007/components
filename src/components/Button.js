import React from 'react'

function Button(props ) {
  return (
    <button className='Btn' onClick={props.buttonClick} >{props.buttonvalue}</button>
  )
}

export default Button