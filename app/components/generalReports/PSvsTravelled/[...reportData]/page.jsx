"use client";
import React, { useState, useEffect } from "react";
import { DataTable } from "@/app/ui/table";

import ReportTemp from "../../../../ui/reportTemp";

//------------------------------------------------------Report headers
import { ColumnDef } from "@tanstack/react-table"


const Today = new Date(Date()).toLocaleDateString()
export const columns = [
  {
    accessorKey: "Sector",
    header: "Sector",
  },
  {
    accessorKey: "KM",
    header: "Location",
  },
  {
    accessorKey: "Side",
    header: "Side",
  },
  {
    accessorKey: "Time",
    header: "Time",
  },
  {
    accessorKey: "DriverName",
    header: "Driver",
  },
  {
    
    accessorKey: "RouteExpiryDate", //
    header: "Route",
    cell: ({ row }) => {
      const route = (row.getValue("RouteExpiryDate"))
      return <div className="text-right font-medium">
        {route.split('T')[0]>Today?"Valid":"Expired"}
        </div>
    },
  
  },
  {
    accessorKey: "FitnessExpiryDate",
    header: "Fitness",
    cell: ({ row }) => {
      const fitness = (row.getValue("FitnessExpiryDate"))
      return <div className="text-right font-medium">
        {fitness.split('T')[0]>Today?"Valid":"Expired"}
        </div>
    },
  },
  {
    accessorKey: "TypeExpiryDate",
    header: "Tyre",
    cell: ({ row }) => {
      const tyre = (row.getValue("TypeExpiryDate"))
      return <div className="text-right font-medium">
        {tyre == null? 'N/A':tyre.split('T')[0]>Today?"Valid":"Expired"}
        </div>
    },
  },
  {
    accessorKey: "FullName",
    header: "Checked By",
  },
]



export default function PSVsTravelled(props) {
  const [data, setData] = useState([])
  const reportprops = props.params.reportData[0].split("x");
  const startDate = reportprops[0];
  const endDate = reportprops[1];
  const startTime = reportprops[2].split("%3A").join(":");
  const endTime = reportprops[3].split("%3A").join(":");
  const psvNo = reportprops[4].split("%22")[0];

 


  
  //-------------------------------------------api calling for getting data
  const getPsvTrevelled = async () => {
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
  //-----------getting data on page load

  useEffect(() => {
    getPsvTrevelled();
   
  },[]);

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
