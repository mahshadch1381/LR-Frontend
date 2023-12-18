import React from 'react';
import { useState } from "react";
import styles from "./../styles/Profile.module.css";

//TODO request for taking data from server
//TODO request for sending edited data to server

const Profile = () => {
    const [usenames, setusenames] = useState('');
    const [passwords, setPasswords] = useState('');
    const [phoneNumber, setPhones] = useState('');
    if (!localStorage.getItem('token')) {
        window.location.href = '/'
    }
    return (
        <div>
            <h1>here is users Profile</h1>
            <div >
                <form>
                    <input type="text" name="txt" placeholder="Username" required="" value={usenames} onChange={(e) => setusenames(e.target.value)} />
                    <input type="phoneNumber" name="phoneNumber" placeholder="phone Number" required="" value={phoneNumber} onChange={(e) => setPhones(e.target.value)} />
                    <input type="password" name="pswd" placeholder="Password" required="" value={passwords} onChange={(e) => setPasswords(e.target.value)} />
                    <button type="button" >Save</button>
                </form>
            </div>
        </div>
    );
};

export default Profile;