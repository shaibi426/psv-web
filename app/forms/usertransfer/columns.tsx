
//------------------------------------------------------Report headers
import { ColumnDef } from "@tanstack/react-table"
export type rptCol = {
  rank:string
  name: string
  belt:string
  region:string
  zone:string
  sector:string
  beat:string 
  }
 




export const columns: ColumnDef<rptCol>[] = [
  {
    id: 'officer',
    accessorFn: row => `${row.rank} ${row.name} (${row.belt})`,
    header: "Officer",
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
        header: "sector",
      },
      {
        accessorKey: "beat",
        header: "Beat",
      }
  
]


