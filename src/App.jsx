import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  let stopVar = "stop"
  const Increament = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    } else {
      setCounter(stopVar)
    }
  }
  const Decreament = () => {
    if (counter > 1) {
      
      
      setCounter(counter - 1)
    } else if (counter === stopVar) {
      setCounter(19)
      if (counter === 19) {
        setCounter(counter - 1)
      }
    } else {
      setCounter(0)
    }
  }
  return (
    <>
      <h1>Counter In React</h1>
      <h2>Count: {counter}</h2>
      <button onClick={Increament}>increase</button>&nbsp;<button onClick={Decreament}>decrease</button>
    </>
  )
}

export default App
