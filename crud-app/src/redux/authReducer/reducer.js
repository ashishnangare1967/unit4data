import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";



const initialState ={
  isLoading: false,
  isError : false,
  isAuth: false,
  token: "",
  errorMessage: ''
}
export const reducer = (state = initialState, {type, payload}) => {
  // complete the reducer
  switch ( type ){
    case LOGIN_REQUEST: return {...state, isLoading:true}
    case LOGIN_SUCCESS: return { ... state, isLoading: false, token: payload, isAuth:true}
    case LOGIN_FAILURE: return {...state, isLoading:false, isError:true, errorMessage: payload }
    default : return state
  }



};
