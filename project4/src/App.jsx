import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
const vr = (color) =>{
  document.documentElement.style.backgroundColor = color;
}

  return (
    <>
      <button
        className="px-4 py-2 rounded bg-white text-black border mr-2"
        onClick={() => vr("white")}
      >
        White
      </button>

      <button
        className="px-4 py-2 rounded bg-red-600 text-white mr-2"
        onClick={() => vr("red")}
      >
        Red
      </button>

      <button
        className="px-4 py-2 rounded bg-green-600 text-white mr-2"
        onClick={() => vr("green")}
      >
        Green
      </button>

      <button
        className="px-4 py-2 rounded bg-blue-600 text-white mr-2"
        onClick={() => vr("blue")}
      >
        Blue
      </button>

      <button
        className="px-4 py-2 rounded bg-yellow-400 text-black"
        onClick={() => vr("yellow")}
      >
        Yellow
      </button>
    </>
  )
}

export default App
