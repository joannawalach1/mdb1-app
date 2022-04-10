import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCategory = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [categories, setCategories] = useState({
    category: "",
  });

  const { category } = categories;
  const onInputChange = (e) => {
    setCategories({ ...categories, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadCategory();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/categories/${id}`, categories);
    navigate("/categories");
  };

  const loadCategory = async () => {
    const result = await axios.get(`http://localhost:5000/categories/${id}`);
    setCategories(result.data);
  };

  return (
    <div className="container w-25 p-5">
      <h3>Update Product</h3>
      <hr className="mb-5"></hr>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-dark mb-4">
          <label htmlFor="category" className="form-label">
            Category:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={category}
            placeholder="name"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-success btn-block mb-4">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateCategory;
