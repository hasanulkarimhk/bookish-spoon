import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1 className='bg-white text-base text-black p-4  mb-5 border relative h-[50px] w-[300px] rounded-md' >Tailwind test!</h1>

      <div className="relative h-[400px] w-[300px] rounded-md">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">Delba</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Profile →
          </button>
        </div>
      </div>


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