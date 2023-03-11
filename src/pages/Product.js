import { useContext } from "react";

import RenderProduct from "../components/RenderProduct";
import { CartContext } from "../context/CartProvider";

export default function Product(props) {
  const { addProduct } = useContext(CartContext);

  return (
    <div className={"product"}>
      <RenderProduct
        addProduct={addProduct}
        id={`${props.match.params.prod_id}`}
      />
    </div>
  );
}
