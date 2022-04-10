import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddProduct from "../crud/addProduct";
import FilterTable from "../components/filterTable";
import axios from "axios";
const Products = () => {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [searchColumns, setSearchColumns] = useState([
    "id",
    "name",
    "description",
    "category",
    "price",
  ]);

  useEffect(() => {
    loadProduct();
  }, []);
  const loadProduct = async () => {
    const results = await axios.get("http://localhost:5000/products");
    setData(results.data.reverse());
  };

  function search(rows) {
    return rows.filter((row) =>
      searchColumns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  }

  const columns = data[0] && Object.keys(data[0]);
  return (
    <div className="container-fluid p-5">
      <h3 className="h3">Products</h3>
      <form>
        <div className="form-dark d-flex flex-row mb-5 ">
          <label htmlFor="query" className="form-label me-3">
            Search:{" "}
          </label>
          <input
            type="text"
            className="form-control-sm me-2 w-25"
            placeholder="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          {columns &&
            columns.map((column, index) => (
              <label className="form-check-label" key={index}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={searchColumns.includes(column)}
                  onChange={(e) => {
                    const checked = searchColumns.includes(column);
                    setSearchColumns((prev) =>
                      checked
                        ? prev.filter((sc) => sc !== column)
                        : [...prev, column]
                    );
                  }}
                />
                {column}
              </label>
            ))}
        </div>
      </form>
      <FilterTable data={search(data)} />
      <Link to="/addProduct">
        <button className="btn btn-success" onClick={() => AddProduct}>
          {" "}
          Add new product
        </button>
      </Link>
    </div>
  );
};

export default Products;
