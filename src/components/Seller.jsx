import React, {useEffect, useState} from 'react';
import axios from "axios";
import styles3 from "../styles/Penelright.module.css";
import styles2 from "../styles/Sidebar.module.css";
import {Link} from "react-router-dom";
import styles from "../styles/Panel.module.css";
import ProductCard from "./ProductCard";



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

const Seller = () => {
    const [user, setuser] = useState({ Info: [] });
    const [laptop, setlaptop] = useState([]);

    //if (!localStorage.getItem('token')) {
    //    window.location.href = '/'
   // }

    const getuser = () => {
        axios.get("http://127.0.0.1:8088/users/profile", { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
            .then(res => {
                    setuser(res.data)
                    // console.log(res.data)
                    // console.log(user)
                }
            )
            .catch(err => {
                console.log(err);
            })
    }

    const getlaptop = async () => {
        await axios.get("http://127.0.0.1:8088/users/laptops/favorites", { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
            .then(res => {
                    setlaptop(res.data.laptops)
                    // console.log(res.data.laptops)
                    // console.log(laptop)
                }
            )
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getuser();
        getlaptop();

    }, []);

    useEffect(() => {
        console.log(laptop);
    }, []); // Log the laptops state whenever it changes



    return (

        <>
            <div className={styles3.panel_right}>

                <h1 className={styles3.panel_rightfont}>Your favorite laptops</h1>

                <div className={styles2.sidebar}>
                    <Link to="/" className={styles2.sidebarLink}>
                        Home
                    </Link>

                    <p className={styles2.p_style}>Welcome {user.Info.name}</p>
                    {/* <p className={styles2.p_style}>Welcome Amirreza Ahmadi</p> */}

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
                    {laptop &&

                        laptop.map(

                            laptop =>
                                // laptops.map(laptop =>
                                // console.log(laptop),
                                <ProductCard
                                    id={laptop.id}
                                    cpu={laptop.cpu}
                                    ram={laptop.ram}
                                    ssd={laptop.ssd}
                                    hdd={laptop.hdd}
                                    graphic_card={laptop.graphic_card}
                                    screen_size={laptop.screen_size}
                                    company={laptop.company}
                                    image_url={laptop.image_url}
                                    redirect_url={laptop.redirect_url}
                                    price={laptop.price}
                                    key={laptop.id}
                                    isfavorit={true}
                                />)
                    }
                </div>
            </div>
        </>
    );
};


export default Seller;