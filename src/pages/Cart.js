import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

let total = 0;
function renderCart(cart) {
  return cart.map((product) => {
    console.log(total);
    return (
      <div>
        <h4>{product.title}</h4>
        <h6>{product.description}</h6>
        <img className="image" src={product.image} alt="product"></img>
        <h6>${product.price.toFixed(2)}</h6>
      </div>
    );
  });
}

export default function CartPage() {
  const { cart, getTotal, clearCart } = useContext(CartContext);
  return (
    <div>
      <div>{renderCart(cart)}</div>
      <h2> TOTAL: ${getTotal().toFixed(2)}</h2>
      <button onClick={() => clearCart()}>Clear Cart</button>
    </div>
  );
}
