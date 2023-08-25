"use client";
import React, { useState, useEffect } from "react";
import { downloadExcel } from "react-export-table-to-excel";

export default function DriversReport() {
  //----------------------------------------setting data
  const [data, setData] = useState([]);


  //-------------------------------------------api calling for getting data
  const getDriverData = async () => {
    const response = await fetch("/api/datewise/DriverName,Company,CellNo/DriverInfo/AddedON/'2023-06-01'/'2023-08-05'", {
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
  const header = ["Name", "Company", "CellNo"]; //table heads

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
              {item.Company}
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




//================================================previous code ffor reports data in div
 {/* ======================================================================== */}
          {/* <div className ='flex flex-row gap-4  w-full justify-evenly items-center border-1 border-blue-950'>
            <div className="bg-gray-700 text-white p-2  border border-black text-center w-1/4 m-1">Name</div>
                    <div className=" bg-gray-700 text-white p-2 border border-black text-center w-1/4 m-1">Company</div>
                    <div className=" bg-gray-700 text-white p-2 border border-black text-center w-1/4 m-1">CellNo</div>
            </div> */}

          {/* {data.map((item) => (
            <div className="flex flex-row gap-4  w-full justify-evenly items-center border-b border-gray-500 border-dotted">
              <div className=" bg-slate-200 text-center w-1/4 m-1">
                {item.DriverName}
              </div>
              <div className=" bg-slate-200 text-center w-1/4 m-1">
                {item.Company}
              </div>
              <div className=" bg-slate-200 text-center w-1/4 m-1">
                {item.CellNo}
              </div>
            </div>
          ))} */}