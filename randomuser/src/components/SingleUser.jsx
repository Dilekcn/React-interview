import React from 'react'

function SingleUser({user}) {
    console.log(user)
  return (
    <div>
   <img src={user.picture.medium} alt='img'/>
   <div className="user_info">
       <h4>{user.name.first} {user.name.last}</h4>
       <p className="user_email">{user.email}</p>
       <p className="user_location">{user.location.country} | {user.location.city}</p>
   </div>
    </div>
  )
}

export default SingleUser