'use client'

import React, { useEffect, useState } from 'react'

import { DataTablewithFilters } from '@/app/ui/tranferTable';
import {VscSearch} from 'react-icons/vsc'

import axios from "axios"



const Usertransfer = () => {

  const [sectorusers,setSectorUsers]= useState()
  const [zonalusers,setZonalUsers]= useState()
  const [regionusers,setRegionUsers]= useState([])
  
  const getRegionData = (region)=>{
    // axios.get(`http://116.0.45.14:5000/web/user/regionUser/'${region}'`)
    axios.get(`http://116.0.45.14:5000/web/user/regionUser/'North'`).then(
    response =>{
      const result = response.data
      console.log(result)
      if(result){

        console.log(result)
        setRegionUsers(result)
        console.log(regionusers)
       
      }else{
        alert("No data Found")
      }
     
      
    }
  )
} 


useEffect(()=>{
getRegionData()
},[])
  return (
    <div className = '[background:linear-gradient(68.10deg,rgba(123.95,176.37,255,0.38)_17.19%,rgba(143.69,144.55,134.55,0.35)_70%)] min-h-screen flex items-center flex-col'>

<div className='flex items-center justify-center bg-gradient-to-br from-blue-700 to-purple-700 bg-clip-text text-transparent w-full p-3 my-10'>
        <h1 className='font-prompt font-extrabold text-4xl  '> OFFICER TRANSFER FORM </h1>
      </div>
          <div className='flex justify-center gap-2   rounded-md p-2 px-5   w-3/6 mb-10'>
          <div className=' flex flex-col justify-center  gap-2 items-center w-full'>
        {/* <label htmlFor="" className=''> Enter Officer Name </label> */}
        <div className ='relative w-full '>
        <VscSearch style={{color:"blue"}} className ='scale-125 absolute z-50 left-4 top-3 ' />
        <input type="search" className=' border border-slate-400 rounded-full p-2 w-full pl-14 '
        //  value={(table.getColumn("officer")?.getFilterValue() as string) ?? ""}
         onChange={(e) =>
            console.log(JSON.stringify(regionusers.find(e.target.value)))
         }
         placeholder="Search Officer by Name or Belt No."
        
        />
        </div>
          </div>

    
        </div>

     
      <div className='h-5/6 w-10/12  flex flex-col items-center  justify-start mb-20'>
       
            {regionusers.map((officer,index)=>(
                <div key = {index} className='border-b p-1 mb-1 rounded-md w-5/6 flex flex-row  border-slate-300 bg-white '>
                    <div className='w-5/6 flex flex-row items-center text-sm '>

                    <div className='text-start px-2 border-dotted border-r  w-2/6  border-gray-400'>{officer.rank + officer.name + officer.belt}</div>
                    <div className='text-start pl-2 px-2 border-dotted border-r  w-1/6 border-gray-400'>{officer.region}</div>
                    <div className='text-start pl-2 px-2 border-dotted border-r  w-1/6 border-gray-400'>{officer.zone}</div>
                    <div className='text-start pl-2 px-2 border-dotted border-r  w-1/6 border-gray-400'>{officer.sector}</div>
                    <div className='text-start pl-2 px-2 border-dotted border-r  w-1/6 border-gray-400'>{officer.beat}</div>
                    </div>
                    <div className='text-center px-2 border-dotted  w-1/6'>
                        <button className='bg-blue-400 rounded-md p-2' onClick = {()=>alert(index)}>Transfer</button>
                    </div>
                    
                    </div>
            ))}

      </div>

    </div>
    
  );
}

export default Usertransfer



