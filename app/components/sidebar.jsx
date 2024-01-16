"use client"
import React,{useState,useEffect} from "react";
import Image from "next/image";
import logo from './assests/PMP LOGO.png'
import driver from './assests/driver.png'
import company from './assests/company.png'
import psv from './assests/bus.png'
import axios from "axios";
import { useSession } from "next-auth/react";


export default function SideBarMenu() {
  const {data} = useSession()



    const [totalDrivers,setDrivers] =useState()
    const [totalVehicles,setVehicles] =useState()
    const [totalCompanies,setCompanies] =useState()
    const [useroffice,setUserOffice] = useState()
    const [webrole,setwebrole] =useState()

    //---------------------------------------------------------get total records
    const getTotalRecord = async (userofficeType,useroffice) => {
           
       axios.post('http://203.99.61.134:7077/web/officetotalRecords',
         {
          'officeType':userofficeType,
          'office':useroffice
         }
       ).then(
        response=>{
          const result = response.data
        
          if (result){
            setCompanies(result[0]['companies'])
            setDrivers(result[0]['drivers'])
            setVehicles(result[0]['psvs'])
          }
        }
       )
    }
 

    useEffect(()=>{
        if(data){
        switch (data.user.webrole) {
          case 'sectorAdmin':
            getTotalRecord("sectorId",data.user.sectorId)
            break;
            
          case 'zonalAdmin':
            getTotalRecord("zoneId",data.user.zoneId)
            break;
        
          default:
            break;
        }
        }
    },[totalCompanies,totalDrivers,totalVehicles,data])

    return(
      <div className="bg-pmpblue3 bg-gradient-radial to-pmpblue3 from-blue-900 w-2/12  flex flex-col justify-start items-center">

        {/* =================================sub devision for motorways and highways */}
          {/* <div className="border-b-yellow-300 border-b text-pmpyellow h-1/6 w-11/12 m-1 flex flex-col justify-center items-center">
          
          <div className="mt-2 flex flex-col justify-center items-center">
            <span className=' font-semibold m-1'>Detail of Motorways </span>
            <span className='bg-pmpyellow w-5/6 text-center text-pmpblue'></span>
            </div>
            <div className="mt-2 flex flex-col justify-center items-center">
            <span className=' font-semibold m-1'>Detail of Highways</span>
            <span className='bg-pmpyellow w-5/6 text-center text-pmpblue'></span>
            </div>
          </div> */}
 


          <div className="menu-subdiv">
         
          <div className="bg-pmpyellow   rounded-full h-50 w-50 p-2">
          <Image src={driver} width={50} height={50} alt="logo"  />
          </div>
          <div className="mt-2 flex flex-col justify-center items-center">
            <span className=' font-semibold m-1'>Registered Drivers</span>
            <span className='bg-pmpyellow w-5/6 text-center text-pmpblue'>{totalDrivers}</span>
            </div>
          </div>
          <div className="menu-subdiv">
          <div className="bg-pmpyellow h-50 w-50 p-2 rounded-full">
          <Image src={psv} width={50} height={50} alt="logo"  />
          </div>
            <div className="mt-2 flex flex-col justify-center items-center">
            <span className=' font-semibold m-1'>Total Vehicles</span>
            
            <span className='bg-pmpyellow w-5/6 text-center text-pmpblue'>{totalVehicles}</span>
            </div>
          </div>
          <div className="menu-subdiv">
          <div className="bg-pmpyellow h-50 w-50 p-2 rounded-full">
          <Image src={company} width={50} height={50} alt="logo"  />
          </div>
          <div className="mt-2 flex flex-col justify-center items-center">
            <span className=' font-semibold m-1'>PSV Companies</span>
            <span className='bg-pmpyellow w-5/6 text-center text-pmpblue'>{totalCompanies}</span>
            </div>
          </div>
        </div>
    )}