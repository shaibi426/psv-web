"use client"
import { useState } from "react"
import Arrowdown from './arrow'
import Link from "next/link"
import SubDropDown from "./subDropdown"

export default function DropDown() {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState('Reports')


    return (
      <div className=" select rounded-md  " onClick={() => setIsOpen(!isOpen)}>
        <div className="flex justify-between items-center">
          <span> Reports </span>
          <div
            className={isOpen ? "rotate-180 transition" : "transition rotate-0"}
          >
            <Arrowdown />
          </div>
        </div>
        <div className="z-50 absolute  bg-pmpblue w-1/6 text-pmpyellow mt-2 mx-0 rounded-b-md bg-opacity-95">
          {isOpen && (
            <div className="py-3 my-3 mx-1">
              <ul className="flex flex-col divide-y">
               {/* ------------------General reports */}
                <ul
                  className="pr-7 py-2 text-center items-center hover: select "
                  onClick={() => setSelected("General Reports")}
                >
                  <SubDropDown
                    name="General Report"
                    option={[
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
                    ]}
                  />
                </ul>
                {/* ---------------------------Vehicles Report */}
                <ul
                  className="pr-7 py-2 text-center items-center hover: select "
                  onClick={() => setSelected("Vehicles Reports")}
                >
                  <SubDropDown
                    name="Vehicles Report"
                    option={[
                      "Date Wise Report",
                      "Comperihensive Data Report",
                      "transport Company Report",
                      "Vehicle Type/Model Report",
                      "Route/Cities Report",
                      "Tyre Condition Report",
                      "Route Permit Expiry Report",
                      "Vehicle Fitness Expiry Report",
                     
                    ]}
                  />
                </ul>
                {/* -----------------------------Drivers reports */}
                <ul
                  className="pr-7 py-2 text-center items-center hover: select "
                  onClick={() => setSelected("Drivers Reports")}
                >
                  <SubDropDown
                    name="Drivers Report"
                    option={[
                      "License Report",
                      "License Expiry Report",
                      "Licience Verification Report",
                      "Licience Autherity Report",
                     
                    ]}
                  />
                </ul>
            
              </ul>
            </div>
          )}
        </div>
      </div>
    );
}

