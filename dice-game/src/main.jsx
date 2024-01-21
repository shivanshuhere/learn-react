import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Route, RouterProvider } from "react-router";
import {
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import { Home, Playground } from "./pages";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="" element={<Home />} />
            <Route path="playground" element={<Playground />} />
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
