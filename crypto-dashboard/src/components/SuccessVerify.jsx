function SuccessVerify() {
    const handleEnter = () => {};
    return (
        <>
            <div className=" flex flex-col items-center sm:px-4 px-2 sm:max-w-lg text-center rounded-lg sm:shadow-lg sm:shadow-slate-600 gap-2 sm:py-10">
                <span className="material-symbols-outlined">task_alt</span>
                <h2 className="sm:text-2xl text-lg font-medium text-green-500">
                    Successfully Registration
                </h2>
                <p className="sm:text-sm text-xs font-light mb-2">
                    You have successfully created your accout. Enter the app to
                    explore all it's features.
                </p>
                <button
                    onClick={handleEnter}
                    className="w-full rounded-lg bg-purple-500 text-white hover:bg-purple-300 hover:text-gray-200 py-1 font-medium text-lg transition-colors"
                >
                    Enter the App
                </button>
            </div>
        </>
    );
}

export default SuccessVerify;
