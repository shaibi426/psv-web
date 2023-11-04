"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "@/app/ui/table";
import { Inspcolumns, columns } from "./columns";
import { Bus,ClipboardSignature, User2 } from "lucide-react";
import axios from "axios";
import Datepicker from "../../ui/datepicker";
import { DataTablewithFilters } from "@/app/ui/filterTable";


export default function Dsr() {
  const [psvData, setPsvData] = useState([])
  const [dvrData, setdvrData] = useState([]) 
  const [inspData, setinspData] = useState([]) 


  const Today =new Date().toISOString().split('T')[0]
  const [startTime,setStarttime]= useState('00:00')
  const [endTime,setEndtime]= useState('23:59')
  const [startDate,setStartDate]= useState(Today)
  const [endDate,setEndDate]= useState(Today)


  const getData = async () => {
      axios.get(`http://116.0.45.14:5000/web/daily/sectorwisedsr/${startDate}/${endDate}/${startTime}/${endTime}`).then(
      response =>{
        const result = response.data
        if(result){
          setPsvData(result.vehicles)
          setdvrData(result.driver)
          setinspData(result.inspection)
        }else{
          alert("No data Found")
        }
       
        
      }
    )
  } 

  return (
    <div>
      {/* date and time picker form */}
      <div className="flex flex-row justify-around items-center  bg-slate-100 p-3">

      <Datepicker
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        startTime={startTime}
        setStarttime ={setStarttime}
        endTime={endTime}
        setEndtime ={setEndtime}
        />
        <div className="p-1">

      <button
        className="bg-blue-900 text-white-900 rounded-md font-bold px-2 py-1 text-white border-2 border-blue-900 hover:bg-blue-800 hover:scale-105 transition "
        onClick={() => getData()}
        >
        Generate Report
      </button>
          </div>
        </div>
        <div className=" bg-teal-700  ">
      
      <div className="text-center font-extrabold   text-xl p-1 bg-slate-200">Zone wise Progress Report </div>
      <div className="  text-white flex flex-row justify-between  py-1 px-20">
      <div className=" w-2/6"> <b>Date: </b> <i className="pl-2 pr-2">{`${startDate.split("-").reverse().join("-")}`}</i>  <b>to</b>   <i className="pl-2 pr-2">{`${startDate.split("-").reverse().join("-")} `}</i></div>

      <div className="text-end w-2/6"> <b>Time:</b> <i>{`${startTime} `}</i> <b>to</b> <i>{`${endTime} `}</i></div>
      </div>
      </div>

       
      {/* ========================================================= vehicles */}
      <div className="w-full flex  flex-col  items-center justify-center flex-grow m-8">
        <div className="w-5/6  rounded-md   px-1 py-2 m-2  border-2 border-slate-500">
          <div className=" mb-1 font-extrabold text-lg w-fit pl-2 pr-5 p-1  text-blue-900 bg-slate-300 rounded-md">
            <div className="flex-row flex">
              <Bus className=" stroke-1 mr-2 border-b border-blue-900 -skew-x-3 border-dashed " />{" "}
              Vehicles Addition & Updation Report
            </div>
          </div>
          <DataTablewithFilters columns={columns} data={psvData} />
        </div>
      </div>
      {/* =======================================DRIVER */}
      <div className=" w-full flex justify-center items-center  flex-grow flex-col m-8">
        <div className="w-5/6  rounded-md px-1 py-2 m-2  border-2 border-slate-500 ">
          <div className=" mb-1 font-extrabold text-lg w-fit pl-2 pr-5 p-1  text-blue-900 bg-slate-300 rounded-md">
            <div className="flex-row flex ">
              <User2 className=" stroke-1 mr-2 " />
              Drivers Addition & Updation Report
            </div>
          </div>
          <DataTablewithFilters columns={columns} data={dvrData} />
        </div>
      </div>
       {/* =========================================inspection */}
       <div className=" w-full flex justify-center items-center  flex-grow flex-col m-8">
        <div className="w-5/6  rounded-md    px-1 py-2 m-2  border-2 border-slate-500 ]">
          <div className=" mb-1 font-extrabold text-lg w-fit pl-2 pr-5 p-1  text-blue-900 bg-slate-300 rounded-md">
            <div className="flex-row flex">
              <ClipboardSignature className=" stroke-1 mr-2  border-blue-900 " />{" "}
              Vehicles Inspection Report
            </div>
          </div>
          <DataTablewithFilters columns={Inspcolumns} data={inspData} />
        </div>
      </div>
      
    </div>
  );
}


