import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider } from "react-router";
import {
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { Dashboard, Transaction, Support } from "./pages/index.js";
import Login from "./components/Login.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            {/* <Route path="Dashboard" element={<Dashboard />} /> */}
            <Route path="login" element={<Login />} />
            <Route
                path="terms"
                element={<div>Terms and conditions page</div>}
            />
            {/* <Route path="transaction" element={<Transaction />} /> */}
            {/* <Route path="support" element={<Support />} /> */}
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </React.StrictMode>
);
