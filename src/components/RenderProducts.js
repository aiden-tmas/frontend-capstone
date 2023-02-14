import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Truncate from "../helpers/truncate";

export default function RenderProducts(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fetch Products Err: ", err));
  }, []);

  return products.map((product) => {
    return props.category === "all" ? (
      <div className="product-card">
        <div key={product.id} className="product">
          <NavLink className="product-link" to={`/product/${product.id}`}>
            <div className="product-wrapper">
              <img className="image" src={product.image} alt="item"></img>
              <div className="title">{Truncate(product.title, 40)}</div>
              <br />
              <div className="price">${product.price.toFixed(2)}</div>
              <br />
              <div className="description">
                {Truncate(product.description, 100)}
              </div>
            </div>
          </NavLink>
          <div className="button-wrapper">
            <button
              className="add-to-cart-button"
              onClick={() => props.addProduct(product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    ) : product.category === props.category ? (
      <div className="product-card">
        <div key={product.id} className="product">
          <NavLink className="product-link" to={`/product/${product.id}`}>
            <div className="product-wrapper">
              <img className="image" src={product.image} alt="item"></img>
              <div className="title">{Truncate(product.title, 40)}</div>
              <br />
              <div className="price">${product.price.toFixed(2)}</div>
              <br />
              <div className="description">
                {Truncate(product.description, 100)}
              </div>
            </div>
          </NavLink>
          <div className="button-wrapper">
            <button
              className="add-to-cart-button"
              onClick={() => props.addProduct(product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div></div>
    );
  });
}
