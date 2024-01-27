import React from 'react';
import ProductCard from './ProductCard';
import styles from "./../styles/Search.module.css";
import styles2 from "./../styles/Searchsidebar.module.css";
import styles3 from "./../styles/SearchRightSide.module.css";
import { useState, useEffect } from "react";
import axios from 'axios';






const moveToPanel = () => {
    window.location.href = '/panel'
}




const SellerProduct = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [laptop, setlaptop] = useState([]);
    const [cpu, setcpu] = useState('i3');
    const [ram, setram] = useState(4);
    const [ssd, setssd] = useState(128);
    const [hdd, sethdd] = useState(128);
    const [graphic, setgraphic] = useState(4);
    const [scereen, setscereen] = useState('13');
    const [company, setcompany] = useState('hp');

    const addlaptop = () => {
        const searchinfo = {
            laptop: {
                cpu: cpu,
                ram: parseInt(ram),
                ssd: parseInt(ssd),
                hdd: parseInt(hdd),
                graphic_card: parseInt(graphic),
                screen_size: scereen,
                company: company
            }
        };
        axios.post("http://127.0.0.1:8088/users/laptops/search", searchinfo, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
            .then(res => {
                setlaptop(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const screenfalg = screenWidth < 1000;

    const moveToPanel = () => {
        window.location.href = '/seller';
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setSelectedFile(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };

    const handleUpload = () => {
        // Add logic to handle file upload
        if (selectedFile) {
            
        } else {
            console.error('No file selected');
        }
    };

    return (
        <>

            <div className={styles3.right}>
                <h1 className={styles3.rightfont}>Add laptop</h1>
                <div className={styles2.sidebar2}>
                    <h1>Choose what you want</h1>

                    <div className={styles.container}>
                        <form >
                            <div>
                                <input className={styles.uploadfile_choose} type="file" onChange={handleFileChange} />
                            </div>
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
                                <div><button className={styles2.mybutton6} type="button" onClick={addlaptop} >add</button></div>
                                <div><button className={styles2.mybutton6} onClick={moveToPanel} type="button" >Panel</button></div>
                            </div>

                        </form>
                    </div>
                </div>
                {
                    selectedFile && <img src={selectedFile} alt="upload-preview" className={styles.uploadfile_preview} />
                }
            </div>
        </>
    );
};


export default SellerProduct;