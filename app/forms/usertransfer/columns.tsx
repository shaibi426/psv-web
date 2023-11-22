
//------------------------------------------------------Report headers
import { ColumnDef } from "@tanstack/react-table"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import axios from "axios"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

var userzones:[{}]
var usersectors:[{}]

export type rptCol = {
  uid:string
  rank:string
  name: string
  belt:string
  region:string
  zone:string
  sector:string
  beat:string 
  }
 
 
  function transferOfficer(id:string,transferDetail:{}) {      
    try {
    axios.patch(`http://localhost:5000/web/user/transfer/${id}`, transferDetail
    )
    .then(response =>{ 
        alert('Data updated');
        })}
     catch (error) {
      console.log(error)
    }
    alert(JSON.stringify(transferDetail))
  }   
 
 

  //=======================get zones 
  const getZones = ()=>{

    axios.get(`http://localhost:5000/ofc/zone`).then(
    response =>{
      const result = response.data
      if(result){
       userzones = result
      
      }else{
        alert("No data Found")
      }
    }
  )
} 

//=======================================================get zone 
const getSector = (zone:string,sectorFn:Function)=>{

  axios.get(`http://localhost:5000/ofc/sector/${zone}`).then(
  response =>{
    const result = response.data
    if(result){
     sectorFn(result)
    }else{
      alert("No data Found")
    }
  }
)
} 

//========================================get Beats 
const getBeats = (sector:string,beatFn:Function)=>{

  axios.get(`http://localhost:5000/ofc/beat/${sector}`).then(
  response =>{
    const result = response.data
    if(result){
     beatFn(result)
    }else{
      alert("No data Found")
    }
  }
)
} 



getZones()
export const columns: ColumnDef<rptCol>[] = [
  {
    id: 'officer',
    accessorFn: row => `${row.rank} ${row.name} (${row.belt})`,
    header: "Officer",
  },
  {
    accessorKey: "region",
    header: "Region",
  },
      {
        accessorKey: "zone",
        header: "Zone",
      },
      {
        accessorKey: "sector",
        header: "sector",
      },
      {
        accessorKey: "beat",
        header: "Beat",
      },
      {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {

          const[sectors,setSectors] = useState()
          const[beats,setBeats] = useState()

          const [zone,setZone] = useState(" ")          
          const [sector,setSector] = useState(" ")
          const [beat,setBeat] = useState(" ")

          const officer = row.original
          
     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="bg-blue-500 py-0" >
                  <span className="sr-only">Open menu</span>
                  Tranfer
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white shadow-ld shadow-blue-200 border border-gray-500 ">
                <DropdownMenuLabel className="bg-gray-300 text-center"> Enter Tranfer Detail</DropdownMenuLabel>
                <DropdownMenuLabel className="bg-gray-200 text-center mb-4 text-xs"> {officer.rank + " "+ officer.name + " " + officer.belt}</DropdownMenuLabel>
                <div className="flex flex-col gap-2 justify-center items-center">

               <div className="flex flex-row ">

                <div className="flex flex-col justify-start">
                  <label htmlFor="" className="font-semibold text-xs ml-3">Zone</label>
                <select name="" id='Select Zone' className=" border rounded-md border-gray-300 p-2 m-2 divide-y-2" 
                onChange={(e)=>{getSector(e.target.value,setSectors) , setZone(e.target.value)}}
                >
                {userzones.map((item) => (
              <option value={item.zone} className="bg-gray-200 m-5" >{item.zone}</option>
            ))}
             </select>
                </div>


                <div className="flex flex-col justify-start">
                  <label htmlFor="" className="font-semibold text-xs ml-3">Sector</label>
                <select name="" id="Select Sector"  className=" border rounded-md border-gray-300 p-2 m-2"
                onChange={(e)=>{getBeats(e.target.value,setBeats),setSector(e.target.value)}}
                >
                 
                  {
                    sectors?.map((item)=>(
                      <option value={item.sector}> {item.sector}</option>
                    ))
                  }
             </select>
                </div>

                <div className="flex flex-col justify-start">
                  <label htmlFor="" className="font-semibold text-xs ml-3">Beat</label>
                <select name="" id=""  className=" border rounded-md border-gray-300 p-2 m-2"
                onChange={(e)=>setBeat(e.target.value)}
                >
                {beats?.map((item) => (
              <option value={item.beat} className="bg-gray-200 m-5" >{item.beat}</option>
            ))}
                </select>
                </div>
                </div>

                <Button variant="ghost" className="bg-blue-500 py-0 w-full" onClick={()=>transferOfficer(officer.uid,
                  {  
                    "region": officer.region,
                    "zoneId" : zone,
                      "sectorId": sector,
                      "beatId" : beat
                })}>
                  <span className="sr-only">Open menu</span>
                  Save
                </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
      
      
  
]



