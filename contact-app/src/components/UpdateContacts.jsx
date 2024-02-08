import React, { useState } from "react";

function UpdateContacts({ contacts, setUpdateFlag, nameId }) {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("updated contact");
        setUpdateFlag(false);
    };
    // contacts.forEach((ele) => {
    //     if (ele.name == nameId) {
    //         setUserName(ele.name);
    //         setEmail(ele.email);
    //     }
    // });
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
