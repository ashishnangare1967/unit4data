import { POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS, GET_ONE_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS } from "../actionTypes"


const initialState = {
    isLoading : false,
    isError: false,
    product : []
}

export const reducer = (state = initialState, {type , payload})=>{
    switch(type){
        case PRODUCT_REQUEST : return {...state, isLoading:true }
        case PRODUCT_FAILURE : return { ...state, isLoading: false, isError: true}
        case POST_PRODUCT_SUCCESS : return { ...state, isLoading:false }
        case GET_PRODUCT_SUCCESS : return {...state, isLoading: false, product: payload}
        case DELETE_PRODUCT_SUCCESS: return {...state, isLoading:false}
        case GET_ONE_PRODUCT_SUCCESS : return {...state, isLoading: false, product: payload}
        case PATCH_PRODUCT_SUCCESS : return {...state, isLoading: false, product: payload}
        default : return state
    }

} 