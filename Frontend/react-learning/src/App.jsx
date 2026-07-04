import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./home";
import Products from "./products";
import AddProduct from "./addProduct";

function App() {
  return (
    <BrowserRouter> {/*Enables routing in the entire application Think:"Router ON"*/}

      <nav>

        <Link to="/">Home</Link>

        {" | "}

        <Link to="/products">Products</Link>{/*When user clicks Products, navigate to /products.*/}

        {" | "}

        <Link to="/add">Add Product</Link>

      </nav>

      <hr />

      <Routes>{/*Container for all routes.Think:"List of available pages"*/}

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/add" element={<AddProduct />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;