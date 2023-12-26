import React, { useState } from "react";
import styles from './../styles/Login.module.css';
import axios from "axios";
const Login = () => {
    const [usename, setusename] = useState('');
    const [password, setPassword] = useState('');
    const [usenames, setusenames] = useState('');
    const [passwords, setPasswords] = useState('');
    const [phoneNumber, setPhones] = useState('');
    const [showSuccess, setShowSuccess] = useState(false)
    const [showEroor, setShowError] = useState(false)
    const handleLogin_log = () => {

        axios.post('http://192.168.96.127:8088/users/login', {
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
        setShowError(false);
        axios.post('http://192.168.96.127:8088/users/register', {
            phone_number: phoneNumber,
            name: usenames,
            password: passwords,
        })
            .then(function (response) {
                console.log(response);
                setShowSuccess(true)
                setShowError(false)
            })
            .catch(function (error) {
                setShowError(true)
                setShowSuccess(false)
                console.log(error);
            });
    };
    return (
        <div className={styles.first}>
            <div className={styles.main}>
                <input  type="checkbox" id={styles.chk} aria-hidden="true" />
                <div className={styles.signup}>
                    <form>
                        <label htmlFor={styles.chk} aria-hidden="true">Sign up</label>
                        <input className="myinput" type="text" name="txt" placeholder="User name" required="" value={usenames} onChange={(e) => setusenames(e.target.value)} />
                        <input className="myinput" type="phoneNumber" name="phoneNumber" placeholder="phoneNumber" required="" value={phoneNumber} onChange={(e) => setPhones(e.target.value)} />
                        <input className="myinput" type="password" name="pswd" placeholder="Password" required="" value={passwords} onChange={(e) => setPasswords(e.target.value)} />
                        {showSuccess && <p style={{ marginLeft: '100px',fontSize:'20px',color:'rgba(48,227,79,0.5)',marginBottom:'3px',fontWeight:'bold'}}> successfully sign up </p>}
                        {showEroor && <p style={{ marginLeft: '110px',fontSize:'20px',color:'rgba(253,23,2,0.5)',marginBottom:'3px',fontWeight:'bold'}}>Error in signing up</p>}
                        <button  className="mybutton" type="button" onClick={handleLogin_sign}>Sign up</button>
                    </form>
                </div>

                <div className={styles.login}>
                    <form>
                        <label htmlFor={styles.chk} aria-hidden="true">Login</label>
                        <input className="myinput"
                            type="usename"
                            name="usename"
                            placeholder="phone number"
                            required=""
                            value={usename}
                            onChange={(e) => setusename(e.target.value)}
                        />
                        <input className="myinput"
                            type="password"
                            name="pswd"
                            placeholder="Password"
                            required=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="mybutton" type="button" onClick={handleLogin_log}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;