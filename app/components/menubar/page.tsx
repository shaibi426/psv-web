"use client"
import React,{useState} from "react"
import Arrowdown from "../dowpdown menu/arrow"
import Link from "next/link"
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
  const GenReports =[
    "PSVs Travelled",
    "Trip of a Driver",
    "Road Worthy Vehicles",
    "Warned Vehicles",
    "Enforced Vehicles",
    "Returned vehicles",
    "Companies Banned",
    "Drivers Banned",
    "vehicles Banned",
    "Total Boarded Passengers"
  ]
  const VehReports=[
    "Date Wise Report",
    "Comperehensive Data Report",
    "Transport Company Report",
    "Vehicle Type-Model Report",
    "Route Report",
    "Tyre Condition Report",
    "Route Permit Expiry Report",
    "Vehicle Fitness Expiry Report",
   
  ]
  const DriversReport= [
    "License Report",
    "License Expiry Report",
    "Licience Verification Report",
    "Licience Autherity Report",
  ]
 
  export default function MainMenu() {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <Menubar className="border-0">
       
        <MenubarMenu >
          <MenubarTrigger onClick={() => setIsOpen(!isOpen)} className="hover:bg-white hover:text-pmpblue rounded-md">
          <span> Reports </span>
          <div
            className={isOpen ? "rotate-180 transition" : "transition rotate-0"}
          >
            <Arrowdown />
          </div>
          </MenubarTrigger>
        
         
          <MenubarContent className= "bg-pmpblue bg-opacity-90 text-yellow-400 divide-y border-0">
        
           
                 {/* =======================================================Gen report */}
            <MenubarSub>
              <MenubarSubTrigger>General Reports</MenubarSubTrigger>
              <MenubarSubContent className=" bg-pmpblue bg-opacity-90 text-yellow-400 divide-y border-0">
              {GenReports.map(item=>(
                  <Link href={item=='Road Worthy Vehicles'?"/components/generalReports/roadWorthyVehicles":`/components/${item}`} className="hover:no-underline">
                   <MenubarItem className ="text-yellow-400 hover:text-yellow-400 hover:font-semibold transition-all" >
                     {item}
                    </MenubarItem>
                    </Link>
                ))}
              
              </MenubarSubContent>
            </MenubarSub>
                 {/* =======================================================vehicle report */}
            <MenubarSub>
              <MenubarSubTrigger>Vehicle Reports</MenubarSubTrigger>
              <MenubarSubContent className=" bg-pmpblue bg-opacity-90 text-yellow-400 border-0">
                {VehReports.map(item=>(
                  <Link href={`/components/${item}`} className="hover:no-underline">
                   <MenubarItem className ="text-yellow-400  hover:text-yellow-400 hover:font-semibold transition-all" >
                     {item}
                    </MenubarItem>
                    </Link>
                ))}
              
              </MenubarSubContent>
            </MenubarSub>
            {/* =======================================================Driver report */}
            <MenubarSub>
              <MenubarSubTrigger>Vehicle Reports</MenubarSubTrigger>
              <MenubarSubContent className=" bg-pmpblue bg-opacity-90 text-yellow-400 divide-y  border-0">
              {DriversReport.map(item=>(
                  <Link href={item=='Road Worthy Vehicles'?"/components/generalReports/roadWorthyVehicles":`/components/${item}`} className="hover:no-underline">
                   <MenubarItem className ="text-yellow-400 hover:text-yellow-400 hover:font-semibold transition-all" >
                     {item}
                    </MenubarItem>
                    </Link>
                ))}
              
              </MenubarSubContent>
            </MenubarSub>
           
          </MenubarContent>
        </MenubarMenu>


        <MenubarMenu >
        <Link href="/" className="hover:bg-white hover:text-pmpblue rounded-md hover:no-underline text-pmpyellow">
        <MenubarTrigger >Home</MenubarTrigger>
        </Link>
        </MenubarMenu>
        <MenubarMenu >
        <Link href="/dashboard" className="hover:bg-white hover:text-pmpblue rounded-md hover:no-underline text-pmpyellow">
        <MenubarTrigger >Dash Board</MenubarTrigger>
        </Link>
        </MenubarMenu>

      </Menubar>
    )
  }
  