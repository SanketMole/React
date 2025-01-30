import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  // let counter = 15
  const addValue = () => {
   if(counter < 20){
    // counter = counter + 1;
    setCounter(counter + 1)
    console.log("clicked", counter)
   }
  }

  /*  Interview Question:
  Here if we ignore if-condition, here we have only one setCounter() 
  what if we duplicate those into 4 setCounter() one below another
  How will it work?
  Ans: It will still increment 1 by 1 and not as a set, basically it will work as is was previously
  Bcz, 'useState()' sends updates in batches to the UI and variable, so setCounter is updating 
  the same counter again and again, thus only 1 incrementation. 
  If we do this;
  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
}
  Now previous State is used to increment and not the same State 
  thus, now when we click first time we will get 19 and not 16 as it would previously
  
  */


  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
      console.log("clicked", counter)
    }
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={removeValue}>remove value</button>
      <p>Value: {counter}</p>
    </>
  )
}

export default App
