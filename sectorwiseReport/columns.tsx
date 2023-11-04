
//------------------------------------------------------Report headers
import { ColumnDef } from "@tanstack/react-table"
export type rptCol = {
  date:string
  zone: string
  added: number
  updated:number
}
 




export const columns: ColumnDef<rptCol>[] = [
    {
        accessorKey: "addedDate",
        header: "Date",
        cell: ({ row }) => {
          const date:string = (row.getValue("addedDate"))
          return (<div className=" font-medium">
            {date.split('T')[0].split('-').reverse().join('-')}
            </div>)}
      },
      {
        accessorKey: "zone",
        header: "Zone",
      },
  
  {
    accessorKey: "added",
    header: ({ table })=>{
      const result =table.getFilteredRowModel()
      .rows.reduce((total,row)=>total+Number(row.getValue("added")),0)
      return (
        <div>Additions:<span className="font-bold bg-slate-300 rounded-sm px-2">{result}</span> </div>
      )
      
      }
  },
  {
    accessorKey: "updated",
    header: ({ table })=>{
      const result =table.getFilteredRowModel()
      .rows.reduce((total,row)=>total+Number(row.getValue("updated")),0)
      return (
        <div>Updations:<span className="font-bold bg-slate-300 rounded-sm px-2">{result}</span> </div>
      )
      
      },
    
  },
]


//-----------------inspection report col


export type InsprptCol = {
  date:string
  zone: string
  sector: string
  inspections: number
  passengers:number
  Enforced:number
  Returned: number
  warned:number
  RoadWorthy:number
  WarnedReturned:number
  ReturnedEnforced:number
}
export const Inspcolumns: ColumnDef<InsprptCol>[] = [
  {
      accessorKey: "addedDate",
      header: "Date",
      cell: ({ row }) => {
        const date:string = (row.getValue("addedDate"))
        return <div className="font-medium min-w-max">
          {date.split('T')[0].split('-').reverse().join('-')}
          </div>}
    },
    {
      accessorKey: "zone",
      header: "Zone",
    },
    {
      accessorKey:""

    },

{
  accessorKey: "inspections",
  header:
  ({ table })=>{
    const result =table.getFilteredRowModel()
    .rows.reduce((total,row)=>total+Number(row.getValue("inspections")),0)
    return (
      <div>Inspections:<span className="font-bold bg-slate-300 rounded-sm px-2">{result}</span> </div>
    )
    
    }
},
{
  accessorKey: "passengers",
  header: ({ table })=>{
    const result =table.getFilteredRowModel()
    .rows.reduce((total,row)=>total+Number(row.getValue("passengers")),0)
    return (
      <div>Passengers:<span className="font-bold bg-slate-300 rounded-sm px-2">{result}</span> </div>
    )
    
    } ,
},
{
  accessorKey: "warned",
  header: ({ table })=>{
    const result =table.getFilteredRowModel()
    .rows.reduce((total,row)=>total+Number(row.getValue("warned")),0)
    return (
      <div>Warned:<span className="font-bold bg-slate-300 rounded-sm px-2">{result}</span> </div>
    )
    
    } ,
},
{
  accessorKey: "Returned",
  header:({ table })=>{
    const result =table.getFilteredRowModel()
    .rows.reduce((total,row)=>total+Number(row.getValue("Returned")),0)
    return (
      <div>Returned:<span className="font-bold bg-slate-300 rounded-sm px-2">{result}</span> </div>
    )
    
    } ,
},
{
  accessorKey: "Enforced",
  header: ({ table })=>{
    const result =table.getFilteredRowModel()
    .rows.reduce((total,row)=>total+Number(row.getValue("Enforced")),0)
    return (
      <div>Enforced:<span className="font-bold bg-slate-300 rounded-sm px-2">{result}</span> </div>
    )
    
    } , 
},
{
  accessorKey: "WarnedReturned",
  header:({ table })=>{
    const result =table.getFilteredRowModel()
    .rows.reduce((total,row)=>total+Number(row.getValue("WarnedReturned")),0)
    return (
      <div>Warned & Returned:<span className="font-bold bg-slate-300 rounded-sm px-2">{result}</span> </div>
    )
    
    } , 
},
{
  accessorKey: "ReturnedEnforced",
  header:({ table })=>{
    const result =table.getFilteredRowModel()
    .rows.reduce((total,row)=>total+Number(row.getValue("ReturnedEnforced")),0)
    return (
      <div>Enforced & Returned:<span className="font-bold bg-slate-300 rounded-sm px-2">{result}</span> </div>
    )
    
    } ,
},

{
  accessorKey: "RoadWorthy",
header:({ table })=>{
    const result =table.getFilteredRowModel()
    .rows.reduce((total,row)=>total+Number(row.getValue("RoadWorthy")),0)
    return (
      <div>Road Worthy:<span className="font-bold bg-slate-300 rounded-sm px-2">{result}</span> </div>
    )
    
    } ,
},
]