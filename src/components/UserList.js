import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import User from './User'
const UserList = () => {
    // initialiser le state users avec un tableau vide
    const [users, setUsers] = useState([])
    // initialiser le state error avec null
    const [error, setError] = useState(null)
    // effectuer une requête HTTP GET pour récupérer la liste des utilisateurs
    useEffect(()  => {
        const fetchUsers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (error) {
            setError(error)
        }
    }
    // appeler la fonction fetchUsers
    fetchUsers()
    }, [])
// afficher la liste des utilisateurs
  return (
    <div className='flex flex-wrap justify-center'>
     {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
      {error && <p>{error.message}</p>}
    </div>
  )
}

export default UserList