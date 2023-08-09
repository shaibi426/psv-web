'use client'
import React,{useState,useEffect} from "react"
// import ReportTitle from '../../../ui/reportTitle'
// import ReportButton from '../../../ui/reportButton'
// import {handleDownloadExcel} from '../../../functions/exportToExcel'
import ReportTemp from '../../../../ui/reportTemp'

const header = ["Name", "Company", "CellNo"]; //table heads

const data =[['a','b','c'],['a','b','c']]

export default function PSVsTravelled (props) {
const reportprops= props.params.reportData[0].split('x')
const startDate =reportprops[0]
const endDate = reportprops[1]
const startTime =reportprops[2].split('%3A').join(':')
const endTime =reportprops[3].split('%3A').join(':')
const psvNo = reportprops[4].split('%22')[0]

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

return(


    <div>
<ReportTemp reportName ='PSVs Travelled' header={header} data={data} starDate ={startDate} endDate ={endDate} />

{/* ======================================Report Data Here */}

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
              {item[0]}
              </td>
              <td>
              {item[1]}
              </td>
              <td>
              {item[2]}
              </td>

            </tr>

             ))}
            </tbody>
          </table>

        
    </div>
)
}