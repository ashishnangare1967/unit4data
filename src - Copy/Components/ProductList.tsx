import React, {useState, useEffect} from "react";
import { prod } from "../App";
import { deleteProduct, getProducts, updateDisLike, updateLike } from "../api";
import { ProductCard } from "./ProductCard";

interface mm{
  data:prod[];
  setData: React.Dispatch<React.SetStateAction<prod[]>>
}
const ProductList = ({data, setData}:mm) => {
 

  const handleAddLike = (like:number, id?:number)=>{
    updateLike(like,id).then(()=>{const getData= data.map(el=>el.id===id? {...el, like:like}:el)
    setData(getData)
  })
  }
  const handleAddDisLike = (dislike:number, id?:number)=>{
    updateDisLike(dislike,id).then(()=>{
      const getData= data.map(el=>el.id===id? {...el, dislike:dislike}:el)
      setData(getData)
  })
  }

  const handleDeleteData = (id?:number)=>{
    deleteProduct(id).then(()=>{
      const getData= data.filter(el=> el.id!==id)
      setData(getData)
    })
  }
  
  return (
    <div className={`product-list`}>
      {/* Add all product cards here in grid format  */
      data.map(el=><ProductCard handleDelete={handleDeleteData} handleLike={handleAddLike} handleDisLike={handleAddDisLike} key={el.id} {...el}/>)
      }
    </div>
  );
};

export default ProductList;
