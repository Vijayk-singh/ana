
import Items from './Items'
import React, { useEffect, useState } from "react";

const  Ab = () => {
    
      
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
      
   
  return (
    <div>
     
           {users.length > 0 && (
        <ul>
          {users.map(user => (
            <div>
            {/* <li key={user.id}>{user.name}</li> */}
            <Items data={user} />
            </div>
          ))}
        </ul>
      )}
       
    </div>
  )
}

export default Ab