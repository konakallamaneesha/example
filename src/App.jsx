import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name,setName] = useState('VCE','MERN');

  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1);
  };

  const handle =()=>{
    setName('MERN');
  }

  useEffect=(()=>{
    console.log("changed");
  },[count])

  return(
    <div>
      {name}<br/>
      {count}
      <br/>
      <button onClick={handle} className='border' outline='2'>Change</button><br/><br/>
      <button onClick={increment} className='border' outline='2'>Change count</button>
    </div>
  )


}
export default App
