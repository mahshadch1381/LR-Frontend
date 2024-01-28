import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles2 from "../styles/ProfileSidebar.module.css";
import styles3 from "./../styles/Searchsidebar.module.css";
import styles from "./../styles/EditSellerProduct.module.css";
import styles4 from "./../styles/Profile.module.css";

const SellerEdit = () => {
    const { id } = useParams();
    const logout = () => {
        localStorage.removeItem('token')
        window.location.href = '/'
    }
    const moveToSearch = () => {
        window.location.href = '/seller-product'
    }

    const moveToPanel = () => {
        window.location.href = '/seller'
    }

    const [laptop, setlaptop] = useState([]);
    const [cpu, setcpu] = useState();
    const [ram, setram] = useState();
    const [ssd, setssd] = useState();
    const [hdd, sethdd] = useState();
    const [graphic, setgraphic] = useState();
    const [scereen, setscereen] = useState();
    const [company, setcompany] = useState();


    const get_laptop = () => {
        axios.get(`http://127.0.0.1:8088/users/laptop/${id}`, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
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


    const save = () => {  // change it

    }
    const remove = () => {  // change it

    }



    return (
        
        <>
            <div>
                <div className={styles2.profile_sidebar}>
                    <Link to="/" className={styles2.profile_sidebarLink}>
                        Home
                    </Link>
                    <button className={styles2.profile_sidebar_button} onClick={moveToSearch}>
                        Add Laptop
                    </button>
                    <button className={styles2.profile_sidebar_button} onClick={moveToPanel}>
                        Seller Panel
                    </button>
                    <button className={styles2.profile_sidebar_button} onClick={logout}>
                        Seller Logout
                    </button>
                </div>
            </div>

            <div className={styles.my_container3}>
                <div className={styles4.profile_right}>
                    <h1 className={styles4.profile_right_font}>Change or Remove what you want</h1>
                </div>
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
                    <div className={styles3.search_button3}>
                        <div><button className={styles3.mybutton6} type="button" onClick={save} >Save</button></div>
                        <div><button className={styles3.mybutton6} onClick={remove} type="button" >Remove</button></div>
                    </div>

                </form>
            </div>
        </>

    );
};

export default SellerEdit;