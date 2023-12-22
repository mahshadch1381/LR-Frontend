import React from 'react';
import ProductCard from './ProductCard';
import styles from "./../styles/Search.module.css";
import styles2 from "./../styles/Searchsidebar.module.css";
import styles3 from "./../styles/SearchRightSide.module.css";
import { useState } from "react";


const laptops = [
    {
        image_url: "https://image.torob.com/base/images/_3/79/_379dUgbo3opHhCk.jpg_/0x352.webp",
        redirect_url: "https://torob.com/p/f0162cbd-523b-45ea-9788-ed371d430dd5/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D9%84%D9%86%D9%88%D9%88-ideapad3-12gb-ram-512gb-ssd-1tb-hdd-i3/",
        cpu: "core i7",
        brand: "Asus",
        ram: 32,
        hdd: 256,
        ssd: 128,
        price: "$795",
        id: 123,
        isfavorit: false
    },

    {
        image_url: "https://image.torob.com/base/images/YJ/ak/YJaktypPem--_GQW.jpg_/280x280.webp",
        redirect_url: "https://torob.com/p/f0162cbd-523b-45ea-9788-ed371d430dd5/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D9%84%D9%86%D9%88%D9%88-ideapad3-12gb-ram-512gb-ssd-1tb-hdd-i3/",
        cpu: "core i7",
        brand: "Asus",
        ram: 32,
        hdd: 256,
        ssd: 128,
        price: "$795",
        id: 123,
        isfavorit: false
    },

    {
        image_url: "https://image.torob.com/base/images/Ji/Dw/JiDwlQMYlC5moD-e.webp_/280x280.webp",
        redirect_url: "https://torob.com/p/f0162cbd-523b-45ea-9788-ed371d430dd5/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D9%84%D9%86%D9%88%D9%88-ideapad3-12gb-ram-512gb-ssd-1tb-hdd-i3/",
        cpu: "core i7",
        brand: "Asus",
        ram: 32,
        hdd: 256,
        ssd: 128,
        price: "$795",
        id: 123,
        isfavorit: false
    },
    {
        image_url: "https://image.torob.com/base/images/et/7F/et7FR4z7C9DJdODF.jpg_/0x176.webp",
        redirect_url: "https://torob.com/p/f0162cbd-523b-45ea-9788-ed371d430dd5/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D9%84%D9%86%D9%88%D9%88-ideapad3-12gb-ram-512gb-ssd-1tb-hdd-i3/",
        cpu: "core i7",
        brand: "Asus",
        ram: 32,
        hdd: 256,
        ssd: 128,
        price: "$795",
        id: 123,
        isfavorit: false
    },
    {
        image_url: "https://image.torob.com/base/images/nw/Wk/nwWk_rpBVQjESiQe.jpg_/0x176.webp",
        redirect_url: "https://torob.com/p/f0162cbd-523b-45ea-9788-ed371d430dd5/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D9%84%D9%86%D9%88%D9%88-ideapad3-12gb-ram-512gb-ssd-1tb-hdd-i3/",
        cpu: "core i7",
        brand: "Asus",
        ram: 32,
        hdd: 256,
        ssd: 128,
        price: "$795",
        id: 123,
        isfavorit: false
    }
]



const moveToPanel = () => {
    window.location.href = '/panel'
}

const handleSearch = () => {
    //TODO API for finding best laptops
}

const Search = () => {
    const [cpu, setcpu] = useState('');
    const [ram, setram] = useState('');
    const [ssd, setssd] = useState('');
    const [hdd, sethdd] = useState('');
    const [graphic, setgraphic] = useState('');
    const [scereen, setscereen] = useState('');
    const [company, setcompany] = useState('');
    if (!localStorage.getItem('token')) {
        window.location.href = '/'
    }
    return (
        <>
            <div className={styles.laptopcontainer}>
                <div className={styles.row}>
                    {
                        laptops.map(laptop =>
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
                                key={laptop.id}
                            />)
                    }
                </div>
            </div>
            <div className={styles3.right}>
                <h1 className={styles3.rightfont}>These are our recommendation</h1>
                {/*here set laptop list base on apis*/}
                <div className={styles2.sidebar2}>
                    <h1>Choose what you want</h1>
                    <div className={styles.container}>
                        <form >
                            {/* <input type="text" name="txt" placeholder="cpu" required="" value={cpu} onChange={(e) => setcpu(e.target.value)} /> */}
                            <label>CPU</label>
                            <select name="cpu" id="cpu" value={cpu} onChange={(e) => setcpu(e.target.value)}>
                                <option value="i3">i3</option>
                                <option value="i5">i5</option>
                                <option value="i7">i7</option>
                                <option value="i9">i9</option>
                            </select>
                            {/* <input type="text" name="txt" placeholder="ram" required="" value={ram} onChange={(e) => setram(e.target.value)} /> */}
                            <label>RAM</label>
                            <select name="ram" id="ram" value={ram} onChange={(e) => setram(e.target.value)}>
                                <option value="4">4</option>
                                <option value="8">8</option>
                                <option value="16">16</option>
                                <option value="32">32</option>
                            </select>
                            {/* <input type="text" name="txt" placeholder="ssd" required="" value={ssd} onChange={(e) => setssd(e.target.value)} /> */}
                            <label> SSD </label>
                            <select name="ssd" id="ssd" value={ssd} onChange={(e) => setssd(e.target.value)}>
                                <option value="128">128</option>
                                <option value="256">256</option>
                                <option value="512">512</option>
                                <option value="1024">1024</option>
                            </select>
                            {/* <input type="text" name="txt" placeholder="hdd" required="" value={hdd} onChange={(e) => sethdd(e.target.value)} /> */}
                            <label> HDD </label>
                            <select name="hdd" id="hdd" value={hdd} onChange={(e) => sethdd(e.target.value)}>
                                <option value="128">128</option>
                                <option value="256">256</option>
                                <option value="512">512</option>
                                <option value="1024">1024</option>
                            </select>
                            {/* <input type="text" name="txt" placeholder="graphic" required="" value={graphic} onChange={(e) => setgraphic(e.target.value)} /> */}
                            <label> Graphic </label>
                            <select name="graphic" id="graphic" value={graphic} onChange={(e) => setgraphic(e.target.value)}>
                                <option value="4">4</option>
                                <option value="8">8</option>
                                <option value="16">16</option>
                            </select>

                            {/* <input type="text" name="txt" placeholder="scereen" required="" value={scereen} onChange={(e) => setscereen(e.target.value)} /> */}
                            <label> Scereen size </label>
                            <select name="scereen" id="scereen" value={scereen} onChange={(e) => setscereen(e.target.value)}>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                            </select>

                            {/* <input type="text" name="txt" placeholder="company" required="" value={company} onChange={(e) => setcompany(e.target.value)} /> */}
                            <label> Company </label>
                            <select name="company" id="company" value={company} onChange={(e) => setcompany(e.target.value)}>
                                <option value="hp">HP</option>
                                <option value="dell">DELL</option>
                                <option value="lenovo">LENOVO</option>
                                <option value="acer">ACER</option>
                                <option value="asus">ASUS</option>
                                <option value="apple">APPLE</option>
                            </select>
                            <div className={styles2.search_button3}>
                                <div><button className={styles2.mybutton6} type="button" onClick={handleSearch} >Search</button></div>
                                <div><button className={styles2.mybutton6} onClick={moveToPanel} type="button" >Panel</button></div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;