
//------------------------------------------------------Report headers
import { ColumnDef } from "@tanstack/react-table"

export type rptCol = {
  sector: string
  location: string
  date: string
  time: string
  company:string
  driverName:string
  routeStatus:string
  fitnessStatus:string
  tyreStatus:string
  actionTaken:string
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
    accessorKey: "company",
    header: "Company",
  },
  
  {
    accessorKey: "driverName",
    header:"Driver Name" ,
  },
  {
    accessorKey: "routeStatus", //
    header: "Route Permit",
  },
  {
    accessorKey: "fitnessStatus", //
    header: "Fitness ",
  },
  {
    accessorKey: "tyreStatus", //
    header: "Tyres Condition",
  },
  {
    accessorKey: "actionTaken", //
    header: "Action Taken",
  },
  {
    id: 'officer',
    accessorFn: row => `${row.rank} ${row.officer}`,
    header: "Officer",
  }
 
]