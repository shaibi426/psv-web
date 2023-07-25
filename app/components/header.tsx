import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "./PMP LOGO.png";

export default function Header() {
  return (
    <div className="flex flex-col w-full min-h-screen ">
      {/* ------------------------------------------main body */}
      <div className="bg-gray-300 h-screen flex flex-row ">
        {/* ------------------------------------------side bar */}
        <div className="bg-pmpblue w-2/12  flex flex-col justify-start items-center">
          <div className="  h-14 w-full">
            <div className=" justify-start items-center flex flex-row p-3 border-b-2 border-b-pmpyellow">
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
          <div className="menu-subdiv">
            <span>Total Drivers</span>
            <span>10023</span>
          </div>
          <div className="menu-subdiv">
            <span>Total Vehicles</span>
            <span>1023</span>
          </div>
          <div className="menu-subdiv">
            <span>Total Companies</span>
            <span>545</span>
          </div>
        </div>
        {/* ------------------------------------------dashboard container */}
        <div className="bg-gray-200 w-full">
          {/* ------------------------------------------header */}
          <div className="bg-pmpblue w-full h-14 text-pmpyellow flex justify-center items-center">DashBoard</div>
          {/* ----------------------------------------------------body */}
          <div className="flex flex-wrap flex-row items-center justify-evenly">
            <div className="graph-div">
              <div className=" graph-body "> Route graph</div>
              <div className="graph-footer">Total Routs  56785</div>
            </div>
            <div className="graph-div">
              <div className=" graph-body"> Licience graph</div>
              <div className="graph-footer">Total D.Licience 56785</div>
            </div>
            <div className="graph-div">
              <div className=" graph-body"> Fitness graph</div>
              <div className="graph-footer">Total Fitness  56785</div>
            </div>
            <div className="bg-white w-3/4 h-60 rounded-lg m-4 shadow-md shadow-gray-600">
              <div className=" graph-body"> PSV checking Track</div>
              <div className="graph-footer">Total Vehicles 56785</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
