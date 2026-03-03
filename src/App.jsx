import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import Brands from "./Components/Brands";
import Footer from "./Components/Footer";


import Productlist from "./Pages/Productlist";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Connect from "./Pages/Connect";
import Checkout from "./Pages/Checkout";
import Orders from "./Pages/Orders";
import Invoice from "./Pages/Invoice";
import Productss from "./Pages/Productss";
import Confirm from "./Pages/Confirm"; 
import SuccessPage from "./Pages/SuccessPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Categories />
              <Products />
              <Brands />
            </>
          }
        />
        <Route path="/productlist" element={<Productlist />} />
        <Route path="/categories/:categoryName" element={<Productss />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
        
        <Route path="/confirm" element={<Confirm />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkout" element={<Checkout />} />
       <Route path="/invoice/:id" element={<Invoice />} />
        <Route path="/order-success/:id" element={<SuccessPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;