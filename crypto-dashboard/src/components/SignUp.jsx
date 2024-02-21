import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
function SignUp() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        userName: "",
        surname: "",
        email: "",
        password: "",
        rePassword: "",
        terms: false,
    });
    const sendData = async (data) => {
        try {
            const res = await axios.post(
                "http://localhost:8000/api/user",
                data
            );
            console.log("Sign up successfull :: ", res);
        } catch (err) {
            console.log("signup.jsx :: Sign up failed :: ", err);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        sendData(user);
        setUser({
            userName: "",
            surname: "",
            email: "",
            password: "",
            rePassword: "",
            terms: false,
        });
    };
    return (
        <>
            <div className="text-xs sm:text-base sm:rounded-lg   sm:shadow-2xl sm:shadow-gray-500 sm:px-6 sm:py-10 font-medium  w-full px-4 sm:max-w-min">
                <h1 className="sm:text-4xl text-2xl font-medium">
                    Welcome to Crypto App
                </h1>
                <p className="sm:text-sm text-gray-500 my-2">
                    Create a free account by filling data below.
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="mt-6 flex flex-col gap-2"
                >
                    <div className="flex justify-between items-center gap-2 w-full ">
                        <div className="flex flex-col gap-1 w-1/2">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="James"
                                required
                                className="border-[2px] border-gray-300 py-2 rounded-lg font-light  pl-2"
                                value={user.userName}
                                onChange={(e) =>
                                    setUser(
                                        (prev) =>
                                            (prev = {
                                                ...prev,
                                                userName: e.target.value,
                                            })
                                    )
                                }
                            />
                        </div>
                        <div className="flex flex-col gap-1 w-1/2">
                            <label htmlFor="surname">Surname</label>
                            <input
                                id="surname"
                                type="text"
                                placeholder="Bond"
                                className="border-[2px] border-gray-300 py-2 rounded-lg font-light  pl-2"
                                value={user.surname}
                                onChange={(e) =>
                                    setUser(
                                        (prev) =>
                                            (prev = {
                                                ...prev,
                                                surname: e.target.value,
                                            })
                                    )
                                }
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="james@gmail.com"
                            required
                            className="border-[2px] border-gray-300 py-2 rounded-lg font-light  pl-2"
                            value={user.email}
                            onChange={(e) =>
                                setUser(
                                    (prev) =>
                                        (prev = {
                                            ...prev,
                                            email: e.target.value,
                                        })
                                )
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            required
                            className="border-[2px] border-gray-300 py-2 rounded-lg font-light  pl-2"
                            value={user.password}
                            onChange={(e) =>
                                setUser(
                                    (prev) =>
                                        (prev = {
                                            ...prev,
                                            password: e.target.value,
                                        })
                                )
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="rePassword">Repeat Password</label>
                        <input
                            type="password"
                            id="rePassword"
                            required
                            className="border-[2px] border-gray-300 py-2 rounded-lg font-light  pl-2"
                            value={user.rePassword}
                            onChange={(e) =>
                                setUser(
                                    (prev) =>
                                        (prev = {
                                            ...prev,
                                            rePassword: e.target.value,
                                        })
                                )
                            }
                        />
                    </div>
                    <div className="flex gap-2 ml-2 my-2 mb-4">
                        <input
                            type="checkbox"
                            id="t&c"
                            required
                            value={user.terms}
                            onChange={(e) =>
                                setUser(
                                    (prev) =>
                                        (prev = {
                                            ...prev,
                                            terms: !prev.terms,
                                        })
                                )
                            }
                        />
                        <label htmlFor="t&c">
                            i agree with{" "}
                            <div
                                // to={"terms"}
                                className="text-purple-500"
                                onClick={() => navigate("terms")}
                            >
                                term and conditions
                            </div>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gray-200 rounded-lg text-gray-500 py-2 hover:bg-purple-600 hover:text-white hover:transition-"
                    >
                        Create Account
                    </button>
                </form>
                <p className="text-center mt-2 md:text-sm text-sm">
                    Already have an account?{" "}
                    <div
                        // to={"login"}
                        onClick={() => navigate("login")}
                        className="text-purple-600"
                    >
                        Log in
                    </div>
                </p>
            </div>
        </>
    );
}

export default SignUp;
