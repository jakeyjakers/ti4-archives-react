import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../Store/Authcontext'
import Archivecard from '../Reusables/Archivecard'
import { GALACTIC_API } from '../../Config'
import './Accountmain.css'
import axios from 'axios'

const Accountmain = () => {

  const {userId, token} = useContext(AuthContext)
  const authCtx = useContext(AuthContext)
  const [archives, setArchives] = useState([])

  useEffect(() => {
    axios
      .get(`${GALACTIC_API}/get-user-archives/${userId}`, 
      {
        headers: {
          authorization: token
        }
      }
      )
      .then((res) => {
        console.log(res.data)
        setArchives(res.data)
       
      })
      .catch((err) => {
        console.log(`ERROR IN PROMIS OF GET USER ARCHIVES, ACCOUNTMAIN.JSX`)
        console.log(err)
      })
  },[])

  const archiveDsplay = archives.map((archive, index) => {
      return (
        <Archivecard archive={archive} key={archive.id} id={archive.id}/>
      )
    })


  const logoutHandler = () => {
    authCtx.logout()
  }

  return (
    <div className='account__main'>
      <button onClick={()=>logoutHandler()}>Log Out</button>
      <div className='account__archive__display'>
      {archiveDsplay}
      </div>
    </div>
  )
}

export default Accountmain