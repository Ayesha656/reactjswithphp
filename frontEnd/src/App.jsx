import React, { useEffect, useState } from 'react'

function App() {

  const [data,setData] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8081/register')
    .then(res => res.json())
    .then(data => setData(data))
    .then(err => console.log(err));
  }, [])


  return (
    <div>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Category</th>
        </thead>
        <tbody>
          {data.map((d,i)=>(
           <tr key={i}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.email}</td>
            <td>{d.password}</td>
            <td>{d.category}</td>
           </tr> 
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App