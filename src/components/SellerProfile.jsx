
import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./../styles/Profile.module.css";
import styles2 from "./../styles/ProfileSidebar.module.css";
import { Link } from "react-router-dom";

//TODO request for taking data from server //done
//TODO request for sending edited data to server



    const logout = () => {
        localStorage.removeItem('token')
        window.location.href = '/'
    }

    const moveToSearch = () => {
        window.location.href = '/seller-product'
    }

    const moveToPanel = () => {
        window.location.href = '/seller'
    }

    const SellerProfile = () => {
        const [profileState, setProfileState] = useState({
            name: {
                value: "",
                error: ""
            },
            phone_number: {
                value: "",
                error: ""
            },
            password: {
                value: "",
                error: ""
            }
        });
        // const [usenames, setusenames] = useState({
        //     value: "",
        //     error: ""
        // });
        // const [passwords, setPasswords] = useState('');
        // const [phoneNumber, setPhones] = useState('');



        const [data, setData] = useState({ Info: [] });
        const [showSuccess, setShowSuccess] = useState(false)
        const [showEroor, setShowError] = useState(false)
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

        const handle_save = () => {
            setShowError(false);
            setShowSuccess(false)
            const changing_data = {
                user_name: profileState.name.value,
                phone_number: profileState.phone_number.value,
                password: profileState.password.value
            }
            axios.put("http://127.0.0.1:8088/users/", changing_data, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
                .then(response => {
                    console.log(response);
                    console.log(changing_data)
                    setShowSuccess(true)
                    setShowError(false)
                    // Handle the response
                })
                .catch(error => {
                    // Handle errors
                    setShowError(true)
                    setShowSuccess(false)
                    console.log(changing_data)
                    console.log(error);
                });
        }
        useEffect(() => {
            getData();
        }, []);
        const onChangeInput = (e) => {
            const { name, value } = e.target;

            setProfileState(prev => ({
                ...prev,
                [name]: {
                    error:"",
                    value
                }
            }))
        }
        return (
            <div className={styles.profile_right}>
                <h1 className={styles.profile_right_font}>Here is the seller's Profile</h1>
                <div className={styles.profile_formContainer}>
                    <form>
                        <input
                            className={styles.profile_input}
                            type="text"
                            name="name"
                            placeholder={data.Info.name}
                            required=""
                            value={profileState.name.value}
                            onChange={onChangeInput}
                        />
                        <input
                            className={styles.profile_input}
                            type="tel"
                            name="phone_number"
                            placeholder={data.Info.phone_number}
                            required=""
                            value={profileState.phone_number.value}
                            onChange={onChangeInput}
                        />
                        <input
                            className={styles.profile_input}
                            type="password"
                            name="password"
                            placeholder="New Password"
                            required=""
                            value={profileState.password.value}
                            onChange={onChangeInput}
                        />
                        {showSuccess && <p style={{ marginLeft: '-65px',fontSize:'20px',color:'rgba(48,227,79,0.5)',marginBottom:'3px',fontWeight:'bold'}}> successfully Saved</p>}
                        {showEroor && <p style={{ marginLeft: '-53px',fontSize:'20px',color:'rgba(253,23,2,0.5)',marginBottom:'3px',fontWeight:'bold'}}>Saving Error</p>}
                        <button onClick={handle_save} className={styles.profile_button} type="button">Save</button>
                    </form>
                </div>
                <div className={styles2.profile_sidebar}>
                    <Link to="/" className={styles2.profile_sidebarLink}>
                        Home
                    </Link>
                    <button className={styles2.profile_sidebar_button} onClick={moveToSearch}>
                        Add Laptop
                    </button>
                    <button className={styles2.profile_sidebar_button} onClick={moveToPanel}>
                        Seller Panel
                    </button>
                    <button className={styles2.profile_sidebar_button} onClick={logout}>
                        Seller Logout
                    </button>
                </div>
            </div>
        );
    };



export default SellerProfile;