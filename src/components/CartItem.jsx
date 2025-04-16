
import React from 'react'
import toast from 'react-hot-toast';
import { MdAutoDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
const CartItem = ({item}) => {
 
  const dispatch=useDispatch();
  const removetocart=()=>{
      dispatch(remove(item.id)) ;
      toast.success("item is removed from cart") 
  }
  const description=item.description;
  
const desc=`${description.substring(0,100)}...`;
const title=item.title;
  const tit=`${title.substring(0,30)}...`;
  
  return (
    <div className='flex flex-row w-[90%]  gap-6 items-center rounded-md  mb-3 justify-end pl-3' >
     <div>
      <img src={item.image} alt="card image" className='w-[280px] h-[180px] object-contain'></img>
     </div>
     <div className=' flex flex-col
     gap-3 '>
      <p className='font-bold text-lg'>{tit}</p>
      <p className='text-gray-500'>{desc}</p>
      <div className='flex items-center justify-between w-[full] '> <p className='text-green-600'>💲{item.price}</p>
      <button onClick={removetocart} >
      <MdAutoDelete fontSize="20px" />
      </button>
      </div>
     
      
      <div className='w-[full] bg-gray-500 h-[2px] mt-9'>
      </div>
     
      </div>
 
    
     
     
    </div>
  )
}

export default CartItem
