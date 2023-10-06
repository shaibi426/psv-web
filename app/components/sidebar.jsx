"use client"
import React,{useState,useEffect} from "react";
import Image from "next/image";
import logo from './assests/PMP LOGO.png'
import driver from './assests/driver.png'
import company from './assests/company.png'
import psv from './assests/bus.png'
import axios from "axios";

export default function SideBarMenu() {
    const [totalDrivers,setDrivers] =useState()
    const [totalVehicles,setVehicles] =useState()
    const [totalCompanies,setCompanies] =useState()

    //---------------------------------------------------------get total records
    const getTotalRecord = async () => {
       axios.get('http://localhost:5000/web/totalRecords').then(
        response=>{
          const result = response.data
          setCompanies(result[0]['companies'])
          setDrivers(result[0]['drivers'])
          setVehicles(result[0]['psvs'])
        }
       )
    }
 

    useEffect(()=>{
        getTotalRecord()        
    },[totalCompanies,totalDrivers,totalVehicles])

    return(
      <div className="bg-pmpblue3 bg-gradient-radial to-pmpblue3 from-blue-900 w-2/12  flex flex-col justify-start items-center">
         
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