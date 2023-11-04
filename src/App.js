import React, { useState } from "react";
import Header from "./components/Header";
import Routess from "./components/Routess";
import { BrowserRouter as Router } from "react-router-dom";

export const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (!productExist) {
      setCartItems([...cartItems, product]);
    }
  };

  const handleRemoveProduct = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
  };
  return (
    <div>
      <Router>
        <Header />
        <Routess
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
        />
      </Router>
    </div>
  );
};

export default App;
