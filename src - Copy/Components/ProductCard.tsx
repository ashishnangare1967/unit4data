import React from "react";
import { prod } from "../App";
// import { updateLike } from "../api";
interface card extends prod{
  handleLike: (like:number,id?:number)=>void;
  handleDisLike: (dislike:number,id?:number)=>void;
  handleDelete: (id?:number)=>void;
}

export const ProductCard = ({
  id,
  price,
  name,
  brand,
  like,
  dislike,
  image,
  handleLike,
  handleDisLike,
  handleDelete
}: card) => {

  
  return (
    <div className={`product-card`}>
      {/* Add all elements of product card here */}
      <div className="product">
        <img
          src={image}
          alt="Product Image"
          className="product-image"
          width={'100px'}
        />
        <h2 className="product-name">{name}</h2>
        <p className="product-price">{price}</p>
        <p className="product-brand">{brand}</p>
        <button onClick={()=>handleLike(++like,id)} className="like-button" data-testid="like-button">
          like
        </button>
        <span className="product-like">{like}</span>
        <button onClick={()=>handleDisLike(++dislike,id)} className="dislike-button" data-testid="dislike-button">
          Dislike
        </button>
        <span className="product-dislike">{dislike}</span>
        <button onClick={()=>handleDelete(id)} className="delete-button" data-testid="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};
