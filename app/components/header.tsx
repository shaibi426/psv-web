import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from './assests/PMP LOGO.png'
import driver from './assests/driver.png'
import company from './assests/company.png'
import psv from './assests/bus.png'
import RoutGraph from './graphs/routeGraph'
import LicienceGraph from "./graphs/liciencePiegraph";
import FitnessGrph from "./graphs/fitnessgraph";
import TrackinGraph from "./graphs/TrackingGraph";
import TrackinLineGraph from "./graphs/Trackingline";


export default function Header() {

  return (
    <div className="flex flex-col w-full min-h-screen ">
  
      {/* ------------------------------------------main body */}
      <div className="bg-gray-300 h-screen flex flex-row ">
        {/* ------------------------------------------side bar */}
        <div className="bg-pmpblue3 bg-gradient-radial to-pmpblue3 from-blue-900 w-2/12  flex flex-col justify-start items-center">
          <div className="  h-14 w-full">
            <div className=" justify-start items-center flex flex-row p-3 border-b border-b-pmpyellow">
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
          <div className="bg-pmpyellow   rounded-full h-50 w-50 p-2">
          <Image src={driver} width={50} height={50} alt="logo"  />
          </div>
          <div className="mt-2 flex flex-col justify-center items-center">
            <span className=' font-semibold m-1'>Total Drivers</span>
            <span className='bg-pmpyellow w-5/6 text-center text-pmpblue'>758</span>
            </div>
          </div>
          <div className="menu-subdiv">
          <div className="bg-pmpyellow h-50 w-50 p-2 rounded-full">
          <Image src={psv} width={50} height={50} alt="logo"  />
          </div>
            <div className="mt-2 flex flex-col justify-center items-center">
            <span className=' font-semibold m-1'>Total Vehicles</span>
            <span className='bg-pmpyellow w-5/6 text-center text-pmpblue'>1023</span>
            </div>
          </div>
          <div className="menu-subdiv">
          <div className="bg-pmpyellow h-50 w-50 p-2 rounded-full">
          <Image src={company} width={50} height={50} alt="logo"  />
          </div>
          <div className="mt-2 flex flex-col justify-center items-center">
            <span className=' font-semibold m-1'>Total Companies</span>
            <span className='bg-pmpyellow w-5/6 text-center text-pmpblue'>514</span>
            </div>
          </div>
        </div>
        {/* ------------------------------------------dashboard container */}
        <div className="bg-gray-200 w-full">
          {/* ------------------------------------------header */}
          <div className="bg-pmpblue3 w-full h-14 border-pmpyellow border-b-2 text-pmpyellow flex justify-center items-center">DashBoard</div>
          {/* ----------------------------------------------------body */}
          <div className="flex flex-wrap flex-row items-center justify-evenly">
            <div className="graph-div">
              {/* ==================================================Rout Graph */}
              <div className=" graph-body ">
                <RoutGraph />
              </div>
              <div className="graph-footer bg-gradient-to-t from-purple-100 to-purple-400">Total Routs  56785</div>
            </div>
            <div className="graph-div">
              {/* ====================================licience gragh */}
              <div className=" graph-body">
                <LicienceGraph />
              </div>
              <div className="graph-footer bg-gradient-to-t from-green-100 to-green-500">Total D.Licience 56785</div>
            </div>
            <div className="graph-div">
              {/* ======================fitness Graph */}
              <div className=" graph-body"> 
              <FitnessGrph />
              </div>
              <div className="graph-footer ">Total Fitness  56785</div>
            </div>
            <div className="bg-white w-3/4 h-60 rounded-lg m-4 shadow-md shadow-gray-600">
            {/* ============================================tracking Graph */}
              <div className=" graph-body">
                {/* <TrackinGraph /> */}
                <TrackinLineGraph />
              </div>
              <div className="graph-footer bg-gradient-to-b from-orange-100 to-orange-400">Total Vehicles 56785</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
