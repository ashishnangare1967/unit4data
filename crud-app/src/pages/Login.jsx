import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {login} from '../redux/authReducer/action'
import { useNavigate } from "react-router-dom";

// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

import styled from "styled-components";
import { useLocation} from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword]= useState('')
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  // console.log(location)

  const auth = useSelector( state => state.authReducer.isAuth )
  const error = useSelector( state => state.authReducer.error )
  console.log(auth)

  function submitHandleLog (){
   const userData = {
    email,
    password,
   }
   dispatch(login(userData)).then(()=>{
    navigate(location.state)
   })
  //  const nav= useNavigate()
  }

  
  return (
    <DIV auth={auth} error={error}>
      <h2>{auth? "Login Successful" :  "Login to continue"}</h2>
      <input data-testid="user-email" type="email" placeholder="Email" onChange={e=>{setEmail(e.target.value)}}   value={email} />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e=>{setPassword(e.target.value)}}
      />
      <button onClick={submitHandleLog} data-testid="user-login">Log In</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;
h2{
  color: ${ ({auth }) => auth? "green" : "red"}
}
  input {
    width: 80%;
    height: 30px;
    font-size: larger;
    border : 1px solid ${({error})=> (error? "red":"green")}
  }
  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
