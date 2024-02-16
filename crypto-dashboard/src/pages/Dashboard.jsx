import { useState } from "react";
function Dashboard() {
    const [graph, setGraph] = useState("H");
    function graphChange() {
        switch (graph) {
            case "H":
                return (
                    <>
                        <img
                            className="aspect-video"
                            src="https://marvel-b1-cdn.bc0a.com/f00000000228274/uploads.edisonenergy.com/2023/02/21070912/Figure-2.-EU-Trends-in-Solar-PPA-Prices-640x512.png"
                        />
                    </>
                );

            case "D":
                return (
                    <>
                        <img
                            className="aspect-video"
                            src="https://wcs.smartdraw.com/chart/img/line-graph-example.png?bn=15100111903"
                        />
                    </>
                );
            case "W":
                return (
                    <>
                        <img
                            className="aspect-video"
                            src="https://plotly.com/~WeiyiWang/10/the-change-of-cost-of-living-index.png"
                        />
                    </>
                );
            case "M":
                return (
                    <>
                        <img
                            className="aspect-video"
                            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT0z15GhTeHFOP-25w2ylWoHD5fcI9SeGRmW1fqNjmuTbDsYPtI"
                        />
                    </>
                );
        }
    }
    return (
        <div className="w-full h-full grid place-items-center   bg-gray-200   ">
            <div className="grid  p-4 rounded-lg w-9/12 h-11/12 grid-rows-12 grid-cols-12 gap-4">
                {/* 1st */}
                <div className="col-span-12 bg-white row-span-3 gap-4 rounded-lg flex justify-between items-center px-6">
                    <div className="flex items-end justify-start  gap-6 text-start  ">
                        <div>
                            <p className="text-base text-gray-500 font-semibold">
                                Total Portfolio Value
                            </p>
                            <p className="text-2xl font-extrabold">
                                $12,34,133
                            </p>
                        </div>
                        <div>
                            <p className="text-base text-gray-500 font-semibold">
                                Wallet Balance
                            </p>
                            <p className="text-2xl font-extrabold">
                                $11,12,245
                            </p>
                        </div>
                        <div>
                            <p className="text-2xl font-extrabold">
                                $34,13,312
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 text-white">
                        <button className="px-4 py-2 bg-purple-700 rounded-md ">
                            ↧Deposite
                        </button>
                        <button className="px-4 py-2 bg-purple-700 rounded-md ">
                            ↥Withdraw
                        </button>
                    </div>
                </div>
                {/* 2nd */}
                <div className="grid col-span-12 grid-cols-12 row-span-7 gap-4  ">
                    <div className="col-span-6 bg-white rounded-lg grid grid-cols-1 grid-rows-12 p-2">
                        <div className="flex justify-between row-span-4 p-2">
                            <div>
                                <p className="text-base">Current Price</p>
                                <p className="text-3xl font-medium text-gray-600">
                                    $12,000
                                </p>
                            </div>
                            <div className="flex flex-col justify-between">
                                <div className="flex self-end gap-6 pr-4 text-white">
                                    <button className="px-4 py-2 bg-purple-700 rounded-md">
                                        ⊕ Buy
                                    </button>
                                    <button className="px-4 py-2 bg-purple-700 rounded-md">
                                        ⊖ Sell
                                    </button>
                                </div>
                                <select
                                    onChange={(e) => setGraph(e.target.value)}
                                    className="flex justify-between text-center"
                                    name="group"
                                    id="group"
                                >
                                    <option
                                        value="H"
                                        className="border-[2px] px-1"
                                    >
                                        {" "}
                                        Hour
                                    </option>
                                    <option
                                        value={"D"}
                                        className="border-[2px] px-1"
                                    >
                                        {" "}
                                        Day
                                    </option>
                                    <option
                                        value={"W"}
                                        className="border-[2px] px-1"
                                    >
                                        {" "}
                                        Week
                                    </option>
                                    <option
                                        value={"M"}
                                        className="border-[2px] px-1"
                                    >
                                        {" "}
                                        Month
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-center items-center row-span-8 ">
                            <div className="">{graphChange()}</div>
                        </div>
                    </div>
                    {/* transaction */}
                    <div className="col-span-6  rounded-lg  flex flex-col p-4 justify-between bg-white">
                        <p className="w-full">Recent Transaction</p>
                        <div className="grid grid-cols-1 place-items-center gap-2 bg-white ">
                            <div className="flex w-full border-2 border-gray-300   rounded-md px-2 py-1 justify-between ">
                                <div>
                                    <p className="text-lg  font-medium">
                                        INR Deposite
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {Date.now()}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-lg font-mono font-semibold text-gray-600">
                                        ₹20,000
                                    </p>
                                </div>
                            </div>
                            <div className="flex w-full border-2 border-gray-300 rounded-md px-2 py-1 justify-between">
                                <div>
                                    <p className="text-lg  font-medium">
                                        BTC Sell
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {Date.now()}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-lg font-mono font-semibold text-gray-600">
                                        -12,343 BTC
                                    </p>
                                </div>
                            </div>
                            <div className="flex w-full border-2 border-gray-300 rounded-md px-2 py-1 justify-between">
                                <div>
                                    <p className="text-lg  font-medium">
                                        INR Deposite
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {" "}
                                        {Date.now()}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-lg font-mono font-semibold text-gray-600">
                                        ₹70,00,000
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full bg-gray-100 rounded-md py-1 px-2 ">
                            View All
                        </button>
                    </div>
                </div>
                {/* 3rd */}
                <div className="grid col-span-12 grid-cols-12 row-span-2 gap-4 ">
                    <div className="col-span-6 bg-white rounded-lg flex flex-col items-start py-2 justify-center px-4 text-sm">
                        <p className="text-white  bg-purple-600 rounded-md  px-1 ">
                            Loans
                        </p>
                        <p className="font-semibold">
                            Learn more about loans - Keep your Bitcoins, access
                            it's value without selling it
                        </p>
                    </div>
                    <div className="col-span-6 bg-purple-600 rounded-lg text-white flex flex-col items-start justify-center px-4 text-sm">
                        <p className="text-purple-800  bg-white rounded-md  px-1 ">
                            Contact
                        </p>
                        <p className="font-semibold">
                            Learn more about our real estate, mortgage and
                            corporate accoutn services
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
