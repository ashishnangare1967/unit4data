import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import ProductList from "../Components/ProductList";
import { useLocation } from "react-router-dom";
import { prod } from "../App";
import { getProducts } from "../api";

export const HomePage = () => {

  const [products, setProducts] = useState<prod[]>([]);

  useEffect(()=>{
    getdata()
  },[])

  const getdata = ()=>{
    getProducts().then((res:prod[])=>{
      console.log(res)
      setProducts(res)
     })
  }

  return (
    <div>
      <Navbar val ={"Home Page"} />
      <ProductList data={products} setData={setProducts} />
    </div>
  );
};
