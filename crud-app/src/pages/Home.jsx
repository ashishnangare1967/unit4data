import React from 'react'
import styled from 'styled-components'

import ProductList from '../components/ProductList'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div style={{textAlign:'center'}}>
        <h1>Products</h1>
    <DIV>
      
      <div className='sideBar'><Sidebar/></div>
      <div className='productList'><ProductList/></div>
     
    </DIV>
    </div>
  )
}

const DIV = styled.div`
  display: flex;
   .sideBar{
    width: 25%
  }
  .productList{
    width: 75%;
  }
  
`

export default Home
