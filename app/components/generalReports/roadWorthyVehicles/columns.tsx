
//------------------------------------------------------Report headers
import { ColumnDef } from "@tanstack/react-table"

export type rptCol = {
  CompName: string
  RegNo: string
  EngineNo: string
  ChasisNo: string
  VehicleMake:string
  ManufactureYear:string
}
 

const Today = new Date(Date()).toLocaleDateString()

export const columns: ColumnDef<rptCol>[] = [
  {
    accessorKey: "CompName",
    header: "Company",
  },
  {
    accessorKey: "RegNo",
    header: "Registration No",
  },
  {
    accessorKey: "EngineNo",
    header: "Engine No",
  },
  {
    accessorKey: "ChasisNo",
    header: "Chasis No",
  },
  {
    accessorKey: "VehicleMake",
    header: "Made By",
  },
  {
    accessorKey: "ManufactureYear",
    header: "Modal",
  },
 
]

