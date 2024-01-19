import React from "react";

function Header() {
    return (
        <>
            <nav className="h-6 flex justify-between align-middle px-10 pt-6">
                <div className="font-mono text-2xl font-semibold">NIKE</div>
                <div className=" w-96 list-none flex justify-evenly">
                    <li className="hover:text-red-400 cursor-pointer">Menu</li>
                    <li className="hover:text-red-400 cursor-pointer">
                        Location
                    </li>
                    <li className="hover:text-red-400 cursor-pointer">About</li>
                    <li className="hover:text-red-400 cursor-pointer">
                        Contact
                    </li>
                </div>
                <div>
                    <button className="w-full bg-red-700 text-white font-mono px-2 py-1 ">
                        Login
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Header;
