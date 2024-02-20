import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div>
                <h1>Welcome to Crypto App</h1>
                <p>Enter your credentials to access the account.</p>
                <form action="PUT">
                    <dir>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="james@gmail.com"
                        />
                    </dir>
                    <dir>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </dir>
                    <div>
                        <dir>
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </dir>
                        <Link>Forgot Password?</Link>
                    </div>
                    <button type="submit">Log In</button>
                </form>
                <button onClick={handleCreateAccount}>Create Accout</button>
            </div>
        </>
    );
}

export default Login;
