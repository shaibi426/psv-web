'use client'

import React, { useEffect, useState } from 'react'

import { DataTablewithFilters } from '@/app/ui/tranferTable';
import { columns } from './columns';
import axios from "axios"


const Usertransfer = () => {
const [userType,setUserType] = useState("")
const [ofcType,setOfcType]  =  useState("") 
const [userOfc,setUserOfc]  =  useState("")





  const [allUsers,setAllUsers]= useState([])
  const [sectorusers,setSectorUsers]= useState()
  const [zonalusers,setZonalUsers]= useState([])
  const [regionusers,setRegionUsers]= useState([])
  
  const getRegionData = (region)=>{
    // axios.get(`http://116.0.45.14:5000/web/user/regionUser/'${region}'`)
    axios.get(`http://116.0.45.14:5000/web/user/regionUser/'North'`).then(
    response =>{
      const result = response.data
     
      if(result){
        setRegionUsers(result)
       
      }else{
        alert("No data Found")
      }
     
      
    }
  )
} 

const getZonalData = (zone)=>{
  // axios.get(``http://116.0.45.14:5000/web/user/zoneWiseUsers/${zone}`)`)
  axios.get(`http://116.0.45.14:5000/web/user/zoneWiseUsers/N5 South`).then( 
  response =>{
    const result = response.data
   
    if(result){
      setZonalUsers(result)
      console.log(zonalusers)
    }else{
      alert("No data Found")
    }  
  }
)
} 
//=========================================================

const getuserData = (ofc,userOfc)=>{

  axios.get(`http://116.0.45.14:5000/web/user/getUsers/${ofc}/${userOfc}`).then( 
  response =>{
    const result = response.data
   
    if(result){
      setAllUsers(result)
      console.log(allUsers)
    }else{
      alert("No data Found")
    }  
  }
)
} 
//=========================================================


// useEffect(()=>{
// // getRegionData()
// // getZonalData()
// getuserData(ofcType,userOfc)

// },

// // [regionusers,zonalusers,allUsers]
// [allUsers]

// )
  return (
    <div className = '[background:linear-gradient(68.10deg,rgba(123.95,176.37,255,0.38)_17.19%,rgba(143.69,144.55,134.55,0.35)_70%)] min-h-screen flex items-center flex-col'>

      <div className='flex items-center justify-center bg-gradient-to-br from-blue-700 to-purple-700 bg-clip-text text-transparent w-full p-3 my-10'>
        <h1 className='font-prompt font-extrabold text-4xl  '> OFFICER TRANSFER FORM </h1>
      </div>
      <div className='h-5/6 w-10/12  flex flex-col items-center  justify-start mb-20'>

        <input type="text" value = {userType} onChange={e=> setUserType(e.target.value)} />
        <output> {userType}</output>



        <button onClick={ ()=>{
             if(userType == 'sectorAdmin'){
                 setOfcType('sectorId')
                 setUserOfc('North 1')
             }

              else if(userType =='zonalAdmin'){
                  setOfcType('zoneId')      
                  setUserOfc('N5 Central')
                 
              }
              else if(userType =='regionalAdmin'){
                  setOfcType('region')
                  setUserOfc('South')
                 
            }
            else{
              console.log("Only Admins are Allowed")
            }

            if(ofcType && userOfc){

              getuserData(ofcType,userOfc)
            }
          } 
        }  

          className='bg-red-400 rounded-md p-2 mt-2'
   >GEtData</button>
       
        <div className=''>

        <DataTablewithFilters columns={columns} data={allUsers}/>
        </div>

      </div>

    </div>
    
  );
}

export default Usertransfer



