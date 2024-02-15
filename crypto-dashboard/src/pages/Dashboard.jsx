function Dashboard() {
    return (
        <div className="w-full h-full grid place-items-center  backdrop-blur-sm ">
            <div className="grid bg-gray-100 p-4 rounded-lg w-3/4 h-3/4 grid-rows-12 grid-cols-12 gap-4">
                <div className="col-span-12 bg-red-800 row-span-2 gap-4 rounded-lg flex justify-between items-center px-6">
                    <div className="flex items-end justify-start  gap-6 text-start  ">
                        <div>
                            <p>Total Portfolio Value</p>
                            <p>$12,34,133</p>
                        </div>
                        <div>
                            <p>Wallet Balance</p>
                            <p>$11,12,245</p>
                        </div>
                        <div>
                            <p className="">$34,13,312</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button>Deposite</button>
                        <button>Withdraw</button>
                    </div>
                </div>
                <div className="grid col-span-12 grid-cols-12 row-span-8 gap-4 ">
                    <div className="col-span-6 bg-green-500 rounded-lg"></div>
                    {/* transaction */}
                    <div className="col-span-6 bg-white rounded-lg  flex flex-col p-4 justify-between">
                        <p className="w-full">Recent Transaction</p>
                        <div className="grid grid-cols-1 place-items-center gap-2">
                            <div className="flex w-full border-2 border-gray-500 rounded-md px-2 py-1 justify-between ">
                                <div>
                                    <p>INR Deposite</p>
                                    <p>{Date.now()}</p>
                                </div>
                                <div>
                                    <p>₹20,000</p>
                                </div>
                            </div>
                            <div className="flex w-full border-2 border-gray-500 rounded-md px-2 py-1 justify-between">
                                <div>
                                    <p>BTC Sell</p>
                                    <p>{Date.now()}</p>
                                </div>
                                <div>
                                    <p>-12,343 BTC</p>
                                </div>
                            </div>
                            <div className="flex w-full border-2 border-gray-500 rounded-md px-2 py-1 justify-between">
                                <div>
                                    <p>INR Deposite</p>
                                    <p>{Date.now()}</p>
                                </div>
                                <div>
                                    <p>₹70,00,000</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full bg-gray-100 rounded-md py-1 px-2">
                            view all
                        </button>
                    </div>
                </div>
                <div className="grid col-span-12 grid-cols-12 row-span-2 gap-4 ">
                    <div className="col-span-6 bg-orange-500 rounded-lg"></div>
                    <div className="col-span-6 bg-purple-300 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
