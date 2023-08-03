"use client"
import React, { useState,useEffect} from "react";

export default function DriversReport (){
    const [data,setData]=useState([])
    
 
  
    const getDriverData = async () => {
        const response = await fetch('/api/driverreport', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const result = await response.json()
      setData(result)
      } 
    
      useEffect(()=>{
        getDriverData()
      })
    return(
        <div className='flex  bg-gray-200 h-screen justify-center items-center p-3 '>
          
            <div className="w-5/6 rounded-md bg-white justify-center  text-center  h-screen">
            <div className="w-full h-1/6 bg-pmpblue flex  flex-grow justify-center items-center text-xl text-white font-bold">
                Drivers Report
            </div>
            <div className ='flex flex-row gap-4  w-full justify-evenly items-center border-1 border-blue-950'>
            <div className="bg-gray-700 text-white p-2  border border-black text-center w-1/4 m-1">Name</div>
                    <div className=" bg-gray-700 text-white p-2 border border-black text-center w-1/4 m-1">Company</div>
                    <div className=" bg-gray-700 text-white p-2 border border-black text-center w-1/4 m-1">CellNo</div>
            </div>
                {data.map((item)=>(
                  <div className ='flex flex-row gap-4  w-full justify-evenly items-center border-1 border-blue-950'>
                    <div className=" border border-black text-center w-1/4 m-1">{item.DriverName}</div>
                    <div className=" border border-black text-center w-1/4 m-1">{item.Company}</div>
                    <div className=" border border-black text-center w-1/4 m-1">{item.CellNo}</div>
                    </div>
                ))}
123
            </div>
        </div>
    )
}