import { useState, useCallback } from "react"


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNA] = useState(false);
  const [charPositive, setCharPositive] = useState(false);
  const [pass, setPass] = useState()

  const passGen = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed) str += "0123456789"
    if(charPositive) str += "!@#$%^&*-_+=[]{}`"

    for (let i = 1 ; i <= array.length; i++){
      let char = Math.floor(Math.random() * str.length + 1)

      pass = str.charAt(char)
    }
    setPass(pass)
  }, [length,numberAllowed,charPositive, pass])

  return (
    <h1 className="text-4xl text-center text-white border-spacing-4">Password Generator</h1>
  )
}
// coding is cool af
export default App
