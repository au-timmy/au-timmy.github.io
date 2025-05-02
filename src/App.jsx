import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Weapons from "./pages/Weapons";
import Accessories from "./pages/Accessories";
import Armor from "./pages/Armor";
import Checkout from "./pages/Checkout";
import Invoice from "./pages/Invoice";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  const addToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (!exists) {
        setQuantities((q) => ({ ...q, [item.id]: 1 }));
        return [...prev, item];
      } else {
        updateQuantity(item.id, (quantities[item.id] || 1) + 1);
        return prev;
      }
    });
  };

  const totalQty = cartItems.reduce((acc, item) => {
    const qty = quantities[item.id] || 1;
    return acc + 1 * qty;
  }, 0);

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    setQuantities((prev) => {
      const newQuantities = { ...prev };
      delete newQuantities[id];
      return newQuantities;
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: newQuantity,
    }));
  };

  const cartClearer = () => {
    setCartItems([]);
    setQuantities({});
  };

  return (
    <>
      <BrowserRouter>
        <Header
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          quantities={quantities}
          updateQuantity={updateQuantity}
          totalQty={totalQty}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/weapons" element={<Weapons addToCart={addToCart} />} />
          <Route path="/armor" element={<Armor addToCart={addToCart} />} />
          <Route
            path="/accessories"
            element={<Accessories addToCart={addToCart} />}
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                quantities={quantities}
                updateQuantity={updateQuantity}
                totalQty={totalQty}
                cartClearer={cartClearer}
              />
            }
          />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
