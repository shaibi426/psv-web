
//------------------------------------------------------Report headers
import { ColumnDef } from "@tanstack/react-table"
export type rptCol = {
  date:string
  region: string
  zone: string
  sector: string
  beat: string
  location:string
  officer: string
  rank: string
  added: number
  updated:number
}
 




export const columns: ColumnDef<rptCol>[] = [
    {
        accessorKey: "addedDate",
        header: "Date",
        cell: ({ row }) => {
          const date:string = (row.getValue("addedDate"))
          return <div className="text-center font-medium">
            {date.split('T')[0].split('-').reverse().join('-')}
            </div>}
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
    header: "Sector",
  },
 
  {
    accessorKey: "beat",
    header: "Beat",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    id: 'officer',
    accessorFn: row => `${row.rank} ${row.officer}`,
    header: "Officer",
  },
  {
    accessorKey: "added",
    header: "New Records",
  },
  {
    accessorKey: "updated",
    header: "Updated Records",
    // footer: ({ table })=>{
    //   table.getFilteredRowModel()
    //   .rows.reduce((total,row)=>total+Number(row.getValue("updated")),0)
    // }
  },
]


//-----------------inspection report col


export type InsprptCol = {
  date:string
  region: string
  zone: string
  sector: string
  beat: string
  location:string
  officer: string
  rank: string
  added: string
  passengers:string
  Enforced:number
  Returned: number
  warned:number
  RoadWorthy:number
}
export const Inspcolumns: ColumnDef<InsprptCol>[] = [
  {
      accessorKey: "addedDate",
      header: "Date",
      cell: ({ row }) => {
        const date:string = (row.getValue("addedDate"))
        return <div className="text-center font-medium min-w-max">
          {date.split('T')[0].split('-').reverse().join('-')}
          </div>}
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
  header: "Sector",
},

{
  accessorKey: "beat",
  header: "Beat",
},
{
  accessorKey: "location",
  header: "Location",
},
{
  id: 'officer',
  accessorFn: row => `${row.rank} ${row.officer}`,
  header: "Officer",
},
{
  accessorKey: "added",
  header: "New Records",
},
{
  accessorKey: "passengers",
  header: "Passengers Travelled",
},
{
  accessorKey: "Enforced",
  header: "Enforced",
},
{
  accessorKey: "Returned",
  header: "Returned",
},
{
  accessorKey: "warned",
  header: "Warned",
},
{
  accessorKey: "RoadWorthy",
  header: "Road Worthy",
},
]