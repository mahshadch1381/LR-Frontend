import React from 'react';
import "./../styles/Panel.module.css";
const Panel = () => {
    if (!localStorage.getItem('token')){
        window.location.href = '/'
    }
    return (
        <div>
            <h1>here is users Panel</h1>
            
        </div>
    );
};

export default Panel;