import React from 'react';
import {Link, useParams} from 'react-router-dom';
import styles from './../styles/PanelProduct.module.css'
import styles3 from "../styles/PanelproductRightside.module.css";
import styles2 from "../styles/ProductcarcSidebar.module.css";
//TODO API for taking information with id

const laptop = {
    image_url: "https://image.torob.com/base/images/_3/79/_379dUgbo3opHhCk.jpg_/0x352.webp",
    market_link: "https://torob.com/p/f0162cbd-523b-45ea-9788-ed371d430dd5/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D9%84%D9%86%D9%88%D9%88-ideapad3-12gb-ram-512gb-ssd-1tb-hdd-i3/",
    cpu: "core i7",
    brand: "Asus",
    ram: 32,
    hdd: 256,
    ssd: 128,
    price: "$795",
    id: 123,
    isfavorit: false
}

const PanelProduct = () => {
    const { id } = useParams();
    return (
         <>
            <div className={styles3.panelProduct_right}>
                <h1 className={styles3.panelProduct_rightfont}>laptop information</h1>
                <div className={styles2.productCard_sidebar}>
                    <Link to="/" className={styles2.productCard_sidebarLink}>
                        Home
                    </Link>

                    <button className={styles2.productCard_button} /*onClick={moveToSearch}*/>
                        Search for Laptop
                    </button>
                    <button className={styles2.productCard_button} /*onClick={moveToPanel}*/>
                        Panel
                    </button>
                    <button className={styles2.productCard_button} /*onClick={moveTologout}*/>
                        logout
                    </button>
                </div>

               </div>
             <div className={styles.card}>
                 <div className={styles.photo}>
                     <img src={laptop.image_url}></img>
                 </div>
                 <div className={styles.description}>
                     <h2>{laptop.brand}</h2>
                     <h4>CPU : {laptop.cpu}</h4>
                     <h4>RAM : {laptop.ram}</h4>
                     <h4>HDD : {laptop.hdd}</h4>
                     <h4>SSD : {laptop.ssd}</h4>
                     <h1>{laptop.price}</h1>
                     <a href={laptop.market_link} target='_blank'>
                         <button className={styles.card_button}>Visit/Buy</button>
                     </a>
                 </div>
             </div>
             </>
    );
};

export default PanelProduct;