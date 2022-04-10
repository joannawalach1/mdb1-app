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
  const [product, setProduct] = useState([]);
  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const results = await axios.get("http://localhost:5000/products");
    setProduct(results.data.reverse());
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    loadProduct();
  };

  if (!product) return null;

  return (
    <div className="table-responsive">
      <table className="table table-sm table-light table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product) => {
            return (
              <tr key={product.id}>
                <th scope="row"></th>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td className="productstable__">
                  <Link to={`/viewProduct/${product.id}`}>
                    <button type="button" className="btn btn-sm btn-primary m-1">
                      <FontAwesomeIcon
                        icon={faEye}
                        color="white"
                        size="xl"
                      />
                    </button>
                  </Link>
                  <Link to={`/editProduct/${product.id}`}>
                    <button type="button" className="btn btn-sm btn-success m-1">
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                      
                        color="white"
                        size="xl"
                      />
                    </button>
                  </Link>
                  <Link to={`/deleteProduct/${product.id}`}>
                    <button type="button" className="btn btn-sm btn-danger m-1">
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        color="white"
                        size="xl"
                        onClick={() => deleteProduct(product.id)}
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
