import React from "react";

function SuccessSent({ email }) {
    return (
        <>
            <div>
                <img src="" alt="tick" />
                <h2>Successfully Sent</h2>
                <p>
                    We have sent instructions on how to reset your password to
                    {email}. Please follow the instructions from the email.
                </p>
            </div>
        </>
    );
}

export default SuccessSent;
