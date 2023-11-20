'use client'

import React, { useState } from 'react'

import { DataTablewithFilters } from '@/app/ui/tranferTable';
import { columns } from './columns';
import axios from "axios"


const Usertransfer = () => {

  const [sectorusers,setSectorUsers]= useState()
  const [zonalusers,setZonalUsers]= useState()
  const [regionusers,setRegionUsers]= useState([])
  
  const getRegionData = (region)=>{

    axios.get(`http://116.0.45.14:5000/web/user/regionUser/'${region}'`).then(
    response =>{
      const result = response.data
      console.log(result)
      if(result){

        console.log(result)
        setRegionUsers(result)
       
      }else{
        alert("No data Found")
      }
     
      
    }
  )
} 
  return (
    <div className = '[background:linear-gradient(68.10deg,rgba(123.95,176.37,255,0.38)_17.19%,rgba(143.69,144.55,134.55,0.35)_70%)] min-h-screen flex items-center flex-col'>

      <div className='flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent w-full p-3 my-10'>
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



// <div className="bg-white flex flex-row justify-center w-full">
//       <div className="bg-white overflow-hidden w-[1440px] h-[1024px] relative">
//         <div className="absolute w-[653px] h-[625px] top-[6px] left-[-346px]">
//           <div className="absolute w-[379px] h-[347px] top-[83px] left-[67px] bg-[#bd060654] rounded-[62px] rotate-[45.75deg]" />
//           <div className="absolute w-[208px] h-[226px] top-[359px] left-[395px] bg-[#b2ccfde6] rounded-[32px] rotate-[45.75deg]" />
//         </div>
//         <img className="absolute w-[181px] h-[250px] top-[299px] left-[1259px]" alt="Rectangle" src="rectangle-3.svg" />
//         <div className="absolute w-[766px] h-[848px] top-[96px] left-[320px] rounded-[20px] border border-solid border-[#ab9f9f] [background:linear-gradient(180deg,rgba(177.95,176.37,255,0.38)_17.19%,rgba(249.69,194.55,194.55,0.35)_100%)]">
//           <div className="absolute w-[438px] h-[68px] top-[42px] left-[163px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-black text-[32px] text-center tracking-[0] leading-[normal]">
//             OFFICER TRANFER
//           </div>
//         </div>
//       </div>
//     </div>