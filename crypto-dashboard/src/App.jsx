import { Outlet } from "react-router";
import Layout from "./layout/Layout";
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
