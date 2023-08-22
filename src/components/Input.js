import React from 'react'

function Input(props) {
  return (
  <input className=''
//   value={inputText}
onChange={(e)=>{props.inputVal(e.target.value)}}
  type='text ' 
   placeholder='Enter you name'/> 
  )
}

export default Input