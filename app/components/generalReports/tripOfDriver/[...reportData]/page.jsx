"use client";
import React, { useState, useEffect } from "react";

import ReportTemp from '../../../../ui/reportTemp'

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
    "Date",
    "Time",
    'DriverName',,
    "vehicle No",
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
                 <td className =' p-2 border border-black'>{item.Sector}</td>
                 <td className =' p-2 border border-black'>{`${item.KM}  ${item.Side}`}</td>
                 <td className =' p-2 border border-black'>{item.AddedON.split('T')[0].split('-').reverse().join('-')}</td>
                 <td className =' p-2 border border-black'>{item.Time}</td>
                 <td className =' p-2 border border-black'>{item.DriverName}</td>
                 <td className =' p-2 border border-black'>{item.RegNo}</td>
                 <td className ='p-2 border border-black'>{item.LicenseExpiry.split('T')[0]>Today?"Valid":"Expired"}</td>
                 {/* <td className =' p-2 border border-black'>{item.RouteExpiryDate.split('T')[0].split('-').reverse().join('-')}</td> */}
                 {/* <td className =' p-2 border border-black'>{item.FitnessExpiryDate.split('T')[0].split('-').reverse().join('-')}</td> */}
                 {/* <td className ='bg-gray-200 p-2 border border-black'>{item.TypeExpiryDate?.split('T')[0].split('-').reverse().join('-')}</td> */}
                 <td className ='p-2 border border-black'>{item.FullName}</td>
          </tr>  
            )  
            )}
        </tbody>
      </table>
    </div>
  );
}