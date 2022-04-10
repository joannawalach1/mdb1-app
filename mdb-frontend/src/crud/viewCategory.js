import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewCategory = () => {
  const [cat, setCat] = useState({
   category: ""
  });

  const { id } = useParams();
  useEffect(() => {
    getCategory();
  },[]);

  const getCategory = async () => {
    const equipment = await axios.get(`http://localhost:5000/categories/${id}`);
    setCat(equipment.data);
    console.log(equipment.data)
  }
    
  return (
    <div className="container-fluid w-25 p-5">
      <h3 className="h3">View Category</h3>
      <hr className="mb-5"></hr>
      <p>Product id: {cat.id}</p>
      <p>Product name: {cat.category}</p>
      </div>
  )
}

export default ViewCategory;