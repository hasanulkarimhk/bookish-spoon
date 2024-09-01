import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)


  // let counter = 5

  const addValue = () => {
    // counter = counter + 1
    // console.log(counter)
    if (counter < 20) {
      setCounter(counter + 1)
    }

    // i declared the counter twice that's why it wasn't working and showing error. have to see if thta's always the case.
  }
  // const rmValue = () => {
  //   // counter = counter + 1
  //   setCounter(counter - 1)
  // }


  const rmValue = () => {

    // setCounter(counter - 2)
    if (counter > 0) {
      setCounter(counter - 2)
    }
  }
  // <33333
  return (
    <>
      <h1>yayyy it's workin</h1>

      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value </button><br />
      <button onClick={rmValue}>Remove value </button>
      <p>Footer:</p>
    </>
  )
}

export default App
