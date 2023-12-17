import React from "react";
import ReactDom from 'react-dom/client';
import Login from "./components/Login";
import Landing from "./components/Landing";
import Panel from "./components/Panel";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="Panel" element={<Panel />} />
          <Route path="*" element={<Navigate to="/" />} />
          
        </Routes>
      </BrowserRouter>
    );
  }
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)