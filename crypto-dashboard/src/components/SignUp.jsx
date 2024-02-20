import { Link } from "react-router-dom";

function SignUp() {
    return (
        <>
            <div>
                <h1>Welcome to Crypto App</h1>
                <p>Create a free account by filling data below.</p>
                <form action="post">
                    <div>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" placeholder="James" />
                        </div>
                        <div>
                            <label htmlFor="surname">Surname</label>
                            <input
                                id="surname"
                                type="text"
                                placeholder="Bond"
                            />
                        </div>
                    </div>
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
                    <dir>
                        <label htmlFor="rePassword">Repeat Password</label>
                        <input type="password" id="rePassword" />
                    </dir>
                    <dir>
                        <input type="checkbox" id="t&c" />
                        <label htmlFor="t&c">
                            i agree with <Link>term and conditions</Link>
                        </label>
                    </dir>
                    <button type="submit">Create Accout</button>
                </form>
                <p>
                    Already have an account? <Link>Log in</Link>
                </p>
            </div>
        </>
    );
}

export default SignUp;
