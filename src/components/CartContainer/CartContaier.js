import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart.js';

import './CartCOntainer.css';

const CartContaier = () => {
    const [carts,setCart]=useState([]);
    useEffect(()=>{
        fetch('fakedb.json')
        .then(res=>res.json())
        .then(data=>setCart(data))
    },[])

    return (
        <div className='full-container'>
            <h1> Mainhealthtain-Your-Health </h1>
            <h2>Select today’s exercise</h2>
            <div className='all-cart'>
            {
                carts.map(cart=> 
                   <Cart
                   key={cart.id}
                   cart={cart}
                   > </Cart>
                )
            }
            </div>
            {/* <Cart></Cart> */}
        </div>
    );
};

export default CartContaier;