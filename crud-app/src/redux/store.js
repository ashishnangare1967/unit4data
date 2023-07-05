import { applyMiddleware, legacy_createStore } from "@reduxjs/toolkit";

import { combineReducers } from "@reduxjs/toolkit";

import {reducer as authReducer} from "./authReducer/reducer"

import {reducer as productReducer} from "./productReducer/reducer"

import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    authReducer,
    productReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))