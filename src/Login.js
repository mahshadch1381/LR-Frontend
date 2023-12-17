import React, { useState } from "react";
import './Login.css'; // Make sure to have the correct path
import axios from "axios";
const Login = () => {

    const [password, setPassword] = useState('');
    const [names, setnames] = useState('');
    const [passwords, setPasswords] = useState('');
    const [phoneNumber, setPhones] = useState('');
    const handleLogin_log = () => {
        // Handle login logic here (e.g., send a request to a server)
        console.log('phoneNumber:', phoneNumber);
        console.log('Password:', password);
        axios.post('http://localhost:8088/users/login', {
            phone_number: phoneNumber,
            password: password,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        // console.log('Password:', password);

        // Add your login logic here
    };
    const handleLogin_sign = () => {
        // Handle login logic here (e.g., send a request to a server)
        console.log('names:', names);
        console.log('Passwords:', passwords);
        console.log('phoneNumber:', phoneNumber);
        // Add your login logic here
        axios.post('http://localhost:8088/users/register', {
            phone_number: phoneNumber,
            name: names,
            password: passwords,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };
    return (
        <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />

            <div className="signup">
                <form>
                    <label htmlFor="chk" aria-hidden="true">Sign up</label>
                    <input type="text" name="txt" placeholder="User name" required="" value={names} onChange={(e) => setnames(e.target.value)} />
                    <input type="phoneNumber" name="phoneNumber" placeholder="phoneNumber" required="" value={phoneNumber} onChange={(e) => setPhones(e.target.value)}/>
                    <input type="password" name="pswd" placeholder="Password" required="" value={passwords} onChange={(e) => setPasswords(e.target.value)}/>
                    <button type="button" onClick={handleLogin_sign}>Sign up</button>
                </form>
            </div>

            <div className="login">
                <form>
                    <label htmlFor="chk" aria-hidden="true">Login</label>
                    <input
                        type="phoneNumber"
                        name="phoneNumber"
                        placeholder="phoneNumber"
                        required=""
                        value={phoneNumber}
                        onChange={(e) => setPhones(e.target.value)}
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