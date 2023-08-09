'use client'
import React,{useState,useEffect} from "react"
// import ReportTitle from '../../../ui/reportTitle'
// import ReportButton from '../../../ui/reportButton'
// import {handleDownloadExcel} from '../../../functions/exportToExcel'
import ReportTemp from '../../../ui/reportTemp'

const header = ["Name", "Company", "CellNo"]; //table heads

const data =[['a','b','c'],['a','b','c']]

export default function PSVsTravelled () {

return(
    <div>
<ReportTemp reportName ='PSVs-Traveled' header={header} data={data} starDate ='2023-08-01' endDate ='2023-08-05' />

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