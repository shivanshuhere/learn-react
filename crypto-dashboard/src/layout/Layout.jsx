import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import NavigationBar from "../components/NavigationBar";

function Layout() {
    return (
        <>
            <NavigationBar />
            <Navbar />
            <Outlet />
        </>
    );
}

export default Layout;
