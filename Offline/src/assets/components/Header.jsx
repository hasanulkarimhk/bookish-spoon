import React, { useState } from 'react'

function Header() {

  const [counter, setCounter] = useState(5) 

  // setCounter(counter -1)

  if (counter<1000){
    setCounter(counter+ 40)
    // here is another bug if the increment and condition ceaser have a large gap between them then the userState thing doesn't work.
  }


  return (
    <div className='h-screen bg-black text-6xl text-white'>

      Counter: {counter}

    </div>
  )
}

export default Header