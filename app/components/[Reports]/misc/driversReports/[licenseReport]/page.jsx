"use client";
import React, { useState, useEffect } from "react";
import { downloadExcel } from "react-export-table-to-excel";

export default function DriversReport(props) {
  //----------------------------------------setting data
const [data, setData] = useState([]);
const startDate = props.params.licenseReport.split('and')[0]
const endDate = props.params.licenseReport.split('and')[1]
//   //-------------------------------------------api calling for getting data
  const getDriverData = async () => {
    const response = await fetch(`/api/datewise/DriverName,LicenseType,CellNo/DriverInfo/AddedON/'${startDate}'/'${endDate}'`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
   setData(result);
  };
  //-----------getting data on page load
  useEffect(() => {
    getDriverData();
   
   
  });

  //----------------------------------------------Code for Excel
  const header = ["Name", "LicenseType", "CellNo"]; //table heads

  //------------------------------ function to download excel report
  function handleDownloadExcel() {
    downloadExcel({
      fileName: "Drivers Data",
      sheet: 'Driver Data Report',
      tablePayload: {
        header,
        body: data,
      },
    });
  }

  return (
    <div>
      <div className="flex justify-start gap-4 flex-row px-10 py-2 ">
        <button className="rounded-sm bg-blue-300 w-1/12"> Print</button>
        <button className="rounded-sm bg-red-300 w-1/12"> Save as PDF</button>
        <button className="rounded-sm bg-green-300 w-2/12" onClick={handleDownloadExcel}>
          Export to Excel
        </button>
      </div>

      <div className="flex  bg-gray-200  justify-center items-center p-3 ">
        <div className="w-6/12 rounded-md bg-white justify-center  text-center h-fit ">
          <div className="w-full h-20 bg-pmpblue flex  flex-grow justify-center items-center text-xl text-white font-bold">
            Drivers Report
          </div>
          {/* ================================================Report Data Table ======================== */}
        
          <table className="flex justify-center items-center text-start">
           
            <tbody >
              <tr>
                {header.map((head) => (
                  <td key={head} className="bg-gray-400  font-bold"> {head} </td>
                ))}
              </tr>
             {data.map((item,key)=>(
            <tr className="border-b border-gray-500">
         
             
              <td>
              {item.DriverName}
              </td>
              <td>
              {item.LicenseType}
              </td>
              <td>
              {item.CellNo}
              </td>

            </tr>

             ))}
            </tbody>
          </table>
         
        </div>
      </div>
    </div>
  );
}



