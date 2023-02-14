import { useContext, useState } from "react";

import "../styles/products.scss";

import RenderProducts from "../components/RenderProducts";
import { CartContext } from "../context/CartProvider";

export default function Products() {
  const { addProduct } = useContext(CartContext);
  const [category, setCategory] = useState("all");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="products-page">
      <div className="filter-buttons">
        <button value={"men's clothing"} onClick={handleChange}>
          Mens Clothing
        </button>
        <button value={"women's clothing"} onClick={handleChange}>
          Womens Clothing
        </button>
        <button value={"jewelery"} onClick={handleChange}>
          Jewelery
        </button>
        <button value={"electronics"} onClick={handleChange}>
          Electronics
        </button>
        <button value={"all"} onClick={handleChange}>
          Show All
        </button>
      </div>
      <div className="products">
        <RenderProducts addProduct={addProduct} category={category} />
      </div>
    </div>
  );
}
