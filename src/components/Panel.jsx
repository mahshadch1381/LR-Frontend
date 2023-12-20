import React from 'react';
import ProductCard from './ProductCard';
import styles from './../styles/Panel.module.css';
import styles2 from './../styles/Sidebar.module.css';
import styles3 from './../styles/Penelright.module.css';
import { Link } from "react-router-dom";

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


    const laptops = [
        {
            image: "https://image.torob.com/base/images/_3/79/_379dUgbo3opHhCk.jpg_/0x352.webp",
            description: "dlsaj;kfjd;af",
            brand: "",
            formattedPrice: "$795",
            id: 123,
            isfavorit: false
        },

        {
            image: "https://image.torob.com/base/images/YJ/ak/YJaktypPem--_GQW.jpg_/0x352.webp",
            description: "ladsjhfdklajhfjdkas",
            brand: "",
            formattedPrice: "$795",
            id: 123,
            isfavorit: false
        },
        {
            image: "https://image.torob.com/base/images/iK/Qm/iKQmA8vsZybWSvcA.jpg_/0x352.webp",
            description: "jfadslkfj;a",
            brand: "",
            formattedPrice: "$795",
            id: 123,
            isfavorit: false
        }
    ]

    const laps = laptops.map(laptop => <ProductCard
        image={laptop.image}
        description={laptop.description}
        brand={laptop.brand}
        formattedPrice={laptop.formattedPrice}
        id={laptop.id}
        isfavorit={laptop.isfavorit}
    />);

    return (
        <>




            <div className={styles3.panel_right}>

                <h1 className={styles3.panel_rightfont}>Your favorite laptop</h1>


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

            <div className={styles.container}>
                <div className={styles.row}>
                    {laps}
                </div>
            </div>
        </>
    );
};

export default Panel;