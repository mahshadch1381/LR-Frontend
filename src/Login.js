import React, { useState } from "react";
import './Login.css'; // Make sure to have the correct path

const Login = () => {
    const [usename, setusename] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here (e.g., send a request to a server)
        console.log('usename:', usename);
        console.log('Password:', password);
        // Add your login logic here
    };

    return (
        <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />

            <div className="signup">
                <form>
                    <label htmlFor="chk" aria-hidden="true">Sign up</label>
                    <input type="text" name="txt" placeholder="User name" required="" />
                    <input type="phoneNumber" name="phoneNumber" placeholder="phoneNumber" required="" />
                    <input type="password" name="pswd" placeholder="Password" required="" />
                    <button>Sign up</button>
                </form>
            </div>

            <div className="login">
                <form>
                    <label htmlFor="chk" aria-hidden="true">Login</label>
                    <input
                        type="usename"
                        name="usename"
                        placeholder="usename"
                        required=""
                        value={usename}
                        onChange={(e) => setusename(e.target.value)}
                    />
                    <input
                        type="password"
                        name="pswd"
                        placeholder="Password"
                        required=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="button" onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;