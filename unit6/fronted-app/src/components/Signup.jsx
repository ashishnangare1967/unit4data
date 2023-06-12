import React, { useState } from "react";
import { Link } from "react-router-dom";
import { URL } from "../URL";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    const payload = { email, pass, name };
    fetch(`${URL}/users/register`, { 
        method: "POST" ,
        headers: {
           "Content-Type" : "application/json"
        },
        body:JSON.stringify(payload)
    }).then(res=>res.json()).then(res=>console.log(res)).catch(err=>{
        console.log(err)
    });
    // console.log(payload);
    setEmail("");
    setName("");
    setPass("");
  };
  return (
    <div>
      <h3>registration Form</h3>
      <br />
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        placeholder="username"
        type="text"
      />
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
      <button onClick={handleSubmit}>Sign Up</button>
      <Link to='/login'>Login</Link>
    </div>
  );
};

export default Signup;
