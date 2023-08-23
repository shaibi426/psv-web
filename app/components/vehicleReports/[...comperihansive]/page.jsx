"use client";
import React, { useState, useEffect } from "react";

import ReportTemp from "../../../ui/reportTemp";

export default function CompReport(props) {
  const [data, setData] = useState([])
  const reportprops = props.params.comperihansive[1].split("x");
  const startDate = reportprops[0];
  const endDate = reportprops[1];
 

  const Today = new Date(Date()).toLocaleDateString()

  //-------------------------------------------api calling for getting data
  const getData = async () => {
    const response = await fetch(
      `/api/vehicleReports/compReport/'${startDate}'/'${endDate}'`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();

    return(result);
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
    getData();
  
  },[]);

  return (
    <div>
      <ReportTemp
        reportName="PSVs Comprehensive Report "
        header={header}
        data={data}
        starDate={startDate}
        endDate={endDate}
      />

      <div className="w-full flex gap-5 flex-col p-4 justify-center items-center ">
        
      </div>

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
            {/* {data.map((item)=>(
              <tr className ="even:bg-white odd:bg-slate-300">
                 <td className =' p-2 border border-black'>{item.Sector}</td>
                 <td className =' p-2 border border-black'>{`${item.KM}  ${item.Side}`}</td>
                 <td className =' p-2 border border-black'>{item.Time}</td>
                 <td className =' p-2 border border-black'>{item.DriverName}</td>
                
          </tr>  
            )  
            )} */}
        </tbody>
      </table>
    </div>
  );
}
