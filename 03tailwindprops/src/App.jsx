import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  // let myObj = {
  //   username: "SSM",
  //   age: 15
  // }
  // let myArr = [1,2,3,4]
  


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Cards username="SSM" btntext="click me" />
      <Cards username="Sanket" btntext="visit me" />
      {/* <Cards ch="KK" someObj={myObj} arr={myArr}/> */}
    </>
  )
}

export default App
