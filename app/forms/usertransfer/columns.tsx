
//------------------------------------------------------Report headers
import { ColumnDef } from "@tanstack/react-table"


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
 
 
  const transferOfficer =(id:string)=>{
    alert(id)
  }

  //=======================get zones 
  const getZones = (region:string)=>{

    axios.get(`http://116.0.45.14:5000/ofc/zone/${region}`).then(
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


getZones('North')
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
                <select name="" id="" className=" border rounded-md border-gray-300 p-2 m-2">
                {userzones.map((option) => (
              <option value={option.zone}>{option.zone}</option>
            ))}
             
                </select>
                </div>


                <div className="flex flex-col justify-start">
                  <label htmlFor="" className="font-semibold text-xs ml-3">Sector</label>
                <select name="" id=""  className=" border rounded-md border-gray-300 p-2 m-2">

                  <option value="">North 1</option>
                  <option value="">North 2</option>
                  <option value="">North 3</option>
                 
                </select>
                </div>

                <div className="flex flex-col justify-start">
                  <label htmlFor="" className="font-semibold text-xs ml-3">Beat</label>
                <select name="" id=""  className=" border rounded-md border-gray-300 p-2 m-2">
                 
                  <option value="">Beat-1</option>
                  <option value="">Beat-2</option>
                  <option value="">Beat-3</option>
             
                </select>
                </div>
                </div>

                <Button variant="ghost" className="bg-blue-500 py-0 w-full" onClick={()=>transferOfficer(officer.uid)}>
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



