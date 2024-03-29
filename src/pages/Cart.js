import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

function renderCart(cart) {
  return cart.map((product) => {
    return (
      <div className="product-card">
        <img className="image" src={product.image} alt="product"></img>
        <h4>{product.title}</h4>
        <h6 className="description">{product.description}</h6>
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
      <div className="checkout-section">
        <h2> TOTAL: ${getTotal().toFixed(2)}</h2>
        {cart.length > 0 && (
          <div className="buttons">
            <button onClick={() => clearCart()}>Clear Cart</button>
            <button>Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}
