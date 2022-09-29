import React from 'react';
import './Cart.css'


const Cart = (props) => {
   
   
    const{name,blog,img,age,time}=props.detail;
    const { ExercisTime}=props;
  
    
    
    return (
        <div className='full-cart'>
            <div className='nothing'></div>
            <div className='img-div'>
                 <img src={img} alt="" srcset="" /> 
            </div>
            <div className='card-details'>
                <h3>{name}</h3>
                <p className='blog'>{blog}</p>
                <p>For Age: {age}</p>
                <p>Time Required: {time}s</p>
            </div>
            <button onClick={()=>ExercisTime(time)}>
                <p>Add To list</p>
            </button>
        </div>
    );
};

export default Cart;