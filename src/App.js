import React, { useState, useEffect } from "react";
import Products from "../src/components/Products/Products";

import "./App.css";
import { commerce } from "../src/lib/commerce";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import pages & components
import Home from "../src/pages/Home";

import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  //fetch the data from CommerceJS api
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  //fetch cart data from Commerce api
  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
  };

  //method for adding products to cart
  const handleAddToCart = async (productId, quantity) => {
    const cart = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const cart = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  //empty array so it starts on render AKA componentdidmount
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <Router>
      <Navbar totalItems={cart.total_items} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products
            products={products}
            onAddToCart={handleAddToCart}
            handleUpdateCartQty
          />
        </Route>
        <Route exact path="/cart">
          <Cart
            cart={cart}
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
