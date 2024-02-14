function Dashboard() {
    return (
        <div className="w-full h-full flex justify-start items-center p-10  flex-col gap-4  bg-yellow-200">
            <div className="rounded-lg w-full max-w-4xl h-28 bg-white border-2 border-black"></div>
            <div className="w-full h-72 max-w-4xl flex gap-4">
                <div className="flex-grow w-max bg-red-300 border-2 border-blue-700 rounded-md"></div>
                <div className="flex-grow w-max bg-red-300 border-2 border-blue-700 rounded-md"></div>
            </div>
            <div className="w-full h-28 max-w-4xl flex gap-4">
                <div className="flex-grow w-max bg-orange-300 border-2 border-blue-700 rounded-md"></div>
                <div className="flex-grow w-max bg-orange-300 border-2 border-blue-700 rounded-md"></div>
            </div>
        </div>
    );
}

export default Dashboard;
