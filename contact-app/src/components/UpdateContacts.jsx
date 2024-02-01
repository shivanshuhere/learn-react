import { CopySlash, UsersRound } from "lucide";
import React, { useState } from "react";

function UpdateContacts({ updateContact, name }) {
    const [userName, setUserName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName);
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
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">update</button>
            </form>
        </div>
    );
}

export default UpdateContacts;
