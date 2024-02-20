import { Outlet } from "react-router";
import Layout from "./layout/Layout";
import Login from "./components/Login";

function App() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Layout />
            {/* <Login /> */}
        </div>
    );
}

export default App;
