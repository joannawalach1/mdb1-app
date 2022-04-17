import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddProduct from "../crud/addProduct";
import FilterTable from "../components/filterTable";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import axios from "axios";
import ProductsTable from "../components/category_table";
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

  const printTable = () => {
    var doc = new jsPDF();
    doc.text(20, 20, "table");
    doc.setFont("Verdana");
    doc.autoTable({ html: 'table' })
    doc.save('Test.pdf');
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
      <FilterTable id="table" data={search(data)} />
      <Link to="/addProduct">
        <button className="btn btn-success me-1" onClick={() => AddProduct}>
          {" "}
          Add new product
        </button>
      </Link>
      <button className="btn btn-success" onClick={() => printTable()}>
        Export to pdf
      </button>
    </div>
  );
};

export default Products;
