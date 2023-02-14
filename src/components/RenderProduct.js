import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

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
    <div>
      <div>
        <div className="item-title-description">
          <h1>{product.title}</h1>
          <h3>{product.description}</h3>
        </div>
        <img src={product.image} alt={"product"} />
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
