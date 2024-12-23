import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Maps from "./pages/Maps";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <Header />
    <main style={{ padding: "1rem" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;

