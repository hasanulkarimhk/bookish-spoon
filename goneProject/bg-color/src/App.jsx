import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  return (

    <div className="max-h-full w-full border-spacing-0" style={{ backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">TRIAkjknL</div>


      <div className="flex flex-wrap justify-center gap shadow-lg bg-white"></div>

    </div>

  )
}

export default App
