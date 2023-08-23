import React from 'react'

function Select(props) {
  const {options,lable }=props
  return (
    <select   onChange={(e)=>{props.seleted(e.target.value)}}>
      {options && Array.isArray(options )&& options.map((x,i )=>(
      <option> key={i} value={x.value} { x.dispalName}</option>
      )

      )
      }
      

    </select>
  )
}

export default Select