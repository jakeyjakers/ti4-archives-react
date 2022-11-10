import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../Store/Authcontext'
import { GALACTIC_API } from '../../Config'
import axios from 'axios'

const Accountdtls = () => {

  const {userId, token} = useContext(AuthContext)
  const authCtx = useContext(AuthContext)
  const [archives, setArchives] = useState([])

  const logoutHandler = () => {
    authCtx.logout()
  }
  
  return (
    <div>
      <button onClick={()=>logoutHandler()}>Log Out</button>
    </div>
  )
}

export default Accountdtls