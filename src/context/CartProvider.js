import { useState, createContext } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function getTotal() {
    let total = 0;

    cart.forEach((product) => {
      total += product.price;
    });

    return total;
  }

  function addProduct(product) {
    setCart((c) => [...c, product]);
  }

  function clearCart() {
    if (window.confirm("Are you sure you want to remove your cart items?")) {
      setCart([]);
    }
  }

  const cartState = {
    cart,
    addProduct,
    clearCart,
    getTotal,
  };

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
}
