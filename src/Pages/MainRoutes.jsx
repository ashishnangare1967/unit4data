import React from 'react'
import { Route, Routes } from "react-router-dom";
import Admin from './Admin';
import { Login } from './Login';
import EditPage from "./EditPage"
import Home from './Home';
import PrivateRoutes from '../components/PrivateRoutes';



const MainRoutes = () => {
  return (
   <Routes  >
    <Route path = '/' element ={<Home/>} />
    <Route path = '/add-product' element = {<PrivateRoutes> <Admin/> </PrivateRoutes>} />
    <Route path = '/login' element = {<Login/>} />
    <Route path ='/edit/:id' element={<PrivateRoutes><EditPage/></PrivateRoutes>} />
    <Route path ="*" element = {<h3> 404 pag3 not found</h3> }/>
   </Routes>
  )
}

export default MainRoutes
