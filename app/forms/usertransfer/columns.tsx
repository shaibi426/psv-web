
//------------------------------------------------------Report headers
import { ColumnDef, RowSelection, flexRender } from "@tanstack/react-table"
import { useEffect, useState } from "react"

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
import { ACTION_FAST_REFRESH } from "next/dist/client/components/router-reducer/router-reducer-types"
import { table } from "console"
import { render } from "react-dom"

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


 
 
  function transferOfficer(id:string,transferDetail:{},transferlog:{}) {      
    try {
    axios.patch(`http://localhost:5000/web/user/transfer/${id}`, transferDetail
    )
    .then(() =>{ 
 
        alert(`---------Data Saved--------------`);
      axios.post('http://localhost:5000/web/user/transferlog',transferlog)

        })}
     catch (error) {
      console.log(error)
    }
    
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
    accessorFn: row => `${row.rank} ${row.name}   (${row.belt})`,
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

          const[transferMenuState,settransferMenuState] = useState("hidden")
//==========================================data
          const[sectors,setSectors] = useState()
          const[beats,setBeats] = useState()
//--------------------------------------transfer details
          const [zone,setZone] = useState(" ")          
          const [sector,setSector] = useState(" ")
          const [beat,setBeat] = useState(" ")

          const officer = row.original
//======================================================= daynamic show hide components on user type 
        const userType = "regionalAdmin"
        const [showZone,setShowZone] = useState("block")
        const [showSector,setShowSector] = useState("block")

        useEffect(()=>{
          if(userType === 'sectorAdmin'){
            setShowZone('hidden')
            setShowSector('hidden')
        }
        else if(userType ==="zonalAdmin"){
          setShowZone('hidden')
          setShowSector('block')
          
           
         }
         else if  (userType =='regionAdmin'){
          setShowZone('block')
          setShowSector('block')
            
         }

        },[])
      
      
          
//===================================================================================================     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button  className="bg-blue-500 p-2 rounded-md hover:bg-slate-800 text-white" >
                  <span className="sr-only">Open menu</span>
                  Tranfer
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className={`bg-white shadow-ld shadow-blue-200 border border-gray-500 ${!transferMenuState}`}>
                <DropdownMenuLabel className="bg-gray-300 text-center"> Enter Tranfer Detail</DropdownMenuLabel>
                <DropdownMenuLabel className="bg-gray-200 text-center mb-4 text-xs"> {officer.rank + " "+ officer.name + " " + officer.belt}</DropdownMenuLabel>
                <div className="flex flex-col gap-2 justify-center items-center">

               <div className="flex flex-row ">

                <div className={`flex flex-col justify-start  ${showZone}`}>
                  <label htmlFor="" className="font-semibold text-xs ml-3">Zone</label>
                <select name="" id='Select Zone' className=" border rounded-md border-gray-300 p-2 m-2 divide-y-2" 
                onChange={(e)=>{getSector(e.target.value,setSectors) , setZone(e.target.value)}}
                >
                {userzones.map((item) => (
              <option value={item.zone} className="bg-gray-200 m-5" >{item.zone}</option>
            ))}
             </select>
                </div>


                <div className= {`flex flex-col justify-start  ${showSector}`}>
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
                <DropdownMenuItem className="w-full justify-end">
                <Button variant="secondary" className="bg-blue-500 py-0 w-full text-white hover:bg-gray-700" onClick={()=>{
                   
                
                  transferOfficer(officer.uid,
                  {  
                      "date" : "2023-11-23",
                      "admin":  1234546,
                      "region": officer.region,
                      "zoneId" : zone,
                      "sectorId": sector,
                      "beatId" : beat
                },
                {
                  "date" : "2023-11-01",
                  "admin" :123456,
                  "officer":officer.uid ,
                  "from" : `region:${officer.region}  Zone:${officer.zone}  Sector:${officer.sector} Beat:${officer.beat} `,
                  "to" : `region ${officer.region}  Zone ${zone}  Sector ${sector} Beat ${beat}`
                }
                )

                }}>
                  Save
                </Button>
                </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },

        
      },
      
      
  
]



