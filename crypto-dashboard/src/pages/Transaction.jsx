function Transaction() {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getUTCMinutes();
    let random = "";
    for (let i = 0; i < 9; i++) {
        random += String.fromCharCode(Math.random() * 26 + 65);
    }
    return (
        <div className="w-full h-full grid place-items-center bg-gray-200">
            <div className="flex justify-center  flex-col items-start w-3/5 h-4/5">
                <div className="flex w-full justify-end">
                    <button className="px-4 py-2 text-white text-xs bg-purple-600 rounded-md mb-2">
                        Export CVS
                    </button>
                </div>
                <div className="grid grid-cols-1 w-full h-full bg-white rounded-lg grid-rows-12">
                    <div className="flex w-full justify-between items-center pl-6 row-span-2">
                        <div className="flex gap-12 w-9/12">
                            <p>All</p>
                            <p>Deposite</p>
                            <p>Withdraw</p>
                            <p>Trade</p>
                        </div>
                        <input
                            type="search"
                            placeholder="search by ID"
                            className=" rounded-md w-32 focu placeholder:text-black placeholder:pl-4 "
                        />
                    </div>
                    <div className="grid grid-cols-5 pl-6 border-y-[2px] items-center h-10 row-span-2">
                        <p>ID</p>
                        <p>Date & Time</p>
                        <p>Type</p>
                        <p>Amount</p>
                        <p>Status</p>
                    </div>
                    <div className=" grid grid-cols-1 place-content-center row-span-8 ">
                        <div className="flex justify-between px-4">
                            <p>{random}</p>
                            <p>
                                {`${day}-${month}-${year}`}
                                <p>{`${hour}:${min}`}</p>
                            </p>
                            <p>Deposite</p>
                            <p>+$45981</p>
                            <p>Pending</p>
                        </div>
                        <div className="flex justify-between px-4">
                            <p>{random}</p>
                            <p>
                                {`${day}-${month}-${year}`}
                                <p>{`${hour}:${min}`}</p>
                            </p>
                            <p>Deposite</p>
                            <p>+$45981</p>
                            <p>Pending</p>
                        </div>
                        <div className="flex justify-between px-4">
                            <p>{random}</p>
                            <p>
                                {`${day}-${month}-${year}`}
                                <p>{`${hour}:${min}`}</p>
                            </p>
                            <p>Deposite</p>
                            <p>+$45981</p>
                            <p>Pending</p>
                        </div>
                        <div className="flex justify-between px-4">
                            <p>{random}</p>
                            <p>
                                {`${day}-${month}-${year}`}
                                <p>{`${hour}:${min}`}</p>
                            </p>
                            <p>Deposite</p>
                            <p>+$45981</p>
                            <p>Pending</p>
                        </div>
                        <div className="flex justify-between px-4">
                            <p>{random}</p>
                            <p>
                                {`${day}-${month}-${year}`}
                                <p>{`${hour}:${min}`}</p>
                            </p>
                            <p>Deposite</p>
                            <p>+$45981</p>
                            <p>Pending</p>
                        </div>
                        <div className="flex justify-between px-4">
                            <p>{random}</p>
                            <p>
                                {`${day}-${month}-${year}`}
                                <p>{`${hour}:${min}`}</p>
                            </p>
                            <p>Deposite</p>
                            <p>+$45981</p>
                            <p>Pending</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transaction;
