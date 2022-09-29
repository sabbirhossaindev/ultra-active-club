import { useEffect, useState } from 'react';
import './App.css';
import Exercise from './components/Exercise/Exercise';

function App() {
  // const notify = () => toast("Wow you are inteligent");

  const [local,setLocal] = useState(0)
  const [TotalTime,SetTotalTime] = useState(0)
  const [services, setServices] = useState([]);
  
  useEffect(()=>{
       fetch('gim.json')
       .then(data => data.json())
       .then(res =>{
        if(localStorage.getItem('time')){
          setLocal(localStorage.getItem('time'))
          setServices(res);
        }
        setServices(res);
       })
    
  },[]);
  

const handleAddProduct = (time) =>{
    const Total = TotalTime + parseInt(time);
    SetTotalTime(Total)
}
const breaktime = (time) =>{
  localStorage.setItem('time',time);
  setLocal(localStorage.getItem('time'))
  
}

  return (
    <div>
      <div className='header-data'>
        <img src="" alt="" />
        <h2 className='text-2xl text-purple-700'>Gim Club BD</h2>
      </div>
      <p className='header-title'>Select today's exercise</p>
      <Exercise></Exercise>
    </div>
  );
}

export default App;
