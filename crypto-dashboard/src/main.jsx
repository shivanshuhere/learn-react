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

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={
                <>
                    <App></App>
                </>
            }
        >
            <Route path="home" element={<Dashboard />} />
            <Route path="transaction" element={<Transaction />} />
            <Route path="support" element={<Support />} />
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
