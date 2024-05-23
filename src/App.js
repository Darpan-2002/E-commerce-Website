import React, {useState} from "react";
import Header from "./components/Header/header"
import Products from "./components/products/Products"
import Cart from "./components/cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

    const openCart = () => setShowCart(true);
    const closeCart = () => setShowCart(false);
  return (
    <div>
      <Header openCart={openCart}/>
      <Products />
      <Cart showCart={showCart} closeCart={closeCart}/>
    </div>
  );
}

export default App;
