import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";


const Home = () => {
  const[loading,setloading]=useState(false);
  const[data,setdata]=useState([]);
  const API_URL = "https://fakestoreapi.com/products";
  async function getdata() {
    setloading(true);
    try{
    let response=await fetch(API_URL);
    let res= await response.json();
    setdata(res);

    console.log("data is here",data);
    }
    catch(error){
    setdata([])
    }
    setloading(false);
  } 
  useEffect(()=>{
getdata();
  },[])
  

  return (
    <div >
  
      {
     loading?(<Spinner/>):( 
       <div className="mx-auto w-[900px]  gap-4 flex  flex-wrap mt-7" >
      
       
      {
        data.length >0 ?(data.map((item)=>(
          <div className=" w-[285px] h-[370px] border  rounded-md shadow-lg">
          <Product item={item} key={item.id}/>
          </div>
        )
          
        )):(
          <div>No data found</div>
        )
      }
       </div>
     )
      
    }
    </div>
  
  );
};

export default Home;
