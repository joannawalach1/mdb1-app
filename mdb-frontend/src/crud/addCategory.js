import React, { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";

const AddCategory = () => {
  let navigate = useNavigate();
  const [cat, setCat] = useState({
    category: "",
  });

  const { category } = cat;
  const onInputChange = (e) => {
    setCat({ ...cat, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:5000/categories`, cat);
    navigate("/categories");
  };

  if (!cat) return "No post!";

  return (
    <div className="container w-50 p-5">
      <h3 className="h3">Add category</h3>
      <hr className="mb-5"></hr>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-dark mb-4">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={category}
            placeholder="category"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-success btn-block mb-4">
          Create Product
        </button>
      </form>
    </div>
  );
}
export default AddCategory;
