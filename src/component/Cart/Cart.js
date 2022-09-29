import React from 'react';
import './Cart.css'


const Cart = () => {
   
    
    
    return (
        <div className='full-cart'>
            <div className='nothing'></div>
            <div className='img-div'>
                 {/* <img src=''></img> */}
            </div>
            <div className='card-details'>
                <h3>Dumbell</h3>
                <p className='blog'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                <p>For Age:</p>
                <p>Time Required:</p>
            </div>
            <button>
                <p>Add To list</p>
            </button>
        </div>
    );
};

export default Cart;