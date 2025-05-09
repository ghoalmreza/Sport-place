import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import AdminProductPanel from "./pages/AdminProductPanel";
import ProductCard from "./components/ProductCard";

const sampleProduct = {
  image: "https://via.placeholder.com/300",
  title: "توپ بسکتبال",
  description: "توپ حرفه‌ای برای تمرین و مسابقه",
  price: "۴۵۰٬۰۰۰",
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<div className='p-4'><ProductCard product={sampleProduct} onAddToCart={() => alert("افزوده شد!")} /></div>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<AdminProductPanel />} />
        </Routes>
      </div>
    </Router>
  );
}
