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
        <div className="z-10 relative bg-gray-400 p-4 rounded-md ">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 items-center justify-center"
            >
                <input
                    type="text"
                    value={userName}
                    placeholder="Enter your name..."
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="email"
                    value={email}
                    placeholder="Enter your email address..."
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    type="submit"
                    className="self-end font-mono border-2 border-black p-1 text-xs rounded-sm"
                >
                    Create{" "}
                </button>
            </form>
        </div>
    );
}

export default CreateNewContact;
