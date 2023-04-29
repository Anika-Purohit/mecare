import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black h-20 text-white grid grid-flow-col items-center'>
   
    <span className="col-span-1 w-28"><img src="https://static.wixstatic.com/media/14b38f_421564f3ad814909a3bc52cf8c420f4e~mv2.png/v1/fill/w_936,h_648,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Join%20LHF%20(1).png"/></span>   
    <span className="col-span-8"></span> 
    <Link to={"/"}>   
    <span >treatments</span>
    </Link>
    <Link to={"/features"}>
    <span className="col-span-1">features</span> 
    </Link>
    <Link to={"/customer"}>
    <span className="col-span-1">customer reviews</span>
    </Link>   
    </div>
  )
}

export default Header