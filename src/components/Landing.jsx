import React from 'react';
import styles from "./../styles/Landing.module.css"
import styles2 from "../styles/Sidebar.module.css";
import {Link} from "react-router-dom";

const Landing = () => {
    const moveToAdminLogin = () => {
        window.location.href = '/admin-login'
    }
    const moveToAboutus = () => {
        window.location.href = '/aboutus'
    }
    return (    
        <div className={styles.back} >
            <div className={styles.main2}>
                <h1 >Welcome to our recommender laptop app</h1>
                <h2 >Please login or signup first.</h2>
                <div className={styles.button3}>
                    <div >
                        <a  href="/login">
                            <button >User login</button>
                        </a>
                    </div>
                    <div >
                        <a  href="/follow_us">
                            <button >Seller login</button>
                        </a>
                    </div>
                </div>
            </div>
                <div className={styles2.sidebar}>
                    <Link to="/" className={styles2.sidebarLink}>
                        Landing page
                    </Link>
                    <button onClick={moveToAdminLogin} className={styles2.mybutton4} >
                        admin
                    </button>
                    <button className={styles2.mybutton4} onClick={moveToAboutus} >
                        About us
                    </button>
                    <button className={styles2.mybutton4} onClick={moveToAboutus} >
                        follow us
                    </button>
                    <img className={styles["left-image"]}  />

                </div>


            </div>

    );
};

export default Landing;
