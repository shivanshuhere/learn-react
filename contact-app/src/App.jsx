import { useState } from "react";
import Card from "./components/Card";
import CreateNewContact from "./components/CreateNewContact";
import { Car, CopySlash } from "lucide";
import { useId } from "react";

function App() {
    const [CreateContactFlag, setCreateContactFlag] = useState(false);
    const [contacts, setContacts] = useState([]);
    const handleCreateContact = () => {
        setCreateContactFlag(true);
    };
    const Id = useId();
    const getdata = (name, email) => {
        console.log(name, email);
        setContacts((prev) => [...prev, { name, email }]);
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
                    {/* conditional rednder here */}
                    {/* <p className="relative bottom-10 text-slate-300">
            --icon-- No contact found
          </p> */}
                    <Card name="shivu" email="ks233434@gmail.com" />
                    {contacts.map((ele, index) => (
                        <Card name={ele.name} email={ele.email} key={index} />
                    ))}
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
