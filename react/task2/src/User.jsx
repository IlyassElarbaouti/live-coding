import React from 'react'

const User = ({user,age,key}) => {
    return (
        <li className="user">
            <span className="user__name">{user}</span>
            <span className="user__age">{age}</span>
          </li>
    )
}

export default User
