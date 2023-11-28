import React, { useState } from "react";
import './Login.css'; // Make sure to have the correct path

const Login = () => {
    const [usename, setusename] = useState('');
    const [password, setPassword] = useState('');
    const [usenames, setusenames] = useState('');
    const [passwords, setPasswords] = useState('');
    const [phoneNumber, setPhones] = useState('');
    const handleLogin_log = () => {
        // Handle login logic here (e.g., send a request to a server)
        console.log('usename:', usename);
        console.log('Password:', password);

        // Add your login logic here
    };
    const handleLogin_sign = () => {
        // Handle login logic here (e.g., send a request to a server)
        console.log('usenames:', usenames);
        console.log('Passwords:', passwords);
        console.log('phoneNumber:', phoneNumber);
        // Add your login logic here
    };
    return (
        <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />

            <div className="signup">
                <form>
                    <label htmlFor="chk" aria-hidden="true">Sign up</label>
                    <input type="text" name="txt" placeholder="User name" required="" value={usenames} onChange={(e) => setusenames(e.target.value)} />
                    <input type="phoneNumber" name="phoneNumber" placeholder="phoneNumber" required="" value={passwords} onChange={(e) => setPhones(e.target.value)}/>
                    <input type="password" name="pswd" placeholder="Password" required="" value={phoneNumber} onChange={(e) => setPasswords(e.target.value)}/>
                    <button type="button" onClick={handleLogin_sign}>Sign up</button>
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
                    <button type="button" onClick={handleLogin_log}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;