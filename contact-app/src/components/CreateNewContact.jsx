import { useState } from "react";

function CreateNewContact({ submit, data }) {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submited");
        submit(false);
        data(userName, email);
        setUserName("");
        setEmail("");
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
                <button type="submit">Create </button>
            </form>
        </div>
    );
}

export default CreateNewContact;
