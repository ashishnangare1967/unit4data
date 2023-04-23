import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import styled from 'styled-components'
import { getProduct } from '../redux/productReducer/action'
import { useLocation, useSearchParams } from 'react-router-dom'

const ProductList = () => {
 
    const products = useSelector( state => state.productReducer.product)
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    // console.log(searchParams.getAll("gender"))
    
    
    const location = useLocation()

    useEffect(()=>{
      let params= {
        gender:searchParams.getAll("gender"), 
        category: searchParams.getAll("Category"),
        _sort: searchParams.get('order') && 'price',
        _order: searchParams.get('order'),
        _page: searchParams.get('page'),
        _limit: searchParams.get('limit'),

        
      }
      dispatch(getProduct(params))
    },[location.search])

  return (
    <div>
    <Div>
      
      {products.length>0 && products.map(el=> <ProductCard key={el.id} {...el}/>)}
    </Div>
    </div>
  )
}

const Div = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 20px
`

export default ProductList
