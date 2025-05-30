import React from 'react'

function Manage() {
  return (
    <div><table class="table">
    <thead>
      <tr>
        <th scope="col">Service name</th>
        <th scope="col">Beautician</th>
        <th scope="col">user</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">d tan</th>
        <td>rifna</td>
        <td>soorya</td>
        <td> <button className='btn btn-success'>Edit</button> <button className='btn btn-danger'>Delete</button>  </td>
      </tr>
     
     
    </tbody>
  </table>

      
    </div>
  )
}

export default Manage
