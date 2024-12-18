import { useState, useCallback } from "react"


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNA] = useState(false);
  const [charPositive, setCharPositive] = useState(false);
  const [pass, setPass] = useState()

  const passGen = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) str += "0123456789"
    if (charPositive) str += "!@#$%^&*-_+=[]{}`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass = str.charAt(char)
    }
    setPass(pass)
  }, [length, numberAllowed, charPositive, pass])

  return (
    <>
      <div className="w-full max-w-md mx-auto shawdow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 justify-center">

        <div className="flex shadow rounded-lg overflow-hiddden mb-4">

          <input
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            type="text" />
          <button className="outline-none justify-center border-spacing-3 text-wrap text-center">copy</button>




        </div>
        <div className="flex"></div>
        <div className="flex"></div>
        <input type="range" min={8} max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => { setLength(e.target.value) }}
        />
        <label>Length: {length}</label>

        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNA((prev) => !prev);
            }}

          />
          <label htmlFor="numberInput" className="text-white">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked={charPositive}
            id="numberInput"
            onChange={() => {
              setCharPositive((prev) => !prev);
            }}

          />
          <label htmlFor="numberInput" className="text-white">Characters</label>
        </div>

      </div>





    </>
  )
}
// coding is cool af
export default App




// buttons only work when we use onclick in it.