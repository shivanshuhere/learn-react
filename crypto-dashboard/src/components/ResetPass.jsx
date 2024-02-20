function ResetPass() {
    return (
        <>
            <div>
                <h2>Reset Password</h2>
                <p>Enter your new password.</p>
                <div>
                    <label htmlFor="pass">New Password</label>
                    <input id="pass" type="password" required />
                </div>
                <div>
                    <label id="rePass" htmlFor="rePass">
                        Repeat New Password
                    </label>
                    <input type="password" id="rePass" required />
                </div>
            </div>
        </>
    );
}

export default ResetPass;
