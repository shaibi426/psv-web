"use client";
import React, { useState, useEffect,useMemo } from "react";
import { DataTable } from "@/app/ui/table";

import ReportTemp from "../../../../ui/reportTemp";
import { rptCol, columns } from "./columns"

const Today = new Date(Date()).toLocaleDateString()


export default  function PSVsTravelled(props:any) {
  const [data, setData] = useState([])
  const reportprops = props.params.reportData[0].split("x");
  const startDate = reportprops[0];
  const endDate = reportprops[1];
  const startTime = reportprops[2].split("%3A").join(":");
  const endTime = reportprops[3].split("%3A").join(":");
  const psvNo = reportprops[4].split("%22")[0];

 


  
  //-------------------------------------------api calling for getting data
 useEffect(()=>{
  async function getData() {
    const response = await fetch(
      `/api/generalReports/'${startDate}'/'${endDate}'/'${startTime}'/'${endTime}'/'${psvNo}'`,
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
  getData()
 },[startDate,endDate,startTime,endTime,psvNo])
 

  //------------------------------------------------------excel headers
  const header = [
    "Sector",
    "Location",
    "Time",
    "Driver",
    "Route",
    "fitness",
    "Tyre",
    "Checked By",
  ]; //table heads



  return (
    <div>
      <ReportTemp
        reportName="PSVs Travelled"
        header={header}
        data={data}
        starDate={startDate}
        endDate={endDate}
      />

      <div className="w-full flex flex-col p-4 justify-center items-center ">
        <div className = "flex flex-col w-full gap-3 justify-center items-center">

            <div className="justify-center items-center flex font-extrabold text-lg bg-teal-600 p-3 w-2/5 rounded-md">Vehicle No {`${psvNo}`}</div>
            <div className="flex flex-row w-10/12 justify-between items-center gap-5 px-5">
           
            <div className="w-2/4 flex flex-row gap-3"> <div className="w-1/6 font-bold">Date</div><div>{` From: ${startDate} To ${endDate}`}</div></div>

            <div className="w-2/4 flex flex-row justify-end gap-3"> <div className="w-1/6 font-bold">Time</div><div>{` From: ${startTime} To ${endTime}`}</div></div>
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
