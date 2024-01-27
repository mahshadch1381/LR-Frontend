import React from "react";
import ReactDom from "react-dom/client";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Panel from "./components/Panel";
import Profile from "./components/Profile";
import Search from "./components/Search";
import PanelProduct from "./components/PanelProduct";
import Aboutus from "./components/Aboutus";
import AdminLogin from "./components/AdminLogin";
import AdminPanel from "./components/AdminPanel";
import Seller from "./components/Seller";
import SellerProfile from "./components/SellerProfile"; 
import SellerLogin from "./components/SellerLogin";
import SellerProduct from "./components/SellerProduct";
import ProductCard from "./components/SellerCard";
import SellerEdit from "./components/SellerEdit";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/card" element={<ProductCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/seller-product" element={<SellerProduct />} />
        <Route path="/seller-edit/:id" element={< SellerEdit />} />
        <Route path="/seller-login" element={<SellerLogin />} />
        <Route path="/seller-profile" element={<SellerProfile />} />
        <Route path="/panel/:id" element={<PanelProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/search" element={<Search />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
