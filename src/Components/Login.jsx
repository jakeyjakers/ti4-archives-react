import React, {useState} from 'react'
import { GALACTIC_API } from "../Config";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  
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
        console.log(res.data)
        alert(`You are now logged in.`)
        // navigate('/main')
      })
      .catch((err) => {
        console.log(`ERROR IN PROMISE OF LOGIN.JSX`)
        console.log(err)
      })
    }
  };
  return (
    <div>
    <form>
      <h3>Log In</h3>
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