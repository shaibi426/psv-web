"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "@/app/ui/table";
import { columns } from "./columns";
export default function Dsr() {
const[data,setData]= useState([])
const[loading,setLoading]= useState("...loading")
  useEffect(()=>{
    async function getData() {
      // Fetch data from your API here.
     
    const response = await fetch(
      `/api/dsr/dsr`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
   setData(result)
  };

  getData()

  },[data])


  return (
    <div className="bg-gray-200  w-full flex justify-center items-start pt-10 h-screen flex-grow">
      <div className="w-5/6 h-5/6 rounded-md    p-2 bg-gradient-to-br from-[#6f6dcf] to-[#9151e4]">
    
      </div>
    </div>
  );
}


