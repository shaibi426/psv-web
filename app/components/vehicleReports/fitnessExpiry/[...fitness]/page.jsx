"use client";
import React, { useState, useEffect } from "react";

import ReportTemp from '../../../../ui/reportTemp'
import { DataTable } from "@/app/ui/table";
import {columns} from "./columns"

//------------------------------------------------------Report headers



const Today = new Date(Date()).toLocaleDateString()


export default function FitnessExpiry(props) {
  const [data, setData] = useState([])
  
  const reportprops = props.params.fitness[0].split("x");
  const startDate = reportprops[0];
  const endDate = reportprops[1];
//   const startTime = reportprops[2].split("%3A").join(":");
//   const endTime = reportprops[3].split("%3A").join(":");
  

  const Today = new Date(Date()).toLocaleDateString()
  


  //------------------------------------------------------excel headers

  const header = [
    "Company",
    "Reg No",
    "Modal",
    "AC/Non-AC",
    "Colour",
    
  ]; //table heads
  //-----------getting data on page load

  useEffect(() => {
    
  //-------------------------------------------api calling for getting data
  const getData = async () => {
    const response = await fetch(
      `/api/vehicleReports/routeExpiry/'${startDate}'/'${endDate}'`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    setData(result);
  };
    getData();
  
   
  },[startDate,endDate]);

  return (
    <div>
      <ReportTemp
        reportName="Fitness Expiry Report"
        header={header}
        data={data}
        starDate={startDate}
        endDate={endDate}
      />

<div className="w-full flex gap-5 flex-col p-4 justify-center items-center ">
        <div className = "flex flex-col w-3/5 gap-3 justify-center items-center">
        <div className="flex flex-row w-full justify-between items-end px-5">
            {/* <div className=" font-extrabold text-lg bg-teal-600 p-3 rounded-md">Driver: {data[0].DriverName}</div>
            <div className=" font-extrabold text-lg bg-orange-600 p-3 rounded-md">License:{data[0].DriverLicenceNo}</div> */}
            </div>
            <div className="flex flex-row w-full justify-between items-end px-5">
            <div className="w-3/4 flex flex-row gap-3"> <div className="w-1/6 font-bold">Date</div><div>{` From: ${startDate} To ${endDate}`}</div></div>
            {/* <div className="w-3/4 flex flex-row gap-3"> <div className="w-1/6 font-bold">Time</div><div>{` From: ${startTime} To ${endTime}`}</div></div> */}
            </div>
      </div>
      </div>

      {/* ======================================Report Data Here */}
      <div className="container mx-auto w-11/12">
      <DataTable columns={columns} data={data} />
    </div>
      
    </div>
  );
}
