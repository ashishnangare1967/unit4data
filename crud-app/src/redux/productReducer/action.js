import axios from "axios";
import {
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  POST_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  GET_ONE_PRODUCT_SUCCESS
} from "../actionTypes";





export const addProduct = (newProduct) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  axios
    .post("http://localhost:8080/product", newProduct)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: POST_PRODUCT_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const getProduct =(payload)=> (dispatch) =>{
  dispatch({type: PRODUCT_REQUEST})

 return axios.get("http://localhost:8080/product", {
    params:payload
  }).then((res)=>{
    // console.log(res.data)
    dispatch({ type: GET_PRODUCT_SUCCESS , payload: res.data })
  }).catch(err=>{
    dispatch({ type: PRODUCT_FAILURE })
  })
}

export const deleteProduct = (id) => (dispatch) =>{
  dispatch({type: PRODUCT_REQUEST})

  // const data =  axios.get(`http://localhost:8080/product`).then((res)=> {
  //   console.log(res.data) 
  //   let filtered = res.data.filter(el=> el.id!==id)
  //   console.log(filtered)
  // dispatch({tpye: DELETE_PRODUCT_SUCCESS, payload: filtered})
  // } )
  // console.log(data)

  

 return (axios.delete(`http://localhost:8080/product/${id}`).then((res)=>{
  dispatch({tpye: DELETE_PRODUCT_SUCCESS})
  }).catch(err=>{
    dispatch({ type: PRODUCT_FAILURE })
  }))
}



export const editProduct = (id,data) => (dispatch)=>{
  dispatch({type: PRODUCT_REQUEST})

  axios.put(`http://localhost:8080/product/${id}`,data, {
    
  }).then((res)=>{
    console.log(res.data)
    dispatch({ type: GET_ONE_PRODUCT_SUCCESS , payload: res.data })
  }).catch(err=>{
    dispatch({ type: PRODUCT_FAILURE })
  })

}


