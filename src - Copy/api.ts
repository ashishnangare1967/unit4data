import axios, { AxiosResponse } from "axios";
import { prod } from "./App";

const URL = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`


 
export const addProduct = async (data:prod) =>{
  // Add product functionality here
 const res:AxiosResponse<prod> = await axios.post( URL, data)
 return res.data
};



export const getProducts = async () => {
  // Get products functionality
  const res:  AxiosResponse<prod[]> = await axios.get(URL);
  return res.data
};

export const updateLike = async( like:number, id?:number) => {
  // Update like functionality
  const res:  AxiosResponse<prod[]> = await axios.patch(`${URL}/${id}`, {like:like});
  return res.data
};

export const updateDisLike = async( dislike:number, id?:number) => {
  // Update dislike functionality
  const res:  AxiosResponse<prod[]> = await axios.patch(`${URL}/${id}`, {dislike:dislike});
  return res.data
};

export const deleteProduct = async(id?:number) => {
  // Delete functionality
  const res:  AxiosResponse<prod[]> = await axios.delete(`${URL}/${id}`);
  return res.data
};
