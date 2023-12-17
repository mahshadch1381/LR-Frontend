import React, { useState } from "react";
import styles from './../styles/Login.module.css'; 
import axios from "axios";
const Login = () => {
    const [usename, setusename] = useState('');
    const [password, setPassword] = useState('');
    const [usenames, setusenames] = useState('');
    const [passwords, setPasswords] = useState('');
    const [phoneNumber, setPhones] = useState('');
    const handleLogin_log = () => {

        axios.post('http://localhost:8088/users/login', {
            phone_number: usename,
            password: password,
          })
          .then(function (response) {
            localStorage.setItem('token', response.data.token.access_token)
            window.location.href = '/panel'

          })
          .catch(function (error) {
            console.log(error);
          });
    };
    const handleLogin_sign = () => {

        axios.post('http://localhost:8088/users/register', {
            phone_number: phoneNumber,
            name: usenames,
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
        <div className={styles.first}>
        <div className={styles.main}>
            <input type="checkbox" id={styles.chk} aria-hidden="true" />
            <div className={styles.signup}>
                <form>
                    <label htmlFor={styles.chk} aria-hidden="true">Sign up</label>
                    <input type="text" name="txt" placeholder="User name" required="" value={usenames} onChange={(e) => setusenames(e.target.value)} />
                    <input type="phoneNumber" name="phoneNumber" placeholder="phoneNumber" required="" value={phoneNumber} onChange={(e) => setPhones(e.target.value)}/>
                    <input type="password" name="pswd" placeholder="Password" required="" value={passwords} onChange={(e) => setPasswords(e.target.value)}/>
                    <button type="button" onClick={handleLogin_sign}>Sign up</button>
                </form>
            </div>

            <div className={styles.login}>
                <form>
                    <label htmlFor={styles.chk} aria-hidden="true">Login</label>
                    <input
                        type="usename"
                        name="usename"
                        placeholder="phone number"
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
        </div>
    );
};

export default Login;