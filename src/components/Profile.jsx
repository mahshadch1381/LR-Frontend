import React from 'react';
import { useState } from "react";
import styles from "./../styles/Profile.module.css";
import styles2 from "./../styles/ProfileSidebar.module.css";
import {Link} from "react-router-dom";

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
        <div className={styles.profile_right}>
            <h1 className={styles.profile_right_font}>Here is the user's Profile</h1>
            <div className={styles.profile_formContainer}>
                <form>
                    <input
                        className={styles.profile_input}
                        type="text"
                        name="txt"
                        placeholder="Username"
                        required=""
                        value={usenames}
                        onChange={(e) => setusenames(e.target.value)}
                    />
                    <input
                        className={styles.profile_input}
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        required=""
                        value={phoneNumber}
                        onChange={(e) => setPhones(e.target.value)}
                    />
                    <input
                        className={styles.profile_input}
                        type="password"
                        name="pswd"
                        placeholder="Password"
                        required=""
                        value={passwords}
                        onChange={(e) => setPasswords(e.target.value)}
                    />
                    <button className={styles.profile_button} type="button">Save</button>
                </form>
            </div>
            <div className={styles2.profile_sidebar}>
                <Link to="/" className={styles2.profile_sidebarLink}>
                    Home
                </Link>
                <button className={styles2.profile_sidebar_button} /*onClick={moveToSearch}*/>
                    Search for Laptop
                </button>
                <button className={styles2.profile_sidebar_button} /*onClick={moveToPanel}*/>
                    Panel
                </button>
                <button className={styles2.profile_sidebar_button} /*nClick={logout}*/>
                    Logout
                </button>
            </div>
        </div>
    );
};


export default Profile;