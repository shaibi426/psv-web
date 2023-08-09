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
  


  return (
    <div>
      <div onMouseEnter={() => setSubrptOpen(true)} onMouseLeave={()=>setSubrptOpen(false)} className="flex flex-row text-center justify-center w-full items-center relative">
        <div>
        {props.name}
          </div>
      {subRptOpen && (
        <div onClick={() => setSubrptOpen(!subRptOpen)} className="bg-pmpblue absolute top-1  px-1  -left-[208px] z-50  w-[110%] rounded-md bg-opacity-95" >
          <ul className='divide-y'>
            {props.option.map((item)=>(
                <li className ='py-2 ' key ={item}> 
                <Link 
                className=" text-pmpyellow decoration-transparent"
                href ={{pathname:`/components/${item}`}} onClick ={()=>setReport(item)}>{item}</Link>
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
