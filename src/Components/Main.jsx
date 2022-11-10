import React, { useState, useContext, useEffect } from 'react'
import AuthContext from './Store/Authcontext'
import { GALACTIC_API } from '../Config'
import axios from 'axios'
import './Main.css'
import Archivecard from './Reusables/Archivecard'

const Main = () => {

  const { token } = useContext(AuthContext)

  const [archives, setArchives] = useState([])

  useEffect(() => {

      axios
        .get(`${GALACTIC_API}/get-all-archives`,
        {
          headers: {
            authorization: token
          }
        }
        )
        .then((res) => {
          console.log(res.data)
          console.log(res.data[0])
          console.log(res.data[0].id)
          setArchives(res.data)
        })
        .catch((err) => {
          console.log(`ERROR IN PROMISE OF GET ALL ARCHIVES MAIN.JSX`)
          console.log(err)
        })
  },[])

  
   const archiveDsplay = archives.map((archive, index) => {
      return (
        <Archivecard archive={archive} key={archive.id} id={archive.id}/>
   )})

        // add search feature later. maype a dropdown or checkbox
        // that will then run the appropriate filter or map function?

  return (
    <div className='main__main'>
      {/* <Archivecard props={archives}/> */}
      <div className='main__archive__display'>
      {archiveDsplay}
      </div>
    </div>
  )
}

export default Main