import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'; 

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
