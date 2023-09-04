//------------------------------------------------------Report headers
import { ColumnDef } from "@tanstack/react-table"
export type rptCol = {
  Company: string
  PsvNo: string
  VehicleModel: string
  VehicelColor:string
  ACStatus:string

}
const Today = new Date(Date()).toLocaleDateString()
export const columns: ColumnDef<rptCol>[] = [
  

  {
    id:'Company',
    accessorKey: "CompName",
    header: "Company",
  },
{
id: "Vehicle No",
accessorKey: "PsvNo",
header: "Vehicle No",
},
{
id:'Modal',
accessorKey: "VehicleModel",
header: "Modal",
},

{

id: "AC/Non-AC",
accessorKey: "ACStatus", //
header: "AC/Non-AC",
cell: ({ row }) => {
  const ac:any = row.id
  return <div className="text-start font-medium">
   {ac==1?"AC":"Non-AC"}
    </div>}
},
{
id: "Colour",
accessorKey: "VehicelColor",
header: "Colour",
},


]