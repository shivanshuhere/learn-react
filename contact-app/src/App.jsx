import { useState } from "react";
import Card from "./components/Card";
import CreateNewContact from "./components/CreateNewContact";
import UpdateContacts from "./components/UpdateContacts";

function App() {
    const [CreateContactFlag, setCreateContactFlag] = useState(false);
    const [updateFlag, setUpdateFlag] = useState(false);
    const [updateName, setUpdateName] = useState("");
    const [contacts, setContacts] = useState([
        { name: "shivu", email: "ks@gmail.com" },
    ]);
    const [prevEmail, setPrevEmail] = useState("");
    // const [userName, setUserName] = useState("");

    const handleCreateContact = () => {
        setCreateContactFlag(true);
    };

    const getdata = (name, email) => {
        console.log(name, email);
        setContacts((prev) => [...prev, { name, email }]);
    };

    const handleDeleteContact = (name) => {
        console.log(name, "deleted");
        setContacts((prev) => prev.filter((contact) => contact.name != name));
    };
    const handleUpdateContact = (name, email) => {
        setUpdateName(name);
        setUpdateFlag(true);
        setPrevEmail(email);
    };

    return (
        <>
            <div className="bg-slate-800 min-h-screen p-2">
                <div className="bg-white text-black  flex justify-center items-center rounded-lg h-10 ">
                    --icon-- Firebase Contact App
                </div>
                <div className="flex justify-between gap-2 my-2 sticky top-1 ">
                    <input
                        type="search"
                        placeholder="   search contacts..."
                        className="border-2 border-white w-full rounded-sm bg-transparent text-slate-300 "
                    />
                    <button
                        className=" rounded-full bg-white  text-black text-2xl px-4 py-1"
                        onClick={handleCreateContact}
                    >
                        +
                    </button>
                </div>
                <div className="flex justify-center items-center flex-col  min-h-screen">
                    {contacts.map((ele, index) => (
                        <Card
                            name={ele.name}
                            email={ele.email}
                            key={index}
                            handleDeleteContact={handleDeleteContact}
                            handleUpdateContact={handleUpdateContact}
                        />
                    ))}
                    {updateFlag ? (
                        <UpdateContacts
                            setContacts={setContacts}
                            setUpdateFlag={setUpdateFlag}
                            nameId={updateName}
                            prevEmail={prevEmail}
                        />
                    ) : null}
                    {CreateContactFlag ? (
                        <CreateNewContact
                            submit={setCreateContactFlag}
                            data={getdata}
                        />
                    ) : null}
                </div>
            </div>
        </>
    );
}

export default App;
