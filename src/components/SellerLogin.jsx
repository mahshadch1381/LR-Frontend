import React, {useState} from 'react';
import axios from "axios";
import styles from "../styles/Login.module.css";


 const SellerLogin = () => {
        const [Sellerusename, setSellerusename] = useState('');
        const [password, setPassword] = useState('');
        const [Sellerusenames, setSellerusenames] = useState('');
        const [passwords, setPasswords] = useState('');
        const [phoneNumber, setPhones] = useState('');
        const [showSuccess, setShowSuccess] = useState(false)
        const [showEroor, setShowError] = useState(false)
        const handleLogin_log = () => {

            axios.post('http://127.0.0.1:8088/users/login', {
                phone_number: Sellerusename,
                password: password,
            })
                .then(function (response) {
                    localStorage.setItem('token', response.data.token.access_token)
                    window.location.href = '/seller'
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        const handleLogin_sign = () => {
            setShowError(false);
            axios.post('http://127.0.0.1:8088/users/register', {
                phone_number: phoneNumber,
                name: Sellerusenames,
                password: passwords,
                role: 3
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
                            <label htmlFor={styles.chk} aria-hidden="true">Seller Sign up</label>
                            <input className="myinput" type="text" name="txt" placeholder="Seller user name" required="" value={Sellerusenames} onChange={(e) => setSellerusenames(e.target.value)} />
                            <input className="myinput" type="phoneNumber" name="phoneNumber" placeholder="phoneNumber" required="" value={phoneNumber} onChange={(e) => setPhones(e.target.value)} />
                            <input className="myinput" type="password" name="pswd" placeholder="Password" required="" value={passwords} onChange={(e) => setPasswords(e.target.value)} />
                            {showSuccess && <p style={{ marginLeft: '100px',fontSize:'20px',color:'rgba(48,227,79,0.5)',marginBottom:'3px',fontWeight:'bold'}}> successfully sign up </p>}
                            {showEroor && <p style={{ marginLeft: '110px',fontSize:'20px',color:'rgba(253,23,2,0.5)',marginBottom:'3px',fontWeight:'bold'}}>Error in signing up</p>}
                            <button  className="mybutton" type="button" onClick={handleLogin_sign}>Sign up</button>
                        </form>
                    </div>

                    <div className={styles.login}>
                        <form>
                            <label htmlFor={styles.chk} aria-hidden="true">Seller Login</label>
                            <input className="myinput"
                                   type="Sellerusename"
                                   name="Sellerusename"
                                   placeholder="phone number"
                                   required=""
                                   value={Sellerusename}
                                   onChange={(e) => setSellerusename(e.target.value)}
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


export default SellerLogin;