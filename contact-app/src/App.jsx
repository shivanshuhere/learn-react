import { useEffect, useState } from "react";
import Card from "./components/Card";
import CreateNewContact from "./components/CreateNewContact";
import UpdateContacts from "./components/UpdateContacts";

function App() {
    const [CreateContactFlag, setCreateContactFlag] = useState(false);
    const [updateFlag, setUpdateFlag] = useState(false);
    const [updateName, setUpdateName] = useState("");
    const [contacts, setContacts] = useState([
        { name: "shivanshu", email: "ks7876555+pro@gmail.com" },
    ]);
    const [prevEmail, setPrevEmail] = useState("");
    const [input, setInput] = useState(""); //search
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

    // set to local
    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

    return (
        <div className="bg-slate-800 min-h-screen grid py-10 place-items-center">
            <div className="bg-slate-800 h-max max-w-lg border-4 border-gray-500 rounded-md p-2">
                <div className="bg-white text-black  flex justify-center items-center rounded-lg h-10 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 288 496"
                        className="mr-1"
                    >
                        <path d="M 81 293 Q 81 267 96 243 L 96 243 Q 111 219 131 196 L 131 196 Q 152 173 169 147 L 169 147 Q 185 121 186 90 Q 184 54 168 28 Q 152 3 147 0 Q 147 5 147 10 Q 146 42 126 71 Q 107 100 80 129 Q 49 161 25 197 Q 1 234 0 279 Q 1 315 20 341 Q 40 366 67 387 Q 114 422 130 442 Q 146 462 145 474 Q 144 482 142 488 Q 140 492 140 496 Q 158 471 157 449 Q 157 429 145 409 Q 134 390 118 369 Q 115 366 113 363 Q 111 360 109 357 Q 98 342 89 327 Q 81 312 81 293 L 81 293 Z M 286 254 Q 279 221 260 192 L 260 192 Q 240 164 220 145 L 220 145 Q 200 127 191 124 L 195 131 Q 199 138 198 148 Q 197 177 178 208 Q 160 240 148 256 Q 143 263 142 265 Q 139 272 139 280 Q 140 296 147 309 Q 154 322 157 322 Q 159 322 172 307 Q 186 292 200 272 Q 213 252 215 235 Q 224 252 224 268 Q 223 289 213 311 Q 203 334 193 349 Q 183 364 182 365 Q 182 365 182 365 Q 184 376 198 396 Q 213 416 217 418 Q 219 418 220 416 Q 220 416 221 416 Q 250 386 269 352 Q 287 318 288 279 Q 288 267 286 254 L 286 254 Z" />
                    </svg>
                    Firebase Contact App
                </div>
                <div className="flex justify-between gap-2 my-2 sticky top-1 ">
                    <input
                        type="search"
                        placeholder="   search contacts..."
                        className="border-2 border-white w-full rounded-sm bg-slate-800 text-slate-300"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        className=" rounded-full bg-white  text-black text-2xl px-4 py-1"
                        onClick={handleCreateContact}
                    >
                        +
                    </button>
                </div>
                <div className="flex justify-start items-center  flex-col  min-h-screen">
                    {contacts.map((ele, index) =>
                        ele.name.startsWith(input) ? (
                            <Card
                                name={ele.name}
                                email={ele.email}
                                key={index}
                                handleDeleteContact={handleDeleteContact}
                                handleUpdateContact={handleUpdateContact}
                            />
                        ) : (
                            <div className="text-white text-2xl font-mono  absolute bottom-1/2 font-semibold">
                                {" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    fill="currentColor"
                                    viewBox="0 0 512 512"
                                    className="inline mr-2"
                                >
                                    <path d="M 256 32 Q 317 33 368 62 L 368 62 Q 419 92 450 144 Q 480 197 480 256 Q 480 315 450 368 Q 419 420 368 450 Q 317 479 256 480 Q 195 479 144 450 Q 93 420 62 368 Q 32 315 32 256 Q 32 197 62 144 Q 93 92 144 62 Q 195 33 256 32 L 256 32 Z M 256 512 Q 326 511 384 478 L 384 478 Q 442 444 478 384 Q 512 323 512 256 Q 512 189 478 128 Q 442 68 384 34 Q 326 1 256 0 Q 186 1 128 34 Q 70 68 34 128 Q 0 189 0 256 Q 0 323 34 384 Q 70 444 128 478 Q 186 511 256 512 L 256 512 Z M 142 324 Q 131 335 140 347 Q 157 367 186 383 Q 215 399 256 400 Q 271 399 272 384 Q 271 369 256 368 Q 223 367 200 355 Q 178 342 164 326 Q 153 315 142 324 L 142 324 Z M 336 322 Q 344 311 352 300 Q 360 311 368 322 Q 385 348 384 357 Q 384 367 376 375 Q 367 383 352 384 Q 337 383 328 375 Q 320 367 320 357 Q 319 348 336 322 L 336 322 Z M 344 260 Q 341 263 338 266 Q 338 266 338 266 Q 323 284 306 309 Q 289 334 288 357 Q 289 382 307 399 Q 325 415 352 416 Q 379 415 397 399 Q 415 382 416 357 Q 415 335 398 310 Q 382 286 367 268 Q 367 267 366 267 L 366 267 L 366 267 Q 365 266 364 265 Q 362 262 361 260 Q 352 252 344 260 L 344 260 Z M 200 208 Q 198 186 176 184 Q 154 186 152 208 Q 154 230 176 232 Q 198 230 200 208 L 200 208 Z M 336 232 Q 358 230 360 208 Q 358 186 336 184 Q 314 186 312 208 Q 314 230 336 232 L 336 232 Z" />
                                </svg>
                                No Contacts
                            </div>
                        )
                    )}
                    {input == "" ? null : (
                        <div
                            key={Date.now()}
                            className="text-white text-2xl font-mono  absolute bottom-1/2 font-semibold"
                        >
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                fill="currentColor"
                                viewBox="0 0 512 512"
                                className="inline mr-2"
                            >
                                <path d="M 256 32 Q 317 33 368 62 L 368 62 Q 419 92 450 144 Q 480 197 480 256 Q 480 315 450 368 Q 419 420 368 450 Q 317 479 256 480 Q 195 479 144 450 Q 93 420 62 368 Q 32 315 32 256 Q 32 197 62 144 Q 93 92 144 62 Q 195 33 256 32 L 256 32 Z M 256 512 Q 326 511 384 478 L 384 478 Q 442 444 478 384 Q 512 323 512 256 Q 512 189 478 128 Q 442 68 384 34 Q 326 1 256 0 Q 186 1 128 34 Q 70 68 34 128 Q 0 189 0 256 Q 0 323 34 384 Q 70 444 128 478 Q 186 511 256 512 L 256 512 Z M 142 324 Q 131 335 140 347 Q 157 367 186 383 Q 215 399 256 400 Q 271 399 272 384 Q 271 369 256 368 Q 223 367 200 355 Q 178 342 164 326 Q 153 315 142 324 L 142 324 Z M 336 322 Q 344 311 352 300 Q 360 311 368 322 Q 385 348 384 357 Q 384 367 376 375 Q 367 383 352 384 Q 337 383 328 375 Q 320 367 320 357 Q 319 348 336 322 L 336 322 Z M 344 260 Q 341 263 338 266 Q 338 266 338 266 Q 323 284 306 309 Q 289 334 288 357 Q 289 382 307 399 Q 325 415 352 416 Q 379 415 397 399 Q 415 382 416 357 Q 415 335 398 310 Q 382 286 367 268 Q 367 267 366 267 L 366 267 L 366 267 Q 365 266 364 265 Q 362 262 361 260 Q 352 252 344 260 L 344 260 Z M 200 208 Q 198 186 176 184 Q 154 186 152 208 Q 154 230 176 232 Q 198 230 200 208 L 200 208 Z M 336 232 Q 358 230 360 208 Q 358 186 336 184 Q 314 186 312 208 Q 314 230 336 232 L 336 232 Z" />
                            </svg>
                            No Contacts
                        </div>
                    )}
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
        </div>
    );
}

export default App;
