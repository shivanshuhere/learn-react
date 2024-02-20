import { Link } from "react-router-dom";

function Forgot() {
    const handleReset = () => {};
    return (
        <>
            <div>
                <Link to={""}>----------left-arrow</Link>
                <h2>Forgot Password</h2>
                <p>
                    Enter your email address for which account you want to reset
                    your password
                </p>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="name@gmail.com" required />
                </div>
                <button onClick={handleReset}>Reset Password</button>
            </div>
        </>
    );
}

export default Forgot;
