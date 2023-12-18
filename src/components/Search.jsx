import React from 'react';
import styles from "./../styles/Search.module.css";
import { useState } from "react";

//TODO API for finding best laptop

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
            <div>
                here is users Search for laptop
            </div>
            <div>
                <form>
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

                    <button type="button" >Search</button>
                </form>

            </div>
        </>
    );
};

export default Search;