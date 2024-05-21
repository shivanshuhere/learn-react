import React from "react";

function Box({ value = 1, handleSelect }) {
    return (
        <>
            <div
                className="w-10 h-10 m-1 bg-slate-300 flex items-center justify-center"
                onClick={() => {
                    alert(`${value} is selected !`);
                    handleSelect(value);
                }}
            >
                {value}
            </div>
        </>
    );
}

export default Box;
