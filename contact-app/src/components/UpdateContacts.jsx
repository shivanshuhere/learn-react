import React, { useState } from "react";

function UpdateContacts({ setContacts, setUpdateFlag, nameId, prevEmail }) {
    const [userName, setUserName] = useState(nameId);
    const [email, setEmail] = useState(prevEmail);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("updated contact");
        setContacts((prev) =>
            prev.map((ele) =>
                ele.name == nameId ? { name: userName, email } : ele
            )
        );
        setUpdateFlag(false);
    };

    return (
        <div className="z-10 relative flex">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">update</button>
            </form>
        </div>
    );
}

export default UpdateContacts;
