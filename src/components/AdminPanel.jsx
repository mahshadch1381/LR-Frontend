
import React from 'react';
import styles from "../styles/Sidebar.module.css";
import {Link} from "react-router-dom";
import styles2 from "../styles/Penelright.module.css";


const AdminPanel = () => {
    const itemList = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];



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
                <button className={styles.mybutton4} >
                    Logout
                </button>

            </div>
                <div style={{ width: '500px', height: '550px', overflowY: 'auto',marginLeft:'350px' }}>
                    <ul style={{ listStyle: 'none', padding: '0', }}>
                        {itemList.map((item, index) => (
                            <li key={index} style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
       </div>
        </div>
    );
};

export default AdminPanel;