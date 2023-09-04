
//------------------------------------------------------Report headers
import { ColumnDef } from "@tanstack/react-table"


export type rptCol = {
  Sector: string
  KM: string
  Side: string
  Time: string
  DriverName:string
  AddedON:string
  RegNo:string
  FullName:string
  LicenseExpiry:string
}


//------------------------------------------------------Report headers



const Today = new Date(Date()).toLocaleDateString()

export const columns: ColumnDef<rptCol>[] = [
  {
    accessorKey: "Sector",
    header: "Sector",
  },
  {
    accessorKey: "KM",
    header: "Location",
  },
  {
    accessorKey: "Side",
    header: "Side",
  },
  {
    accessorKey: "AddedON", //
    header: "Date",
    cell: ({ row }) => {
      const date:string = (row.getValue("AddedON"))
      return <div className="text-center font-medium">
        {date.split('T')[0].split('-').reverse().join('-')}
        </div>}
  },
  {
    accessorKey: "Time",
    header: "Time",
  },
  {
    accessorKey: "DriverName",
    header: "Reg. No",
  },
  {
    accessorKey: "RegNo",
    header: "Driver Name",
  },
  {
    accessorKey: "LicenseExpiry", //
    header: "License Expiry",
    cell: ({ row }) => {
      const date:string = (row.getValue("LicenseExpiry"))
      return <div className="text-center font-medium">
        {date.split('T')[0]>Today?"Valid":"Expired"}
        </div>}
  },
  {
    accessorKey: "FullName",
    header: "Checked by",
  },
 
]