import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { deleteProduct, getProduct } from '../redux/productReducer/action';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

const ProductCard = ({id, name, price, brand, category, image, gender}) => {
  const dispatch = useDispatch();
const handleDelete= ()=>{
  dispatch(deleteProduct(id)).then(()=>{
    dispatch(getProduct())
  })
  
}

  return (
    <Div>
      <img src={image} />
      <h1>{name}</h1>
      <h3>Price: {price}</h3>
      <h3>Categoy: {category}</h3>
      <h3>Gender: {gender}</h3>
      <Link to={`edit/${id}`}><button>Link</button></Link>
      
      <button onClick={handleDelete}>Delete</button>
    </Div>
  )
}

const Div=styled.div`
/* height: 300px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    border: none;
    padding: 2px;
  }
`



export default ProductCard
