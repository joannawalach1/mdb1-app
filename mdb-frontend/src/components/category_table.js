import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ProductsTable = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    const results = await axios.get("http://localhost:5000/categories");
    setCategory(results.data.reverse());
  };

  const deleteCategory = async (id) => {
    await axios.delete(`http://localhost:5000/categories/${id}`);
    loadCategory();
  };

  if (!category) return null;

  return (
    <div className="table-responsive w-50">
      <table className="table table-sm table-light table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {category.map((cat) => {
            return (
              <tr key={cat.id}>
                <td></td>
                <td>{cat.id}</td>
                <td>{cat.category}</td>

                <td className="productstable__">
                  <Link to={`/viewCategory/${cat.id}`}>
                    <button className="btn btn-sm btn-light text-primary m-1">
                      <FontAwesomeIcon icon={faEye} color="primary" size="xl" />
                    </button>
                  </Link>
                  <Link to={`/editCategory/${cat.id}`}>
                    <button className="btn btn-sm btn-light text-success m-1">
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        color="success"
                        size="xl"
                      />
                    </button>
                  </Link>

                  <Link to={`/deleteCategory/${cat.id}`}>
                  <button className="btn btn-sm btn-light text-danger m-1">
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      color="danger"
                      size="xl"
                      onClick={() => deleteCategory(cat.id)}
                    />
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ProductsTable;
