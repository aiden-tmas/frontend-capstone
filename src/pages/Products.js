import { useContext } from "react";

import "../styles/products.scss";

import RenderProducts from "../components/RenderProducts";
import { CartContext } from "../context/CartProvider";

export default function Products() {
  const { addProduct } = useContext(CartContext);

  return (
    <div className={"products"}>
      {console.log(addProduct)}
      <RenderProducts addProduct={addProduct} />;
    </div>
  );
}
