import React, { useEffect, useState } from 'react';
import CartContaier from '../CartContainer/CartContaier';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import './Container.css'
const Container = () => {

    const [details,SetDetails]=useState([]);
    useEffect(()=>{
        fetch('fakedb.json')
        .then(res=>res.json())
        .then(data=>SetDetails(data))
    },[])
    
   const [totalTime,SetTotal]=useState(0)


    const ExercisTime=(time)=>{
        console.log(time);
        let newTime = parseInt(totalTime) + parseInt(time);       
         SetTotal(newTime)
         
    }
    
    
    
    return (
        <div className='container'>
    
            <CartContaier details={details} ExercisTime={ExercisTime} ></CartContaier>
            <ExerciseDetails time={totalTime}></ExerciseDetails>
        </div>
    );
};

export default Container;