import React from 'react'  //rafc-component setup

const Child = (props) => {
  return (
    <div>
       <table>
            <tr>
            <th>NAME</th>
            <td>{props.name}</td>
            </tr>
            <tr>
            <th>address</th>
            <td>{props.address}</td>
            </tr>
            <tr>
            <th>mobile</th>
            <td>{props.mobile}</td>
            </tr>
       </table>
      
    </div>
  )
}

export default Child
