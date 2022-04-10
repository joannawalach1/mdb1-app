import React from "react";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Products from "./pages/products";
import Category from "./pages/category";
import NavBar from "./components/navBar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./crud/addProduct";
import ViewProduct from "./crud/viewProduct";
import UpdateProduct from "./crud/updateProduct";
import AddCategory from "./crud/addCategory";
import ViewCategory from "./crud/viewCategory";
import UpdateCategory from "./crud/updateCategory";
import "./App.css";

function App() {
  return (
    <div className="container-fluid p-0">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/categories" element={<Category />}></Route>
          <Route exact path="/addProduct" element={<AddProduct />}></Route>
          <Route exact path="/deleteProduct/:id" element={<Products/>}></Route>
          <Route exact path="/viewProduct/:id" element={<ViewProduct />}></Route>
          <Route exact path="/editProduct/:id" element={<UpdateProduct/>}></Route>
          <Route exact path="/addCategory" element={<AddCategory />}></Route>
          <Route exact path="/deleteCategory/:id" element={<Category/>}></Route>
          <Route exact path="/viewCategory/:id" element={<ViewCategory />}></Route>
          <Route exact path="/editCategory/:id" element={<UpdateCategory/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
