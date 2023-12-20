import React from 'react';
import ProductCard from './ProductCard';
import styles from './../styles/Panel.module.css';
import styles2 from './../styles/Sidebar.module.css';
import styles3 from './../styles/Penelright.module.css';
import {Link} from "react-router-dom";

//TODO API for taking favorit laptop

// const listItems = people.map(person => <li>{person}</li>);
const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
}

const moveToProfile = () => {
    window.location.href = '/profile'
}

const moveToSearch = () => {
    window.location.href = '/search'
}

const moveToFavorites = () => {
    window.location.href = '/favorites'
}

const Panel = () => {

    if (!localStorage.getItem('token')) {
        window.location.href = '/'
    }

    return (
        <div className={styles3.panel_right}>
            <h1 className={styles3.panel_rightfont}>Your favorite laptop</h1>
            <div className={styles.first_panel} >
                <ProductCard 
                image={"https://image.torob.com/base/images/3v/Fr/3vFrivyQ5BoZA3N-.jpg"}
                description={"ROG STRIX G513RC"}
                brand={"ASUS"}
                formattedPrice={"$795"}
                id = {123}
                isfavorit = {false}
                />
                <div className={styles2.sidebar}>
                    <Link to="/" className={styles2.sidebarLink}>
                        Home
                    </Link>
                    <button className={styles2.mybutton4} onClick={moveToSearch}>
                        Search for Laptop
                    </button>
                    <button className={styles2.mybutton4} onClick={moveToProfile}>
                        Profile
                    </button>
                    <button className={styles2.mybutton4} onClick={logout}>
                        Logout
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Panel;