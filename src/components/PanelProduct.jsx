import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import styles from './../styles/PanelProduct.module.css'
import styles3 from "../styles/PanelproductRightside.module.css";
import styles2 from "../styles/ProductcarcSidebar.module.css";
import axios from 'axios';
//TODO API for taking information with id

const letterRegex = /[a-zA-Z]/;



const moveToPanel = () => {
    window.location.href = "/panel"
}

const moveToSearch = () => {
    window.location.href = "/search"
}

const handle_logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
}

const PanelProduct = () => {

    const [gav, setgov] = useState(false)

    function redirectToUrl(url) {
        console.log(url)
        if(letterRegex.test(url)){
            window.open(url, '_blank');
        }
    
        else{
            setgov(true)
        }
    
      }

    const [laptop, setlaptop] = useState({})

    const { id } = useParams();

    const get_laptop = () => {
        axios.get(`http://127.0.0.1:8088/users/laptop/${id}`,  { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
            .then(res => {
                setlaptop(res.data.laptop)

            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {

        get_laptop()

    }, []);

    return (
         <>
            <div className={styles3.panelProduct_right}>
                <h1 className={styles3.panelProduct_rightfont}>laptop information</h1>
                <div className={styles2.productCard_sidebar}>
                    <Link to="/" className={styles2.productCard_sidebarLink}>
                        Home
                    </Link>

                    <button onClick={moveToSearch} className={styles2.productCard_button} /*onClick={moveToSearch}*/>
                        Search for Laptop
                    </button>
                    <button onClick={moveToPanel} className={styles2.productCard_button} /*onClick={moveToPanel}*/>
                        Panel
                    </button>
                    <button onClick={handle_logout} className={styles2.productCard_button} /*onClick={moveTologout}*/>
                        logout
                    </button>
                </div>

               </div>
             <div className={styles.card}>
                 <div className={styles.photo}>
                     <img src={laptop.image_url}></img>
                 </div>
                 <div className={styles.description}>
                     <h2>{laptop.company}</h2>
                     <h4>CPU : {laptop.cpu}</h4>
                     <h4>RAM : {laptop.ram}</h4>
                     <h4>HDD : {laptop.hdd}</h4>
                     <h4>SSD : {laptop.ssd}</h4>
                     <h4>Screen : {laptop.screen_size}</h4>
                     <h1>{laptop.price}</h1>
                     <button className={styles.card_button} onClick={() => redirectToUrl(laptop.redirect_url)}>Visit/Buy</button>
                     {gav && <p>call this number : {laptop.redirect_url}</p>}
                 </div>
             </div>
             </>
    );
};

export default PanelProduct;