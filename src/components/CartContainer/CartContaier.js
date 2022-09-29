import React from 'react';
import Cart from './Cart/Cart';
import './CartCOntainer.css';

const CartContaier = () => {
    return (
        <div className='full-container'>
            <h1> Mainhealthtain-Your-Health </h1>
            <h2>Select today’s exercise</h2>
            <Cart></Cart>
        </div>
    );
};

export default CartContaier;