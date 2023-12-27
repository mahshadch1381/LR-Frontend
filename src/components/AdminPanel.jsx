
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
        axios.get("http://5.34.200.127:8088/backoffice/laptops/", { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
            .then(res => {
                setlaptop(res.data.data.laptops)
            }
            )
            .catch(err => {
                console.log(err);
            })
    }

    const handle_remove = (laptopid) => {
        axios.delete(`http://5.34.200.127:8088/backoffice/laptops/${laptopid}`, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
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
                <div style={{ width: '300px', height: '550px', overflowY: 'auto', marginLeft: '390px' }}>
                    <ul style={{ listStyle: 'none', padding: '0', }}>
                        {laptop &&
                            laptop.map(
                                laptop =>
                                    <li key={laptop.ID} style={{ padding: '6px', border: '10px solid #eee'}}>
                                        <p className={styles.text_admin_postcard}>
                                           id: {laptop.ID},
                                            <br/>
                                           cpu: {laptop.CPU},
                                            <br/>
                                            RAM: {laptop.RAM},
                                            <br/>
                                            SSD: {laptop.SSD},
                                            <br/>
                                            Company:{laptop.Company}
                                            <br/>
                                            graphic_card:{laptop.Graphic}
                                            </p>
                                        <button className={styles.button_delete_admin_panel} onClick={() => handle_remove(laptop.ID)}>delete</button>
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