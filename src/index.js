import React from "react";
import ReactDom from "react-dom/client";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Panel from "./components/Panel";
import Profile from "./components/Profile";
import Search from "./components/Search";
import PanelProduct from "./components/PanelProduct";
import Aboutus from "./components/Aboutus";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";




export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/panel/:id" element={<PanelProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/search" element={<Search />} />
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
