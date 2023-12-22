import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './../styles/PanelProduct.module.css'
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
        <div class={styles.card}>
            <div class={styles.photo}>
                <img src={laptop.image_url}></img>
            </div>
            <div class={styles.description}>
                <h2>{laptop.brand}</h2>
                <h4>CPU : {laptop.cpu}</h4>
                <h4>RAM : {laptop.ram}</h4>
                <h4>HDD : {laptop.hdd}</h4>
                <h4>SSD : {laptop.ssd}</h4>
                <h1>{laptop.price}</h1>
                <a href={laptop.market_link} target='_blank'>
                    <button class={styles.button}>Buy</button>
                </a>
            </div>
        </div>
    );
};

export default PanelProduct;