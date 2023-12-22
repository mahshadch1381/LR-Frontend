import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./../styles/Profile.module.css";
import styles2 from "./../styles/ProfileSidebar.module.css";
import {Link} from "react-router-dom";

//TODO request for taking data from server //done
//TODO request for sending edited data to server



const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
}

const moveToSearch = () => {
    window.location.href = '/search'
}

const moveToPanel = () => {
    window.location.href = '/panel'
}

const Profile = () => {
    const [usenames, setusenames] = useState('');
    const [passwords, setPasswords] = useState('');
    const [phoneNumber, setPhones] = useState('');
    if (!localStorage.getItem('token')) {
        window.location.href = '/'
    }


    const [data, setData] = useState({ Info: [] });

    const getData = () => {
        axios.get("http://127.0.0.1:8088/users/profile", { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
            .then(res => {
                setData(res.data)
            }
            )
            .catch(err => {
                console.log(err);
            })
    }

    // useEffect(() => {
    //     getData();
    // }, []);

    return (
        <div className={styles.profile_right}>
            <h1 className={styles.profile_right_font}>Here is the user's Profile</h1>
            <div className={styles.profile_formContainer}>
                <form>
                    <input
                        className={styles.profile_input}
                        type="text"
                        name="txt"
                        placeholder={data.Info.name}
                        required=""
                        value={usenames}
                        onChange={(e) => setusenames(e.target.value)}
                    />
                    <input
                        className={styles.profile_input}
                        type="tel"
                        name="phoneNumber"
                        placeholder={data.Info.phone_number}
                        required=""
                        value={phoneNumber}
                        onChange={(e) => setPhones(e.target.value)}
                    />
                    <input
                        className={styles.profile_input}
                        type="password"
                        name="pswd"
                        placeholder="New Password"
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
                <button className={styles2.profile_sidebar_button} onClick={moveToSearch}>
                    Search for Laptop
                </button>
                <button className={styles2.profile_sidebar_button} onClick={moveToPanel}>
                    Panel
                </button>
                <button className={styles2.profile_sidebar_button} nClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    );
};


export default Profile;