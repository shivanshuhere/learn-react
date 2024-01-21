import React, { useState } from "react";

function Box({ value = 1 }) {
    const [bg, setBg] = useState(false);
    const handleClick = () => {
        console.log("clicked", value);
        setBg((prev) => !prev);
    };
    return (
        <>
            <div>
                <label
                    htmlFor=""
                    className={` ${
                        bg ? "bg-black" : "bg-white"
                    } w-10 h-10 border-2 border-black text-center`}
                >
                    <input
                        name="box"
                        type="radio"
                        onClick={() => handleClick()}
                    ></input>{" "}
                    {value}
                </label>
            </div>
        </>
    );
}

export default Box;
