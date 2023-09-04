

//------------------------------------------------------Report headers
import { ColumnDef } from "@tanstack/react-table"
export type rptCol = {
  PsvNo: string
  VehicleType: string
  VehicleModel: string
  ChasisNo: string
  EngineNo:string
  VehicleMake:string
  VehicelColor:string
  ACStatus:string
  TrackerStatus: string
RoutePermitNo: string
RouteExpiryDate:string
RouteFrom:string
RouteVia:string
FitnessCertNo:string
FitnessExpiryDate:string
FitnessIssueAuth:string
TypeExpiryDate:string
FogLights:string
FirstAidBox:string
}
const Today = new Date(Date()).toLocaleDateString()
export const columns: ColumnDef<rptCol>[] = [
  

  {
      id:'Vehicle No',
      accessorKey: "PsvNo",
      header: "Vehicle No",
    },
{
  id: "VehicleType",
  accessorKey: "VehicleType",
  header: "Vehicle Type",
},
{
  id: "VehicleModel",
  accessorKey: "VehicleModel",
  header: "Modal",
},
{
  id:'Chasis No',
  accessorKey: "ChasisNo",
  header: "Chasis No",
},

{
  
  id: "Engine No",
  accessorKey: "EngineNo", //
  header: "Engine No",
  
},

{
  
  id: "Make",
  accessorKey: "VehicleMake", //
  header: "Make",
  
},
{
  id: "Colour",
  accessorKey: "VehicelColor",
  header: "Colour",
},

{
id: "ACStatusC",
accessorKey: "ACStatus",
header: "ACS/Non-AC",
cell: ({ row }) => {
  const ac:any= row.id
  return <div className="text-start font-medium">
   {ac==1?"AC":"Non-AC"}
    </div>}
},


{

id: "TrackerStatus",
accessorKey: "TrackerStatus", //
header: "Tracker Status",
cell: ({ row }) => {
  const tracker:any = row.id
  return <div className="text-start font-medium">
   {tracker==1?"Available":"N/A"}
    </div>}

},
{

id: "RoutePermit No",
accessorKey: "RoutePermitNo", //
header: "RoutePermit No",

},
{

id: "Route ExpiryDate",
accessorKey: "RouteExpiryDate", //
header: "Route Expiry Date",

},
{
id: "Route From",
accessorKey: "RouteFrom",
header: "Route From",
},
{
  id: "Route To",
  accessorKey: "RouteTo",
  header: "Route To",
  },
  
 { id: "RouteVia",
accessorKey: "RouteVia", //
header: "RouteVia",

},

{

id: "Fitness",
accessorKey: "FitnessCertNo", //
header: "Fitness",

},
{

id: "Fitness ExpiryDate",
accessorKey: "FitnessExpiryDate", //
header: "Fitness Expiry Date",

},
{
id: "Issued by",
accessorKey: "FitnessIssueAuth",
header: "Issued By",
},
{
  id: "Tyre Expiry Date",
  accessorKey: "TypeExpiryDate",
  header: "Tyre Expiry Date",
  },
  {
      id: "FogLights",
      accessorKey: "FogLights",
      header: "Fog Lights",
      cell: ({ row }) => {
          const fl:any = row.id
          return <div className="text-start font-medium">
           {fl==1?"Installed":"N/A"}
            </div>}
      
      },
      {
          id: "HazardLights",
          accessorKey: "HazardLights",
          header: "Hazard Lights",
          cell: ({ row }) => {
              const fl:any = row.id
              return <div className="text-start font-medium">
               {fl==1?"Installed":"N/A"}
                </div>}
          },
          {
              id: "FirstAid Box",
              accessorKey: "FirstAidBox",
              header: "FirstAid Box",
              cell: ({ row }) => {
                  const fl:any = row.id
                  return <div className="text-start font-medium">
                   {fl==1?"Avaible":"N/A"}
                    </div>}
              
              },

]