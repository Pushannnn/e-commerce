import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Carousel from "./components/Carousel/Carousel.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Laptop from "./components/items/Laptop.jsx";
import Mobile from "./components/items/Mobile.jsx";
import Brands from "./components/Brands/Brands.jsx";
import CarouselProduct from "./components/items/CarouselProduct.jsx";
import AnnouncementBanner from "./components/Banner/AnnouncementBanner.jsx";
import ProductFive from "./components/items/ProductFive.jsx";
import Banner3 from "./components/Banner/Banner3.jsx";
import ItemTwo from "./components/items/ItemTwo.jsx";
import Login from "./components/Logins/Login.jsx";
import Register from "./components/Logins/Register.jsx";
import Forgetpassword from "./components/Logins/Forgetpassword.jsx";
import Viewallitemfirst from "./components/Product View/Viewallitemfirst.jsx";
import Viewallitemsecond from "./components/Product View/Viewallitemsecond.jsx";
import Viewallitemthird from "./components/Product View/Viewallitemthird.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Aboutus from "./components/About us/Aboutus.jsx";
import Blog from "./components/Blog/Blog.jsx";
import BlogDetail from "./components/Blog/BlogDetail.jsx";
import Feature from "./components/Feature/Feature.jsx";
import Favourite from "./components/Favourite/Favorite.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import { useState } from "react";


function App() {


  //for cart function
  const [cartCount, setCartCount] = useState(0);

  const addtoCart= () =>{
    setCartCount(cartCount +1);
  }


  return (
    <Router>

      <Navbar  cartCount={cartCount}/>
      <Routes>
        {/* 🏠 Home Page */}
        <Route
          path="/"
          element={
            <div className="container mx-auto px-4">
              <Carousel />
              <Laptop onAddToCart={addtoCart} />
              <Banner />
              <Mobile onAddToCart={addtoCart} />
              <Brands />
              <CarouselProduct onAddToCart={addtoCart} />
              <AnnouncementBanner />
              <ProductFive />
              <Banner3 />
              <ItemTwo />
            </div>
          }
        />

        {/* 🛒 Cart Page */}
        <Route path="/cart" element={<Cart />} />
        {/* 📝 About Us Page */}
        <Route path="/aboutus" element={<Aboutus />} />
        {/* 📰 Blog Page */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />

        <Route path="/feature" element={<Feature />} />

        <Route path="/dashboard" element={<Dashboard />} />

        {/* Logins */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<Forgetpassword />} />
        <Route path="/Viewallitemfirst" element={<Viewallitemfirst />} />
        <Route path="/Viewallitemsecond" element={<Viewallitemsecond />} />
        <Route path="/Viewallitemthird" element={<Viewallitemthird />} />
        <Route path="/favorite" element={<Favourite />} />

      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
