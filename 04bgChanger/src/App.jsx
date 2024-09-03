import { useState } from "react"


function App() {
  const [color, setColor] = useState('#87FF65')
  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
          <button
          onClick={{} => setColor}
           className="outline-none px-4 py-1 rounded-lg shadow-md text-white"
            style={{ backgroundColor: "red" }}>Red</button>
          <button className="outline-none px-4 py-1 rounded-lg shadow-md text-white"
            style={{ backgroundColor: "#87FF65" }}>Green</button>
          <button className="outline-none px-4 py-1 rounded-lg shadow-md text-white"
            style={{ backgroundColor: "#7EB2DD" }}>Calorina Blue</button>
          <button className="outline-none px-4 py-1 rounded-lg shadow-md text-white"
            style={{ backgroundColor: "#011936" }}>OX Blue</button>
          <button className="outline-none px-4 py-1 rounded-lg shadow-md text-white"
            style={{ backgroundColor: "#4A306D" }}>Tekhelet</button>

        </div>

      </div>

    </div>
  )
}

export default App
