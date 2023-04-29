import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-green-300 h-20 grid grid-flow-col items-center'>
   
    <span className="col-span-1">logo</span>   
    <span className="col-span-8"></span>    
    <span>treatments</span>
    <span className="col-span-1">features</span> 
    <span className="col-span-1">customer reviews</span>   
    </div>
  )
}

export default Header