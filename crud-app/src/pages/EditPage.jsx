import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { editProduct } from '../redux/productReducer/action'
// import { getOneProduct } from '../redux/productReducer/action'



const EditPage = () => {
  const{id} = useParams()
  const data= useSelector(state=> state.productReducer.product);
  const[price, setPrice] = useState('')
  const [dataa, setData]= useState({})

  const dispatch = useDispatch()
  
  let one;
  useEffect(()=>{
    one = data.filter(el => {
      return el.id === +id
    })
    let a = one[0].price
    setData(one[0])
    setPrice(a)
  },[])

  const handleChange=(e)=>{
    setPrice(e.target.value)
  }

  const handleEdit = ()=>{
    dispatch(editProduct(id,{...dataa, price }))
  }
 
  return (
    <div>
     <input onChange={handleChange} type="text" value={price} />
     <button onClick={handleEdit}>Update</button>
    </div>

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

export default EditPage
