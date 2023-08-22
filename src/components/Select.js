import React from 'react'

function Select(props) {
  return (
    <select   onChange={(e)=>{props.seleted(e.target.value)}}>

        <option>Pakistan</option>
        <option>India</option>
        <option>Amarica</option>
        <option>Canda</option>
        <option>USA</option>

    </select>
  )
}

export default Select