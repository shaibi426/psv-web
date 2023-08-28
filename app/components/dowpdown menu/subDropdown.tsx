"use client";
type NameProp={
    name:string
    option:string[]
}

type ListOption ={
    option:string[]
}
import React, { useState, useEffect, ReactPropTypes } from "react";
import Link from "next/link";

const SubDropdown = (props:NameProp, option:ListOption) => {
  const [subRptOpen, setSubrptOpen] = useState(false);
  const [Report, setReport] = useState('');
  const [path, setPath] = useState('');
  
if(Report =='Road Worthy Vehicles'){
  setPath('/components/generalReports/roadWorthyVehicles')
}

  return (
    <div className="">
      <div onMouseEnter={() => setSubrptOpen(true)} onMouseLeave={()=>setSubrptOpen(false)} className="flex flex-row text-center justify-center  items-center relative">
        <div className="">
        {props.name}
          </div>
      {subRptOpen && (
        <div onClick={() => setSubrptOpen(!subRptOpen)} className="bg-pmpblue absolute top-1  px-1  -left-full z-50  w-[200px] rounded-md bg-opacity-95" >
          <ul className='divide-y'>
            {props.option.map((item)=>(
                <li className ='py-2 ' key ={item}> 
                <Link 
                className=" text-pmpyellow decoration-transparent"
                
                // href ={{pathname:`/components/${item}`}}

                href ={{pathname:item=='Road Worthy Vehicles'?"/components/generalReports/roadWorthyVehicles":`/components/${item}`}}
                
                onClick ={()=>setReport(item)}>{item}</Link>
                </li>
            ))}
            
          </ul>
        </div>
      )}
      </div>
    </div>
  );
};
export default SubDropdown;
