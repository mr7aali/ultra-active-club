import React, { useEffect, useState } from 'react';
import CartContaier from '../CartContainer/CartContaier';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';

const Container = () => {

    const [details,setDetails]=useState([]);
    useEffect(()=>{
        fetch('fakedb.json')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])

    return (
        <div>
    
            <CartContaier></CartContaier>
            <ExerciseDetails></ExerciseDetails>
        </div>
    );
};

export default Container;