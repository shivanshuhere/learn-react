function ResetPass() {
    return (
        <>
            <div className="flex bg-white flex-col h-screen justify-center items-center">
                <div className="bg-slate-100 w-max px-10 py-20 flex flex-col gap-4 rounded-xl">
                    <h2 className="sm:text-lg md:text-4xl">Reset Password</h2>
                    <p className=" text-gray-500">Enter your new password.</p>
                    <div className="flex w-full justify-between">
                        <label htmlFor="pass">New Password</label>
                        <input id="pass" type="password" required />
                    </div>
                    <div className="flex w-full justify-between">
                        <label id="rePass" htmlFor="rePass">
                            Repeat New Password
                        </label>
                        <input type="password" id="rePass" required />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ResetPass;
