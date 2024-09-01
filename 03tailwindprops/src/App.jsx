import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  // newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-white text-base text-black p-4  mb-5 border relative h-[50px] w-[300px] rounded-md' >Tailwind test!</h1>

      <Card username='Sara' btnText='View this profile'></Card>
      <Card username='Nancy'></Card>
      <Card btnText='Twitter'></Card>

    </>
  )
}

export default App







//  <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
//         <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/21245316/pexels-photo-21245316/free-photo-of-potted-cactus-plant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"/>
//           <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
//             <blockquote>
//               <p className="text-lg font-medium">
//                 “Tailwind CSS is the only framework that I've seen scale
//                 on large teams. It’s easy to customize, adapts to any design,
//                 and the build size is tiny.”
//               </p>
//             </blockquote>
//             <figcaption className="font-medium">
//               <div className="text-sky-500 dark:text-sky-400">
//                 Sarah Dayan
//               </div>
//               <div className="text-slate-700 dark:text-slate-500">
//                 Staff Engineer, Algolia
//               </div>
//             </figcaption>
//           </div>
//       </figure> 