import { useEffect, useState } from "react";

import "../styles/product.scss";

export default function RenderProduct(props) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${props.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => {
        console.error("Get merch error: ", err);
      });
  }, [props.id]);

  return (
    <div className="product-card">
      <div className="product-wrapper">
        <div className="item-title-description">
          <img src={product.image} alt={"product"} className="product-image" />
          <h1>{product.title}</h1>
          <h3>{product.description}</h3>
        </div>
      </div>
      <div className="button-wrapper">
        <button
          className="add-to-cart-button"
          onClick={() => props.addProduct(product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
