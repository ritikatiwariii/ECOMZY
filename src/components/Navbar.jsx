import React from 'react'
import {NavLink} from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
const Navbar = () => {
const {cart}=useSelector((state)=>state)
  return (
    <div className='flex text-white w-[900px] justify-between mx-auto items-center py-2'>
      <NavLink to='/'>
      <img src="/logo.png" alt="logo" className='w-[100px] pb-1'></img>
      </NavLink>
       <div className='flex gap-3 items-center justify-center text-xl'>
       <NavLink to='/'>
         Home
       </NavLink>
       <NavLink to='/cart'>
       <div className='flex items-center relative '>
        <FaShoppingCart />

       <div className='absolute left-4 bottom-2 w-[20px] h-[20px] bg-green-500 rounded-full  flex justify-center items-center font-sans text-sm '> <span>{cart.length}</span>
        </div></div>
       
       </NavLink>
       </div>
   
    </div>
  )
}

export default Navbar
