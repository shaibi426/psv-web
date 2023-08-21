"use client";
import React, { useState, useEffect } from "react";

import ReportTemp from '../../../ui/reportTemp'

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

      <table className="flex justify-center items-center text-start">
        <tbody>
          <tr>
            {header.map((head) => (
              <td key={head} className="bg-gray-400  font-bold  p-2 border border-black">
                {head}
              </td>
            ))}
          </tr>
            {data.map((item)=>(
              <tr className ="even:bg-white odd:bg-slate-300">
                 <td className =' p-2 border border-black'>{item.CompName}</td>
                 <td className =' p-2 border border-black'>{`${item.RegNo}  ${item.Side}`}</td>
                 <td className =' p-2 border border-black'>{item.EngineNo}</td>
                 <td className =' p-2 border border-black'>{item.ChasisNo}</td>
                 <td className =' p-2 border border-black'>{item.VehicleMake}</td>
                 <td className =' p-2 border border-black'>{item.ManufactureYear}</td>
                
          </tr>  
            )  
            )}
        </tbody>
      </table>
    </div>
  );
}
