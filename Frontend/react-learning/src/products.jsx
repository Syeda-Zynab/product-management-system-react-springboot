import { useEffect, useState } from "react";

function Products() {

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editName, setEditName] = useState("");
  const [editQty, setEditQty] = useState("");
  const [editCost, setEditCost] = useState("");

  useEffect(() => {

    fetch("http://localhost:8080/app/readall")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });

  }, []);

  const deleteProduct = async (id) => {

  await fetch(
    `http://localhost:8080/app/delete/${id}`,
    {
      method: "DELETE"
    }
  );

  alert("Product Deleted Successfully");

  setProducts(
    products.filter((product) => product.pid !== id)
  );

};

const updateProduct = async () => {

  await fetch(
    `http://localhost:8080/app/update/${selectedProduct.pid}`,
    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json" 
      }, 

      body: JSON.stringify({

        pname: editName,
        pqty: editQty,
        pcost: editCost

      })

    }
  );

  alert("Product Updated Successfully");

setProducts(
  products.map((product) =>
    product.pid === selectedProduct.pid
      ? {
          ...product,
          pname: editName,
          pqty: editQty,
          pcost: editCost
        }
      : product
  )
);

setSelectedProduct(null);

};


  return (
    <div>

      <h1>Products List</h1>

      {
  selectedProduct && (
    <div>

      <h2>Selected Product</h2>

      <p>Name: {selectedProduct.pname}</p>

      <p>Quantity: {selectedProduct.pqty}</p>

      <p>Cost: {selectedProduct.pcost}</p>

      <hr />

    </div>
  )
}
{
  selectedProduct && (

    <div>

      <h2>Update Product</h2>

    {/*controlled component.*/}
      <input
        type="text"
        value={editName} 
        onChange={(e) => setEditName(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        value={editQty}
        onChange={(e) => setEditQty(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        value={editCost}
        onChange={(e) => setEditCost(e.target.value)}
      />

      <br /><br />

      <button onClick={updateProduct}>
      Update Product
      </button>

    </div>

  )
}

      {products.map((product) => (
       <div
    key={product.pid}
    className="product-card"
      >

  <h3>{product.pname}</h3>

  <p>Quantity: {product.pqty}</p>

  <p>Cost: {product.pcost}</p>

  <button onClick={() => deleteProduct(product.pid)}>
    Delete
  </button>

  <button
  onClick={() => {

    setSelectedProduct(product);

    setEditName(product.pname);
    setEditQty(product.pqty);
    setEditCost(product.pcost);

  }}
>
  Edit
</button>

  <hr />

</div>
      ))}

    </div>
  );
}

export default Products;