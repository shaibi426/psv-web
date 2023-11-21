'use client'

import React, { useEffect, useState } from 'react'

import { DataTablewithFilters } from '@/app/ui/tranferTable';
import { columns } from './columns';
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
      <div className='h-5/6 w-10/12  flex flex-col items-center  justify-start mb-20'>
       
        <div className=''>

        <DataTablewithFilters columns={columns} data={regionusers}/>
        </div>

      </div>

    </div>
    
  );
}

export default Usertransfer


