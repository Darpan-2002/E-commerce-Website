import React, { useState } from "react";
import Header from "./components/Header/header"
import Products from "./components/products/Products"
import Cart from "./components/cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setcartItems] = useState([]);

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  const handleAddToCart = (productId, productName, productImage) => {
    // let updatedCartItems = cartItems;
    // updatedCartItems = updatedCartItems.concat({
    //   id: productId,
    //   name: productName,
    //   image: productImage,
    //   quantity: 1,
    // });
    const product_index = cartItems.findIndex(
      (item) => item.id === productId
    );
    if (product_index === -1) {
      const cartItem = {
        id: productId,
        name: productName,
        image: productImage,
        quantity: 1,
      }
      setcartItems((state) => [...state, cartItem]);
    }
    else {
      const updatedItems = [...cartItems];
      updatedItems[product_index].quantity += 1;
      setcartItems(updatedItems);
    }
    // setcartItems(updatedCartItems);
  };

  const handleIncreaseQuantity = (productId) => {
    const product_index = cartItems.findIndex(
      (item) => item.id === productId
    );
    const updatedItems = [...cartItems];
    updatedItems[product_index].quantity += 1;
    setcartItems(updatedItems);
  };

  const handleDecreaseQuantity = (productId) => {
    const product_index = cartItems.findIndex(
      (item) => item.id === productId
    );
    const qty = cartItems[product_index].quantity;
    let updatedItems = [...cartItems];
    if (qty === 1) {
      updatedItems = updatedItems.filter(
        (item, index) => index !== product_index
      )
    }
    else {
      updatedItems[product_index].quantity -= 1;
    }
    setcartItems(updatedItems)
  };

  return (
    <div>
      <Header openCart={openCart} />
      <Products onAddToCart={handleAddToCart} />
      <Cart
        showCart={showCart}
        closeCart={closeCart}
        cartItems={cartItems}
        onIncQuantity={handleIncreaseQuantity}
        onDecQuantity={handleDecreaseQuantity}
      />
    </div>
  );
}

export default App;
