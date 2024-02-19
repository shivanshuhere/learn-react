import TransactionItem from "../components/TransactionItem";
function Transaction() {
    return (
        <div className="w-full h-full grid place-items-center bg-gray-200">
            <div className="flex justify-center  flex-col items-start w-3/5 h-4/5">
                <div className="flex w-full justify-end">
                    <button className="px-4 py-2 text-white text-xs bg-purple-600 rounded-md mb-2">
                        Export CVS
                    </button>
                </div>
                <div className="grid grid-cols-1 w-full h-full text-gray-500  font-medium text-sm bg-white rounded-lg grid-rows-12">
                    <div className="flex w-full justify-between items-center pl-6 row-span-1">
                        <div className="flex gap-12 w-9/12">
                            <p>All</p>
                            <p>Deposite</p>
                            <p>Withdraw</p>
                            <p>Trade</p>
                        </div>
                        <input
                            type="search"
                            placeholder="search by ID"
                            className=" rounded-md w-40 capitalize  placeholder:text-gray-500 placeholder:pl-2 "
                        />
                    </div>
                    <div className="grid grid-cols-5 pl-6 border-y-[2px] items-center h-10 row-span-1">
                        <p>ID</p>
                        <p>Date & Time</p>
                        <p>Type</p>
                        <p>Amount</p>
                        <p>Status</p>
                    </div>
                    <div className="flex flex-col h-full justify-between text-base text-slate-800 row-span-10 py-6 px-4 overflow-y-scroll font-semibold">
                        <TransactionItem color="gray" status="pending" />
                        <TransactionItem color="gray" status="pending" />
                        <TransactionItem color="gray" status="pending" />
                        <TransactionItem color="yellow" status="processing" />
                        <TransactionItem color="yellow" status="processing" />
                        <TransactionItem color="yellow" status="processing" />
                        <TransactionItem color="red" status="cancel" />
                        <TransactionItem color="green" status="complete" />
                        <TransactionItem color="red" status="cancel" />
                        <TransactionItem color="green" status="complete" />
                        <TransactionItem color="red" status="cancel" />
                        <TransactionItem color="red" status="cancel" />
                        <TransactionItem color="red" status="cancel" />
                        <TransactionItem color="red" status="cancel" />
                        <TransactionItem color="green" status="complete" />
                        <TransactionItem color="green" status="complete" />
                        <TransactionItem color="green" status="complete" />
                        <TransactionItem color="green" status="complete" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transaction;
