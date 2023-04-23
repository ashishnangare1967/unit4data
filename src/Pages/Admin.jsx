import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productReducer/action";

const Admin = () => {
//   const [product , setProduct] = useState(initialState)

  const [data, setData] = React.useState({
    name: "",
    image: "",
    brand: "",
    price: 0,
    category: "",
    gender: "",
  });
  const dispatch = useDispatch()
  console.log(data);
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setData((data) => {
      return {
        ...data,[name]: type === "number" ? +value : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch (addProduct(data))
  }
  return (
    <div>
        <h1>Add Products</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          onChange={handleChange}
          name="name"
          value={data.name}
        />
        <input
          type="text"
          placeholder="Product Image"
          onChange={handleChange}
          name="image"
          value={data.image}
        />
        <input
          type="text"
          placeholder="Brand"
          onChange={handleChange}
          name="brand"
          value={data.brand}
        />
        <input
          type="number"
          placeholder="Price"
          onChange={handleChange}
          name="price"
          value={data.price}
        />
        <select
          id="category"
          value={data.category}
          onChange={handleChange}
          name="category"
        >
          <option value="">Select Category</option>
          <option value="top-wear">Top Wear</option>
          <option value="bottom-wear">Bottom Wear</option>
          <option value="shoees">Shoees</option>
        </select>
        <select
          id="category"
          value={data.gender}
          onChange={handleChange}
          name="gender"
        >
          <option value="">Select Gender</option>
          <option value="men">men</option>
          <option value="female">female</option>
          <option value="kids">kids</option>
        </select>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Admin;
