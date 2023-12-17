import React from "react";
import ReactDom from 'react-dom/client';
import Login from "./Login";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Login/>
    </React.StrictMode>
)