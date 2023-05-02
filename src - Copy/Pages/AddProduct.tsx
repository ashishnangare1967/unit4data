import React from "react";
import { Navbar } from "../Components/Navbar";
import {useState} from 'react'
import axios from "axios";
import { addProduct } from "../api";
import { prod } from "../App";
import { useLocation } from "react-router-dom";

export const AddProduct = () => {
  const [data, setData] = useState<prod>({
    name: "",
    brand: "",
    price: 0,
    image: "",
    like: 0,
    dislike: 0,
  })
const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
  const {value,type, name} = e.target
  setData({...data, [name]: type==="text"? value : +value  })
}

const handleSubmit= (e:React.MouseEvent<HTMLFormElement> )=>{
  e.preventDefault()
  addProduct(data)
}

// const location= useLocation().pathname

  return (
    <div>
      <Navbar  val="Add Product Page"  />
      <form onSubmit={handleSubmit}>
        <input className="product-name"  placeholder="name" value={data.name} name="name" onChange={handleChange} type="text" />
        <input className="product-brand" placeholder="brand" value={data.brand} name="brand" onChange={handleChange} type="text" />
        <input className="product-image" placeholder="image" value={data.image} name="image" onChange={handleChange} type="text" />
        <input className="product-price"  placeholder="price" value={data.price} name="price" onChange={handleChange} type="number" />
        <input className="submit-form" type="submit" placeholder="submit"/>
      </form>
    </div>
  );
};
