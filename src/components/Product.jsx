import React, { useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import{add,remove} from "../redux/Slices/CartSlice"
import toast from 'react-hot-toast'
const Product = ({item}) => {
  
  const description=item.description;
  
const desc=`${description.substring(0,70)}...`;
  const {cart}=useSelector((state)=>(
    state)
  );
  const dispatch=useDispatch();
  const removetocart=()=>{
      dispatch(remove(item.id)) ;
      toast.error("item is removed") 
  }
  const addtocart=()=>{
    dispatch(add(item));
    toast.success("item is added to cart")
   
  }
  const title=item.title;
  const tit=`${title.substring(0,20)}...`
  return (
    <div className='flex flex-col justify-between items-center gap-2 mx-3 mt-1'>
      <h2 className='font-bold text-lg'>
        {tit}
      </h2>
      <p className='text-gray-500'>
            {desc}
        </p>
      <img src={item.image} alt="image" className='w-[150px] h-[180px]  object-contain'>
      </img>
      <div className='flex justify-between items-center   gap-6 w-full mt-2 '>
      <p className='text-green-500 text-md'><span>$</span>
        {item.price}</p>
    <div className='border py-2 px-5 rounded-full bg-gray-300 hover:bg-slate-600 transition-all 1s ease-in hover:text-white border-black '>
      {
        cart.some((p)=>p.id===item.id)?(<button onClick={removetocart} >Remove Item</button>):(<button onClick={addtocart}>Add to Cart</button>)
      }
    </div>
    </div>


    </div>
  )
}

export default Product

