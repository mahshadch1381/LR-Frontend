import React from 'react';

const Favorites = () => {
    if (!localStorage.getItem('token')) {
        window.location.href = '/'
    }
    return (
        <div>
            Favorit laptops
        </div>
    );
};

export default Favorites;