import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getProduct } from '../redux/productReducer/action'

const Navbar = () => {
const dispatch = useDispatch()
  const[query, setQuery] = useState('');
  let id = useRef()


  const paramObj ={
    q:query && query
  }

  useEffect(()=>{
    if(id.current){
      clearTimeout(id)
    }
      id.current = setTimeout(()=>{
        dispatch(getProduct(paramObj))
      },1000)
    
    
  },[query])

  return (
    <Div className=''>
      <Link to ='/'>Home</Link>
      <Link to ='/add-product'>Admin</Link>
      <Link to ='/login'>Login</Link>
      <Link to ='/edit/1'>Edit Page</Link>
      <input type= "text" placeholder='search'
      onChange={e=> setQuery(e.target.value)}
      /> 
    </Div>
  )
}
const Div = styled.div`
    display: flex;
    justify-content: space-around;
`
export default Navbar
