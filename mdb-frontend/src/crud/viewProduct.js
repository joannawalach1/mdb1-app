import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewProduct = () => {
  const [product, setProduct] = useState({
    name: "", 
    description: "",
    category: "",
    price: ""
  });

  const { id } = useParams();
  useEffect(() => {
    getProduct();
  },[]);

  const getProduct = async () => {
    const equipment = await axios.get(`http://localhost:5000/products/${id}`);
    setProduct(equipment.data);
    console.log(equipment.data)
  }
    
  return (
    <div className="container-fluid p-5">
      <h3 className="h3">ViewProduct</h3>
      <hr className="mb-5"></hr>
      <p>Product id: {product.id}</p>
      <p>Product name: {product.name}</p>
      <p>Product description: {product.description}</p>
      <p>Product category: {product.category}</p>
      <p>Product price: {product.price}</p>
    </div>
  )
}

export default ViewProduct;