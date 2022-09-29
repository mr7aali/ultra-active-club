import React, { useEffect, useState } from 'react';
import CartContaier from '../CartContainer/CartContaier';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import './Container.css'
const Container = () => {

    const [details,setDetails]=useState([]);
    useEffect(()=>{
        fetch('fakedb.json')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])

    return (
        <div className='container'>
    
            <CartContaier details={details}></CartContaier>
            <ExerciseDetails></ExerciseDetails>
        </div>
    );
};

export default Container;