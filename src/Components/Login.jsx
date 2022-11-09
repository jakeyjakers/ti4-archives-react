import React, {useState, useContext} from 'react'
import AuthContext from './Store/Authcontext';
import { GALACTIC_API } from "../Config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css'

const Login = () => {
  const authCtx = useContext(AuthContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const navigate = useNavigate()


  const loginHandler = (event) => {
    event.preventDefault();

    if (password !== passwordCheck) {
      alert(`Passwords do not match. Please check and try again.`);
      return;
    } 
    else {

    const bodyObj = {
      username: username,
      password: password,
    };

    axios
      .post(`${GALACTIC_API}/login`, bodyObj)
      .then((res) => {
        if(res.ok) {
          console.log(`SUCCESS IN LOGIN, LOGIN.JS`)
        }
        console.log(`AFTER AUTH IN LOGIN`)
        console.log(res.data)
        console.log(res.data.token, res.data.exp, res.data.userId)
        alert(`You are now logged in.`)
        authCtx.login(res.data.token, res.data.exp, res.data.userId)

        navigate('/main')
      })
      .catch((err) => {
        console.log(`ERROR IN PROMISE OF LOGIN.JSX`)
        console.log(err)
      })
    }
    setUsername('')
    setPassword('')
    setPasswordCheck('')
  };
  return (
    <div className='form__container'>
      <h3>Log In</h3>
    <form className='form__form'>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input
        type="password"
        placeholder="double check password"
        name="passwordcheck"
        value={passwordCheck}
        onChange={(event) => setPasswordCheck(event.target.value)}
      />
      <button onClick={loginHandler}>Submit</button>
    </form>
  </div>
  )
}

export default Login