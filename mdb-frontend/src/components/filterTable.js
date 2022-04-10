import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function FilterTable({ data }) {
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

  const columns = data[0] && Object.keys(data[0]);
  return (
    <table className="table table-responsive" cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          {data[0] &&
            columns.map((heading, index) => <th key={index}>{heading}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column, index) => (
              <td key={index}>{row[column]}</td>
            ))}
            <td>
              <Link to={`/viewProduct/${row.id}`}>
                <button type="button" className="btn btn-sm btn-primary m-1">
                  <FontAwesomeIcon icon={faEye} color="white" size="xl" />
                </button>
              </Link>
              <Link to={`/editProduct/${row.id}`}>
                <button type="button" className="btn btn-sm btn-success m-1">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    color="white"
                    size="xl"
                  />
                </button>
              </Link>
              <Link to={`/deleteProduct/${row.id}`}>
                <button type="button" className="btn btn-sm btn-danger m-1">
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    color="white"
                    size="xl"
                    onClick={() => deleteProduct(row.id)}
                  />
                </button>
              </Link>
            </td>
          </tr>
        ))}
        <tr>
          <td>W zestawie znajduje się: </td>
          <td>{product.length} komplety </td>
        </tr>
        <tr>
          <td>Cena zestawu: </td>
          <td>
            {product.reduce(
              (total, currentValue) =>
                (total = Number(total) + Number(currentValue.price)),
              0
            )}{" "}
            zł{" "}
          </td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}
