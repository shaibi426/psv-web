import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from './assests/PMP LOGO.png'
import Link from "next/link";
import DropDown from '../components/dowpdown menu/dropdown'
import MainMenu from './menubar/page'
import { useSession } from "next-auth/react";



export default function Header() {
  const {data} = useSession()

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

    <div className=" pl-10   text-sm flex gap-8">
<MainMenu />
{data && 
<div className=" flex flex-col items-center justify-center  text-pmpblue">
  <span className=" px-2 rounded-l-full  font-semibold bg-pmpyellow">
  {data.user?
  data.user.webrole == 'sectorAdmin'?
  data.user.rank +" "+ data.user.userName +  "  ("+ data.user.sectorId + ")"  :
  data.user.rank +" "+ data.user.userName +  "  ("+ data.user.zoneId + ")"  :
  "-"}
  </span>

  </div>
}
</div>
    </div>
  );
}
