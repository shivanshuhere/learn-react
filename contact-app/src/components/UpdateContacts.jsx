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
        <div className="z-10 relative bg-yellow-200 p-4 rounded-md ">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 items-center justify-center"
            >
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Update name..."
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Update email address..."
                />
                <button
                    type="submit"
                    className="self-end font-mono border-2 border-black p-1 text-xs rounded-sm"
                >
                    update
                </button>
            </form>
        </div>
    );
}

export default UpdateContacts;
