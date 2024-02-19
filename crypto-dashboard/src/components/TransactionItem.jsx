import { useState } from "react";

function TransactionItem({ color, status }) {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let random = "";
    if (min < 9) min = "0" + min;
    for (let i = 0; i < 9; i++) {
        random += String.fromCharCode(Math.random() * 26 + 65);
    }
    return (
        <div className="grid grid-cols-10 h-10 pb-2 px-4">
            <p className="col-span-2">{random}</p>
            <p className="col-span-2">
                {`${day}-${month}-${year}`}
                <div className="text-xs text-gray-400">{`${hour}:${min}`}</div>
            </p>
            <p className="col-span-2">Deposite</p>
            <p className="col-span-2 ml-4">+$45981</p>
            <p
                className={`ml-6 w-min h-min px-2 rounded-full border-2 bg-${color}-500`}
            >
                {status}
            </p>
        </div>
    );
}

export default TransactionItem;
