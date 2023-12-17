import React from 'react';
import styles from "./../styles/Landing.module.css"
import "./../styles/Base.module.css"
const Landing = () => {
    return (
        <div className={styles.first}>
            <h1 className={styles.good}>Welcome to the Landing Page</h1>
            <a className={styles.this} href="/login">
                <button className={styles.bot}>Login</button>
            </a>
        </div>
    );
};

export default Landing;
