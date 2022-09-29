import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';


import './CartCOntainer.css';

const CartContaier = () => {
    
    return (
        <div className='full-container'>
            <h1> Mainhealthtain-Your-Health </h1>
            <h2>Select today’s exercise</h2>
            <div className='all-cart'>
            {
               <Cart></Cart>
            }
            </div>
        </div>
    );
};

export default CartContaier;