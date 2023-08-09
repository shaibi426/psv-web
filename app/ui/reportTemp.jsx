'use client'
import React,{useState,useEffect} from "react"
import ReportTitle from './reportTitle'
import ReportButton from './reportButton'
import {handleDownloadExcel} from '../functions/exportToExcel'



export default function ReportTemp (props) {
return(
    <div>
        <ReportTitle name ={props.reportName} />
        <ReportButton  excelExport ={ ()=>handleDownloadExcel(props.reportName,props.data,props.header,props.starDate,props.endDate)}/>
    </div>
)
}