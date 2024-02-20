function EmailVerify({ email }) {
    const handleResendEmail = () => {};
    return (
        <>
            <div>
                <img src="" alt="email icon" />
                <h2>Email Verification</h2>
                <p>
                    We have sent you an email verification to {email} If you
                    don't receive it, click the button below.
                </p>
                <button onClick={handleResendEmail}>Re-send Email</button>
            </div>
        </>
    );
}

export default EmailVerify;
