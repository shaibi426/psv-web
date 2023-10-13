"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "@/app/ui/table";
import { columns } from "./columns";


export default function Dsr() {
const[data,setData]= useState([])
const[loading,setLoading]= useState("...loading")


  return (
    <div>
    <div className="bg-gray-200  w-full flex  flex-col  items-center justify-center flex-grow">
      <div className="font-extrabold text-2xl w-full p-5  text-blue-900">
      Daily vehicle's Checking Report
      </div>
      <div className="w-5/6  rounded-md    p-2 bg-gradient-radial to-[#1e3c72] from-[#4266a3] ">
      <DataTable columns={columns} data ={data} className="" />
      </div>
    </div>
   {/* =======================================DRIVER */}
   <div className="bg-gray-200  w-full flex justify-center items-center  flex-grow flex-col">
   <div className="font-extrabold text-2xl w-full p-5  text-blue-900">
       Daily Driver's Checking Report
      </div>
      <div className="w-5/6  rounded-md    p-2 bg-gradient-radial to-[#14547a] from-[#46817a]">
      <DataTable columns={columns} data ={data} />
      </div>
    </div>
    {/* =========================================inspection */}
    <div className="bg-gray-200  w-full flex justify-center items-center  flex-grow flex-col">
    <div className="font-extrabold text-2xl w-full p-5  text-blue-900">
        Daily inspection Report
      </div>
      <div className="w-5/6  rounded-md    p-2 bg-gradient-radial to-[#09203f] from-[#537895]">
      <DataTable columns={columns} data ={data} />
      </div>
    </div>
    </div>
  );
}


