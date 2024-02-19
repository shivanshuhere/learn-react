import { useState } from "react";
import Navbar from "../components/Navbar";
import NavigationBar from "../components/NavigationBar";

function Layout() {
    const [pageName, setPageName] = useState("Dashboard");
    const pageData = (page) => {
        setPageName(page);
    };
    return (
        <>
            <NavigationBar getData={pageData} />
            <Navbar page={pageName} />
        </>
    );
}

export default Layout;
