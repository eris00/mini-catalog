import { Routes, Route } from "react-router-dom";
import { getAllProducts } from './api/services/products';
import './App.css'
import Layout from './layout/Layout'
import ProductGrid from './components/ProductGrid'
import { useEffect, useState } from 'react'
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import CartSidebar from "./components/CartSidebar";
import Header from "./components/Header";


function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  
  const items = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);


  // fetch datas
  useEffect(() => {
    getAllProducts().then(data => {      
      setProducts(data);
    })
  }, []);
  

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleChangeQuantity = (id, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setCart([]);
      setIsProcessing(false);
      alert("Checkout complete!");
    }, 2000);
  };

  return (
    <>
      <Layout
        header={<Header items={items} total={total} />}
        cartSidebar={
          <CartSidebar
            cart={cart}
            items={items}
            total={total}
            onRemove={handleRemoveFromCart}
            onChangeQuantity={handleChangeQuantity}
            onCheckout={handleCheckout}
            isProcessing={isProcessing}
          />
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <ProductGrid
                products={products}
                onAdd={handleAddToCart}
              />
            }
          />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
