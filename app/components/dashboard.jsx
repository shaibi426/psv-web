"use client"
import React,{useState,useEffect} from "react";
import SideBarMenu from "./sidebar";
import RoutGraph from './graphs/routeGraph'
import LicienceGraph from "./graphs/liciencePiegraph";
import FitnessGrph from "./graphs/fitnessgraph";
import TrackingLineGraph from "./graphs/Trackingline";

export default function Dashboard(){

    return (
      <div className="bg-gray-300 h-screen flex md:flex-row flex-col  ">
        <SideBarMenu />
        {/* ------------------------------------------dashboard container */}
        <div className="bg-gray-200 w-full">
          {/* ----------------------------------------------------body */}
          <div className="flex flex-wrap md:flex-row flex-col items-center justify-evenly ">
            <RoutGraph />
            <LicienceGraph />
            <FitnessGrph />
           <TrackingLineGraph />
          </div>
        </div>
      </div>
    );
}