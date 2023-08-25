"use client";
import React, { useState, useEffect } from "react";

import ReportTemp from '../../../ui/reportTemp'
import {DataTable} from '../../../ui/table'

//------------------------------------------------------Report headers
import { ColumnDef } from "@tanstack/react-table"


const Today = new Date(Date()).toLocaleDateString()

export const columns = [
  {
    accessorKey: "CompName",
    header: "Company",
  },
  {
    accessorKey: "RegNo",
    header: "Registration No",
  },
  {
    accessorKey: "EngineNo",
    header: "Engine No",
  },
  {
    accessorKey: "ChasisNo",
    header: "Chasis No",
  },
  {
    accessorKey: "VehicleMake",
    header: "Made By",
  },
  {
    accessorKey: "ManufactureYear",
    header: "Modal",
  },
 
]


export default function RoadWorthyVehicle(props) {
  const [data, setData] = useState([])
//  
  //-------------------------------------------api calling for getting data
  const getWorthyVehicles = async () => {
    const response = await fetch(
      `/api/generalReports/roadWorthyVehicles`,
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
    "Company",
    "Registration No",
    "Engine No",
    "Chasis No",
    "Made By",
    'Modal',,
  ]; //table heads
  //-----------getting data on page load

  useEffect(() => {
    getWorthyVehicles();
  },[data]);

  return (
    <div>
      <ReportTemp
        reportName="Road Worthy Vehicles"
        header={header}
        data={data}
      />

      {/* ======================================Report Data Here */}

      <div className="container mx-auto w-11/12">
      <DataTable columns={columns} data={data} />
    </div>
    </div>
  );
}
