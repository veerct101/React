import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {

  const update = () =>{
    console.log(counter);
    if(counter>=20) return 20;
    setCounter(counter+1);
  }

  const sub = ()=>{
    console.log(counter);
    if(counter<=0) return 0;
    setCounter(counter-1);
  }
// let counter = 10
let [counter, setCounter] = useState(10);   // needed for update live value it is a hook (library is useState)

  return (
    <>
    <h1>
      Veer Tejani </h1>
      <h2> Hello World</h2>
      <h2>Count : {counter}</h2>
      <button onClick={update}>Add</button><br/>
      <button onClick={sub}>Substract</button>
    </>
  )
}

export default App
