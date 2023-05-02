import React from "react";
interface value{
  val:string
}
// accept the page name as prop here
export const Navbar = ({val}:value) => {
  return (
    <div>
      <h2>Product List</h2>
      <a className="home-link" href="/">
        Home
      </a>
      <a className="add-product-link" href="/add-product">
        Add Product
      </a>
      <h3 data-testid="page-name">{val}</h3>
    </div>
  );
};
