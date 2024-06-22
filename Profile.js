import React from 'react'
import ChangeProfile from '../components/ChangeProfile'
import { useContext } from 'react'
import { AppContext } from '../CreateContext'

const Profile = () => {
  const {username,setUserName} = useContext(AppContext)
  return (
    <div>
        <h1>Profile, User is {username} 
            <ChangeProfile/>
        </h1>
        </div>
  )
}

export default Profile