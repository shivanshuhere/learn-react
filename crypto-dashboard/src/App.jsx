import { Outlet } from "react-router";
import Layout from "./layout/Layout";
import SuccessVerify from "./components/SuccessVerify";
import Forgot from "./components/Forgot";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            {/* <Layout /> */}
            <Login />
            {/* <SignUp /> */}
        </div>
    );
}

export default App;
