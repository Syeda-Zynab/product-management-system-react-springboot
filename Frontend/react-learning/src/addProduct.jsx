import { useState } from "react";

function AddProduct() {

  const [pname, setPname] = useState("");
  const [pqty, setPqty] = useState("");
  const [pcost, setPcost] = useState("");

  const saveProduct = async () => {

    const product = {
      pname,
      pqty,
      pcost
    };

    const response = await fetch(
      "http://localhost:8080/app/insert",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      }
    );

    const data = await response.json();

    console.log(data);

    alert("Product Added Successfully");

    setPname("");
    setPqty("");
    setPcost("");
  };

  return (
    <div className="product-card">

      <h1>➕ Add New Product</h1>

      <label>Product Name</label>
      <br />
      <input
        type="text"
        value={pname}
        placeholder="Enter Product Name"
        onChange={(e) => setPname(e.target.value)}
      />

      <br /><br />

      <label>Quantity</label>
      <br />
      <input
        type="number"
        value={pqty}
        placeholder="Enter Quantity"
        onChange={(e) => setPqty(e.target.value)}
      />

      <br /><br />

      <label>Cost (₹)</label>
      <br />
      <input
        type="number"
        value={pcost}
        placeholder="Enter Cost"
        onChange={(e) => setPcost(e.target.value)}
      />

      <br /><br />

      <button onClick={saveProduct}>
        Add Product
      </button>

    </div>
  );
}

export default AddProduct;