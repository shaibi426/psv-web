
//------------------------------------------------------Report headers
import { ColumnDef } from "@tanstack/react-table"

export type rptCol = {
  sector: string
  location: string
  date: string
  time: string
  psvNo:string
  driverName:string
  dvrLicenseNo:string
  licenseStatus:string
  officer:string
  rank:string
}


//------------------------------------------------------Report headers



const Today = new Date(Date()).toLocaleDateString()

export const columns: ColumnDef<rptCol>[] = [
  {
    accessorKey: "sector",
    header: "Sector",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
 
  {
    accessorKey: "date", //
    header: "Date",
   
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  
  {
    accessorKey: "psvNo",
    header:"Vehicle No" ,
  },
  {
    accessorKey: "licenseStatus", //
    header: "License Status",
  },
  {
    id: 'officer',
    accessorFn: row => `${row.rank} ${row.officer}`,
    header: "Officer",
  }
 
]