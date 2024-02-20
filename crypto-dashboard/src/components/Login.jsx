import { useNavigate } from "react-router";

function Login() {
    const navigate = useNavigate();
    const handleCreateAccount = () => {
        console.log("account is created");
    };
    return (
        <>
            <div className="px-4 py-6 w-full sm:w-min sm:border-2 rounded-lg text-xs">
                <h1 className="sm:text-2xl text-lg font-medium">
                    Welcome to Crypto App
                </h1>
                <p className="md:text-sm">
                    Enter your credentials to access the account.
                </p>
                <form
                    action=""
                    className="flex flex-col w-full font-medium sm:text-base gap-3 py-2"
                >
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            placeholder="james@gmail.com"
                            className="border-2 rounded-lg pl-2 placeholder:font-light"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            required
                            className="border-2 rounded-lg pl-2 placeholder:font-light"
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
                    className="w-full py-2 rounded-lg text-sm font-medium bg-gray-300 text-gray-500 hover:text-gray-400 hover:bg-gray-200 transition-colors"
                >
                    Create Accout
                </button>
            </div>
        </>
    );
}

export default Login;
