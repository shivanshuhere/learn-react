import { Outlet } from "react-router";
import Layout from "./layout/Layout";
import SuccessVerify from "./components/SuccessVerify";
import Forgot from "./components/Forgot";
import SignUp from "./components/SignUp";

function App() {
    return (
        <div className="flex justify-center items-center h-screen">
            {/* <Layout /> */}
            <SignUp />
        </div>
    );
}

export default App;
