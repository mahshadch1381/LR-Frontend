import React from 'react';
import ProductCard from './ProductCard';
import styles from './../styles/Login.module.css';

//TODO API for taking favorit laptop

// const listItems = people.map(person => <li>{person}</li>);
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

const moveToFavorites = () => {
    window.location.href = '/favorites'
}

const Panel = () => {

    if (!localStorage.getItem('token')) {
        window.location.href = '/'
    }

    return (
        <>
            <div  >
                <ProductCard 
                image={"https://image.torob.com/base/images/3v/Fr/3vFrivyQ5BoZA3N-.jpg"}
                description={"ROG STRIX G513RC"}
                brand={"ASUS"}
                formattedPrice={"$795"}
                id = {123}
                isfavorit = {false}
                />

                <h1>here is users Panel</h1>
                <button className="myButton" onClick={logout}>
                    Logout
                </button >

                <button onClick={moveToProfile} >
                    Profile
                </button>

                <button onClick={moveToSearch}>
                    Serch for Laptop
                </button>

                <button onClick={moveToFavorites}>
                    Favorites
                </button>
            </div>

        </>
    );
};

export default Panel;