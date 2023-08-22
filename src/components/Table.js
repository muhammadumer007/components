import React from 'react'

function Table(props) {
  const { id, name, age, } = props;
  return (
    <table>
      <td>
        
        
        <tr>{id}</tr>
        <tr>{name}</tr>
        <tr>{age}</tr>
      </td>
      

</table>
  )
}

export default Table