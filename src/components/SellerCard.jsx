import React, { useState } from 'react';
import styles from "./../styles/SellerCard.module.css";
const laptop = {
  id: 1,
  cpu: "i7",
  ram: 16,
  ssd: 512,
  hdd: 0,
  graphic_card: "4",
  screen_size: 15.6,
  company: "Lenovo",
  image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2EXB0dkYi79wf4Wkop2VIek_yIUIqLXPOCCWhtmU_A&s",
  redirect_url: "09123456789",
  price: 1200
};

const SellerCard = (props) => {
  const {id, cpu, ram, ssd, hdd, graphic, screen_size, company, image_url, redirect_url, price } = props;

    const handle_edit = () => {
      window.location.href = '/seller-edit/' + id;

    }

  return (
    <div className={styles.productcard}>
        <img className={styles.productcardimage} src={image_url} />
        <p className={styles.productcardbrand}>{company}</p>
        <p className={styles.productcardprice}>{price}$</p>
        <p >cpu : {cpu}</p>
        <p >ram : {ram}</p>
        <p >ssd : {ssd}</p>
        <p >hdd : {hdd}</p>
        <p >graphic card : {graphic}</p>
        <p >screen size : {screen_size}</p>
      <button className={styles.buttomn_sellercard} onClick={handle_edit}>
        edit
      </button>
    </div>
  );
};

export default SellerCard;