import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { URL } from '../URL';

const Login = () => {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    const payload = { email, pass};
    fetch(`${URL}/users/login`, { 
        method: "POST" ,
        headers: {
           "Content-Type" : "application/json"
        },
        body: JSON.stringify(payload)
    }).then(res=>res.json()).then(
      (res)=>{
        console.log(res)
        localStorage.setItem("token", res.token)
      }
      ).catch(err=>{
        console.log(err)
    });
    
    setEmail("");
    setPass("");
  };
  return (
    <div>
      <h3>Login Form</h3>
      <br />
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        placeholder="email"
        type="emai"
      />
      <br />
      <input
        onChange={(e) => {
          setPass(e.target.value);
        }}
        value={pass}
        placeholder="password"
        type="password"
      />
      <br />
      <button onClick={handleSubmit}>Login</button>
      <Link to='/signup'>Signup</Link>
    </div>
  );
}

export default Login
