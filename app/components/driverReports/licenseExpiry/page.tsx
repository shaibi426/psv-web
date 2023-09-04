//  /api/driverReports/licenseExpiry app/components/driverReports/licenseExpiry\page.jsx
"use client"

import React, { useState, useEffect } from "react";

import ReportTemp from '../../../ui/reportTemp'
import { DataTable } from "@/app/ui/table";

 
import { rptCol, columns } from "./columns"
  //-----------getting data on page load
 
export default function LicenseExpiry(props:any) {
  const [data, setData] = useState([]) 
 
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
  useEffect(()=>{
    async function getData() {
      // Fetch data from your API here.
     
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

  getData()
  },[])

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