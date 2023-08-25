"use client";
import React, { useState, useEffect } from "react";

import ReportTemp from '../../../../ui/reportTemp'
import { DataTable } from "@/app/ui/table";

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
    accessorKey: "AddedON", //
    header: "Date",
    cell: ({ row }) => {
      const date = (row.getValue("AddedON"))
      return <div className="text-center font-medium">
        {date.split('T')[0].split('-').reverse().join('-')}
        </div>}
  },
  {
    accessorKey: "Time",
    header: "Time",
  },
  {
    accessorKey: "DriverName",
    header: "Reg. No",
  },
  {
    accessorKey: "RegNo",
    header: "Driver Name",
  },
  {
    accessorKey: "LicenseExpiry", //
    header: "License Expiry",
    cell: ({ row }) => {
      const date = (row.getValue("LicenseExpiry"))
      return <div className="text-center font-medium">
        {date.split('T')[0]>Today?"Valid":"Expired"}
        </div>}
  },
  {
    accessorKey: "FullName",
    header: "Checked by",
  },
 
]
export default function TripOfDriver(props) {
  const [data, setData] = useState([])
  const [Driver, setDriver] = useState('')
  const [license, setLicense] = useState('')
  const reportprops = props.params.reportData[0].split("x");
  const startDate = reportprops[0];
  const endDate = reportprops[1];
  const startTime = reportprops[2].split("%3A").join(":");
  const endTime = reportprops[3].split("%3A").join(":");
  const driverCNI = reportprops[4].split("%22")[0];

  const Today = new Date(Date()).toLocaleDateString()
  

  //-------------------------------------------api calling for getting data
  const getTripOfDriver = async () => {
    const response = await fetch(
      `/api/generalReports/tripOfDriver/'${startDate}'/'${endDate}'/'${startTime}'/'${endTime}'/'${driverCNI}'`,
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
    "Side",
    "Date",
    "Time",
    "vehicle No",
    'DriverName',
    "Lisence No",
    "License Expiry",
    "Checked By",
  ]; //table heads
  //-----------getting data on page load

  useEffect(() => {
    getTripOfDriver();
    console.log(data[0])
   
  },[data]);

  return (
    <div>
      <ReportTemp
        reportName="Trip Of Driver"
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
            <div className="w-3/4 flex flex-row gap-3"> <div className="w-1/6 font-bold">Time</div><div>{` From: ${startTime} To ${endTime}`}</div></div>
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
