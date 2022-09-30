import React, { useEffect, useState } from 'react';
import Gim from '../Gim/Gim';
import './Exercise.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import picture from '../../pic/sabbir.png';

const Exercise = () => {

    const notify = () => toast("Gim Club BD !");

    const [gims, setGims] = useState([])
    const [TotalTime, SetTotalTime] = useState(0)
    const[local,setLocal] = useState(0)


    useEffect(()=>{
        fetch('gim.json')
        .then(data => data.json())
        .then(res =>{
         if(localStorage.getItem('time')){
           setLocal(localStorage.getItem('time'))
           setGims(res);
         }
         setGims(res);
        })

    }, []);
    

    const handleAddProduct = (time) =>{
        const Total = TotalTime + parseInt(time);
        SetTotalTime(Total)
    }
    const breaktime = (time) =>{
        localStorage.setItem('time',time);
        setLocal(localStorage.getItem('time'))
        
    }


    return (
        <div className="exercise-container">
            <div className="gim-container">
                {
                    gims.map(gim => <Gim
                        key={gim.id}
                        gim={gim}
                        handleAddProduct={handleAddProduct}
                    ></Gim>)
                }
            </div>

            <div className="cart-container">
                <div className='flex'>
                    <div>
                        <img className='picture' src={picture} alt="" />
                    </div>
                    <div className='px-2'>
                        <h3 className=''>MD Sabbir Hossain</h3>
                        <small>Badarganj, Rangpur</small>
                    </div>
                </div>

            <div className='mt-3 flex p-4 myself-detals'>
                <div className='mr-3'>
                    <p><span className='h1'>58</span> kg</p>
                    <p className='under-write'>weight</p>
                </div>
                <div className='mr-4'>
                    <p><span className='h1'>5.5</span></p>
                    <p className='under-write'>Height</p>
                </div>
                <div className=''>
                    <p><span className='h1'>20</span>y's</p>
                    <p className='under-write'>Age</p>
                </div>
            </div>

            <h2 className='text-xl mt-3'>Add A Break</h2>

            <div className='break-time flex gap-3 mt-3'>
                <div>
                    <button className='break-btn' onClick={()=>breaktime(20)}>20m</button>
                </div>
                <div>
                    <button className='break-btn' onClick={()=>breaktime(25)}>25m</button>
                </div>
                <div>
                    <button className='break-btn' onClick={()=>breaktime(30)}>30m</button>
                </div>
                <div>
                    <button className='break-btn' onClick={()=>breaktime(40)}>40m</button>
                </div>
            </div>

            <h2 className='text-xl mt-5'>Exercise Details</h2>

            <div className='mt-4'>
                <div className='exercise-time'>
                    <p>Exercise time</p>
                    <span>{TotalTime} min</span>
                </div>
            </div>

            <div className='mt-4'>
                <div className='break-time'>
                    <p>Break time</p>
                    <span>{local} min</span>
                </div>
            </div>

            <div className='mt-5'>
                    <button className='btn-secondary px-5 py-2 rounded-lg' onClick={notify}>Activity Completed</button>
                    <ToastContainer />
            </div>
            </div>
        </div>
    );
};

export default Exercise;