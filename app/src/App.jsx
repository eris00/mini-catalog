import { Routes, Route } from "react-router-dom";
import { getAllProducts } from './api/services/products';
import './App.css'
import Layout from './layout/Layout'
import ProductGrid from './components/ProductGrid'
import { useEffect, useState } from 'react'
import ProductDetail from "./pages/ProductDetail/ProductDetail";


function App() {

  const [products, setProducts] = useState([]);

  // fetch datas
  useEffect(() => {
  getAllProducts().then(data => {
    setProducts(data);
  })
}, [])


  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<ProductGrid products={products} />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
      </Routes>
    </Layout>
    </>
  )
}

export default App
