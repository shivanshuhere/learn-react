import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const handleCreateAccount = () => {
        console.log("account is created");
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/login", data);
            console.log("Login success :: response :: ", res);
        } catch (err) {
            console.log("Login failed :: Login.jsx ::  ", err);
        }
        // console.log("login");
        setData({
            email: "",
            password: "",
        });
    };
    return (
        <>
            <div className="px-4 py-6 w-full sm:w-min sm:border-2 rounded-lg text-xs text-center">
                <h1 className="sm:text-2xl md:4xl text-xl font-medium">
                    Welcome to Crypto App
                </h1>
                <p className="sm:text-sm mb-4 sm:mb-6">
                    Enter your credentials to access the account.
                </p>
                <form
                    onSubmit={handleLogin}
                    className="flex flex-col w-full font-medium sm:text-base gap-3 max-w-sm mx-auto py-2"
                >
                    <div className="flex gap-4 justify-center">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            placeholder="james@gmail.com"
                            className="border-2 rounded-lg pl-2 placeholder:font-light"
                            value={data.email}
                            onChange={(e) =>
                                setData(
                                    (prev) =>
                                        (prev = {
                                            ...prev,
                                            email: e.target.value,
                                        })
                                )
                            }
                        />
                    </div>
                    <div className="flex gap-4 justify-center">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            required
                            className="border-2 rounded-lg pl-2 placeholder:font-light"
                            value={data.password}
                            onChange={(e) =>
                                setData(
                                    (prev) =>
                                        (prev = {
                                            ...prev,
                                            password: e.target.value,
                                        })
                                )
                            }
                        />
                    </div>
                    <div className="flex justify-between text-xs font-light ">
                        <div className="flex gap-1 ml-1 items-center">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <p
                            className="text-purple-600 hover:cursor-pointer"
                            onClick={() => navigate("forgot")}
                        >
                            Forgot Password?
                        </p>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-1 rounded-lg bg-purple-500 text-white hover:text-purple-500 hover:bg-white border-transparent border-2 hover:border-purple-500 transition-colors"
                    >
                        Log In
                    </button>
                </form>
                <button
                    onClick={handleCreateAccount}
                    className="w-full py-2 rounded-lg text-sm font-medium bg-gray-300 text-gray-500 hover:text-gray-400 hover:bg-gray-200 transition-colors max-w-sm"
                >
                    Create Accout
                </button>
            </div>
        </>
    );
}

export default Login;
