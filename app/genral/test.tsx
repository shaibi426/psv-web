'use client'
import { NextApiRequest } from "next";
import ExcuteQuery from "./getDat";
import React,{useState,useEffect} from "react";
const sql = require('mssql')

const mydata = {'name':'training collage',value:12332123}

export default function GetData(){
const [data,setData]= useState(mydata.name)

useEffect(()=>{


    console.log(console.log(ExcuteQuery("select count(LicenseExpiry) from DriverInfo where LicenseExpiry is not null")))
},[])

    return(
        <div>
         <div>Hello</div> 
         <button onClick={()=>{console.log({data}),setData('NHMP')}}className="bg-gradient-to-t from-red-400 to-white">GetData</button>
         </div>
    )
}