//  /api/driverReports/licenseExpiry app/components/driverReports/licenseExpiry\page.jsx

"use client";
import React, { useState, useEffect } from "react";

import ReportTemp from '../../../ui/reportTemp'
import { DataTable } from "@/app/ui/table";

//------------------------------------------------------Report headers
import { ColumnDef } from "@tanstack/react-table"


const Today = new Date(Date()).toLocaleDateString()

export const columns = [
    {
        accessorKey: "Company",
        header: "Company",
      },
  {
    accessorKey: "DriverName",
    header: "Driver Name",
  },
  {
    accessorKey: "CNIC",
    header: "Driver CNIC",
  },
  {
    accessorKey: "Address",
    header: "Address",
  },
 
  {
    accessorKey: "LicenseExpiry",
    header: "Expiry Date",
    cell: ({ row }) => {
        const date = (row.getValue("LicenseExpiry"))
        return <div className="text-center font-medium">
          {date.split('T')[0].split('-').reverse().join('-')}
          </div>}
  },
 
 
  
]
export default function LicenseExpiry(props) {
  const [data, setData] = useState([]) 
  //-------------------------------------------api calling for getting data
  const getData = async () => {
    const response = await fetch(
      `/api/driverReports/licenseExpiry`,
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
   
    "DriverName",
    "CNIC",
    "Address",
    "CellNo",
    "License No",
    "Expiry",
    'Company',
   
  ]; //table heads
  //-----------getting data on page load

  useEffect(() => {
    getData();
   
   
  },[]);

  return (
    <div>
      <ReportTemp
        reportName=" License Expiry"
        header={header}
        data={data}
        // starDate={startDate}
        // endDate={endDate}
      />

      {/* ======================================Report Data Here */}
      <div className="container mx-auto w-11/12">
      <DataTable columns={columns} data={data} />
    </div>
      
    </div>
  );
}
