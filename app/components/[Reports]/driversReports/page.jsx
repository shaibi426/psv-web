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
      <div>
          <div className="flex justify-start gap-4 flex-row px-10 py-2 ">
            <button className='rounded-sm bg-blue-300 w-1/12'> Print</button>
            <button className='rounded-sm bg-red-300 w-1/12'> Save as PDF</button>
            <button className='rounded-sm bg-green-300 w-2/12'> Export to Excel</button>
          </div>
     
        <div className='flex  bg-gray-200  justify-center items-center p-3 '>
          
            <div className="w-6/12 rounded-md bg-white justify-center  text-center h-fit ">
            <div className="w-full h-20 bg-pmpblue flex  flex-grow justify-center items-center text-xl text-white font-bold">
                Drivers Report
            </div>
            <div className ='flex flex-row gap-4  w-full justify-evenly items-center border-1 border-blue-950'>
            <div className="bg-gray-700 text-white p-2  border border-black text-center w-1/4 m-1">Name</div>
                    <div className=" bg-gray-700 text-white p-2 border border-black text-center w-1/4 m-1">Company</div>
                    <div className=" bg-gray-700 text-white p-2 border border-black text-center w-1/4 m-1">CellNo</div>
            </div>
          
                {data.map((item)=>(
                  <div className ='flex flex-row gap-4  w-full justify-evenly items-center border-b border-gray-500 border-dotted'>
                    <div className=" bg-slate-200 text-center w-1/4 m-1">{item.DriverName}</div>
                    <div className=" bg-slate-200 text-center w-1/4 m-1">{item.Company}</div>
                    <div className=" bg-slate-200 text-center w-1/4 m-1">{item.CellNo}</div>
                    </div>
                ))}
               
            </div>
        </div>
        </div>
    )
}