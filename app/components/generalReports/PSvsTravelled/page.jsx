"use client";
import React, { useState } from "react";

import { DataTable } from "@/app/ui/table";

//------------------------------------------------------Report headers
import {  columns } from "./columns"
import Datepicker from "@/app/ui/datepicker";
import axios from "axios"; 
import { handleDownloadExcel } from "@/app/functions/exportToExcel";



export default function TripOfDriver(props) {
  const [data, setData] = useState([])
  const Today =new Date().toISOString().split('T')[0]
  const [startTime,setStarttime]= useState('00:00')
  const [endTime,setEndtime]= useState('23:59')
  const [startDate,setStartDate]= useState(Today)
  const [endDate,setEndDate]= useState(Today)
  const [psvNo,setPsvNo]= useState()

  

  
  //------------------------------------------------------excel headers
  const header = [
    "Sector",
    "Location",
    "Date",
    "Time",
    "Company",
    'Route Permit',
    "Fitness Certificate",
    "Tyre Condition",
    "Officer",
    "Rank"
  ]; 
  //table heads


  //-----------getting data on page load

  const getData = async () => {
    if(startDate,endDate,startTime,endTime,psvNo){

      axios.get(`http://203.99.61.134:7077/web/psv/treval/${startDate}/${endDate}/${startTime}/${endTime}/${psvNo}`).then(
        response =>{
          const result = response.data
          setData(result);
          
          
        }
        )
      }else {
        alert("Please Provide Vehicle No.")
      }
}



  return (
    <div>      
      <div className="flex flex-row justify-around items-center  bg-slate-100 ">
        <Datepicker
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          startTime={startTime}
          setStarttime={setStarttime}
          endTime={endTime}
          setEndtime={setEndtime}
        />
        <div className=" flex flex-row gap-3">
          <div className="flex flex-col w-2/6"> 
          <label className="text-white  text-sm bg-blue-900 rounded-md mb-1 text-center">Vehicle No.</label>
          <input type="text"  
          value = {psvNo}
          onChange={e=>setPsvNo(e.target.value)}
          className=" border border-blue-700 p-1 rounded-md w "
          placeholder="LES-Year-Reg.No"
          />
          </div>

          {/* ===================================button  */}
          <div className=" flex items-end justify-end w-full">
          <button
            className="bg-blue-900 text-white-900 rounded-md font-semibold px-2 py-1 text-white border-2 border-blue-900 hover:bg-blue-800 hover:scale-105 transition "
            onClick={() => getData()}
          >
            Generate Report
          </button>
          {/* ====================================================export to excel */}
          <button
            className="bg-teal-700 text-white-900 rounded-md font-semibold px-2 py-1 text-white border-2 border-teal-700 hover:bg-teal-600 hover:scale-105 transition ml-2 "
            onClick={() => handleDownloadExcel("Vehicle's Inspection History",data,header,startDate,endDate )}
          >
             Export to Excel
          </button>
          </div>
        </div>
      </div>

      <div className=" bg-teal-700  ">
      
      <div className="text-center font-extrabold   text-xl p-1 bg-slate-200">Vehicles Inspection Report</div>
      <div className="  text-white flex flex-row justify-between  py-1 px-20">
      <div className=" w-2/6"> <b>Date: </b> <i className="pl-2 pr-2">{`${startDate.split("-").reverse().join("-")}`}</i>  <b>to</b>   <i className="pl-2 pr-2">{`${startDate.split("-").reverse().join("-")} `}</i></div>
      <div className="flex flex-row gap-1 ">
        <i>Vehicle #:</i>
        <b>{psvNo}</b>

        
      </div>
      <div className="text-end w-2/6"> <b>Time:</b> <i>{`${startTime} `}</i> <b>to</b> <i>{`${endTime} `}</i></div>
      </div>
      </div>

      {/* ======================================Report Data Here */}
      <div className="container mx-auto w-11/12 border  border-slate-700 p-2 mt-2 rounded-lg">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
