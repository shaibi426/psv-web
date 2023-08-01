import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from './assests/PMP LOGO.png'



export default function Header() {

  return (
    <div className="bg-pmpblue3 w-full h-14 border-pmpyellow border-b-2 text-pmpyellow flex justify-start items-center">
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
    </div>
  );
}
