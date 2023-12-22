import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import styles from './../styles/Panel.module.css';
import styles2 from './../styles/Sidebar.module.css';
import styles3 from './../styles/Penelright.module.css';
import { Link } from "react-router-dom";

//TODO API for taking favorit laptop //done
//TODO API for taking user //done


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




const Panel = () => {

    const [user, setuser] = useState({ Info: [] });
    const [laptop, setlaptop] = useState([]);

    if (!localStorage.getItem('token')) {
        window.location.href = '/'
    }






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
        await axios.get("http://127.0.0.1:8088/users/1/favorites", { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
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

                <h1 className={styles3.panel_rightfont}>Your favorite laptop</h1>

                <div className={styles2.sidebar}>
                    <Link to="/" className={styles2.sidebarLink}>
                        Home
                    </Link>

                    <p>welcome {user.Info.name}</p>

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
                    {
                        laptop.map(laptop => 
                        // console.log(laptop),
                        <ProductCard 
                            id = {laptop.id}
                            cpu = {laptop.cpu}
                            ram = {laptop.ram}
                            ssd = {laptop.ssd}
                            hdd = {laptop.hdd}
                            graphic_card = {laptop.graphic_card}
                            screen_size = {laptop.screen_size}
                            company = {laptop.company}
                            image_url = {laptop.image_url}
                            redirect_url = {laptop.redirect_url}
                            key = {laptop.id}
                            />)
                    }
                </div>
            </div>
        </>
    );
};

export default Panel;