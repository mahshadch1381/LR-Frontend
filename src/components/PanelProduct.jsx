import React from 'react';
import { useParams } from 'react-router-dom';
//TODO API for taking information with id
const PanelProduct = () => {
    const { id } = useParams();
    return (
        <div>
            panel product here {id}
        </div>
    );
};

export default PanelProduct;