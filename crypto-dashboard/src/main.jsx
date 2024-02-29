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
import {
    Login,
    SignUp,
    Forgot,
    ResetPass,
    SuccessSent,
    SuccessVerify,
    PassResetDone,
    EmailVerify,
} from "./components/index.js";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgot" element={<Forgot />} />
            <Route path="reset-pass" element={<ResetPass />} />
            <Route path="reset-pass-success" element={<PassResetDone />} />
            <Route path="Email-verify" element={<EmailVerify />} />
            <Route path="success-sent" element={<SuccessSent />} />
            <Route path="success-verify" element={<SuccessVerify />} />
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
