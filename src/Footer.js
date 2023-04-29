import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="bg-black text-white grid grid-cols-4 items-center h-20">
     <Link className='m-auto' to={"https://www.instagram.com/"}>
     <span className='m-auto' >Instagram</span> 
     </Link>
     <Link className='m-auto' to={"https://www.facebook.com/"}>
     <span className='m-auto'>Facebook</span>
     </Link>
     <Link className='m-auto' to={"https://twitter.com/home"}>
     <span className='m-auto'>Twitter </span> 
     </Link> 
     <Link className='m-auto' to={"/newsletter"}>
     <span >Our NewsLetter</span> 
     </Link>
    </div>
  )
}

export default Footer