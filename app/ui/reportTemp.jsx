'use client'
import React,{useState,useEffect} from "react"
import ReportTitle from './reportTitle'
import ReportButton from './reportButton'
import {handleDownloadExcel} from '../functions/exportToExcel'



export default function ReportTemp (props) {
return(
    <div>
        <div className='w-full h-10 bg-gray-400 text-black text-center font-bold text-xl flex items-center justify-center'>
            {`${props.reportName} Report`}      
        </div>

        
        <ReportButton  excelExport ={ ()=>handleDownloadExcel(props.reportName,props.data,props.header,props.starDate,props.endDate)}/>
    </div>
)
}
