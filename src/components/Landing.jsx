import React from 'react';
import styles from "./../styles/Landing.module.css"

const Landing = () => {
    return (
        <div className={styles.back} >
            <img className={styles["left-image"]}  />
            <div className={styles.main2}>
                <h1 >Welcome to the Landing Page</h1>
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
            </div>

    );
};

export default Landing;
