import React, {useState, useContext} from 'react'
import { GALACTIC_API } from '../Config'
import AuthContext from './Store/Authcontext'
import axios from 'axios'
import './Newarchive.css'

const Newarchive = () => {

  const {token, userId} = useContext(AuthContext)
  console.log(userId)

  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [length, setlength] = useState('')
  const [amount, setAmount] = useState('')
  const [races, setRaces] = useState([])
  const [victor, setVictor] = useState('')
  const [story, setStory] = useState('')


  const submitHandler = (event) => {
    event.preventDefault()

    const requiredValues = {
      title: title,
      length: length,
      amount: amount,
      races: races,
      victor: victor,
    }
    console.log(`CONSOLE LOG BEFORE REQUIREDVALUES`)
    console.log(requiredValues)

    const keys = Object.values(requiredValues)

    for(let i = 0; i < keys.length; i++){
      if(keys[i].length === 0 || keys[i] === '') {
        console.log(`BREAKING OUT OF LOOP`)
        return
      } else {
        console.log(`CONSOLE LOG BEFORE KEYS LOG`)
        console.log(keys[i])
        console.log(`CONSOLE LOG AFTER KEYS`)
      
      }
    }
        const bodyObj = {
          title,
          length,
          amount,
          races,
          victor,
          story,
        }
        console.log(bodyObj)
        axios
          .post(`${GALACTIC_API}/add-archive`,
          {bodyObj: bodyObj, userId: userId},
          {
          headers: {
            authorization: token,
          }
          },
          )
          //axios.post(url[, data[, config]])
          .then((res) => {
            console.log(res.data)
            alert(`Archive succesfully submitted!`)
          })
          .catch((err) => {
            console.log(`ERROR IN PROMISE OF NEWARCHIVE.JSX`)
            console.log(err)
            alert(`Whoops! There was an error in submitting your archive, try again please.`)
           })
      
    setTitle('')
    setlength('')
    setAmount('')
    setRaces([])
    setVictor('')
    setStory('')
  }

  return (
    <div className='form__container'>
      <form className='form__form'>
        <input type='image' alt='picture of a board game.' />
        <input type='text' placeholder='Game Title' name='title' value={title} onChange={(event)=>setTitle(event.target.value)}/>
        <input type='text' placeholder='Game length, ex: 6 hours 45 minutes' name='length' value={length} onChange={(event)=>setlength(event.target.value)}/>
        <input type='number' placeholder='Amount Of Players' name='amount' value={amount} onChange={(event)=>setAmount(event.target.value)}/>
        <input type='text' placeholder='Races, ex: Xxchaa, Sol etc...' name='races' value={races} onChange={(event)=>setRaces(event.target.value)}/>
        <input type='text' placeholder='Victor' name='victor' value={victor} onChange={(event)=>setVictor(event.target.value)}/>
        <textarea placeholder='Game Story' name='story' value={story} onChange={(event)=>setStory(event.target.value)}/>
        <button onClick={submitHandler}>Submit Archive</button>
      </form>
    </div>
  )
}

export default Newarchive