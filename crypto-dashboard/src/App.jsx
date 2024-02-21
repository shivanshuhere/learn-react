import { Outlet } from "react-router";
import Layout from "./layout/Layout";
import SuccessVerify from "./components/SuccessVerify";
import Forgot from "./components/Forgot";

function App() {
    return (
        <div className="flex justify-center items-center h-screen">
            {/* <Layout /> */}
            <Forgot />
        </div>
    );
}

export default App;
