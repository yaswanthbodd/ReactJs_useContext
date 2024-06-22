import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../CreateContext'

const ChangeProfile = () => {
    const [newUserName,setNewUserName] = useState("")
    const {setUserName} = useContext(AppContext)
  return (
    <div>
        <input placeholder='Enter Name...' onChange={(event)=>{ setNewUserName(event.target.value)}}/>
        <button onClick={()=>{
            setUserName(newUserName)
        }}>Change Username</button>
    </div>
  )
}

export default ChangeProfile