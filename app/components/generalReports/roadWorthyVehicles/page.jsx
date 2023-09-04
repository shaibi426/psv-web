"use client";
import React, { useState, useEffect } from "react";

import ReportTemp from '../../../ui/reportTemp'
import {DataTable} from '../../../ui/table'
import { rptCol, columns } from "./columns"

//------------------------------------------------------Report headers
const Today = new Date(Date()).toLocaleDateString()

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
  },[]);

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
