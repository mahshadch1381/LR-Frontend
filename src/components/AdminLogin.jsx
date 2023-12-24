import React, { useState } from "react";
import styles from './../styles/Login.module.css';
import axios from "axios";
const AdminLogin = () => {
    const [usename, setadminusename] = useState('');
    const [password, setadminPassword] = useState('');
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
    return (
        <div className={styles.first}>
            <div className={styles.main}>
                <input  type="checkbox" id={styles.chk} aria-hidden="true" />
                <div className={styles.signup}>
                    <form>
                        <label htmlFor={styles.chk} aria-hidden="true">Admin Login</label>
                        <input className="myinput"
                               type="usename"
                               name="usename"
                               placeholder="phone number"
                               required=""
                               value={usename}
                               onChange={(e) => setadminusename(e.target.value)}
                        />
                        <input className="myinput"
                               type="password"
                               name="pswd"
                               placeholder="Password"
                               required=""
                               value={password}
                               onChange={(e) => setadminPassword(e.target.value)}
                        />
                        <button  className="mybutton" type="button" onClick={handleLogin_log}>login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;