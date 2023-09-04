//------------------------------------------------------Report headers
import { ColumnDef } from "@tanstack/react-table"
export type rptCol = {
  Sector: string
  KM: string
  Side: string
  Time: string
  DriverName:string
  RouteExpiryDate:string
  FitnessExpiryDate:string
  FullName:string
  TypeExpiryDate:string
}
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
    accessorKey: "Time",
    header: "Time",
  },
  {
    accessorKey: "DriverName",
    header: "Driver",
  },
  {
    
    accessorKey: "RouteExpiryDate", //
    header: "Route",
    cell: ({ row }) => {
      const route:string = (row.getValue("RouteExpiryDate"))
      return <div className="text-right font-medium">
        {route.split('T')[0]>Today?"Valid":"Expired"}
        </div>
    },
  
  },
  {
    accessorKey: "FitnessExpiryDate",
    header: "Fitness",
    cell: ({ row}) => {
      const fitness:string = (row.getValue("FitnessExpiryDate"))
      return <div className="text-right font-medium">
        {fitness.split('T')[0]>Today?"Valid":"Expired"}
        </div>
    },
  },
  {
    accessorKey: "TypeExpiryDate",
    header: "Tyre",
    cell: ({ row }) => {
      const tyre:string = (row.getValue("TypeExpiryDate"))
      return <div className="text-right font-medium">
        {tyre == null? 'N/A':tyre.split('T')[0]>Today?"Valid":"Expired"}
        </div>
    },
  },
  {
    accessorKey: "FullName",
    header: "Checked By",
  },
]
