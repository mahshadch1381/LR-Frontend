import React from 'react';
import styles from "../styles/AboutusSidebar.module.css";
import styles2 from "../styles/Aboutus.module.css"
import { Link } from "react-router-dom";

const Aboutus = () => {

    const moveToLanding = () => {
        window.location.href = '/'
    }

    const moveToAdmin = () => {
        window.location.href = '/admin-login'
    }

    return (
        <>
            <div>
                here is about us page
                <div className={styles.AboutUs_sidebar}>
                    <Link to="/" className={styles.AboutUs_sidebarLink}>
                        Home
                    </Link>

                    <button onClick={moveToAdmin} className={styles.AboutUs_button} >
                        admin
                    </button>
                    <button onClick={moveToLanding} className={styles.AboutUs_button} >
                        Landing Page
                    </button>

                </div>
            </div>
            <div className={styles2.AboutUs}>
                <h1 className={styles2.AboutUs_h1}>About us</h1>
                <h2 className={styles2.AboutUs_h2}>Our software seeks to make the process of buying a computer easier for the customer.
                    In fact, we are intermediaries between sites, sellers and buyers to provide a faster and more efficient process for purchasing.
                    We are trying to use machine learning algorithms to suggest the best choice according to your desired features and budget. Also, for each of our suggestions, we provide you with a link or a number that you can use to track your purchase. We are trying to provide the most up-to-date products by keeping ourselves updated and get your satisfaction.
                    May we be able to get your satisfaction, dear customers</h2>
                <h1 className={styles2.AboutUs_h1}>follow us
                </h1>
                <h2 className={styles2.AboutUs_h2}>You can follow us in these medias:</h2>
                <h2 className={styles2.AboutUs_h2}>telegram : @Easylaptoprecommender</h2>
                <h2 className={styles2.AboutUs_h2}>Email : easylptprecommender@gmail.com</h2>
                <h2 className={styles2.AboutUs_h2}>twitter : xxx/yyy</h2>
                <img className={styles2.AboutUs_left_image} />
                <img className={styles2.AboutUs_right_image} />
            </div>
        </>
    );
};

export default Aboutus;