import { useEffect, useState } from "react";

export default function RenderItems() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fetch Products Err: ", err));
  }, []);

  return products.map((product) => {
    console.log(product);
    console.log(product.title);
    return (
      <div key={product.id} className={"product"}>
        <div className={"product-wrapper"}>
          <img className={"image"} src={product.image} alt=""></img>
          <div className={"title"}>{product.title}</div>
          <br />
          <div className={"price"}>${product.price.toFixed(2)}</div>
          <br />
          <div className={"description"}>{product.description}</div>
        </div>
      </div>
    );
  });
}
