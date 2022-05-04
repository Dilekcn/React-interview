import React,  { useState, useEffect } from 'react';
import axios from 'axios';
import SingleUser from './SingleUser';
function UserList() {
const [users, setUsers] = useState([]);

const fetchUsers = async () =>{
    const response = await axios.get('https://randomuser.me/api/?results=15')
    setUsers(response.data.results)
    console.log(response.data.results[0].name)
}

useEffect(()=>{
    fetchUsers()
},[])
console.log(users)
  return (
    <div>
        <ul>
            {users.map((user,i)=>(
                <li>
                    {' '}
                    <SingleUser user ={user} key ={i}/>
                </li>
            ) )}

        </ul>
    </div>
  )
}

export default UserList