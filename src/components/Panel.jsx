import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import styles from './../styles/Panel.module.css';
import styles2 from './../styles/Sidebar.module.css';
import styles3 from './../styles/Penelright.module.css';
import { Link } from "react-router-dom";

//TODO API for taking favorit laptop //done
//TODO API for taking user //done


const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
}

const moveToProfile = () => {
    window.location.href = '/profile'
}

const moveToSearch = () => {
    window.location.href = '/search'
}


// const laptops = [
//     {
//         image_url: "https://image.torob.com/base/images/_3/79/_379dUgbo3opHhCk.jpg_/0x352.webp",
//         redirect_url: "https://torob.com/p/f0162cbd-523b-45ea-9788-ed371d430dd5/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D9%84%D9%86%D9%88%D9%88-ideapad3-12gb-ram-512gb-ssd-1tb-hdd-i3/",
//         cpu: "core i7",
//         brand: "Asus",
//         ram: 32,
//         hdd: 256,
//         ssd: 128,
//         price: "$795",
//         id: 123,
//         isfavorit: false
//     },

//     {
//         image_url: "https://image.torob.com/base/images/YJ/ak/YJaktypPem--_GQW.jpg_/280x280.webp",
//         redirect_url: "https://torob.com/p/f0162cbd-523b-45ea-9788-ed371d430dd5/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D9%84%D9%86%D9%88%D9%88-ideapad3-12gb-ram-512gb-ssd-1tb-hdd-i3/",
//         cpu: "core i7",
//         brand: "Asus",
//         ram: 32,
//         hdd: 256,
//         ssd: 128,
//         price: "$795",
//         id: 123,
//         isfavorit: false
//     },

//     {
//         image_url: "https://image.torob.com/base/images/Ji/Dw/JiDwlQMYlC5moD-e.webp_/280x280.webp",
//         redirect_url: "https://torob.com/p/f0162cbd-523b-45ea-9788-ed371d430dd5/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D9%84%D9%86%D9%88%D9%88-ideapad3-12gb-ram-512gb-ssd-1tb-hdd-i3/",
//         cpu: "core i7",
//         brand: "Asus",
//         ram: 32,
//         hdd: 256,
//         ssd: 128,
//         price: "$795",
//         id: 123,
//         isfavorit: false
//     },
//     {
//         image_url: "https://image.torob.com/base/images/et/7F/et7FR4z7C9DJdODF.jpg_/0x176.webp",
//         redirect_url: "https://torob.com/p/f0162cbd-523b-45ea-9788-ed371d430dd5/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D9%84%D9%86%D9%88%D9%88-ideapad3-12gb-ram-512gb-ssd-1tb-hdd-i3/",
//         cpu: "core i7",
//         brand: "Asus",
//         ram: 32,
//         hdd: 256,
//         ssd: 128,
//         price: "$795",
//         id: 123,
//         isfavorit: false
//     },
//     {
//         image_url: "https://image.torob.com/base/images/nw/Wk/nwWk_rpBVQjESiQe.jpg_/0x176.webp",
//         redirect_url: "https://torob.com/p/f0162cbd-523b-45ea-9788-ed371d430dd5/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D9%84%D9%86%D9%88%D9%88-ideapad3-12gb-ram-512gb-ssd-1tb-hdd-i3/",
//         cpu: "core i7",
//         brand: "Asus",
//         ram: 32,
//         hdd: 256,
//         ssd: 128,
//         price: "$795",
//         id: 123,
//         isfavorit: false
//     }
// ]


const Panel = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

    const [user, setuser] = useState({ Info: [] });
    const [laptop, setlaptop] = useState([]);

    if (!localStorage.getItem('token')) {
        window.location.href = '/'
    }

    const getuser = () => {
        axios.get("http://127.0.0.1:8088/users/profile", { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
            .then(res => {
                setuser(res.data)
                // console.log(res.data)
                // console.log(user)
            }
            )
            .catch(err => {
                console.log(err);
            })
    }

    const getlaptop = async () => {
        await axios.get("http://127.0.0.1:8088/users/laptops/favorites", { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
            .then(res => {
                setlaptop(res.data.laptops)
                // console.log(res.data.laptops)
                // console.log(laptop)
            }
            )
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getuser();
        getlaptop();

    }, []);

    useEffect(() => {
        console.log(laptop);
    }, []); // Log the laptops state whenever it changes

    const screenfalg = screenWidth < 1000;


    
    return (

        <>
            <div className={styles3.panel_right}>

                <h1 className={styles3.panel_rightfont}>Your favorite laptops</h1>

                <div className={styles2.sidebar}>
                    <Link to="/" className={styles2.sidebarLink}>
                        Home
                    </Link>

                    <p className={styles2.p_style}>Welcome {user.Info.name}</p>
                    {/* <p className={styles2.p_style}>Welcome Amirreza Ahmadi</p> */}

                    <button className={styles2.mybutton4} onClick={moveToSearch}>
                        Search for Laptop
                    </button>
                    <button className={styles2.mybutton4} onClick={moveToProfile}>
                        Profile
                    </button>
                    <button className={styles2.mybutton4} onClick={logout}>
                        Logout
                    </button>

                </div>

            </div>
            <div className={styles.list_liked}>
            <div className={screenfalg? styles.container1 : styles.container2}>
                <div className={screenfalg? styles.row1 : styles.row2}>
                    {laptop &&

                        laptop.map(

                            laptop =>
                                // laptops.map(laptop => 
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
                                    price={laptop.price}
                                    key={laptop.id}
                                    isfavorit={true}
                                />)
                    }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Panel;