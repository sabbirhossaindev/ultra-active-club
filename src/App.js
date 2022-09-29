import './App.css';
import Exercise from './components/Exercise/Exercise';

function App() {
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
