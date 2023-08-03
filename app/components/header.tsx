import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from './assests/PMP LOGO.png'
import Link from "next/link";
import DropDown from '../components/dowpdown menu/dropdown'




export default function Header() {

  return (
    <div className="bg-pmpblue3 w-full h-14 border-pmpyellow border-b-2 text-pmpyellow flex justify-between items-center">
    <div className="  h-14 w-1/6">
      <div className=" justify-start items-center flex flex-row p-3 ">
        <div> 
          <Image src={logo} width={30} height={30} alt="logo" />
        </div>
        <div>
          <span className=" font-extrabold italic relative text-white">
            NHMP
          </span>
          <span className=" absolute ml-1 text-xs text-white ">
            PSV-MIS
          </span>
        </div>
      </div>
    </div>

    <div className=" px-10  text-sm">
      <ul className="flex flex-row gap-3">
      <li className="header-links"><DropDown /></li>
        <li className="header-links"><Link href="/">Home</Link></li>
        <li className="header-links"><Link href="/dashboard">Dash Board</Link></li>
        {/* <li className="header-links"><Link href="/components/Reports">Reports</Link></li> */}
       
      </ul>
  
    
    </div>
    </div>
  );
}
