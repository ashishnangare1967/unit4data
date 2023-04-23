import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes"
import axios from "axios"



export const login= (data) => (dispatch)=>{
    dispatch({type: LOGIN_REQUEST})
   

   return axios.post("https://reqres.in/api/login", data).then(res=> {
      dispatch({type: LOGIN_SUCCESS, payload:res.data.token})
      // console.log(res.data)
    }).catch((err)=>{
        dispatch(dispatch({type: LOGIN_FAILURE , payload:err}))
      });



   } 
