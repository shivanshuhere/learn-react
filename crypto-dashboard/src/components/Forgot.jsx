function Forgot() {
    const handleBack = () => {
        console.log("to login page");
    };
    const handleReset = () => {};
    return (
        <>
            <div className="flex  sm:rounded-lg sm:px-4 px-2 sm:py-4 items-center flex-col sm:shadow-lg sm:shadow-slate-700">
                <div className="self-start">
                    <span
                        className="hover:cursor-pointer material-symbols-outlined"
                        onClick={handleBack}
                    >
                        keyboard_backspace
                    </span>
                </div>
                <h2 className="sm:text-2xl text-lg font-medium ">
                    Forgot Password
                </h2>
                <p className="text-xs sm:text-sm font-light my-1 mb-2 w-3/4 text-center">
                    Enter your email address for which account you want to reset
                    your password
                </p>
                <div className=" flex gap-2 items-center">
                    <label htmlFor="email" className="font-medium text-sm ">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="name@gmail.com"
                        required
                        className="text-sm sm:text-base border-[1px] border-slate-700 placeholder:font-normal pl-2 font-light rounded-md"
                    />
                </div>
                <button
                    onClick={handleReset}
                    className="w-3/4 bg-gray-400 text-gray-300 transition-colors py-1 hover:text-gray-100  rounded-lg mt-4 font-medium text-lg"
                >
                    Reset Password
                </button>
            </div>
        </>
    );
}

export default Forgot;
