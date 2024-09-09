import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Header() {

  return (
    <div className="bg-green-111 w-full ">
      <h1 className="bg-black text-zinc-100 font-title text-xl w-fit">Hard<span className="font-pixel text-3xl text-green-111">pixel</span> TV</h1>
      <FontAwesomeIcon icon={faBars} className='size-6 	 text-black cursor-pointer absolute top-1 right-0'/>    </div>
  )
}

export default Header


// 5465FF 788BFF 9BB1FF BFD7FF E2FDFF

// I will share a framework bug here, window.alert() is supposed to show when we click on the icon but it is showing forehand. I think this is some kinda issue from the library.import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { faBars } from '@fortawesome/free-solid-svg-icons'


// function Header() {


//   const something = window.alert("Hello");

//   return (
//     <div className="bg-green-111 w-full ">
//       <h1 className="bg-black text-zinc-100 font-title text-xl w-fit">Hard<span className="font-pixel text-3xl text-green-111">pixel</span> TV</h1>
//       <FontAwesomeIcon icon={faBars} className='size-6 	 text-black cursor-pointer absolute top-1 right-0' onClick={something}/>    </div>
//   )
// }

// export default Header
// // 5465FF 788BFF 9BB1FF BFD7FF E2FDFF
