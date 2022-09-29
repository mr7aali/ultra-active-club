import React from 'react';
import './ExerciseDetails.css'
const ExerciseDetails = (props) => {
    const {time}=props;
    
    const brackTime=(brTime,id)=>{
        document.getElementById('brackText').innerText=brTime;
        //  document.getElementById(id).style.background='#5D5FEF';
        //  document.getElementById(id).style.color='#fff';

        localStorage.setItem(id,brTime);

        
    }
    return (
        <div className='exercise-container'>
            <div className='author'>
                <div className="author-img">
                    <img src="https://i.ibb.co/NLcxQqs/pexels-maksim-goncharenok-4352151.jpg" alt="" />
                </div>
                <div className='name'>
                    <h2>Mr Aali</h2>
                    <p>Dhaka,Bangladesh</p>
                </div>
            </div>
            <div className='halth-details'>
                <div>
                    <h1>50<span>kg</span></h1>
                    <p>Weight</p>
                </div>
                <div>
                    <h1>5.6 </h1>
                    <p>Height</p>
                </div>
                <div>
                    <h1>21<span>yrs</span></h1>
                    <p>age</p>
                </div>
            </div>

            <h2 className='brk'>Add A Break</h2>

            <div className='set-time'>
                    <div id='10s' onClick={()=>brackTime(10,'10s')}>
                        <h2>10s</h2>
                    </div>
                    <div id='20s' onClick={()=>brackTime(20,'20s')}>
                        <h2>20s</h2>
                    </div>
                    <div id='30s' onClick={()=>brackTime(30,'30s')}>
                        <h2>30s</h2>
                    </div>
                    <div id='40s' onClick={()=>brackTime(40,'40s')}>
                        <h2>40s</h2>
                    </div>
                    <div id='50s' onClick={()=>brackTime(50,'50s')}>
                        <h2>50s</h2>
                    </div>
            </div>

            <h2 className='brk'>Exercise Details</h2>

            <div className='exercise-time'>
                  <div><h1>Exercise time</h1></div>
                  <div><p>{time}</p><span>Sec</span></div>
            </div>
            <div className='exercise-time'>
                  <div><h1>Brack Time</h1></div>
                  <div><p id="brackText">00</p><span>Sec</span></div>
            </div>

            <div className='exercise-time btn'>
                  <div><h1>Activity Completed</h1></div>
                 
            </div>
            
         
        </div>
    );
};

export default ExerciseDetails;