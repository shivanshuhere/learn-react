import React from "react";

function Box({ value = 1, setSelectNumber }) {
    return (
        <>
            <div
                className="w-10 h-10 m-1 bg-slate-300 flex items-center justify-center"
                onClick={() => {
                    console.log("selected", value);
                    setSelectNumber(value);
                }}
            >
                {value}
            </div>
        </>
    );
}

export default Box;
