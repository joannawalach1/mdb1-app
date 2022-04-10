import React from 'react';
import ProductsTable from '../components/products_table';
import { Link } from "react-router-dom";
import AddProduct from '../crud/addProduct';

const Products = () => {
  return (
    <div className="container-fluid p-5">
      <h3 className="h3">Products</h3>
      <Link to="/addProduct">
        <button className="btn btn-success mb-4" onClick={() => AddProduct}> Add new product</button>
      </Link>
      <ProductsTable/>
    </div>
  )
}

export default Products;