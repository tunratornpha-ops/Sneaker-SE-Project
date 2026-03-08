import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./page/home.tsx";
import Men from "./page/Men.tsx";
import Women from "./page/Women.tsx";
import Kids from "./page/Kids.tsx";
import Bag from "./page/bag.tsx";
import User from "./page/User.tsx";
import Login from "./page/login.tsx";
import Register from "./page/register.tsx";
import ProductDetail from "./page/Productdetail.tsx";
import Address from "./page/address.tsx";
import Status from "./page/status.tsx";
import OrderSuccess from "./page/success.tsx";
import AddAddress from "./page/AddAddress.tsx";
import Search from "./page/search.tsx";

import Navbar from "./components/navbar.tsx";
import AnnouncementBar from "./components/announcementbar.tsx";
import Footer from "./components/Footer.tsx";
import Complete from "./page/complete.tsx";
import Review from "./page/review.tsx";


function Layout() {

  const location = useLocation();

  const hideFooter =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <div className="w-screen min-h-screen">

      <AnnouncementBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/user" element={<User />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetail />}/>
        <Route path="/address" element={<Address />}/>
        <Route path="/status" element={<Status />}/>
        <Route path="/order-success" element={<OrderSuccess />}/>
        <Route path="/complete" element={<Complete/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/add-address" element={<AddAddress />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      {!hideFooter && <Footer />}

    </div>
  );
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;