import React from 'react';
import CategoryTable from '../components/category_table';
import { Link } from "react-router-dom";
import AddCategory from '../crud/addCategory';


const Category = () => {
  return (
    <div className="container-fluid p-5">
      <h3 className="h3">Category</h3>
      <Link to="/addCategory">
      <button className="btn btn-light mb-4 text-success" onClick={() => AddCategory}> Add new category</button>
      </Link>
      <CategoryTable />
    </div>
  );
}


export default Category