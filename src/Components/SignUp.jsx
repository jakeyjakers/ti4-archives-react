import React, { useState, useRef } from "react";
import { GALACTIC_API } from "../Config";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const navigate = useNavigate()

  const signupHandler = (event) => {
    event.preventDefault();
    console.log(username)

    if (password !== passwordCheck) {
      alert(`Passwords do not match. Please check and try again.`);
      return;
    }
    if (email.length < 10 || !email.includes("@")) {
      alert(`Please enter a valid email.`);
      return;
    } 
    else {

    const bodyObj = {
      username: username,
      password: password,
      email: email,
    };

    axios
      .post(`${GALACTIC_API}/register`, bodyObj)
      .then((res) => {
        console.log(`SUCCES IN REGISTERING - PROMISE IN SIGN UP.JS`)
        console.log(res.data)
        // navigate('/login')
        
      })
      .catch((err) => {
        console.log(`ERROR IN PROMISE OF SIGNUP.JSX`)
        console.log(err)
      })
    }
  };

  return (
    <div>
      <form>
        <h3>Sign up!</h3>
        <input
          type="text"
          placeholder="create a username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="email"
          placeholder="email address"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="create a password"
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
        <button onClick={signupHandler}>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
