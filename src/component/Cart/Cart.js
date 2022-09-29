import React from 'react';
import './Cart.css'


const Cart = (props) => {
   
   
    const{name,blog,img,age,time}=props.detail;
 
   
    
    return (
        <div className='full-cart'>
            <div className='nothing'></div>
            <div className='img-div'>
                 <img src=''></img> 
            </div>
            <div className='card-details'>
                <h3>{name}</h3>
                <p className='blog'>{blog}</p>
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