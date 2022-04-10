import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container-fluid ms-4 p-1">
        <a className="navbar-brand text-white" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link active text-white">
              Home
            </Link>
            <Link to="/dashboard" className="nav-link text-white">
              Dashboard
            </Link>
            <Link to="/products" className="nav-link text-white">
              Products
            </Link>
            <Link to="/categories" className="nav-link text-white">
              Categories
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
