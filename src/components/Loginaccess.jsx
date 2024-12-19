import React, { useContext } from 'react'
import { BlogStore } from '../store/Blogsstore'

const Loginaccess = () => {
  const {goback, handleLogout, getToken,getUserName } = useContext(BlogStore)
  return (
    <div>
        {getToken && getUserName ? <div  style={{display: "flex", justifyContent: "space-between"}}>
          <h1>Hello {getUserName},</h1>
          <button  style={{margin: "8px", width: "100px", borderRadius: "14px", backgroundColor: '#dc3545', color: "white", border: "none"}} onClick={handleLogout}>Logout</button>
        </div> : <button onClick={goback} className='w-auto btn btn-danger btn-lg m-3'>Hey! You need to login first.</button>}
      </div>
  )
}

export default Loginaccess