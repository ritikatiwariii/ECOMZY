import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const navigate=useNavigate();
  const {cart}=useSelector((state)=>state);
  const[totalamount,settatalamount]=useState(0);
  console.log(cart);
  
  useEffect(()=>{
    settatalamount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart]);
  return (
   
    <div className='mx-auto w-[900px]'>
       
      {
        cart.length >0?(
          <div  className='flex flex-row w-[100%] mt-7 justify-between '>
            <div className='w-[60%]   mx-auto pl-8  '>
          {
            cart.map((item)=>{
            
            return  <CartItem item={item} key={item.id}/>
            })
          

          }
           {/* <div className='w-[90%] bg-gray-500 h-[2px] mt-3'>
            </div> */}
          </div>
          <div className='w-[40%] h-[80vh]  flex flex-col  '>
          
     <div className='flex flex-col  ml-3 gap-3'>     
  <p className='text-green-500 font-bold text-lg'>Your Cart</p>
  <h2 className='text-green-500 text-3xl font-bold'>SUMMARY</h2>
  <p>Total Items:{cart.length}</p>
  </div>
  <div className=' flex flex-col  w-[100%] h-[100%] justify-end gap-3 '>
  <p className='ml-3 font-bold text-lg'>Total Amount: ${totalamount}</p>
  <button className='border mb-3 bg-green-500 py-2 rounded-full ' onClick={()=>{
    navigate("/")
  }}>
    
    Checkout Now</button>
  </div>
  </div>
</div>

          
        ):(<div className='w-[60vw] h-[100vh] flex items-center justify-center font-bold text-2xl  mx-auto'>
          Cart is empty
          </div>
          
        )
 
}
</div>


  )
}

export default Cart;
