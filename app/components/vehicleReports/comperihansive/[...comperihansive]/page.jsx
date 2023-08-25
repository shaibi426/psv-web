"use client";
import React, { useState, useEffect } from "react";

import ReportTemp from '../../../../ui/reportTemp'
import { DataTable } from "@/app/ui/table";

//------------------------------------------------------Report headers



const Today = new Date(Date()).toLocaleDateString()

export const columns = [
    {
        id:'Vehicle No',
        accessorKey: "PsvNo",
        header: "Vehicle No",
      },
  {
    id: "VehicleType",
    accessorKey: "VehicleType",
    header: "Vehicle Type",
  },
  {
    id: "VehicleModel",
    accessorKey: "VehicleModel",
    header: "Modal",
  },
  {
    id:'Chasis No',
    accessorKey: "ChasisNo",
    header: "Chasis No",
  },
 
  {
    
    id: "Engine No",
    accessorKey: "EngineNo", //
    header: "Engine No",
    
  },

  {
    
    id: "Make",
    accessorKey: "VehicleMake", //
    header: "Make",
    
  },
  {
    id: "Colour",
    accessorKey: "VehicelColor",
    header: "Colour",
  },

{
id: "ACStatusC",
accessorKey: "ACStatus",
header: "ACS/Non-AC",
cell: ({ row }) => {
    const ac = row.id
    return <div className="text-start font-medium">
     {ac==1?"AC":"Non-AC"}
      </div>}
},
 

{

id: "TrackerStatus",
accessorKey: "TrackerStatus", //
header: "Tracker Status",
cell: ({ row }) => {
    const tracker = row.id
    return <div className="text-start font-medium">
     {tracker==1?"Available":"N/A"}
      </div>}

},
{

id: "RoutePermit No",
accessorKey: "RoutePermitNo", //
header: "RoutePermit No",

},
{

id: "Route ExpiryDate",
accessorKey: "RouteExpiryDate", //
header: "Route Expiry Date",

},
{
id: "Route From",
accessorKey: "RouteFrom",
header: "Route From",
},
{
    id: "Route To",
    accessorKey: "RouteTo",
    header: "Route To",
    },
    
   { id: "RouteVia",
accessorKey: "RouteVia", //
header: "RouteVia",

},

{

id: "Fitness",
accessorKey: "FitnessCertNo", //
header: "Fitness",

},
{

id: "Fitness ExpiryDate",
accessorKey: "FitnessExpiryDate", //
header: "Fitness Expiry Date",

},
{
id: "Issued by",
accessorKey: "FitnessIssueAuth",
header: "Issued By",
},
{
    id: "Tyre Expiry Date",
    accessorKey: "TypeExpiryDate",
    header: "Tyre Expiry Date",
    },
    {
        id: "FogLights",
        accessorKey: "FogLights",
        header: "Fog Lights",
        cell: ({ row }) => {
            const fl = row.id
            return <div className="text-start font-medium">
             {fl==1?"Installed":"N/A"}
              </div>}
        
        },
        {
            id: "HazardLights",
            accessorKey: "HazardLights",
            header: "Hazard Lights",
            cell: ({ row }) => {
                const fl = row.id
                return <div className="text-start font-medium">
                 {fl==1?"Installed":"N/A"}
                  </div>}
            },
            {
                id: "FirstAid Box",
                accessorKey: "FirstAidBox",
                header: "FirstAid Box",
                cell: ({ row }) => {
                    const fl = row.id
                    return <div className="text-start font-medium">
                     {fl==1?"Avaible":"N/A"}
                      </div>}
                
                },
 
]
export default function Comperihansive(props) {
  const [data, setData] = useState([])
  
  const reportprops = props.params.comperihansive[0].split("x");
  const startDate = reportprops[0];
  const endDate = reportprops[1];
//   const startTime = reportprops[2].split("%3A").join(":");
//   const endTime = reportprops[3].split("%3A").join(":");
  

  const Today = new Date(Date()).toLocaleDateString()
  

  //-------------------------------------------api calling for getting data
  const getData = async () => {
    const response = await fetch(
      `/api/vehicleReports/compReport/'${startDate}'/'${endDate}'`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    setData(result);
  };

  //------------------------------------------------------excel headers

  const header = [
    "Vehicle No",
    "Modal",
    "VehicleType",
    "ChasisNo",
    "Engine No",
    "Make",
    "colour",
    "AC/NonAC",
    'Company Name',
    "Tracker",
    "Route No",
    "issued By",
    "Route Expiry",
    "Route From",
    "Route To",
    "Route Via",
    "Fitness",
    "Fitness expiry",
    "Issued By",
    "Tyre Expiry",
    "Fog Light",
    "Hazard Lights",
    "BackLigths",
    "First Aid Box"



    
  ]; //table heads
  //-----------getting data on page load

  useEffect(() => {
    getData();
    console.log(data[0])
   
  },[data]);

  return (
    <div>
      <ReportTemp
        reportName=" PSVs Comprehensive Report "
        header={header}
        data={data}
        starDate={startDate}
        endDate={endDate}
      />

<div className="w-full flex gap-5 flex-col p-4 justify-center items-center ">
        <div className = "flex flex-col w-3/5 gap-3 justify-center items-center">
        <div className="flex flex-row w-full justify-between items-end px-5">
            {/* <div className=" font-extrabold text-lg bg-teal-600 p-3 rounded-md">Driver: {data[0].DriverName}</div>
            <div className=" font-extrabold text-lg bg-orange-600 p-3 rounded-md">License:{data[0].DriverLicenceNo}</div> */}
            </div>
            <div className="flex flex-row w-full justify-between items-end px-5">
            <div className="w-3/4 flex flex-row gap-3"> <div className="w-1/6 font-bold">Date</div><div>{` From: ${startDate} To ${endDate}`}</div></div>
            {/* <div className="w-3/4 flex flex-row gap-3"> <div className="w-1/6 font-bold">Time</div><div>{` From: ${startTime} To ${endTime}`}</div></div> */}
            </div>
      </div>
      </div>

      {/* ======================================Report Data Here */}
      <div className="container mx-auto w-11/12">
      <DataTable columns={columns} data={data} />
    </div>
      
    </div>
  );
}
