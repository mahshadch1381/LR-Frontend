
import React from 'react';
import styles from "../styles/Sidebar.module.css";
import { Link } from "react-router-dom";
import styles2 from "../styles/Penelright.module.css";
import { useEffect, useState } from "react";
import axios from 'axios';

const AdminPanel = () => {

    const handle_logout = () => {
        localStorage.removeItem('token')
        window.location.href = '/'
    }

    const [laptop, setlaptop] = useState([]);

    const getlaptop = () => {
        axios.get("http://127.0.0.1:8088/backoffice/laptops/", { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
            .then(res => {
                setlaptop(res.data.data.laptops)
            }
            )
            .catch(err => {
                console.log(err);
            })
    }

    const handle_remove = (laptopid) => {
        axios.delete(`http://127.0.0.1:8088/backoffice/laptops/${laptopid}`, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
            .then(res => {
                console.log(res);
            }
            )
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getlaptop();
    },[]
    );



    return (
        <div>
            <div className={styles2.panel_right}>
                <h1 className={styles2.panel_rightfont}>All laptops we have</h1>
                <div className={styles.sidebar}>
                    <Link to="/" className={styles.sidebarLink}>
                        Home
                    </Link>
                    <p className={styles.p_style}>Welcome Admin</p>
                    {/* <p className={styles2.p_style}>Welcome Amirreza Ahmadi</p> */}
                    <button onClick={handle_logout} className={styles.mybutton4} >
                        Logout
                    </button>
                </div>
                <div style={{ width: '500px', height: '550px', overflowY: 'auto', marginLeft: '350px' }}>
                    <ul style={{ listStyle: 'none', padding: '0', }}>
                        {laptop &&
                            laptop.map(
                                laptop => 
                                    
                                    <li key={laptop.ID} style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
                                        <img style={{height: '100px'}}  src={laptop.ImageURL} alt="" />,
                                        {laptop.ID}, 
                                        {laptop.CPU},
                                        {laptop.RAM},
                                        {laptop.SSD},
                                        <button onClick={() => handle_remove(laptop.ID)}>delete</button>
                                    </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
// {
//     laptop.map(laptop => (
//         <li style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
//             {laptop}
//             <button>hi</button>
//         </li>
//     ))
// }