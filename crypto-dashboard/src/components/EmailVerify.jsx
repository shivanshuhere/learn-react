function EmailVerify({ email }) {
    const handleResendEmail = () => {};
    return (
        <>
            <div className=" w-full sm:w-max sm:max-w-lg px-4 py-8 sm:px-10 rounded-lg sm:shadow-2xl sm:shadow-black   flex justify-center items-center flex-col gap-2">
                <span className="material-symbols-outlined ">mail</span>
                <h2 className="sm:text-2xl text-lg font-medium">
                    Email Verification
                </h2>
                <p className="sm:text-sm text-xs   text-center my-2">
                    We have sent you an email verification to{" "}
                    <span className="font-medium">{email}</span> If you don't
                    receive it, click the button below.
                </p>
                <button
                    onClick={handleResendEmail}
                    className="w-full bg-purple-500 rounded-lg text-white py-1 hover:text-gray-200 transition-colors hover:bg-purple-300"
                >
                    Re-send Email
                </button>
            </div>
        </>
    );
}

export default EmailVerify;
