import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SellerEdit = () => {

    const [laptop, setlaptop] = useState({})

    const { id } = useParams();

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

    return (
        <div>

        </div>
    );
};

export default SellerEdit;