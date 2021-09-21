import React, { useState, useEffect } from "react";
import Products from "../components/Products/Products";
import { commerce } from "../lib/commerce";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  //fetch the data from CommerceJS api
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  //fetch cart data from Commerce api
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  //empty array so it starts on render AKA componentdidmount
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <Products products={products} onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  );
};

export default ProductsPage;
