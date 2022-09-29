import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import './CartCOntainer.css';

const CartContaier = () => {
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('fakedb.json')
        .then(res=>res.json)
        .then(data=>console.log(data))
    },[])

    return (
        <div className='full-container'>
            <h1> Mainhealthtain-Your-Health </h1>
            <h2>Select today’s exercise</h2>
            <Cart></Cart>
        </div>
    );
};

export default CartContaier;