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
          <MenubarTrigger onClick={() => setIsOpen(!isOpen)}>
          <span> Reports </span>
          <div
            className={isOpen ? "rotate-180 transition" : "transition rotate-0"}
          >
            <Arrowdown />
          </div>
          </MenubarTrigger>
        
         
          <MenubarContent className= "bg-pmpblue bg-opacity-90 text-white divide-y border-0">
        
           
                 {/* =======================================================Gen report */}
            <MenubarSub>
              <MenubarSubTrigger>General Reports</MenubarSubTrigger>
              <MenubarSubContent className=" bg-pmpblue bg-opacity-90 text-white divide-y border-0">
                {GenReports.map(item=>(
                   <MenubarItem>{item}</MenubarItem>
                ))}
              
              </MenubarSubContent>
            </MenubarSub>
                 {/* =======================================================vehicle report */}
            <MenubarSub>
              <MenubarSubTrigger>Vehicle Reports</MenubarSubTrigger>
              <MenubarSubContent className=" bg-pmpblue bg-opacity-90 text-white divide-y  border-0">
                {VehReports.map(item=>(
                   <MenubarItem className ="text-pm" >
                    <Link href={`/components/${item}`} className=" deccoration-transparent"> {item}</Link>
                    </MenubarItem>
                ))}
              
              </MenubarSubContent>
            </MenubarSub>
            {/* =======================================================Driver report */}
            <MenubarSub>
              <MenubarSubTrigger>Vehicle Reports</MenubarSubTrigger>
              <MenubarSubContent className=" bg-pmpblue bg-opacity-90 text-white divide-y  border-0">
                {DriversReport.map(item=>(
                   <MenubarItem>{item}</MenubarItem>
                ))}
              
              </MenubarSubContent>
            </MenubarSub>
           
          </MenubarContent>
        </MenubarMenu>


        <MenubarMenu >
        <MenubarTrigger>Home</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu >
        <MenubarTrigger>Dash Board</MenubarTrigger>
        </MenubarMenu>

      </Menubar>
    )
  }
  