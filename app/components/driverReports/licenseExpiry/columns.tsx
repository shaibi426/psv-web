
//------------------------------------------------------Report headers
import { ColumnDef } from "@tanstack/react-table"
export type rptCol = {
  Company: string
  DriverName: string
  CNIC: string
  Address: string
  LicenseExpiry:string
}
 




export const columns: ColumnDef<rptCol>[] = [
    {
        accessorKey: "Company",
        header: "Company",
      },
  {
    accessorKey: "DriverName",
    header: "Driver Name",
  },
  {
    accessorKey: "CNIC",
    header: "Driver CNIC",
  },
  {
    accessorKey: "Address",
    header: "Address",
  },
 
  {
    accessorKey: "LicenseExpiry",
    header: "Expiry Date",
    cell: ({ row }) => {
        const date:string = (row.getValue("LicenseExpiry"))
        return <div className="text-center font-medium">
          {date.split('T')[0].split('-').reverse().join('-')}
          </div>}
  },
]